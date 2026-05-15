import { MoreWorkSection } from "../MoreWorkSection";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <MoreWorkSection />
    </>
  );
}
