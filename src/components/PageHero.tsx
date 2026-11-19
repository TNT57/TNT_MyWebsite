import { Container } from "@/components/Container";
import { GlowArea } from "@/components/GlowArea";

interface PageHeroProps {
  eyebrowLeft: React.ReactNode;
  eyebrowRight?: React.ReactNode;
  // The giant heading. Wrap one word in <span className="outline-text">.
  title: React.ReactNode;
  titleClassName?: string;
  children?: React.ReactNode;
}

// Top of every inner page: small mono line, then a giant uppercase title.
export function PageHero({
  eyebrowLeft,
  eyebrowRight,
  title,
  titleClassName,
  children,
}: PageHeroProps) {
  return (
    <GlowArea>
      <Container className="relative">
        <div className="flex flex-col gap-[clamp(20px,3vw,32px)] pt-[clamp(32px,5vw,64px)] pb-[clamp(40px,5vw,64px)]">
          <div className="rise flex flex-wrap items-center justify-between gap-x-6 gap-y-2.5 font-mono text-[13px] text-muted">
            <span>{eyebrowLeft}</span>
            {eyebrowRight ? <span>{eyebrowRight}</span> : null}
          </div>
          <h1
            className={`rise rise-1 m-0 font-display leading-[0.84] font-bold tracking-[-0.065em] uppercase ${
              titleClassName ?? "text-[clamp(56px,14vw,210px)]"
            }`}
          >
            {title}
          </h1>
          {children}
        </div>
      </Container>
    </GlowArea>
  );
}
