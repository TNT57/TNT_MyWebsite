import Link from "next/link";
import { Container } from "@/components/Container";
import { GlowArea } from "@/components/GlowArea";
import { ArrowLeft } from "@/components/Icons";

export default function NotFound() {
  return (
    <GlowArea>
      <Container className="relative">
        <div className="flex flex-col gap-[clamp(20px,3vw,32px)] pt-[clamp(32px,5vw,64px)] pb-[clamp(48px,6vw,80px)]">
          <span className="rise font-mono text-[13px] text-muted">Error 404</span>
          <h1 className="rise rise-1 m-0 font-display text-[clamp(56px,14vw,210px)] leading-[0.84] font-bold tracking-[-0.065em] uppercase">
            Page <span className="outline-text">not found</span>
          </h1>
          <p className="rise rise-2 m-0 max-w-[50ch] text-muted">
            That page doesn&apos;t exist. Try the homepage instead.
          </p>
          <Link href="/" className="rise rise-3 btn btn-primary min-h-[52px] self-start px-[26px] text-[15px]">
            <ArrowLeft /> Back to homepage
          </Link>
        </div>
      </Container>
    </GlowArea>
  );
}
