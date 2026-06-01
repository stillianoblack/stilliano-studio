type StillianoLogoProps = {
  className?: string;
};

const LOGO = {
  src: "/images/SVGS/tarusdstills.svg",
  width: 480,
  height: 79,
} as const;

export function StillianoLogo({ className }: StillianoLogoProps) {
  return (
    <img
      className={className}
      src={LOGO.src}
      alt=""
      width={LOGO.width}
      height={LOGO.height}
      decoding="async"
    />
  );
}
