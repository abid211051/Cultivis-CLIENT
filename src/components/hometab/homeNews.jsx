import { Rss, SquareArrowOutUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

export default function HomeNews() {
  return (
    // border-2
    <div className="bg-white lg:row-start-2 lg:row-span-1 lg:col-start-1 lg:col-span-7 rounded-xl  flex flex-col gap-2 lg:m-0 mb-5 p-2">
      <div className="flex justify-between  items-center">
        <div className="flex items-center gap-2 rounded-tl-md">
          <Rss
            size={26}
            strokeWidth={2}
            className="rounded-md p-[2px] bg-white text-black border-[2px]"
          />
          <span className="font-bold">News</span>
        </div>
        <Link
          href={"#"}
          className="flex items-center justify-between gap-2 p-2 bg-[#2d65ff] rounded-md text-white font-semibold"
        >
          <span className="text-xs">View All</span>
          <SquareArrowOutUpRight size={12} strokeWidth={3} />
        </Link>
      </div>

      <ScrollArea className="lg:h-full h-[300px] rounded-b-md border-t-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mb-3  cursor-pointer group"
          >
            <div className="w-[420px] xl:h-[140px] h-[100px] overflow-hidden bg-white flex justify-center rounded-md">
              <Image
                src={index % 2 === 0 ? "/field2-min.png" : "/rainy.png"}
                alt="img"
                width={100}
                height={40}
                className="w-auto object-contain rounded-md h-full group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="flex flex-col gap-1 text-justify">
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
