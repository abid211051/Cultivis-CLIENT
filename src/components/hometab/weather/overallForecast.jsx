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
      <div
        aria-label="location"
        className="w-fit flex items-center gap-2  bg-white/20 backdrop-blur-md  rounded-md px-2 xl:py-1"
      >
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
        <div className="flex items-center gap-2  bg-white/20 backdrop-blur-md  rounded-md px-2 xl:py-1">
          <span className="text-6xl ">
            {parseInt(currentweather?.main?.temp) || "N/A"} &#176;C
          </span>
        </div>
        <div className="bg-white/20  backdrop-blur-md rounded-md px-2 xl:py-1">
          <p className="text-xs text-center">
            {currentweather?.weather?.[0]?.description || "N/A"}
          </p>
          <Image
            src={`https://openweathermap.org/img/w/${currentweather?.weather?.[0]?.icon}.png`}
            width={60}
            height={60}
            alt=""
          />
        </div>
      </div>
      <div
        aria-label="other weather metrics"
        className="xl:py-1 rounded-b-md bg-white/20  backdrop-blur-md rounded-md"
      >
        <div className="flex xl:justify-around justify-between items-center px-2">
          <div>
            <div className="flex items-center gap-1 ">
              <Waves size={15} className="text-orange-300" />
              <span className="text-xs">Humidity</span>
            </div>
            <p className="text-sm font-medium">
              {currentweather?.main?.humidity || "0"} %
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Droplet size={15} className="text-orange-300" />
              <span className="text-xs">Precipitation</span>
            </div>
            <p className="text-sm font-font-medium">
              {currentweather?.rain?.["1h"] || "0"
                ? currentweather?.rain?.["1h"] || "0"
                : "0"}{" "}
              mm/h
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <WindArrowDown size={15} className="text-orange-300" />
              <span className="text-xs">Pressure</span>
            </div>
            <p className="text-sm font-medium">
              {currentweather?.main?.pressure || "0"} hPa
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Wind size={15} className="text-orange-300" />
              <span className="text-xs">Wind</span>
            </div>
            <p className="text-sm font-medium">
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
