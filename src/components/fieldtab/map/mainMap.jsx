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
import { useCallback, useEffect, useRef, useState } from "react";

export default function MainMap({ userId }) {
  const [field, setField] = useState(null);
  const featureGroupRef = useRef(null);

  useEffect(() => {
    async function fetchdata() {
      if (!userId) return;

      const res = await getPolygon(userId);
      if (!res?.error) {
        setField(res);
      } else {
        toast.error(res?.error, { richColors: true, closeButton: true });
      }
    }
    fetchdata();
  }, [userId]);

  useEffect(() => {
    if (featureGroupRef.current && field?.polygon) {
      const layerGroup = featureGroupRef.current;
      layerGroup.clearLayers();
      // Fix: Correct spelling to 'coordinates'
      L.polygon(field.polygon.coordinates || [], {
        color: "blue",
        weight: 1.5,
      }).addTo(layerGroup);
    }
  }, [field]);

  const createPoly = useCallback(
    async (e) => {
      try {
        // Fix: Correct spelling to 'coordinates'
        const coordinates = e.layer
          .getLatLngs()[0]
          .map((item) => [item.lat, item.lng]);
        const polyid = e.layer._leaflet_id;

        if (!userId || !coordinates || !polyid) {
          throw new Error("Something Went Wrong");
        }

        // Fix: Correct spelling to 'coordinates'
        const res = await createPolygon({
          userId,
          polygon: { polyid, coordinates },
        });

        if (!res?.error) {
          toast.success("Polygon Created", {
            richColors: true,
            closeButton: true,
          });
          setField(res);
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
      let editedCoordinates, polyid;
      if (Object.keys(e?.layers?._layers).length && field) {
        e.layers.eachLayer((layer) => {
          editedCoordinates = layer
            .getLatLngs()[0]
            .map((item) => [item.lat, item.lng]);
          polyid = layer._leaflet_id;
        });

        try {
          if (!field?.id || !editedCoordinates) {
            throw new Error("Something Went Wrong");
          }

          // Fix: Correct spelling to 'coordinates'
          const res = await editPolygon(field?.id, {
            polygon: { polyid, coordinates: editedCoordinates },
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
      let deletedPolygon = field?.polygon;

      try {
        if (!field?.id) throw new Error("Something Went Wrong");

        if (Object.keys(e.layers._layers).length) {
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
      } catch (error) {
        toast.error(error?.message || "Delete failed", {
          richColors: true,
          closeButton: true,
        });

        // Fix: Correct spelling to 'coordinates'
        if (featureGroupRef.current && deletedPolygon?.coordinates) {
          featureGroupRef.current.clearLayers();
          L.polygon(deletedPolygon.coordinates, {
            color: "blue",
            weight: 1.5,
          }).addTo(featureGroupRef.current);
        }
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
            polygon: field
              ? false
              : {
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
