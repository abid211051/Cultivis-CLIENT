import IntroNav from "@/components/appsidebar/intro-nav";

export default function Page() {
  return (
    <div className="relative">
      <IntroNav />
      <div className="flex min-h-svh flex-col items-center justify-center text-center">
        <h1 className="text-2xl mb-4">
          Welcome to the CultiVis Apps. Lets move your farming to the more
          precise and efficient way.
        </h1>
        <p className="text-sm">
          Please Sigup with your email & password or use Demo email & password
          for Dashboard view.
        </p>
        <p className="text-sm">Demo Email: abid@gmail.com</p>
        <p className="text-sm">Demo Password: 12345</p>
        <p className="mt-30 font-semibold font-sans">
          Landing Page will be Implemented later after implementing Core
          functionality in Dashboard.
        </p>
      </div>
    </div>
  );
}
