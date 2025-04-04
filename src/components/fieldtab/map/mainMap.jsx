import L from "leaflet";
import { EditControl } from "react-leaflet-draw";
import {
  createPolygon,
  editPolygon,
  getPolygon,
  deletePolygon,
} from "@/app/api/map/action";
import { toast } from "sonner";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { mapContext } from "@/context/mapcontext";

export default function MainMap({ userId }) {
  const context = useContext(mapContext);
  const [field, setField] = useState(null);
  const featureGroupRef = useRef(null);
  let deletedPoly = [];

  useEffect(() => {
    if (featureGroupRef.current && context?.activeField?.polygon) {
      const layerGroup = featureGroupRef.current;
      layerGroup.clearLayers();
      L.polygon(context?.activeField?.polygon.coordinates || [], {
        color: "blue",
        weight: 1.5,
      }).addTo(layerGroup);
    }
  }, [context?.activeField]);

  const createPoly = useCallback(
    async (e) => {
      try {
        const areaMeterSquare = L.GeometryUtil.geodesicArea(
          e.layer.getLatLngs()[0]
        );

        const coordinates = e.layer
          .getLatLngs()[0]
          .map((item) => [item.lat, item.lng]);
        const polyid = e.layer._leaflet_id;
        if (!userId || !coordinates || !polyid) {
          throw new Error("Something Went Wrong");
        }
        const res = await createPolygon({
          userId,
          polygon: { polyid, coordinates, area: areaMeterSquare },
        });
        if (!res?.error) {
          toast.success("Polygon Created", {
            richColors: true,
            closeButton: true,
          });
          context.setAllField((prev) => [...prev, res]);
          context.setActiveField(res);
        } else {
          throw new Error(res?.error);
        }
        e.layer.remove();
      } catch (error) {
        e.layer.remove();
        toast.error(error?.message, { richColors: true, closeButton: true });
      }
    },
    [userId]
  );

  const editPoly = useCallback(
    async (e) => {
      let coordinates, polyid;
      if (
        Object.keys(e?.layers?._layers).length &&
        field &&
        deletedPoly.length < 1
      ) {
        e.layers.eachLayer((layer) => {
          coordinates = layer
            .getLatLngs()[0]
            .map((item) => [item.lat, item.lng]);
          polyid = layer._leaflet_id;
        });
        try {
          if (!field?.id || !coordinates) {
            throw new Error("Something Went Wrong");
          }
          const res = await editPolygon(field?.id, {
            polygon: { polyid, coordinates },
          });
          if (!res?.error) {
            toast.success("Polygon Updated", {
              richColors: true,
              closeButton: true,
            });
            setField(res);
          } else {
            throw new Error(res?.error);
          }
        } catch (error) {
          toast.error(error?.message || "Edit failed", {
            richColors: true,
            closeButton: true,
          });
        }
      }
    },
    [field?.id, userId]
  );

  const deletePoly = useCallback(
    async (e) => {
      try {
        if (Object.keys(e.layers._layers).length && field) {
          deletedPoly.push(field.id);
          if (deletedPoly.length < 2) {
            const res = await deletePolygon(field?.id);
            if (!res?.error) {
              toast.success("Polygon Deleted", {
                richColors: true,
                closeButton: true,
              });
              setField(null);
            } else {
              throw new Error(res?.error);
            }
          }
        }
      } catch (error) {
        toast.error(error?.message || "Delete failed", {
          richColors: true,
          closeButton: true,
        });
      }
    },
    [field?.id, userId]
  );

  return (
    <MapContainer
      center={[22.9932327, 91.3706077]}
      zoom={18}
      className="w-full h-full rounded-xl z-40"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <FeatureGroup ref={featureGroupRef}>
        <EditControl
          position="topright"
          onCreated={createPoly}
          onEdited={editPoly}
          onDeleted={deletePoly}
          draw={{
            rectangle: false,
            circle: false,
            circlemarker: false,
            marker: false,
            polyline: false,
            polygon: {
              allowIntersection: false,
              showArea: true,
              shapeOptions: { color: "blue", weight: 1.5 },
            },
          }}
        />
      </FeatureGroup>
    </MapContainer>
  );
}
