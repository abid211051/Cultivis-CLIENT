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
    <div className="w-[100%] mx-auto text-black lg:row-start-2 lg:row-span-1 lg:col-start-8 lg:col-span-4 flex flex-col lg:mb-0 mb-5 justify-between gap-2">
      <div className="flex-1 flex flex-col justify-between w-full">
        <div className="flex">
          <div className="flex-1 bg-white flex justify-center items-center rounded-tr-xl rounded-tl-xl">
            <div className="flex items-center gap-2 flex-1 bg-[#ffffff] px-2">
              <Vegan
                size={26}
                strokeWidth={2}
                className="p-[2px] rounded-md bg-white text-black"
              />
              <span className="font-bold">Crop Health</span>
            </div>
          </div>
          <div className="w-[100px] h-[50px] bg-white flex justify-center items-center rounded-tl-3xl rounded-tr-3xl rounded-br-3xl">
            <Link href={"#"} className="navigation-btn-in">
              <span className="text-xs font-semibold">View All</span>
              <SquareArrowOutUpRight size={18} strokeWidth={3} />
            </Link>
          </div>
        </div>
        <span className="text-4xl font-semibold bg-white p-2 rounded-xl rounded-tl-none">
          GOOD
        </span>
      </div>
      <Link
        href={"#"}
        className="bg-[#c9e140] flex-1 flex flex-col justify-between gap-1 py-1 w-full"
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
        className="bg-[#2d65ff] text-white flex-1 flex flex-col justify-center  items-center py-1 w-full"
      >
        <div className="font-bold  flex items-center justify-center gap-2 p-1">
          <Users size={22} strokeWidth={2} className="" />
          <span className="xl:text-2xl">Ask In Community</span>
        </div>
      </Link>
    </div>
  );
}
