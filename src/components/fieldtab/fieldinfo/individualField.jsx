"use client";
import { mapContext } from "@/context/mapcontext";
import Image from "next/image";
import { useContext, useState } from "react";

export default function IndividualField() {
  const context = useContext(mapContext);
  const [isActive, setIsActive] = useState(context?.activeField?.id);
  return (
    <div className="flex flex-col gap-1.5">
      {context?.allField.length > 0 ? (
        context?.allField.map((field, index) => (
          <button
            className={`w-full flex  rounded-md border-2  bg-[#212930] ${
              context?.activeField?.id === field?.id
                ? "border-[#7573f3]"
                : "border-[#45484a]"
            } cursor-pointer active:scale-[97%]`}
            key={field?.id}
            value={field}
            onClick={() => context.setActiveField(field)}
          >
            <div className="w-[50px]">
              <Image
                src={field?.image || "/Picture1.png"}
                alt="img"
                width={100}
                height={40}
                className="w-auto object-contain h-full group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="flex flex-col w-full py-1 gap-1 px-1.5">
              <div className="flex justify-between gap-1.5">
                <p className="line-clamp-1 text-sm xl:w-[100px] w-[55px] text-start">
                  Field - {index + 1}
                </p>
                <p className="line-clamp-1 text-xs">
                  Area:{" "}
                  <span>{(field?.polygon?.area / 4047).toPrecision(2)} ac</span>
                </p>
              </div>
              <div className="flex justify-between gap-2 items-end">
                <p className="line-clamp-1 text-sm text-[#8eb0d3]">
                  {field?.croptype}
                </p>
              </div>
            </div>
          </button>
        ))
      ) : (
        <p className="text-center">No Field Created ...</p>
      )}
    </div>
  );
}
