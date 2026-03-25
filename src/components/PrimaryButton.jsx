import Noisy from "./Noisy";

function PrimaryButton({ label, className, icon }) {
  const baseClasses =
    "flex-center gap-1 relative filter-[url(#noise)] px-4 py-3 bg-red-9 font-russo tg-box-shadow text-gray-12 text-sm uppercase tracking-widest hover:bg-red-5 overflow-hidden";
  const LabelIcon = icon;

  return (
    <button className={`${baseClasses} ${className || ""}`}>
      {icon && LabelIcon}
      {label || "Button"}

      <Noisy />
    </button>
  );
}

export default PrimaryButton;
