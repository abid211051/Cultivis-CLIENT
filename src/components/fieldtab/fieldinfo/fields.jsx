import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPlus } from "lucide-react";
import FieldInfo from "./fieldInfo";
import IndividualField from "./individualField";

export default function Fields() {
  return (
    <div className="h-full lg:row-start-1 lg:row-span-3 lg:col-start-5 lg:col-span-2 flex flex-col lg:justify-between gap-2 lg:mb-0 mb-5 rounded-md text-white">
      <div className="lg:h-[44%] h-[200px] bg-[#181f26] rounded-xl">
        <div className="h-[20%] text-sm bg-[#303c47] rounded-t-xl flex items-center px-2 justify-between gap-2">
          <div className="h-full text-sm flex gap-1 justify-center items-center">
            <MapPlus size={20} />
            <span className="text-[#f4a362]">Fields</span>
          </div>
        </div>
        <ScrollArea className={"flex-1 h-[80%] p-1.5"}>
          <IndividualField />
        </ScrollArea>
      </div>
      <div className="lg:h-[54%] h-[250px] bg-[#181f26] rounded-xl ">
        <FieldInfo />
      </div>
    </div>
  );
}
