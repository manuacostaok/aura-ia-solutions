export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        className="aurora-blob animate-aurora-1 h-[36rem] w-[36rem] bg-violet/40"
        style={{ top: "-10rem", left: "-8rem" }}
      />
      <div
        className="aurora-blob animate-aurora-2 h-[30rem] w-[30rem] bg-blue/30"
        style={{ top: "-6rem", right: "-10rem" }}
      />
      <div
        className="aurora-blob animate-aurora-3 h-[26rem] w-[26rem] bg-cyan/15"
        style={{ top: "22rem", left: "35%" }}
      />
      <div className="bg-grid absolute inset-x-0 top-0 h-[60rem]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, transparent 0%, var(--color-bg) 75%)",
        }}
      />
    </div>
  );
}
