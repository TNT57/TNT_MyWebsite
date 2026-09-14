interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <section className={`py-8 ${className ?? ""}`}>
      {title ? (
        <h2 className="mb-5 font-mono text-[13px] uppercase tracking-[0.14em] text-text-muted">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
