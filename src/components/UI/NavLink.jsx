"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
  const path = usePathname();
  const activeStyle =
    path === href ? "border-b-2 text-accent border-b-accent" : "text-gray-500";
  return (
    <Link href={href} className={`hover:text-accent/80  ${activeStyle}`}>
      {children}
    </Link>
  );
};
export default NavLink;
