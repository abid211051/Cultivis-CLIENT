import { currentWeather, hourlyWeather } from "@/app/api/weatherData/actions";

import OverallForecast from "./overallForecast";

export default async function HomeWeather() {
  const currentweather = await currentWeather();
  const hourlyweather = await hourlyWeather();

  return (
    <div
      // url('/field2-min.png')
      className={`w-[100%] mx-auto text-white bg-[#181f26] bg-cover bg-center lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-6  flex flex-col justify-between p-1.5 lg:mb-0 mb-5 rounded-xl`}
    >
      <OverallForecast
        currentweather={currentweather}
        hourlyweather={hourlyweather}
      />
    </div>
  );
}
