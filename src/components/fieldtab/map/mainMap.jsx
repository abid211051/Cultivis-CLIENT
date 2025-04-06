"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import EditControlFC from "./editcontrol";

export default function MainMap({ userId }) {
  return (
    <MapContainer
      center={[40.777, -73.9754]}
      zoom={18}
      className="w-full h-full rounded-xl z-40"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <EditControlFC userId={userId} />
    </MapContainer>
  );
}
