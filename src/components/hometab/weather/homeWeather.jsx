import { currentWeather, hourlyWeather } from "@/app/api/weatherData/actions";
import { Play } from "next/font/google";
import OverallForecast from "./overallForecast";
const play = Play({
  weight: "400",
  subsets: ["latin"],
});

export default async function HomeWeather() {
  const currentweather = await currentWeather();
  const hourlyweather = await hourlyWeather();

  return (
    <div
      // url('/field2-min.png')
      className={`${play.className} w-[100%] mx-auto text-black bg-[#ffffff] bg-cover bg-center lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-6  flex flex-col justify-between p-2 lg:mb-0 mb-5 rounded-xl`}
    >
      <OverallForecast
        currentweather={currentweather}
        hourlyweather={hourlyweather}
      />
    </div>
  );
}
