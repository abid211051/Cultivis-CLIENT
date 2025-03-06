import { ScrollArea } from "@/components/ui/scroll-area";
import { CirclePlus, MapPlus, Info } from "lucide-react";
import Image from "next/image";

export default function Fields() {
  return (
    <>
      <div className="h-full lg:row-start-1 lg:row-span-3 lg:col-start-5 lg:col-span-2 flex flex-col gap-2 lg:mb-0 mb-5 rounded-md text-white">
        <div className="rounded-xl bg-[#181f26] border-2 border-[#45484a] lg:h-[45%] h-[200px]">
          <div className="h-[20%] text-sm bg-[#303c47] rounded-t-xl flex items-center px-2 justify-between gap-2">
            <div className="h-full text-sm flex gap-1 justify-center items-center">
              <MapPlus size={20} />
              <span className="text-[#f4a362]">Fields</span>
            </div>
            <button>
              <CirclePlus />
            </button>
          </div>
          <ScrollArea className={"flex-1 h-[80%] p-1.5"}>
            <div className="flex bg-[#212930] rounded-md border-2 border-[#45484a] mb-1.5">
              <div className="w-[50px]">
                <Image
                  src={"/Picture1.png"}
                  alt="img"
                  width={100}
                  height={40}
                  className="w-auto object-contain h-full group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="flex flex-col w-full py-1 gap-1 px-1.5">
                <div className="flex justify-between gap-1.5">
                  <p className="line-clamp-1 text-sm xl:w-[100px] w-[55px] text-start">
                    Field-1 as adasds adsad asad asdasdsa dff asdasd adasdad
                    dasda dasds
                  </p>
                  <p className="line-clamp-1 text-xs text-end">
                    Lat | Lon: -93, -22
                  </p>
                </div>
                <div className="flex justify-between gap-2 items-end">
                  <p className="line-clamp-1 text-sm text-[#8eb0d3]">
                    Industrial Crop
                  </p>
                  <p className="line-clamp-1 text-xs">
                    Area: <span>0.1 ha</span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="lg:h-[55%] bg-[#181f26] rounded-xl h-[250px]">
          <div className="h-[20%] text-sm bg-[#303c47] rounded-t-xl flex items-center px-2 justify-between gap-2">
            <div className="h-full text-sm flex gap-1 justify-center items-center">
              <span className="text-[#f4a362]">Overview</span>
              <button>
                <Info size={18} />
              </button>
            </div>
            <span>Field-1</span>
          </div>
          <ScrollArea className={"flex-1 h-[80%] p-1.5"}>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
                <p className="text-sm line-clamp-1 text-[#8eb0d3]">Lat & Lon</p>
                <p className="text-sm line-clamp-1">-93.122 | -22.222</p>
              </div>
              <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
                <p className="text-sm line-clamp-1 text-[#8eb0d3]">
                  Field Size
                </p>
                <p className="text-sm line-clamp-1">13m / 139ft</p>
              </div>
              <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
                <p className="text-sm line-clamp-1 text-[#8eb0d3]">Crop Type</p>
                <p className="text-sm line-clamp-1">Industrial Crop</p>
              </div>
              <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
                <p className="text-sm line-clamp-1 text-[#8eb0d3]">
                  Sowing Date
                </p>
                <p className="text-sm line-clamp-1">Sep 14, 25</p>
              </div>
              <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
                <p className="text-sm line-clamp-1 text-[#8eb0d3]">
                  Harvest Date
                </p>
                <p className="text-sm line-clamp-1">Sep 14, 25</p>
              </div>
              <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
                <p className="text-sm line-clamp-1 text-[#8eb0d3]">Soil Type</p>
                <p className="text-sm line-clamp-1">Clay</p>
              </div>
              <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
                <p className="text-sm line-clamp-1 text-[#8eb0d3]">
                  Soil Moisture
                </p>
                <p className="text-sm line-clamp-1">78%</p>
              </div>
              <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
                <p className="text-sm line-clamp-1 text-[#8eb0d3]">
                  Crop Health(NDVI)
                </p>
                <p className="text-sm line-clamp-1">Moderate Growth</p>
              </div>
              <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
                <p className="text-sm line-clamp-1 text-[#8eb0d3]">
                  Surface Temperature
                </p>
                <p className="text-sm line-clamp-1">20&#176;C</p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
