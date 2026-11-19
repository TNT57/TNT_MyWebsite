import { projects } from "@/content/projects";
import { pageMetadata } from "@/app/seo";
import { pad2 } from "@/lib/format";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/ContactCTA";
import { ProjectsClient } from "./ProjectsClient";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Everything I've built, filterable by kind.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrowLeft={`(${pad2(projects.length)}) projects, all built solo`}
        eyebrowRight="Everything I've built, filterable by kind"
        title={
          <>
            All work
          </>
        }
      />
      <Container>
        <ProjectsClient projects={projects} />
        <ContactCTA />
      </Container>
    </>
  );
}
