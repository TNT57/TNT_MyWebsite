import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="py-16">
      <h1 className="text-3xl font-bold tracking-tight text-text">
        {siteConfig.name}
      </h1>
      <p className="mt-2 text-text-muted">
        Homepage content lands in Step 4 of the build order.
      </p>
    </div>
  );
}
