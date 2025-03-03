"use client";

import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";

export default function MainMap() {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        className="w-[100%] lg:h-auto h-[350px] lg:row-start-1 lg:row-span-4 lg:col-start-1 lg:col-span-4 lg:mb-0 mb-5 rounded-xl -z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
}
