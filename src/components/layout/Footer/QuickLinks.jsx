import Link from "next/link";

const QuickLinks = () => {
  return (
    <div>
      <h3 className="font-bold text-white text-lg mb-2">Quick Links</h3>
      <ul className="flex flex-col gap-2 *:text-gray-400">
        <li>
          <Link href="/" className="hover:text-accent text-sm">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-accent text-sm">
            Products
          </Link>
        </li>
        <li>
          <Link href="/my-profile" className="hover:text-accent text-sm">
            My Profile
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-accent text-sm">
            Login
          </Link>
        </li>
        <li>
          <Link href="/register" className="hover:text-accent text-sm">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default QuickLinks;
