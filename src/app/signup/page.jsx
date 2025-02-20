import IntroNav from "@/components/intro-nav";
import { SignupForm } from "@/components/loginsignup/signup-form";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="relative">
      <IntroNav />
      <div className="flex min-h-svh flex-col items-center justify-center p-2 md:p-4">
        <div className="w-full max-w-sm md:max-w-3xl">
          <Suspense>
            <SignupForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
