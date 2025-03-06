import IntroNav from "@/components/appsidebar/intro-nav";
import { LoginForm } from "@/components/loginsignup/login-form";
import { Suspense } from "react";
export default function Page() {
  return (
    <div className="relative">
      <IntroNav />
      <div className="flex min-h-svh flex-col items-center justify-center p-2 md:p-4">
        <div className="w-full max-w-sm md:max-w-3xl">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
