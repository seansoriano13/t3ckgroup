import Noisy from "./Noisy";

function PrimaryButton({ label, className, icon, onClick, ...props }) {
  const baseClasses =
    "flex-center gap-1 relative filter-[url(#noise)] px-4 py-3 bg-red-9 font-russo tg-box-shadow text-gray-12 text-sm uppercase tracking-widest hover:bg-red-5 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed";
  const LabelIcon = icon;

  return (
    <button onClick={onClick} {...props} className={`${baseClasses} ${className || ""}`}>
      {icon && LabelIcon}
      {label || "Button"}

      <Noisy />
    </button>
  );
}

export default PrimaryButton;
