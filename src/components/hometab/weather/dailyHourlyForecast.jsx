"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Slash } from "lucide-react";
import { toast } from "sonner";
import { hourlyWeather, dailyWeather } from "@/app/api/weatherData/actions";

export default function DailyHourlyForecast({ hourlyweather }) {
  const [data, setData] = useState(hourlyweather);
  const [toggleForecast, setToggleForecast] = useState("hourly");
  async function getForecastData(val) {
    const newdata =
      val === "hourly" ? await hourlyWeather() : await dailyWeather();
    if (newdata.error) {
      toast.error("Failed to fetch weather data", {
        richColors: true,
        closeButton: true,
      });
    }
    setData(newdata);
    setToggleForecast(val);
  }

  return (
    <>
      <div className="w-full flex justify-between rounded-xl bg-[#181f26] py-1.5">
        <div className="border-2 border-[#45484a] h-[40px] flex w-full rounded-md bg-[#181f26] text-white">
          <button
            className="flex-1 hover:bg-[#242e38] rounded-l-md cursor-pointer"
            onClick={() => getForecastData("hourly")}
          >
            <p
              className={`${
                toggleForecast === "hourly" &&
                "text-[#3cc1ff] border-b-2 border-[#3cc1ff]"
              } h-full w-fit mx-auto pt-1`}
            >
              Hourly
            </p>
          </button>
          <Slash className="-rotate-45 text-center translate-y-1.5 text-[#45484a]" />
          <button
            className="flex-1 hover:bg-[#242e38] rounded-r-md cursor-pointer"
            onClick={() => getForecastData("daily")}
          >
            <p
              className={`${
                toggleForecast === "daily" &&
                "text-[#3cc1ff] border-b-2 border-[#3cc1ff]"
              }  h-full w-fit mx-auto pt-1`}
            >
              Daily
            </p>
          </button>
        </div>
      </div>
      <div className="flex xl:justify-around justify-between items-center bg-[#323d49] p-0.5 rounded-md">
        {data?.length > 0 ? (
          data?.map((item) => (
            <div
              key={item?.dt}
              className="flex flex-col justify-center items-center  px-1 rounded-md"
            >
              <span className="font-medium text-sm">{item?.dt}</span>
              <div className="flex justify-center items-center">
                <Image
                  src={`https://openweathermap.org/img/w/${item?.icon}.png`}
                  alt="icon"
                  width={20}
                  height={20}
                />
                <span className="text-xs">{item?.precipitation}%</span>
              </div>
              <span className="font-medium text-xs md:text-sm">
                {item?.temperature}&#176;C
              </span>
            </div>
          ))
        ) : (
          <div className="text-center mx-auto">
            <span className="text-sm">No Forecast Data Found</span>
          </div>
        )}
      </div>
    </>
  );
}
