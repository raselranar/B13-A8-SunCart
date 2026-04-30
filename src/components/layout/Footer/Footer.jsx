import {
  LuFacebook,
  LuInstagram,
  LuTwitch,
  LuTwitter,
  LuYoutube,
} from "react-icons/lu";

import { Sun } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import QuickLinks from "./QuickLinks";
import Contact from "./Contact";
import Legal from "./Legal";

const Footer = () => {
  return (
    <footer className="bg-[#101828] py-10">
      {/* container */}
      <div className="container mx-auto">
        {/* top content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-4 border-b border-b-gray-300/10 pb-8">
          {/* logo and social links */}
          <div className="flex flex-col gap-4">
            {/* logo */}
            <div className="flex gap-2 items-center">
              <div className="bg-accent text-white p-2 rounded-full">
                <Sun />
              </div>
              <h2 className="text-xl text-white font-bold tracking-wider ">
                Sun<span className="text-accent">Cart</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm">
              Your one-stop shop for all summer essentials. Bringing sunshine
              and style to your doorstep.
            </p>
            {/* social links */}
            <div className="flex gap-4 items-center">
              <Link href="/">
                <Button
                  isIconOnly
                  variant="tertiary"
                  className="bg-white/10 text-white hover:bg-accent">
                  <LuFacebook />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  isIconOnly
                  variant="tertiary"
                  className="bg-white/10 text-white hover:bg-accent">
                  <LuTwitter />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  isIconOnly
                  variant="tertiary"
                  className="bg-white/10 text-white hover:bg-accent">
                  <LuInstagram />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  isIconOnly
                  variant="tertiary"
                  className="bg-white/10 text-white hover:bg-accent">
                  <LuYoutube />
                </Button>
              </Link>
            </div>
          </div>
          <QuickLinks />
          <Contact />
          <Legal />
        </div>

        {/* copyright content */}
        <div className="flex flex-wrap justify-center  sm:justify-between pt-8 px-4 text-sm text-gray-400 gap-4">
          <p className="">© 2026 SunCart. All rights reserved.</p>
          <p className="">Made with ☀️ for summer lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
