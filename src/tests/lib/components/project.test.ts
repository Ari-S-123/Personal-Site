import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Project from "../../../lib/components/project.svelte";
import type { Project as ProjectType } from "../../../lib/types/project";

describe("Project Component", () => {
  const mockProject: ProjectType = {
    name: "Test Project",
    description: "A test project description",
    hostedUrl: "https://example.com",
    repoUrl: "https://github.com/user/repo",
    techStack: [
      { name: "React", color: "bg-blue-500" },
      { name: "TypeScript", color: "bg-blue-700" }
    ]
  };

  it("should render basic project information", () => {
    render(Project, { props: mockProject });
    const projectContainer = screen.getByLabelText("Test Project");
    expect(projectContainer).toBeInTheDocument();
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("A test project description")).toBeInTheDocument();
  });

  it("should render both GitHub and hosted URL buttons when URLs are provided", () => {
    render(Project, { props: mockProject });
    const githubButton = screen.getByLabelText("Link to Test Project's GitHub repository");
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toHaveAttribute("href", "https://github.com/user/repo");
    expect(githubButton).toHaveAttribute("target", "_blank");
    expect(githubButton).toHaveAttribute("rel", "noreferrer noopener");
    const hostedButton = screen.getByLabelText("Link to where Test Project is hosted");
    expect(hostedButton).toBeInTheDocument();
    expect(hostedButton).toHaveAttribute("href", "https://example.com");
    expect(hostedButton).toHaveAttribute("target", "_blank");
    expect(hostedButton).toHaveAttribute("rel", "noreferrer noopener");
  });
  it("should only render hosted URL button when repo URL is empty", () => {
    const projectWithoutRepo = { ...mockProject, repoUrl: "" };
    render(Project, { props: projectWithoutRepo });
    const githubButton = screen.queryByLabelText("Link to Test Project's GitHub repository");
    expect(githubButton).not.toBeInTheDocument();
    const hostedButton = screen.getByLabelText("Link to where Test Project is hosted");
    expect(hostedButton).toBeInTheDocument();
  });
  it("should only render GitHub button when hosted URL is empty", () => {
    const projectWithoutHosted = { ...mockProject, hostedUrl: "" };
    render(Project, { props: projectWithoutHosted });
    const githubButton = screen.getByLabelText("Link to Test Project's GitHub repository");
    expect(githubButton).toBeInTheDocument();
    const hostedButton = screen.queryByLabelText("Link to where Test Project is hosted");
    expect(hostedButton).not.toBeInTheDocument();
  });
  it("should render tech stack badges with correct classes", () => {
    render(Project, { props: mockProject });
    const techStackContainer = screen.getByLabelText("Tech stack for Test Project");
    expect(techStackContainer).toBeInTheDocument();
    expect(techStackContainer).toHaveClass("flex", "flex-row", "flex-wrap", "gap-2", "mt-1");
    const reactBadge = screen.getByText("React");
    expect(reactBadge).toHaveClass("bg-blue-500");
    const typeScriptBadge = screen.getByText("TypeScript");
    expect(typeScriptBadge).toHaveClass("bg-blue-700");
  });
  it("should not render tech stack section when techStack is empty", () => {
    const projectWithoutTech = { ...mockProject, techStack: [] };
    render(Project, { props: projectWithoutTech });
    const techStackContainer = screen.queryByLabelText("Tech stack for Test Project");
    expect(techStackContainer).not.toBeInTheDocument();
  });
  it("should render project details section with correct structure", () => {
    render(Project, { props: mockProject });
    const description = screen.getByText("A test project description");
    expect(description).toHaveClass("mt-1", "mb-2");
    const linksContainer = screen.getByLabelText("External Links");
    expect(linksContainer).toHaveClass("flex", "shrink-0", "items-center", "gap-2");
  });
});
