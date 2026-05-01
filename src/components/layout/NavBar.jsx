"use client";
import { Sun } from "@gravity-ui/icons";
import { useState } from "react";
import NavLink from "../UI/NavLink";
import { Button, Separator } from "@heroui/react";
import Link from "next/link";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   links
  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/products">Products</NavLink>
      </li>
    </>
  );
  //   login buttons
  const loginButtons = (
    <>
      <Link href="/login">
        <Button
          className="border-accent rounded-lg text-accent hover:bg-accent hover:text-white"
          variant="outline">
          Login
        </Button>
      </Link>
      <Link href="/register">
        <Button className="rounded-lg">Register</Button>
      </Link>
    </>
  );

  return (
    <div className="border-b border-separator sticky top-0 z-40 bg-white">
      <nav className="container mx-auto w-full">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu">
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            {/* logo */}
            <div className="bg-accent text-white p-2 rounded-full">
              <Sun />
            </div>
            <h2 className="text-xl text-accent font-bold tracking-wider ">
              SunCart
            </h2>
          </div>
          <ul className="hidden items-center gap-4 md:flex">{links}</ul>
          {/* login buttons */}
          <div className="hidden items-center self-center gap-4 md:flex">
            {loginButtons}
          </div>
        </header>
        {/* for small devices */}
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden p-4">
            <ul className="flex flex-col gap-2 ">{links}</ul>
            <Separator className="mt-2 bg-accent/50 -mb-2" />
            {/* login buttons */}
            <div className="gap-4 mt-4 *:w-full flex ">{loginButtons}</div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default NavBar;
