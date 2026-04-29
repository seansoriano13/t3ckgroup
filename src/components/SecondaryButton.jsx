import Noisy from "./Noisy";

function SecondaryButton({ label, className, onClick }) {
  const baseClasses =
    "cursor-pointer  opacity-70 relative px-4 py-3 bg-transparent border border-gray-a6 font-russo tg-box-shadow text-gray-a12 uppercase tracking-widest hover:bg-gray-a12 hover:text-background overflow-hidden transition-colors";

  return (
    <button onClick={onClick} className={`${baseClasses} ${className || ""}`}>
      {label || "Button"}
      <Noisy />
    </button>
  );
}

export default SecondaryButton;
