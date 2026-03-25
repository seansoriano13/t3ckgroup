import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Link } from "react-router";

function SmallBanner({ className = "" }) {
  return (
    <div
      className={`${className} w-full min-h-[24px] text-gray-a11 relative flex gap-x-4 py-2 lg:py-0`}
    >
      <div className="text-xs hidden lg:block">Reach Us: </div>

      {/* Globe */}
      <Link
        to="tel:+639063678910"
        className="flex-center gap-1 text-xs hover:text-red-9 transition-colors"
      >
        <Phone className="ml-3 text-red-8" size={16} />
        <span>+63 9063678910 (Globe)</span>
      </Link>

      {/* Smart */}
      <Link
        to="tel:+639063678910"
        className="flex-center gap-1 text-xs hover:text-red-9 transition-colors"
      >
        <Phone className="ml-3 text-red-8" size={16} />
        <span>+63 9202888333 (Smart)</span>
      </Link>

      {/* Landline */}
      <Link
        to="tel:+63286362892"
        className="flex-center gap-1 text-xs hover:text-red-9 transition-colors"
      >
        <Phone className="ml-3 text-red-8" size={16} />
        <span>0286362892 (Landline)</span>
      </Link>

      {/* Email */}
      <Link
        to="mailto:informe@t3ckgroup.com"
        className="flex-center gap-1 text-xs hover:text-red-9 transition-colors"
      >
        <Mail className="ml-3 text-red-8" size={16} />
        <span>informe@t3ckgroup.com</span>
      </Link>
    </div>
  );
}

export default SmallBanner;
