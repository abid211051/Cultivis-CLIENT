"use client";

import { Info, PlusCircle } from "lucide-react";
import CropInfoModal from "./cropInfoModal";
import { useContext } from "react";
import { mapContext } from "@/context/mapcontext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { format } from "date-fns";
export default function FieldInfo() {
  const context = useContext(mapContext);

  let lat_lng;
  let area;
  if (context?.activeField?.polygon) {
    const corr = context?.activeField?.polygon;
    const [lat, lng] = corr?.coordinates
      ? corr?.coordinates.reduce(
          ([lt, ln], row) => [lt + row[0], ln + row[1]],
          [0, 0]
        )
      : null;
    lat_lng =
      corr &&
      `${(lat / corr?.coordinates?.length).toPrecision(3)} | ${(
        lng / corr?.coordinates?.length
      ).toPrecision(3)}`;
    area = corr && (corr?.area / 4047).toPrecision(3);
  }
  return (
    <>
      <div className="h-[20%] text-sm bg-[#303c47] rounded-t-xl flex items-center px-2 justify-between gap-2">
        <div className="text-sm flex gap-1 justify-center items-center">
          <span className="text-[#f4a362]">Overview</span>
          <button>
            <Info size={16} />
          </button>
        </div>
        {context?.activeField?.id && !context?.activeField?.cropName && (
          <Dialog>
            <DialogTrigger
              className={"flex items-center gap-1.5 active:scale-95"}
            >
              <PlusCircle /> <span>Add Crop</span>
            </DialogTrigger>
            <DialogContent className={"lg:p-4 p-2"}>
              <DialogTitle>Please Provide Necessity Information</DialogTitle>
              <DialogDescription className={"hidden"}></DialogDescription>
              <CropInfoModal />
            </DialogContent>
          </Dialog>
        )}
      </div>
      <div
        className={
          "flex-1 h-[80%] flex items-center justify-center text-[#8eb0d3]"
        }
      >
        <ScrollArea className={"flex-1 h-full p-1.5"}>
          <div className="grid grid-cols-2 gap-1.5">
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Field ID</p>
              <p className="text-sm text-white">
                {context?.activeField?.id || <>&#65343;</>}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Lat & Lon</p>
              <p className="text-sm text-white">{lat_lng || <>&#65343;</>}</p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Field Size</p>
              <p className="text-sm text-white">
                {area ? area + " acre" : <>&#65343;</>}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Crop Name</p>
              <p className="text-sm text-white">
                {context?.activeField?.cropName || <>&#65343;</>}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Crop Type</p>
              <p className="text-sm text-white">
                {context?.activeField?.cropType || <>&#65343;</>}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Soil Type</p>
              <p className="text-sm text-white">
                {context?.activeField?.soilType || <>&#65343;</>}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Sowing Date</p>
              <p className="text-sm text-white">
                {context?.activeField?.sowing ? (
                  format(context?.activeField?.sowing, "PPP")
                ) : (
                  <>&#65343;</>
                )}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">~ Harvesting Date</p>
              <p className="text-sm text-white">
                {context?.activeField?.harvesting ? (
                  format(context?.activeField?.harvesting, "PPP")
                ) : (
                  <>&#65343;</>
                )}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Maturity Period</p>
              <p className="text-sm text-white">
                {context?.activeField?.maturityDay || <>&#65343;</>}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Surface Temperature</p>
              <p className="text-sm text-white">
                {context?.activeField?.surfaceTemp || <>&#65343;</>}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Soil Moisture</p>
              <p className="text-sm text-white">
                {context?.activeField?.soilMoist || <>&#65343;</>}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Crop Health (NDVI)</p>
              <p className="text-sm text-white">
                {context?.activeField?.ndvi || <>&#65343;</>}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <ScrollArea className="whitespace-nowrap bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Leaf Condition (LAI)</p>
              <p className="text-sm text-white">
                {context?.activeField?.lai || <>&#65343;</>}
              </p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
