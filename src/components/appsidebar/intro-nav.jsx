import Link from "next/link";

export default function IntroNav() {
  return (
    <div className="fixed w-full flex justify-between items-center p-1.5 bg-muted">
      <img src="/CultiVis.png" alt="CultiVis Logo" className="w-9 md:w-10 " />
      <div>
        <Link href={"/signin"} replace={true}>
          <span className="p-2 text-lg font-bold bg-white cursor-pointer">
            SignIn
          </span>
        </Link>
      </div>
    </div>
  );
}
