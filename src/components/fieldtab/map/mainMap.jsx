"use client";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup, Polygon } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

export default function MainMap() {
  const [field, setField] = useState(null);
  const lastEditRef = useRef(Date.now());

  useEffect(() => {
    const savedField = JSON.parse(localStorage.getItem("polygon"));
    setField(savedField || null);
  }, []);

  const savePolygon = (polygon) => {
    setField(polygon);
    localStorage.setItem("polygon", JSON.stringify(polygon));
  };

  const createPoly = (e) => {
    const coordinates = e?.layer?._latlngs[0].map((item) => [
      item?.lat,
      item?.lng,
    ]);
    const id = e?.layer?._leaflet_id;
    savePolygon({ id, coordinates });
    e.layer.remove();
  };

  const editPoly = (e) => {
    const now = Date.now();
    if (now - lastEditRef.current < 500) return;
    lastEditRef.current = now;

    console.log("called");
    if (Object.keys(e?.layers?._layers).length) {
      e?.layers?.eachLayer((layer) => {
        const coordinates = layer?._latlngs[0].map((item) => [
          item?.lat,
          item?.lng,
        ]);
        const id = layer?._leaflet_id;
        savePolygon({ id, coordinates });
      });
    }
  };

  const deletePoly = (e) => {
    const now = Date.now();
    if (now - lastEditRef.current < 500) return;
    lastEditRef.current = now;

    if (Object.keys(e?.layers?._layers).length) {
      setField(null);
      localStorage.clear();
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

      <FeatureGroup>
        {field && (
          <Polygon
            key={field?.id}
            positions={field?.coordinates || []}
            color="blue"
            weight={1.5}
          />
        )}
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
            polygon:
              field?.coordinates?.length > 0
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
