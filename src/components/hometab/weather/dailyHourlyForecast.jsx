"use client";

import Image from "next/image";
import { useState } from "react";
import { hourlyWeather, dailyWeather } from "@/app/api/weatherData/actions";
export default function DailyHourlyForecast({ hourlyweather }) {
  const [data, setData] = useState(hourlyweather);
  const [toggleForecast, setToggleForecast] = useState("hourly");
  async function getForecastData(e) {
    try {
      let newdata = null;
      if (e.target.value === "hourly") {
        newdata = await hourlyWeather();
      } else {
        newdata = await dailyWeather();
      }
      setData(newdata);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className="w-full flex justify-between p-1">
        <button
          className={`flex-1 ${
            toggleForecast === "hourly" ? "bg-black text-white" : ""
          } p-1 rounded-md font-medium`}
          value={"hourly"}
          onClick={(e) => (setToggleForecast("hourly"), getForecastData(e))}
        >
          Hourly
        </button>
        <button
          className={`flex-1 ${
            toggleForecast === "daily" ? "bg-black text-white" : ""
          } p-1 rounded-md font-medium`}
          value={"daily"}
          onClick={(e) => (setToggleForecast("daily"), getForecastData(e))}
        >
          Daily
        </button>
      </div>
      <div className="flex xl:justify-around justify-between border-t-[1px]">
        {data?.length > 0 ? (
          data.map((item) => (
            <div
              key={item.dt}
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
          <span className="text-sm">No Forecast Data Found</span>
        )}
      </div>
    </>
  );
}
