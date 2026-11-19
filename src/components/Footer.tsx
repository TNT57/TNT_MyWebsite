import { siteConfig } from "@/config/site";
import { Container } from "@/components/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <footer className="mt-[clamp(56px,7vw,96px)] flex flex-wrap items-center justify-between gap-3 border-t border-line pt-7 pb-11 font-mono text-[12.5px] text-muted">
        <span>
          &copy; {year} {siteConfig.name}
        </span>
        <span>Built with Next.js, deployed on Vercel</span>
      </footer>
    </Container>
  );
}
