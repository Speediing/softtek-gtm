export function BrandLockup({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
  invert?: boolean;
}) {
  return (
    <div className={`brand-lockup brand-lockup-${size}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/softtek-wordmark.svg"
        alt="Softtek"
        className="brand-mark"
      />
      <span className="brand-times" aria-hidden>
        ×
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/spacexai.svg" alt="SpaceXAI" className="brand-sxai" />
    </div>
  );
}
