"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, watch: 300 },
  { month: "February", desktop: 305, mobile: 200, watch: 30 },
  { month: "March", desktop: 237, mobile: 120, watch: 440 },
  { month: "April", desktop: 73, mobile: 190, watch: 120 },
  { month: "May", desktop: 209, mobile: 130, watch: 90 },
  { month: "June", desktop: 214, mobile: 140, watch: 180 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  watch: {
    label: "Watch",
    color: "hsl(var(--chart-5))",
  },
};

export default function CropChart() {
  const [charttype, setChartType] = useState(["ndvi"]);

  function toggleChart(val) {
    setChartType((prev) =>
      prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]
    );
  }
  return (
    <div className="h-full w-full rounded-xl bg-[#181f26] text-white">
      <div className="h-[15%] flex gap-5  p-1.5">
        <button
          className={`${
            charttype.includes("ndvi") && "text-[#2a9d90] font-semibold"
          } text-sm px-2 cursor-pointer`}
          onClick={() => toggleChart("ndvi")}
        >
          NDVI
        </button>
        <button
          className={`${
            charttype.includes("ndwi") && "text-[#e76e50] font-semibold"
          } text-sm px-2 cursor-pointer`}
          onClick={() => toggleChart("ndwi")}
        >
          NDWI
        </button>
        <button
          className={`${
            charttype.includes("lai") && "text-[#08a42e] font-semibold"
          } text-sm px-2 cursor-pointer`}
          onClick={() => toggleChart("lai")}
        >
          LAI
        </button>
      </div>
      <ChartContainer
        config={chartConfig}
        className={"lg:h-[85%] w-full m-0 p-0"}
      >
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 10,
          }}
        >
          <CartesianGrid vertical={true} horizontal={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={0}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={5} />
          <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-desktop)",
            }}
            activeDot={{
              r: 6,
            }}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-mobile)",
            }}
            activeDot={{
              r: 6,
            }}
          />
          <Line
            dataKey="watch"
            type="monotone"
            stroke="var(--color-watch)"
            strokeWidth={2}
            dot={{
              fill: "var(--color-watch)",
            }}
            activeDot={{
              r: 6,
            }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
