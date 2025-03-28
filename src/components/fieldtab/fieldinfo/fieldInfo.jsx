import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PlusCircle } from "lucide-react";

export default function FieldInfo() {
  return (
    <>
      {1 ? (
        <div
          className={
            "flex-1 h-[80%] p-1.5 flex items-center justify-center text-[#8eb0d3]"
          }
        >
          <Dialog>
            <DialogTrigger className={"flex gap-1.5 active:scale-95"}>
              <PlusCircle /> <span>Add a Crop</span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <ScrollArea className={"flex-1 h-[80%] p-1.5"}>
          <div className="grid grid-cols-2 gap-1.5">
            <ScrollArea className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm text-[#8eb0d3]">Field ID</p>
              <p className="text-sm">679639af85da352ab6565c2f</p>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm line-clamp-1 text-[#8eb0d3]">Lat & Lon</p>
              <p className="text-sm line-clamp-1">-93.122 | -22.222</p>
            </div>
            <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm line-clamp-1 text-[#8eb0d3]">Field Size</p>
              <p className="text-sm line-clamp-1">13m / 139ft</p>
            </div>
            <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm line-clamp-1 text-[#8eb0d3]">Crop Type</p>
              <p className="text-sm line-clamp-1">Industrial Crop</p>
            </div>
            <div className="bg-[#212930] p-1 rounded-md border-2 border-[#45484a]">
              <p className="text-sm line-clamp-1 text-[#8eb0d3]">Sowing Date</p>
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
      )}
    </>
  );
}
