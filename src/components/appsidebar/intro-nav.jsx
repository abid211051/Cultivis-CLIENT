import Link from "next/link";

export default function IntroNav() {
  return (
    <div className="fixed w-full flex justify-between items-center p-1.5 bg-gradient-to-r from-slate-900 to-cyan-900">
      <img
        src="/CultiVis.png"
        alt="CultiVis Logo"
        className="w-9 md:w-10 border-2 border-[#f6821f]"
      />
      <div>
        <Link href={"/signin"} replace={true}>
          <button className="p-2 font-thin bg-[#f6821f] cursor-pointer text-white rounded-md active:scale-95">
            SignIn
          </button>
        </Link>
      </div>
    </div>
  );
}
