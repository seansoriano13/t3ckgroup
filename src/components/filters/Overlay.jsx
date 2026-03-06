function Overlay({ src = "", className = "", opacity, mixBlendMode }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: opacity || 0.05,
        mixBlendMode: mixBlendMode, // optional
      }}
    />
  );
}

export default Overlay;
