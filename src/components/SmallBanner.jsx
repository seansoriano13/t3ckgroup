import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

function SmallBanner({ className = "" }) {
  return (
    <div
      className={`${className} w-screen h-6 bg-red-1 text-gray-a11 relative flex items-center justify-end`}
    >
      <div className="text-xs">Reach Us: </div>

      {/* Globe */}
      <a
        href="tel:+639063678910"
        className="flex-center gap-1 text-xs hover:text-red-9 transition-colors"
      >
        <Phone className="ml-3 text-red-8" size={16} />
        <span>+63 9063678910 (Globe)</span>
      </a>

      {/* Smart */}
      <a
        href="tel:+639063678910"
        className="flex-center gap-1 text-xs hover:text-red-9 transition-colors"
      >
        <Phone className="ml-3 text-red-8" size={16} />
        <span>+63 9202888333 (Smart)</span>
      </a>

      {/* Landline */}
      <a
        href="tel:+63286362892"
        className="flex-center gap-1 text-xs hover:text-red-9 transition-colors"
      >
        <Phone className="ml-3 text-red-8" size={16} />
        <span>0286362892 (Landline)</span>
      </a>

      {/* Email */}
      <a
        href="mailto:informe@t3ckgroup.com"
        className="flex-center gap-1 text-xs hover:text-red-9 transition-colors"
      >
        <Mail className="ml-3 text-red-8" size={16} />
        <span>informe@t3ckgroup.com</span>
      </a>
    </div>
  );
}

export default SmallBanner;
