import Image from "next/image";

type Props = {
  className?: string;
  /** Show the "RSA Gebäudeservice" wordmark next to the mark */
  withTagline?: boolean;
  /** Mark badge diameter in px */
  size?: number;
};

/**
 * The mark is rendered inside a paper-soft circular badge so the
 * letter outlines stay legible regardless of the surrounding
 * background (warm-paper sections, dark ink sections, the petrol
 * CTA block). This makes the brand consistent across the whole site.
 */
export default function Logo({
  className = "",
  withTagline = true,
  size = 42,
}: Props) {
  return (
    <span className={"inline-flex items-center gap-3 leading-none " + className}>
      <span
        className="grid place-items-center rounded-full bg-paper-soft border border-hairline shrink-0"
        style={{ width: size, height: size }}
      >
        <Image
          src="/rsa-logo.png"
          alt="RSA Gebäudeservice"
          width={size}
          height={size}
          priority
          className="object-contain"
          style={{ width: size * 0.78, height: size * 0.78 }}
        />
      </span>
      {withTagline && (
        <span className="flex flex-col leading-none">
          <span className="italic-display text-[1.05rem] tracking-tight">
            RSA
          </span>
          <span className="text-[0.6rem] tracking-[0.32em] uppercase opacity-65 mt-1">
            Gebäudeservice
          </span>
        </span>
      )}
    </span>
  );
}
