import { isvalid } from "@/app/api/auth/sessionCheck";
import CropData from "@/components/fieldtab/cropData/cropdata";
import Fields from "@/components/fieldtab/fieldinfo/fields";
import Map from "@/components/fieldtab/map/map";

export default async function Page() {
  await isvalid();
  return (
    <div className="h-full grid lg:grid-rows-6 lg:grid-cols-6 grid-cols-1 xl:gap-3 gap-3">
      <Map />
      <Fields />
      <CropData />
    </div>
  );
}
