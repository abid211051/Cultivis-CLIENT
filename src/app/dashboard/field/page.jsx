import { isvalid } from "@/app/api/auth/sessionCheck";
import CropContainer from "@/components/fieldtab/cropData/cropContainer";
import Fields from "@/components/fieldtab/fieldinfo/fields";
import Map from "@/components/fieldtab/map/map";
import { MapContextProvider } from "@/context/mapcontext";

export const metadata = {
  title: "Dashboard-field",
  description: "This page represent all the Field functionality",
};

export default async function Page() {
  const user = await isvalid();
  return (
    <div className="h-full grid lg:grid-rows-5 lg:grid-cols-6 grid-cols-1 xl:gap-3 gap-3">
      <MapContextProvider userId={user.user.id}>
        <Map userId={user.user.id} />
        <Fields />
        <CropContainer />
      </MapContextProvider>
    </div>
  );
}
