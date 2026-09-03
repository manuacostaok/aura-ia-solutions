export default function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Costado izquierdo */}
      <div
        className="aurora-blob animate-aurora-1 h-[34rem] w-[26rem] bg-violet/35"
        style={{ top: "-6rem", left: "-14rem" }}
      />
      <div
        className="aurora-blob animate-aurora-3 h-[30rem] w-[24rem] bg-blue/25"
        style={{ bottom: "-10rem", left: "-12rem" }}
      />

      {/* Costado derecho */}
      <div
        className="aurora-blob animate-aurora-2 h-[34rem] w-[26rem] bg-blue/30"
        style={{ top: "-4rem", right: "-14rem" }}
      />
      <div
        className="aurora-blob animate-aurora-4 h-[28rem] w-[22rem] bg-cyan/15"
        style={{ bottom: "-8rem", right: "-10rem" }}
      />
    </div>
  );
}
