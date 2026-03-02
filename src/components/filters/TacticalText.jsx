import Overlay from "./Overlay";

export default function TacticalText({ children, className }) {
  return (
    <>
      {/* THE HIDDEN INNER SHADOW ENGINE */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="text-inner-shadow">
          {/* 1. The Figma Offset (Y: 4px) */}
          <feOffset dx="0" dy="4" />

          {/* 2. The Figma Blur (9.9px in Figma translates to ~5 in SVG math) */}
          <feGaussianBlur stdDeviation="5" result="offset-blur" />

          {/* 3. Invert the shadow to force it INSIDE the letters */}
          <feComposite
            operator="out"
            in="SourceGraphic"
            in2="offset-blur"
            result="inverse"
          />

          {/* 4. The Figma Color (Black at 49% opacity) */}
          <feFlood floodColor="black" floodOpacity="1" result="color" />

          {/* 5. Clip the shadow perfectly to the shape of the text */}
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />

          {/* 6. Render the new inner shadow ON TOP of the original text */}
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </svg>

      {/* THE LIVE TEXT */}
      <span className={`filter-[url(#text-inner-shadow)] ${className}`}>
        {children}
      </span>

      <Overlay opacity={1} src="/noisy.png" />
    </>
  );
}
