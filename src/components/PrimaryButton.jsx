import Noisy from "./Noisy";

function PrimaryButton({ label, className }) {
  const baseClasses =
    "relative filter-[url(#noise)] px-4 py-3 bg-red-9 font-russo tg-box-shadow text-gray-12 text-sm uppercase tracking-widest hover:bg-red-5 overflow-hidden";

  return (
    <button className={`${baseClasses} ${className || ""}`}>
      {label || "Button"}
      <Noisy />
    </button>
  );
}

export default PrimaryButton;
