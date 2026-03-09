export function BreadCrumbs(pathname) {
  const pathParts = pathname.split("/").filter(Boolean);

  return pathParts.map((part, index) => {
    const label = part
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return (
      <span className="text-gray-6 text-sm" key={index}>
        {index > 0 && " / "} {label}
      </span>
    );
  });
}
