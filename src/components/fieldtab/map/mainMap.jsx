"use client";

import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";

export default function MainMap() {
  return (
    <>
      <MapContainer
        center={[22.9932327, 91.3706077]}
        zoom={18}
        className="w-full h-full rounded-xl z-40"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
}
