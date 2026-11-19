import { projects } from "@/content/projects";
import { pageMetadata } from "@/app/seo";
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
        eyebrowLeft={`(${String(projects.length).padStart(2, "0")}) projects, all built solo`}
        eyebrowRight="Everything I've built, filterable by kind"
        title={
          <>
            All <span className="outline-text">work</span>
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
