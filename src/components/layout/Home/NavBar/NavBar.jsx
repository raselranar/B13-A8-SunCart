"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import NavLink from "@/components/UI/NavLink";
import { Sun } from "@gravity-ui/icons";
import { Avatar, Button, Separator } from "@heroui/react";
import { LuLogOut, LuMenu, LuX } from "react-icons/lu";

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleLogOut = async () => {
    // console.log("Logging out...");
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh();
        },
      },
    });
  };

  const links = (
    <>
      <li>
        <NavLink href="/home">Home</NavLink>
      </li>
      <li>
        <NavLink href="/products">Products</NavLink>
      </li>
      {user && (
        <li>
          <NavLink href="/my-profile">My Profile</NavLink>
        </li>
      )}
    </>
  );

  const authSection = isPending ? (
    <div className="h-8 w-20 animate-pulse bg-gray-200 rounded"></div>
  ) : !user ? (
    <div className="flex items-center gap-4">
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
    </div>
  ) : (
    <div key={user.id} className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Avatar>
          <Avatar.Image
            alt={session.user.name}
            src={user?.image.length > 1 ? user?.image : null}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback className="text-2xl text-accent">
            {user.name.charAt(0).toUpperCase()}
          </Avatar.Fallback>
        </Avatar>
        <h2 className="hidden lg:block font-medium">{user?.name}</h2>
      </div>
      <Button
        onClick={handleLogOut}
        className="rounded-lg bg-danger/10 text-danger">
        <LuLogOut />
        Logout
      </Button>
    </div>
  );

  return (
    <div className="border-b border-separator sticky top-0 z-40 bg-white">
      <nav className="container mx-auto w-full">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <LuX className="w-6 h-6" />
              ) : (
                <LuMenu className="w-6 h-6" />
              )}
            </button>

            <div className="bg-accent text-white p-2 rounded-full">
              <Sun />
            </div>
            <h2 className="text-xl text-accent font-bold tracking-wider">
              SunCart
            </h2>
          </div>

          <ul className="hidden items-center gap-4 md:flex">{links}</ul>

          <div className="hidden items-center gap-4 md:flex">{authSection}</div>
        </header>

        {isMenuOpen && (
          <div className="border-t border-separator md:hidden p-4 bg-white shadow-lg">
            <ul className="flex flex-col gap-2">{links}</ul>
            <Separator className="my-4 bg-accent-soft-hover" />
            <div className="flex gap-4">{authSection}</div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
