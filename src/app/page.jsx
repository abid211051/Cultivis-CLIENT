import IntroNav from "@/components/appsidebar/intro-nav";

export default function Page() {
  return (
    <div className="relative">
      <IntroNav />
      <div className="flex min-h-svh flex-col items-center justify-center text-center">
        Welcome to the CultiVis Apps. Lets move your farming to the more precise
        and efficient way.
      </div>
    </div>
  );
}
