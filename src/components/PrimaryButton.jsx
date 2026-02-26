import Noisy from "./Noisy";

function PrimaryButton(props) {
  return (
    <>
      {/* 1. THE HIDDEN ENGINE (Put this anywhere in your file) */}

      {/* 2. THE BUTTON */}
      <button
        className="
          relative px-4 py-3 bg-red-9 font-russo tg-box-shadow text-white uppercase tracking-widest filter-[url(#noise)] hover:bg-red-5 transition-colors"
      >
        {props.label || "Button"}
      </button>
      <Noisy />
    </>
  );
}

export default PrimaryButton;
