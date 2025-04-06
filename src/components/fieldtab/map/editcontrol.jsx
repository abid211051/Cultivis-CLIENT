"use client";
import {
  createPolygon,
  deletePolygon,
  editPolygon,
} from "@/app/api/map/action";
import { mapContext } from "@/context/mapcontext";
import L from "leaflet";
import { useCallback, useContext, useEffect, useRef } from "react";
import { FeatureGroup, Polygon } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { toast } from "sonner";

// {
//     type: "FeatureCollection",
//     features: [
//       {
//         type: "Feature",
//         properties: {},
//         geometry: {
//           type: "Polygon",
//           coordinates: [
//             [
//               [-73.976344, 40.767867],
//               [-73.984754, 40.774237],
//               [-73.96742, 40.783206],
//               [-73.966733, 40.773067],
//               [-73.976344, 40.767867],
//             ],
//           ],
//         },
//       },
//     ],
//   }

export default function EditControlFC({ userId }) {
  const ref = useRef(null);
  const context = useContext(mapContext);
  // let multicallHandleRef = useRef(0);
  function setFieldInMap() {
    if (context.activeGeoJson) {
      ref.current.clearLayers();
      L.geoJSON(context.activeGeoJson).eachLayer((layer) => {
        ref.current?.addLayer(layer);
      });
    }
  }
  useEffect(() => {
    setFieldInMap();
  }, [context.activeGeoJson]);

  const handleChange = useCallback(async (event) => {
    const geo = ref.current?.toGeoJSON();
    if (geo?.type === "FeatureCollection") {
      if (event.type === "draw:created") {
        try {
          const area = L.GeometryUtil.geodesicArea(event.layer.getLatLngs()[0]);
          const geojson =
            geo.features[geo.features.length - 1].geometry.coordinates[0];

          const res = await createPolygon({ userId, area, geojson });
          if (res.error) {
            throw Error(res.error);
          }
          context.setAllField((prev) => [...prev, res]);
          toast.success("New Field Created", {
            closeButton: true,
            richColors: true,
          });
        } catch (error) {
          toast.error(error.message, { closeButton: true, richColors: true });
        }
        ref.current.clearLayers();
      } else if (event.type === "draw:edited") {
        // multicallHandleRef.current > 0 &&
        // multicallHandleRef.current < 2
        if (Object.keys(event.layers._layers).length) {
          try {
            let area;
            event.layers.eachLayer(
              (layer) => (area = L.GeometryUtil.geodesicArea(layer._latlngs[0]))
            );
            const geojson =
              geo.features[geo.features.length - 1].geometry.coordinates[0];
            const id = geo.features[geo.features.length - 1].id;
            const res = await editPolygon(id, { area, geojson });
            if (res.error) {
              throw Error(res.error);
            }
            context.setAllField((prevfield) =>
              prevfield.map((field) =>
                field.id === res.id
                  ? { ...field, area: res.area, geojson: res.geojson }
                  : field
              )
            );
            context.setactiveGeoInfo((prev) => ({
              ...prev,
              area: res.area,
              geojson: res.geojson,
            }));
            toast.success("Field Updated", {
              closeButton: true,
              richColors: true,
            });
          } catch (error) {
            toast.error(error.message, { closeButton: true, richColors: true });
          }
          // multicallHandleRef.current = 0;
        }
        // else {
        //   multicallHandleRef.current++;
        // }
      } else if (event.type === "draw:deleted") {
        // multicallHandleRef.current > 0 &&
        // multicallHandleRef.current < 2
        if (Object.keys(event.layers._layers).length) {
          try {
            let id;
            event.layers.eachLayer((layer) => {
              id = layer.feature.id;
            });
            const res = await deletePolygon(id);
            if (res.error) {
              throw Error(res.error);
            }
            context.setAllField((prevfield) =>
              prevfield.filter((field) => field.id !== res.id)
            );
            context.setactiveGeoInfo(null);
            toast.success("Field was deleted", {
              closeButton: true,
              richColors: true,
            });
          } catch (error) {
            toast.error(error.message, { closeButton: true, richColors: true });
          }
          // multicallHandleRef.current = 0;
        }
        // else {
        //   multicallHandleRef.current++;
        // }
      }
    }
  }, []);

  return (
    <>
      <FeatureGroup ref={ref}>
        <EditControl
          position="topright"
          onEdited={handleChange}
          onCreated={handleChange}
          onDeleted={handleChange}
          draw={{
            rectangle: false,
            circle: false,
            polyline: false,
            polygon: {
              allowIntersection: false,
              showArea: true,
            },
            marker: false,
            circlemarker: false,
          }}
        />
      </FeatureGroup>
    </>
  );
}
