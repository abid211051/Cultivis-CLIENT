import HomeWeather from "@/components/hometab/homeWeather";
import HomeTask from "@/components/hometab/homeTask";
import HomeNews from "@/components/hometab/homeNews";
import HomeCropOverview from "@/components/hometab/homeCropOverview";

export default function Page() {
  return (
    <div className="h-full grid lg:grid-rows-2 lg:grid-cols-12 grid-cols-1 xl:gap-5 gap-3">
      <HomeWeather />
      <HomeTask />
      <HomeNews />
      <HomeCropOverview />
    </div>
  );
}
