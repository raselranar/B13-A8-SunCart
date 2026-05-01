import BackButton from "@/components/UI/GoBack";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found | SunCart",
  description: "The page you are looking for does not exist.",
};
const NotFound = () => {
  return (
    <div className="relative min-h-[60vh] gap-2 md:gap-4 flex flex-col items-center justify-center px-4">
      <Image src="/beach.png" className="-z-10" alt="Background" fill />
      <h2 className="text-transparent text-5xl lg:text-9xl bg-gradient bg-clip-text font-black">
        404
      </h2>
      <p className="text-xl lg:text-4xl text-white">
        Oops! Page Got Lost at Sea
      </p>
      <p className="text-center text-gray-200">
        Looks like this page drifted off with the tide. Don&apos;t worry — the
        summer fun is still waiting for you!
      </p>
      {/* button */}
      <div className="flex gap-4 flex-col sm:flex-row w-full sm:w-auto mx-auto mb-8">
        <Link href="/">
          <Button fullWidth>Back To Home</Button>
        </Link>
        <Link href="/products">
          <Button fullWidth>Browse Products</Button>
        </Link>
        <div>
          <BackButton />
        </div>
      </div>
    </div>
  );
};
export default NotFound;
