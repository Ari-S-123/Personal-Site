import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import Experience from "../../../lib/components/experience.svelte";
import type { Experience as ExperienceType } from "../../../lib/types/experience";

describe("Experience Component", () => {
  const mockExperience: ExperienceType = {
    title: "Software Engineer",
    organization: "Tech Corp",
    description: ["Led development of core features", "Implemented CI/CD pipeline", "Mentored junior developers"],
    startDate: "Jan 2023",
    endDate: "Present",
    techStack: [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-600" },
      { name: "TypeScript", color: "bg-blue-700" }
    ]
  };

  it("should render basic experience information", () => {
    render(Experience, { props: mockExperience });

    const container = screen.getByLabelText("Experience Details for Software Engineer");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("flex", "flex-col");

    expect(screen.getByText("Software Engineer @ Tech Corp")).toBeInTheDocument();

    expect(screen.getByText("Jan 2023 - Present")).toBeInTheDocument();
  });

  it("should render all description points as list items", () => {
    render(Experience, { props: mockExperience });

    const descriptionList = screen.getByLabelText("Experience Description");
    expect(descriptionList).toBeInTheDocument();
    expect(descriptionList).toHaveClass(
      "list-disc",
      "list-outside",
      "flex",
      "flex-col",
      "items-start",
      "justify-start",
      "pl-5"
    );

    mockExperience.description.forEach((desc) => {
      const listItem = screen.getByText(desc);
      expect(listItem).toBeInTheDocument();
      expect(listItem.tagName).toBe("LI");
      expect(listItem).toHaveClass("m-2");
    });
  });

  it("should render tech stack badges with correct classes", () => {
    render(Experience, { props: mockExperience });

    const techStackContainer = screen.getByLabelText("Tech stack for Software Engineer at Tech Corp");
    expect(techStackContainer).toBeInTheDocument();
    expect(techStackContainer).toHaveClass("flex", "flex-row", "flex-wrap", "gap-2", "m-2");

    mockExperience.techStack.forEach((tech) => {
      const badge = screen.getByText(tech.name);
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(tech.color);
    });
  });

  it("should not render tech stack section when techStack is empty", () => {
    const experienceWithoutTech = { ...mockExperience, techStack: [] };
    render(Experience, { props: experienceWithoutTech });

    const techStackContainer = screen.queryByLabelText("Tech stack for Software Engineer at Tech Corp");
    expect(techStackContainer).not.toBeInTheDocument();
  });

  it("should handle single description item", () => {
    const experienceWithSingleDesc = {
      ...mockExperience,
      description: ["Single responsibility"]
    };
    render(Experience, { props: experienceWithSingleDesc });

    const descriptionList = screen.getByLabelText("Experience Description");
    const items = descriptionList.querySelectorAll("li");
    expect(items).toHaveLength(1);
    expect(items[0]).toHaveTextContent("Single responsibility");
  });

  it("should handle empty description array", () => {
    const experienceWithNoDesc = {
      ...mockExperience,
      description: []
    };
    render(Experience, { props: experienceWithNoDesc });

    const descriptionList = screen.getByLabelText("Experience Description");
    const items = descriptionList.querySelectorAll("li");
    expect(items).toHaveLength(0);
  });

  it("should maintain correct order of description items", () => {
    render(Experience, { props: mockExperience });

    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(mockExperience.description.length);
    items.forEach((item, index) => {
      expect(item).toHaveTextContent(mockExperience.description[index]!);
    });
  });
});
