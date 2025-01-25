import IntroNav from "@/components/intro-nav";
import { SignupForm } from "@/components/signup-form";

export default function Page() {
  return (
    <div className="relative">
      <IntroNav />
      <div className="flex min-h-svh flex-col items-center justify-center p-2 md:p-4">
        <div className="w-full max-w-sm md:max-w-3xl">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
