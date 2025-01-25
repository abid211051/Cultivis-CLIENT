import Link from "next/link";
import {
  Vegan,
  SquareArrowOutUpRight,
  WalletMinimal,
  Users,
  DollarSign,
} from "lucide-react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export default function HomeCropOverview() {
  return (
    // border-2
    <div className="lg:row-start-2 lg:row-span-1 lg:col-start-9 lg:col-span-4 rounded-xl flex flex-col justify-between gap-2">
      <Link
        href={"#"}
        className="bg-gradient-to-r from-[#008055] to-[#2dd39c] flex-1 flex flex-col text-white justify-between gap-3  p-2 rounded-xl"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Vegan
              size={22}
              strokeWidth={2}
              className="p-[2px] rounded-md bg-white text-black"
            />
            <span className="font-bold">Crop Health</span>
          </div>
          <div className="flex items-center justify-between gap-2 p-2 bg-[#2d65ff] rounded-md text-white">
            <span className="text-xs font-semibold">View All</span>
            <SquareArrowOutUpRight size={12} strokeWidth={3} />
          </div>
        </div>
        <span className="text-4xl font-semibold">GOOD</span>
      </Link>
      <Link
        href={"#"}
        className="bg-[#e8d038] flex-1 flex flex-col justify-between gap-1 py-1 rounded-xl"
      >
        <div className="flex items-center gap-1 px-2">
          <WalletMinimal
            size={22}
            strokeWidth={2}
            className="p-[2px] rounded-md bg-white text-black"
          />
          <span className="font-bold">Expense</span>
        </div>

        <ScrollArea className="px-2">
          <div className="flex items-center text-3xl font-medium">
            <DollarSign size={25} strokeWidth={2} />
            <span>2212033331211</span>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="flex items-center justify-between gap-1 p-2 text-blue-700 font-semibold">
          <span className="text-sm">View Finance Report</span>
          <SquareArrowOutUpRight size={12} strokeWidth={3} />
        </div>
      </Link>
      <Link
        href={"#"}
        className="bg-[#2d65ff] flex-1 flex flex-col justify-center text-white  items-center rounded-xl py-1"
      >
        <div className="font-bold  flex items-center justify-center gap-2 p-1">
          <Users size={22} strokeWidth={2} className="" />
          <span className="xl:text-2xl">Ask In Community</span>
        </div>
      </Link>
    </div>
  );
}
