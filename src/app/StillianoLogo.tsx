type StillianoLogoProps = {
  className?: string;
  variant?: "wordmark" | "mark";
};

const LOGOS = {
  wordmark: {
    src: "/images/SVGS/tarusdstills.svg",
    width: 480,
    height: 79,
  },
  mark: {
    src: "/images/SVGS/tds.svg",
    width: 165,
    height: 165,
  },
} as const;

export function StillianoLogo({ className, variant = "wordmark" }: StillianoLogoProps) {
  const logo = LOGOS[variant];

  return (
    <img
      className={className}
      src={logo.src}
      alt=""
      width={logo.width}
      height={logo.height}
      decoding="async"
    />
  );
}
