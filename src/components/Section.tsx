import { cn } from "@/lib/utils"; // Assuming you have a utils file, or inline cn

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  offset?: boolean; // For asymmetric layouts
}

export function Section({ children, className, offset = false }: SectionProps) {
  return (
    <section className={cn("py-section", className)}>
      <div className={cn("container-max", offset && "ml-auto mr-0")}>
        {children}
      </div>
    </section>
  );
}