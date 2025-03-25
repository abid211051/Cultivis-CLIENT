import { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import {
  createPolygon,
  editPolygon,
  getPolygon,
  deletePolygon,
} from "@/app/api/map/action";
import { toast } from "sonner";

export default function MainMap({ userId }) {
  const [field, setField] = useState(null);
  const featureGroupRef = useRef(null);

  useEffect(() => {
    async function fetchdata() {
      if (!userId) {
        return;
      }
      const res = await getPolygon(userId);
      if (!res?.error) {
        setField(res);
      } else {
        toast.error(res?.error, { richColors: true, closeButton: true });
      }
    }
    fetchdata();
  }, []);

  useEffect(() => {
    if (featureGroupRef.current && field?.polygon) {
      const layerGroup = featureGroupRef.current;
      layerGroup.clearLayers();
      L.polygon(field.polygon.corrdinates, {
        color: "blue",
        weight: 1.5,
      }).addTo(layerGroup);
    }
  }, [field]);

  const createPoly = async (e) => {
    try {
      const corrdinates = e.layer
        .getLatLngs()[0]
        .map((item) => [item.lat, item.lng]);
      const polyid = e.layer._leaflet_id;

      if (!userId || !corrdinates || !polyid) {
        throw Error("Something Went Wrong");
      }
      const res = await createPolygon({
        userId,
        polygon: { polyid, corrdinates },
      });

      if (!res?.error) {
        toast.success("Polygon Created", {
          richColors: true,
          closeButton: true,
        });
        setField(res);
      } else {
        throw Error(res?.error);
      }
      e.layer.remove();
    } catch (error) {
      e.layer.remove();
      toast.error(error?.message, { richColors: true, closeButton: true });
    }
  };

  const editPoly = async (e) => {
    let originalCoordinates = field?.polygon?.corrdinates || [];
    let editedCoordinates;
    let polyid;
    if (Object.keys(e?.layers?._layers).length) {
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

        const res = await editPolygon(field?.id, {
          polygon: { polyid, corrdinates: editedCoordinates },
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
        if (featureGroupRef.current) {
          featureGroupRef.current.clearLayers();
          L.polygon(originalCoordinates, { color: "blue", weight: 1.5 }).addTo(
            featureGroupRef.current
          );
        }
      }
    }
  };

  const deletePoly = async (e) => {
    let deletedPolygon = field?.polygon;
    try {
      if (!field?.id) {
        throw new Error("Something Went Wrong");
      }

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
      if (featureGroupRef.current && deletedPolygon?.corrdinates) {
        featureGroupRef.current.clearLayers();
        L.polygon(deletedPolygon.corrdinates, {
          color: "blue",
          weight: 1.5,
        }).addTo(featureGroupRef.current);
      }
    }
  };

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
          onDrawStop={createPoly}
          onEditStop={editPoly}
          onDeleteStop={deletePoly}
          draw={{
            rectangle: false,
            circle: false,
            circlemarker: false,
            marker: false,
            polyline: false,
            polygon:
              field?.polygon?.corrdinates?.length > 0
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
