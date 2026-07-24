/* Brand chevron used in place of the generic Lucide arrow on CTA links and
   buttons. The mark only exists in two fixed colours, so callers pick the
   variant that suits the background: "dark" on light backgrounds, "light"
   (white) on dark backgrounds. `size` is the rendered height in px — set it to
   roughly the adjacent text size so the chevron reads as an inline arrow. */

const ASPECT = 674 / 1000; // trimmed PNG is 674×1000 (w/h)

export default function BrandArrow({
  variant = "dark",
  size = 15,
  style,
  className,
}: {
  variant?: "dark" | "light";
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const src =
    variant === "light"
      ? "/assets/arrow-right-light.png"
      : "/assets/arrow-right-dark.png";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={Math.round(size * ASPECT)}
      height={size}
      className={className}
      style={{ display: "inline-block", flex: "none", height: size, width: "auto", ...style }}
    />
  );
}
