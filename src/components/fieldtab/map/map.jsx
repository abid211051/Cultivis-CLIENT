"use client";

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Map() {
  const MainMap = useMemo(
    () =>
      dynamic(() => import("./mainMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <>
      <MainMap />
    </>
  );
}
