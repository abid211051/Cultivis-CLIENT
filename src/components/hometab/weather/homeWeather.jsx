import { MapPin, Waves, Droplet, WindArrowDown, Wind } from "lucide-react";
import { currentWeather, hourlyWeather } from "@/app/api/weatherData/actions";
import Image from "next/image";
import { Play } from "next/font/google";
import DailyHourlyForecast from "./dailyHourlyForecast";
const play = Play({
  weight: "400",
  subsets: ["latin"],
});

export default async function HomeWeather() {
  // const currentweather = await currentWeather();
  // const hourlyweather = await hourlyWeather();
  console.log("Little bit change");

  return (
    <div
      className={`${play.className} text-white bg-[url('/field2-min.png')] bg-cover bg-center lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-6 rounded-xl  flex flex-col justify-between p-2 lg:m-0 mb-5`}
    >
      <div
        aria-label="location"
        className="w-fit flex items-center gap-2  bg-white/20 backdrop-blur-md  rounded-md px-2 xl:py-1"
      >
        <MapPin size={15} strokeWidth={2} className="" />
        <p className="text-sm uppercase line-clamp-1 ">
          {currentweather?.name}, {currentweather?.sys?.country}
        </p>
      </div>
      <div
        aria-label="temperature"
        className="flex justify-around items-center py-1"
      >
        <div className="flex items-center gap-2  bg-white/20 backdrop-blur-md  rounded-md px-2 xl:py-1">
          <span className="text-6xl ">
            {parseInt(currentweather?.main?.temp)} &#176;C
          </span>
        </div>
        <div className="bg-white/20  backdrop-blur-md rounded-md px-2 xl:py-1">
          <p className="text-xs text-center">
            {currentweather?.weather[0]?.description}
          </p>
          <Image
            src={`https://openweathermap.org/img/w/${currentweather?.weather[0]?.icon}.png`}
            width={60}
            height={60}
            alt="night"
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
              {currentweather?.main?.humidity}%
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Droplet size={15} className="text-orange-300" />
              <span className="text-xs">Precipitation</span>
            </div>
            <p className="text-sm font-font-medium">
              {currentweather?.rain?.["1h"]
                ? currentweather?.rain?.["1h"]
                : "0"}
              mm/h
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <WindArrowDown size={15} className="text-orange-300" />
              <span className="text-xs">Pressure</span>
            </div>
            <p className="text-sm font-medium">
              {currentweather?.main?.pressure}hPa
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <Wind size={15} className="text-orange-300" />
              <span className="text-xs">Wind</span>
            </div>
            <p className="text-sm font-medium">
              {Math.round(parseFloat(currentweather?.wind?.speed) * 2.237)}mi/h
            </p>
          </div>
        </div>
        <div aria-label="future forecast" className="flex flex-col">
          <DailyHourlyForecast hourlyweather={hourlyweather} />
        </div>
      </div>
    </div>
  );
}
