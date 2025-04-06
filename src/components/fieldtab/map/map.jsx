"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Map({ userId }) {
  const MainMap = useMemo(
    () =>
      dynamic(() => import("./mainMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div className="w-[100%] lg:h-auto h-[350px] lg:row-start-1 lg:row-span-3 lg:col-start-1 lg:col-span-4 lg:mb-0 mb-5">
      <MainMap userId={userId} />
    </div>
  );
}
