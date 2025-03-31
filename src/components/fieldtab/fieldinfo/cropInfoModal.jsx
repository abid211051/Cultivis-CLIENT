"use client";
import { setCropInfo } from "@/app/api/map/action";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { mapContext } from "@/context/mapcontext";

import { format } from "date-fns";

import { Calendar1 } from "lucide-react";
import { useContext, useState } from "react";
import { toast } from "sonner";

export default function CropInfoModal() {
  const [sowdate, setsowDate] = useState(null);
  const [harvdate, setharvDate] = useState(null);
  const context = useContext(mapContext);
  async function handleFieldInfo(e) {
    e.preventDefault();
    if (!sowdate) {
      toast.error("Please Provide Sowing Date");
      return;
    }
    if (!context.activeField?.id) {
      toast.error("No Field was Selected");
      return;
    }
    const data = {
      fieldId: context.activeField?.id,
      cropname: e.target.cropname.value,
      croptype: e.target.croptype.value,
      maturity: e.target.maturity.value,
      sowing: sowdate,
      harvesting: harvdate,
    };
    try {
      const res = await setCropInfo(data);
      if (!res.error) {
        toast.success("Crop Information is Added", {
          richColors: true,
          closeButton: true,
        });
        context.setActiveField((prev) => ({ ...prev, ...res }));
        context.setAllField((prev) =>
          prev.map((field) =>
            field.id === data.fieldId ? { ...field, ...res } : field
          )
        );
      }
    } catch (error) {
      toast.error(error?.message, {
        richColors: true,
        closeButton: true,
      });
    }
  }
  return (
    <form className="flex flex-col gap-2" onSubmit={handleFieldInfo}>
      <div className="flex gap-1.5 items-center">
        <label htmlFor="Sowing Date" className="text-slate-600">
          Crop Name:
        </label>
        <input
          type="text"
          className="border-2 p-1.5 text-slate-600 border-slate-400 flex-1 rounded-md"
          placeholder="Rice, Jute, Sugar-Can, Maze ..."
          name="cropname"
          required
        />
      </div>
      <div className="flex gap-1.5 items-center">
        <label htmlFor="Sowing Date" className="text-slate-600">
          Crop Type:
        </label>
        <input
          type="text"
          className="border-2 p-1.5 text-slate-600 border-slate-400 flex-1 rounded-md"
          placeholder="BRRI dhan 81, BRRI dhan 86 ..."
          name="croptype"
        />
      </div>
      <div className="flex gap-1.5 items-center">
        <label htmlFor="Sowing Date" className="text-slate-600">
          Maturity Period:
        </label>
        <input
          type="number"
          className="border-2 p-1.5 text-slate-600 border-slate-400 flex-1 rounded-md"
          placeholder="Number of Days"
          name="maturity"
          required
        />
      </div>
      <div className="flex gap-1.5 items-center">
        <label htmlFor="Sowing Date" className="text-slate-600">
          Sowing Date:
        </label>
        <Popover className={"w-full"}>
          <PopoverTrigger
            className={
              "border-2 flex items-center gap-1.5 flex-1 justify-between p-1.5 text-slate-600 border-slate-400 rounded-md"
            }
          >
            {sowdate ? format(sowdate, "PPP") : <span>Pick a date</span>}
            <Calendar1 size={18} />
          </PopoverTrigger>
          <PopoverContent className={"w-auto p-0 m-0"}>
            <Calendar
              mode="single"
              selected={sowdate}
              onSelect={setsowDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-1.5 items-center">
        <label htmlFor="Sowing Date" className="text-slate-600">
          ~Harvesting Date:
        </label>
        <Popover className={"w-full"}>
          <PopoverTrigger
            className={
              "border-2 flex items-center gap-1.5 flex-1 justify-between p-1.5 text-slate-600 border-slate-400 rounded-md"
            }
          >
            {harvdate ? format(harvdate, "PPP") : <span>Pick a date</span>}
            <Calendar1 size={18} />
          </PopoverTrigger>
          <PopoverContent className={"w-auto p-0 m-0"}>
            <Calendar
              mode="single"
              selected={harvdate}
              onSelect={setharvDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <button
        type="submit"
        className="w-full p-1.5 outline-2 bg-black text-white active:scale-95 cursor-pointer rounded-md"
      >
        Submit
      </button>
    </form>
  );
}
