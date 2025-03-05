"use client";
import { Droplet, MapPin, Waves, Wind, WindArrowDown } from "lucide-react";
import Image from "next/image";
import DailyHourlyForecast from "./dailyHourlyForecast";
import { toast } from "sonner";
import { useEffect } from "react";

export default function OverallForecast({ currentweather, hourlyweather }) {
  useEffect(() => {
    if (currentweather?.error || hourlyweather?.error) {
      toast.error("Failed to fetch weather data", {
        richColors: true,
        closeButton: true,
      });
    }
  }, [currentweather, hourlyweather]);
  return (
    <>
      <div aria-label="location" className="w-fit flex items-center gap-2 px-2">
        <MapPin size={15} strokeWidth={2} className="" />
        <p className="text-sm uppercase line-clamp-1 ">
          {currentweather?.name || "N/A"},{" "}
          {currentweather?.sys?.country || "N/A"}
        </p>
      </div>
      <div
        aria-label="temperature"
        className="flex justify-around items-center py-1"
      >
        <div className="flex items-center gap-2 rounded-xl">
          <span className="lg:text-6xl text-4xl">
            {parseInt(currentweather?.main?.temp) || "N/A"} &#176;C
          </span>
        </div>
        <div className="px-2 bg-[#323d49] rounded-md">
          <p className="text-xs text-center">
            {currentweather?.weather?.[0]?.description || "N/A"}
          </p>
          <Image
            src={`https://openweathermap.org/img/w/${currentweather?.weather?.[0]?.icon}.png`}
            width={50}
            height={50}
            alt=""
          />
        </div>
      </div>
      <div
        aria-label="other weather metrics"
        className="rounded-md  text-white"
      >
        <div className="flex xl:justify-around justify-between items-center">
          <div>
            <div className="flex items-center gap-1 ">
              <Waves size={15} className="text-amber-500" />
              <span className="text-xs">Humidity</span>
            </div>
            <p className="text-sm font-medium text-center">
              {currentweather?.main?.humidity || "0"} %
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Droplet size={15} className="text-amber-500" />
              <span className="text-xs">Precipitation</span>
            </div>
            <p className="text-sm font-font-medium text-center">
              {currentweather?.rain?.["1h"] || "0"
                ? currentweather?.rain?.["1h"] || "0"
                : "0"}{" "}
              mm/h
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <WindArrowDown size={15} className="text-amber-500" />
              <span className="text-xs">Pressure</span>
            </div>
            <p className="text-sm font-medium text-center">
              {currentweather?.main?.pressure || "0"} hPa
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Wind size={15} className="text-amber-500" />
              <span className="text-xs">Wind</span>
            </div>
            <p className="text-sm font-medium text-center">
              {Math.round(
                parseFloat(currentweather?.wind?.speed || "0") * 2.237
              )}{" "}
              mi/h
            </p>
          </div>
        </div>
        <div aria-label="future forecast" className="flex flex-col">
          <DailyHourlyForecast hourlyweather={hourlyweather} />
        </div>
      </div>
    </>
  );
}
