import { Rss, SquareArrowOutUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

export default function HomeNews() {
  return (
    <div className="w-[100%] lg:row-start-2 lg:row-span-1 lg:col-start-1 lg:col-span-7 flex flex-col lg:mb-0 mb-5">
      <div className="flex">
        <div className="flex-1 bg-[#ffffff] flex justify-center items-center rounded-tr-xl rounded-tl-xl">
          <div className="flex items-center gap-2 flex-1 bg-[#ffffff] px-2">
            <Rss
              size={26}
              strokeWidth={2}
              className="rounded-md p-[2px] bg-[#ffffff] text-black border-[2px]"
            />
            <span className="font-bold">News</span>
          </div>
        </div>
        <div className="w-[100px] h-[50px] bg-[#ffffff] flex justify-center items-center rounded-tl-3xl rounded-tr-3xl rounded-br-3xl">
          <Link href={"#"} className="navigation-btn-in">
            <span className="text-xs">View All</span>
            <SquareArrowOutUpRight size={18} strokeWidth={3} />
          </Link>
        </div>
      </div>
      <ScrollArea className="lg:h-full h-[300px] p-2 bg-[#ffffff] rounded-xl rounded-tl-none ">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#d8d8d8] px-2 w-full grid grid-cols-4 items-center mb-3 gap-2 cursor-pointer group rounded-xl overflow-hidden"
          >
            {/* w-[420px] */}
            <div className="col-start-1 col-span-1 xl:h-[140px] h-[100px] overflow-hidden flex justify-center rounded-s-md">
              <Image
                src={index % 2 === 0 ? "/field2-min.png" : "/rainy.png"}
                alt="img"
                width={100}
                height={40}
                className="w-auto object-contain h-full group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="py-1 col-start-2 col-span-3 flex flex-col gap-1 justify-evenly xl:h-[140px] h-[100px] text-justify rounded-e-lg ">
              <p
                className={`text-xs ${
                  index % 2 == 1 ? "bg-[#2c14e2]" : "bg-[#dc1c21]"
                } text-white  max-w-fit p-[3px] rounded-md`}
              >
                Warning
              </p>
              <p className="lg:line-clamp-2 line-clamp-1 text-sm  font-semibold group-hover:underline transition-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, laudantium. Recusandae dolorum repellat totam. Placeat
                ratione commodi deleniti sint iste? Lorem ipsum dolor sit amet
                con
              </p>
              <div className="flex gap-2">
                <p className="text-xs">
                  By <span className="font-bold">admin</span>
                </p>
                <div className="flex gap-1 items-center text-xs">
                  <Calendar size={12} strokeWidth={2} />
                  <span>Aug 30, 2024</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
