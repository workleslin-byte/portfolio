import Grain from "@/components/shell/Grain";
import PillNav from "@/components/shell/PillNav";
import DossierFurniture from "@/components/shell/DossierFurniture";
import SiteFooter from "@/components/shell/SiteFooter";
import ScrollProgress from "@/components/shell/ScrollProgress";
import MobileContactBar from "@/components/shell/MobileContactBar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Grain />
      <ScrollProgress />
      <DossierFurniture leftLabel="Leslin K Seemon" />
      <PillNav home />
      <main className="relative z-10">{children}</main>
      <SiteFooter />
      {/* clears the fixed mobile contact bar so the footer isn't hidden */}
      <div aria-hidden="true" className="h-20 sm:hidden" />
      <MobileContactBar />
    </>
  );
}
