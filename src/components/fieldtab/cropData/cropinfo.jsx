import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Vegan, ChevronsUpDown, Info } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CropInfo() {
  return (
    <div className="w-full rounded-xl bg-[#181f26] text-white p-1.5 grid lg:grid-cols-2 lg:grid-rows-1 gap-2">
      <div className="rounded-xl bg-[#181f26] border-2 border-[#45484a] lg:row-start-1 lg:row-span-1 lg:h-auto h-[250px]">
        <div className="bg-[#303c47] rounded-t-xl w-full h-[15%] flex items-center justify-center py-1.5 gap-2">
          <h6 className="text-sm">FIELD HISTORY</h6>
          <button>
            <Info size={20} />
          </button>
        </div>
        <ScrollArea className="w-full h-[75%] p-1.5">
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="bg-[#212930] hover:cursor-pointer border-2 border-[#45484a] w-full flex items-start justify-start p-0 mb-1.5 rounded-md"
            >
              <div className="flex flex-col gap-1 h-[60px] w-full p-1.5">
                <div className="flex items-center gap-1">
                  <Vegan size={15} strokeWidth={2} className="text-[#f4a462]" />
                  <span className="text-[#f4a462]">Rice</span>
                </div>
                <div className="flex gap-2 justify-between w-full">
                  <p className="line-clamp-1 text-xs text-[#8eb0d3]">
                    Sowing Date: <span className="text-white">02 Jan 2024</span>
                  </p>
                  <ChevronsUpDown
                    size={15}
                    className="text-center flex items-center"
                  />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#181f26] border-2 border-[#4e5152] py-1 pr-5 flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Vegan size={15} strokeWidth={2} className="text-[#f4a462]" />
                <span className="text-[#f4a462]">Rice</span>
              </div>
              <p className="line-clamp-1 text-sm text-[#8eb0d3]">
                Sowing Date: <span className="text-white">02 Jan 2024</span>
              </p>
              <p className="line-clamp-1 text-sm text-[#8eb0d3]">
                Harvesting Date: <span className="text-white">02 Jan 2024</span>
              </p>
              <p className="line-clamp-1 text-sm text-[#8eb0d3]">
                Class: <span className="text-white">VR-02</span>
              </p>
              <p className="line-clamp-1 text-sm text-[#8eb0d3]">
                Crop Yield t/ha: <span className="text-white">1 t/ha</span>
              </p>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="bg-[#212930] hover:cursor-pointer border-2 border-[#45484a] w-full flex items-start justify-start p-0 mb-1.5 rounded-md"
            >
              <div className="flex flex-col gap-1 h-[60px] w-full p-1.5">
                <div className="flex items-center gap-1">
                  <Vegan size={15} strokeWidth={2} className="text-[#f4a462]" />
                  <span className="text-[#f4a462]">jute</span>
                </div>
                <div className="flex gap-2 justify-between w-full ">
                  <p className="line-clamp-1 text-xs text-[#8eb0d3]">
                    Sowing Date: <span className="text-white">02 Jan 2025</span>
                  </p>
                  <ChevronsUpDown
                    size={15}
                    className="text-center flex items-center"
                  />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#181f26] border-2 border-[#4e5152] py-1 pr-5 flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <Vegan size={15} strokeWidth={2} className="text-[#f4a462]" />
                <span className="text-[#f4a462]">Jutu</span>
              </div>
              <p className="line-clamp-1 text-sm text-[#8eb0d3]">
                Sowing Date: <span className="text-white">02 Jan 2025</span>
              </p>
              <p className="line-clamp-1 text-sm text-[#8eb0d3]">
                Harvesting Date: <span className="text-white">02 Oct 2025</span>
              </p>
              <p className="line-clamp-1 text-sm text-[#8eb0d3]">
                Class: <span className="text-white">Par-122</span>
              </p>
              <p className="line-clamp-1 text-sm text-[#8eb0d3]">
                Crop Yield t/ha: <span className="text-white">3 t/ha</span>
              </p>
            </DropdownMenuContent>
          </DropdownMenu>
        </ScrollArea>
      </div>
      <div className="rounded-xl bg-[#181f26] border-2 border-[#45484a] lg:row-start-1 lg:row-span-1 lg:h-auto h-[250px]">
        <div className="bg-[#303c47] rounded-t-xl w-full h-[15%] flex items-center justify-center py-1.5 gap-2">
          <h1 className="text-sm">GROWTH STAGE</h1>
          <button>
            <Info size={20} />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-[75%] p-1.5">
          <h1>Comming Soon...</h1>
        </div>
      </div>
    </div>
  );
}
