import { siteConfig } from "@/config/site";
import { hobbyIntro, hobbyItems } from "@/content/about";
import { pageMetadata } from "@/app/seo";

export const metadata = pageMetadata({
  title: "Hobby",
  description: `A few things ${siteConfig.name} does outside of code.`,
  path: "/hobby",
});

export default function HobbyPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold tracking-tight text-text">Outside of code</h1>
      <p className="mt-2 mb-8 max-w-[66ch] text-text-muted">{hobbyIntro}</p>

      {hobbyItems.length > 0 ? (
        <div className="flex max-w-[66ch] flex-col gap-5">
          {hobbyItems.map((item) => (
            <p key={item} className="text-text">
              {item}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-text-muted">TODO: hobby content</p>
      )}
    </div>
  );
}
