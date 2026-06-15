import Grain from "@/components/shell/Grain";
import PillNav from "@/components/shell/PillNav";
import DossierFurniture from "@/components/shell/DossierFurniture";
import SiteFooter from "@/components/shell/SiteFooter";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Grain />
      <DossierFurniture leftLabel="Leslin K Seemon" />
      <PillNav home />
      <main className="relative z-10">{children}</main>
      <SiteFooter />
    </>
  );
}
