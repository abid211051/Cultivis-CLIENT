import IntroNav from "@/components/intro-nav";

export default function Page() {
  return (
    <div className="relative">
      <IntroNav />
      <div className="flex min-h-svh flex-col items-center justify-center text-center">
        {/* w-full max-w-sm md:max-w-3xl */}
        Welcome to the CultiVis Apps. Lets move your farming to the more precise
        and efficient way.
      </div>
    </div>
  );
}
