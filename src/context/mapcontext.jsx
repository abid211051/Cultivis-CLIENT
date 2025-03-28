"use client";
import { getPolygon } from "@/app/api/map/action";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const mapContext = createContext(null);

export function MapContextProvider({ userId, children }) {
  const [allField, setAllField] = useState([]);
  const [activeField, setActiveField] = useState(null);
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

  return (
    <mapContext.Provider
      value={{ allField, activeField, setAllField, setActiveField }}
    >
      {children}
    </mapContext.Provider>
  );
}
