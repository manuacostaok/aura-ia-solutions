const BLOBS = [
  {
    key: "left",
    className: "h-[130vh] w-[24rem] bg-violet/45 animate-aurora-drift-left",
    style: { top: "-15vh", left: "-4rem" },
  },
  {
    key: "right",
    className: "h-[130vh] w-[24rem] bg-cyan/35 animate-aurora-drift-right",
    style: { top: "-15vh", right: "-4rem" },
  },
];

export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
      {BLOBS.map((blob) => (
        <div key={blob.key} className={`aurora-blob ${blob.className}`} style={blob.style} />
      ))}
    </div>
  );
}
