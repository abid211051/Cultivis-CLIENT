import { isvalid } from "@/app/api/auth/sessionCheck";
import HomeWeather from "@/components/hometab/weather/homeWeather";
import HomeTask from "@/components/hometab/homeTask";
import HomeNews from "@/components/hometab/homeNews";
import HomeCropOverview from "@/components/hometab/homeCropOverview";

export default async function Page() {
  await isvalid();
  return (
    <div className="h-full grid lg:grid-rows-2 lg:grid-cols-11 grid-cols-1 xl:gap-5 gap-3">
      <HomeWeather />
      <HomeTask />
      <HomeNews />
      <HomeCropOverview />
    </div>
  );
}
