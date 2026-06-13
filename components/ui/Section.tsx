import { cn } from "@/lib/utils";

interface SectionProps {
  variant?: "dark" | "light";
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export default function Section({
  variant = "dark",
  className,
  id,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full px-6 md:px-12 py-20 md:py-32",
        variant === "dark" ? "bg-ink text-paper" : "bg-paper text-ink",
        className
      )}
    >
      {children}
    </section>
  );
}
