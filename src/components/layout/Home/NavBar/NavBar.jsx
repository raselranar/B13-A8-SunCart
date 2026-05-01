import NavHeader from "./NavHeader";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const NavBar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="border-b border-separator sticky top-0 z-40 bg-white">
      <nav className="container mx-auto w-full">
        <NavHeader session={session} />
      </nav>
    </div>
  );
};
export default NavBar;
