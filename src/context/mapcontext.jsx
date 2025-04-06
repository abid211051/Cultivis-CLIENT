"use client";
import { getPolygon } from "@/app/api/map/action";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const mapContext = createContext(null);
// {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "Polygon",
//         coordinates: [
//           [
//             [-73.976543, 40.777349],
//             [-73.975894, 40.777381],
//             [-73.975872, 40.776946],
//             [-73.976687, 40.776821],
//             [-73.976543, 40.777349],
//           ],
//         ],
//       },
//     },
//   ],
// }
export function MapContextProvider({ userId, children }) {
  const [allField, setAllField] = useState([]);
  const [activeGeoJson, setactiveGeoJson] = useState(null);
  const [activeGeoInfo, setactiveGeoInfo] = useState(null);
  useEffect(() => {
    async function allPoly() {
      if (!userId) return;
      const res = await getPolygon(userId);
      if (!res?.error) {
        setAllField(res);
      } else {
        toast.error(res?.error, { richColors: true, closeButton: true });
      }
    }
    allPoly();
  }, [userId]);
  // useEffect(() => {
  //   console.log(activeGeoInfo);
  // }, [activeGeoInfo]);
  return (
    <mapContext.Provider
      value={{
        allField,
        activeGeoJson,
        activeGeoInfo,
        setactiveGeoInfo,
        setAllField,
        setactiveGeoJson,
      }}
    >
      {children}
    </mapContext.Provider>
  );
}
