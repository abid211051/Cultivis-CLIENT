"use client";
import { useState } from "react";
import CropChart from "./cropchart";
import CropInfo from "./cropinfo";
import { Slash } from "lucide-react";

export default function ToggleChartOrInfo() {
  const [chartOrInfo, setChartOrInfo] = useState("chart");

  return (
    <div className="h-full flex lg:flex-row flex-col gap-3">
      <div className="lg:w-[300px] w-full flex justify-between rounded-xl bg-[#181f26] p-1.5">
        <div className="border-2 border-[#45484a] h-[40px] flex w-full rounded-md bg-[#181f26] text-white">
          <button
            className="flex-1 hover:bg-[#242e38] rounded-l-md cursor-pointer"
            onClick={() => setChartOrInfo("chart")}
          >
            <p
              className={`${
                chartOrInfo === "chart" &&
                "text-[#3cc1ff] border-b-2 border-[#3cc1ff]"
              } h-full w-fit mx-auto pt-1`}
            >
              Chart
            </p>
          </button>
          <Slash className="-rotate-45 text-center translate-y-1.5 text-[#45484a]" />
          <button
            className="flex-1 hover:bg-[#242e38] rounded-r-md cursor-pointer"
            onClick={() => setChartOrInfo("info")}
          >
            <p
              className={`${
                chartOrInfo === "info" &&
                "text-[#3cc1ff] border-b-2 border-[#3cc1ff]"
              } h-full w-fit mx-auto pt-1`}
            >
              Info
            </p>
          </button>
        </div>
      </div>
      {chartOrInfo === "chart" ? <CropChart /> : <CropInfo />}
    </div>
  );
}
