const Contact = () => {
  return (
    <div>
      <h3 className="font-bold text-white text-lg mb-2">Contact Us</h3>
      <ul className="flex flex-col gap-2 *:text-gray-400">
        <li className="text-sm">123 Summer Lane, Beach City, CA 90210</li>
        <li>
          <a
            href="tel:+18007862278"
            className="hover:text-accent text-sm transition-colors">
            +1 (800) 786-2278
          </a>
        </li>
        <li>
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
