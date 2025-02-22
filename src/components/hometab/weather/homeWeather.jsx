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
      className={`${play.className} text-white bg-[url('/field2-min.png')] bg-cover bg-center lg:row-start-1 lg:row-span-1 lg:col-start-1 lg:col-span-6 rounded-xl  flex flex-col justify-between p-2 lg:m-0 mb-5`}
    >
      <OverallForecast
        currentweather={currentweather}
        hourlyweather={hourlyweather}
      />
    </div>
  );
}
