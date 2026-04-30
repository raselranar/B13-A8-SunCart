import Link from "next/link";

const Legal = () => {
  return (
    <div>
      <h3 className="font-bold text-white text-lg mb-2">Legal</h3>
      <ul className="flex flex-col gap-2 *:text-gray-400">
        <li>
          <Link href="/privacy-policy" className="hover:text-accent text-sm">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/terms-of-service" className="hover:text-accent text-sm">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link href="/return-policy" className="hover:text-accent text-sm">
            Return Policy
          </Link>
        </li>
        <li>
          <Link href="/cookie-policy" className="hover:text-accent text-sm">
            Cookie Policy
          </Link>
        </li>
        <li>
          <Link href="/accessibility" className="hover:text-accent text-sm">
            Accessibility
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Legal;
