import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

const Contact = () => {
  return (
    <div>
      <h3 className="font-bold text-white text-lg mb-2">Contact Us</h3>
      <ul className="flex flex-col gap-2 *:text-gray-400">
        <li className="text-sm flex items-center gap-1">
          <LuMapPin className="text-amber-600" size={15} />
          123 Summer Lane, Beach City, CA 90210
        </li>
        <li className="flex items-center gap-1">
          <LuPhone className="text-amber-600" size={15} />
          <a
            href="tel:+18007862278"
            className="hover:text-accent text-sm transition-colors">
            +1 (800) 786-2278
          </a>
        </li>
        <li className="flex items-center gap-1">
          <LuMail className="text-amber-600" size={15} />
          <a
            href="mailto:hello@suncart.com"
            className="hover:text-accent text-sm transition-colors">
            hello@suncart.com
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Contact;
