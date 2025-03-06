"use client";

import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  setYear,
} from "date-fns";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import {
  SquareArrowOutUpRight,
  ClipboardList,
  CircleCheckBig,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

export default function HomeTask() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState(getMonthDays(currentDate));

  // Utility: Generate Days for the Month
  function getMonthDays(date) {
    return eachDayOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    });
  }

  // Handle Month Change
  const handleMonthChange = (value) => {
    const newMonth = new Date(
      currentDate.getFullYear(),
      parseInt(value),
      currentDate.getDate()
    );
    setCurrentDate(newMonth);
    setSelectedDays(getMonthDays(newMonth));
  };

  // Handle Year Change
  const handleYearChange = (value) => {
    const newYear = setYear(currentDate, parseInt(value));
    setCurrentDate(newYear);
    setSelectedDays(getMonthDays(newYear));
  };

  // Generate Month Options
  const months = Array.from({ length: 12 }, (_, i) => ({
    value: i,
    label: format(new Date(2023, i, 1), "MMMM"),
  }));

  const years = Array.from({ length: 11 }, (_, i) => {
    const year = new Date().getFullYear() + i;
    return { value: year.toString(), label: year.toString() };
  });

  return (
    <div
      className="w-[100%] mx-auto lg:row-start-1 lg:row-span-1 lg:col-start-7 lg:col-span-5  flex flex-col  lg:mb-0 mb-5"
      aria-label="Quick Task view section"
    >
      <div className="flex">
        <div className="flex-1 bg-[#ffffff] flex justify-center items-center rounded-tr-xl rounded-tl-xl">
          <div className="flex items-center gap-2 flex-1 bg-[#ffffff] px-2">
            <ClipboardList
              size={26}
              strokeWidth={2}
              className="rounded-md p-[2px] text-black bg-[#ffffff] border-[2px]"
            />
            <span className="font-bold">Tasks</span>
          </div>
        </div>
        <div className="w-[100px] h-[50px] bg-[#ffffff] flex justify-center items-center rounded-tl-3xl rounded-tr-3xl rounded-br-3xl">
          <Link href={"#"} className="navigation-btn-in">
            <span className="text-xs">View All</span>
            <SquareArrowOutUpRight size={18} strokeWidth={3} />
          </Link>
        </div>
      </div>
      <div className="px-3 bg-[#ffffff] rounded-tr-xl">
        <div className="flex gap-1 border-b-2">
          <Select
            onValueChange={(e) => handleMonthChange(e)}
            value={`${currentDate?.getMonth()}`}
          >
            <SelectTrigger className="w-[80px] px-1 border-r-2">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Months</SelectLabel>
                {months?.map((month) => (
                  <SelectItem key={month?.value} value={`${month?.value}`}>
                    {month?.label?.substring(0, 3)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => handleYearChange(e)}
            value={`${currentDate?.getFullYear()}`}
          >
            <SelectTrigger className="w-[80px] px-1">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Years</SelectLabel>
                {years?.map((year) => (
                  <SelectItem key={year?.value} value={year?.value}>
                    {year?.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Carousel className="max-w-full border-b-2 bg-[#ffffff]">
        <CarouselContent>
          {selectedDays?.map((day, index) => (
            <CarouselItem
              key={index}
              className="flex flex-col basis-1/5 items-center"
            >
              <span className="text-xs">{format(day, "EEE")}</span>
              <span className="text-sm font-semibold ">{format(day, "d")}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <ScrollArea className="w-full lg:h-auto h-[200px] rounded-b-xl p-2  bg-[#ffffff]">
        {Array.from({ length: 24 }, (_, i) =>
          i % 2 != 0 ? (
            <div key={i} className="mb-2 grid grid-cols-6 gap-2 text-justify">
              <div className="col-span-1 flex flex-col justify-end items-end">
                <span className="text-xs">
                  {i < 10 ? "0" + i + ":" + "00" : i + ":" + "00"}
                </span>
              </div>
              <div className="col-span-5 border-b-2 border-[#0b9466] border-dashed py-1">
                <div className="flex items-start p-2 bg-[#d8d8d8] font-medium line-through  mb-1 rounded-md gap-2 h-full">
                  <span className="line-clamp-4 text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi ut possimus rerum a corrupti ducimus similique,
                    doloribus accusantium debitis laboriosam?
                  </span>
                  <div className="flex flex-col justify-between items-center h-full text-[#0b9466]">
                    <input type="checkbox" className="cursor-pointer" />
                    <CircleCheckBig size={15} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="mb-2 grid grid-cols-6 gap-2">
              <div className="col-span-1 flex flex-col justify-end items-end">
                <span className="text-xs">
                  {i < 10 ? "0" + i + ":" + "00" : i + ":" + "00"}
                </span>
              </div>
              <div className="col-span-5 border-b-2  border-dashed"></div>
            </div>
          )
        )}
      </ScrollArea>
    </div>
  );
}
