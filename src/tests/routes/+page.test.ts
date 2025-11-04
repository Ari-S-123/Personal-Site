import { describe, it, expect } from "vitest";
import Page from "../../routes/+page.svelte";
import { render, screen } from "@testing-library/svelte";
import { profileLinks } from "$lib/data";
import { matchesFilter, getExperienceSearchFields, getProjectSearchFields } from "$lib/filters";
import type { Experience, Project } from "$lib/filters";

describe("Profile Card", () => {
  it("should render the profile avatar with correct attributes", () => {
    render(Page);
    const avatarContainer = screen.getByLabelText("Picture of Website Author");
    expect(avatarContainer).toHaveClass(
      "relative",
      "flex",
      "shrink-0",
      "overflow-hidden",
      "size-64",
      "rounded-full",
      "border-1",
      "glowing-border"
    );
    const avatar = screen.getByAltText("Picture of Ari");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "Profile-Pic.png");
  });
  it("should render name and role", () => {
    render(Page);
    expect(screen.getByText("Ari S.")).toHaveClass("text-4xl", "text-white", "font-bold");
    const role = screen.getByText("Student & Aspiring SWE");
    expect(role).toHaveClass("text-2xl", "text-white");
    expect(role.tagName).toBe("B");
  });
  it("should render social media links with correct attributes", () => {
    render(Page);
    const socialContainer = screen.getByLabelText("Links to social media profiles");
    expect(socialContainer).toHaveClass(
      "flex",
      "flex-row",
      "items-center",
      "justify-between",
      "px-6",
      "[.border-t]:pt-6"
    );
    profileLinks.forEach((link) => {
      const button = screen.getByRole("link", { name: link.ariaLabel });
      expect(button).toHaveAttribute("href", link.url);
      expect(button).toHaveAttribute("target", "_blank");
      expect(button).toHaveAttribute("rel", "noreferrer noopener");
      const img = screen.getByAltText(link.iconAlt);
      expect(img).toHaveAttribute("src", link.iconPath);
      expect(img).toHaveClass("expand");
    });
  });
});

describe("Layout Structure", () => {
  it("should render main container with proper structure", () => {
    render(Page);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    const container = main.firstElementChild;
    expect(container).toHaveClass("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm");
  });
});

describe("Experience Section", () => {
  it("should render experiences section with correct heading", () => {
    render(Page);
    const experiencesHeading = screen.getByRole("heading", { name: "Experience" });
    expect(experiencesHeading).toHaveClass("text-2xl", "font-bold");
  });
});

describe("Projects Sections", () => {
  it("should render web dev projects section with correct heading", () => {
    render(Page);
    const webDevHeading = screen.getByRole("heading", { name: "Web Dev Projects" });
    expect(webDevHeading).toHaveClass("text-2xl", "font-bold");
  });
  it("should render ml projects section with correct heading", () => {
    render(Page);
    const mlHeading = screen.getByRole("heading", { name: "ML Projects" });
    expect(mlHeading).toHaveClass("text-2xl", "font-bold");
  });
  it("should render data viz projects section with correct heading", () => {
    render(Page);
    const dataVizHeading = screen.getByRole("heading", { name: "Data Viz Projects" });
    expect(dataVizHeading).toHaveClass("text-2xl", "font-bold");
  });
  it("should render hackathon projects section with correct heading", () => {
    render(Page);
    const hackathonHeading = screen.getByRole("heading", { name: "Hackathon Projects" });
    expect(hackathonHeading).toHaveClass("text-2xl", "font-bold");
  });
});

describe("Search Input", () => {
  it("should render search input with correct attributes", () => {
    render(Page);
    const searchInput = screen.getByPlaceholderText("🔎");
    expect(searchInput).toHaveClass("glowing-border", "max-w-xs");
  });
});

describe("Filter Functions", () => {
  describe("matchesFilter", () => {
    it("should return true when filter text is empty", () => {
      const item = { name: "Test Item", techStack: undefined };
      const result = matchesFilter(item, ["Test Item"], "");
      expect(result).toBe(true);
    });

    it("should return true when a direct field matches the filter text", () => {
      const item = { name: "React Application", techStack: [{ name: "React" }, { name: "TypeScript" }] };
      const searchableFields = ["React Application"];
      const result = matchesFilter(item, searchableFields, "react");
      expect(result).toBe(true);
    });

    it("should return true when tech stack contains matching item", () => {
      const item = { name: "My Project", techStack: [{ name: "React" }, { name: "TypeScript" }] };
      const searchableFields = ["My Project"];
      const result = matchesFilter(item, searchableFields, "typescript");
      expect(result).toBe(true);
    });

    it("should return false when no fields match the filter text", () => {
      const item = { name: "React Application", techStack: [{ name: "React" }, { name: "TypeScript" }] };
      const searchableFields = ["React Application"];
      const result = matchesFilter(item, searchableFields, "python");
      expect(result).toBe(false);
    });

    it("should handle items without tech stack", () => {
      const item = { name: "Simple Project", techStack: undefined };
      const searchableFields = ["Simple Project"];
      const result = matchesFilter(item, searchableFields, "simple");
      expect(result).toBe(true);
    });

    it("should perform case-insensitive matching on direct fields", () => {
      const item = { name: "JavaScript Developer", techStack: undefined };
      const searchableFields = ["JavaScript Developer"];
      expect(matchesFilter(item, searchableFields, "javascript")).toBe(true);
      expect(matchesFilter(item, searchableFields, "javascript".toLowerCase())).toBe(true);
      expect(matchesFilter(item, searchableFields, "JaVaScRiPt".toLowerCase())).toBe(true);
    });

    it("should perform case-insensitive matching on tech stack", () => {
      const item = { name: "Project", techStack: [{ name: "PostgreSQL" }] };
      const searchableFields = ["Project"];
      expect(matchesFilter(item, searchableFields, "postgresql")).toBe(true);
      expect(matchesFilter(item, searchableFields, "POSTGRESQL".toLowerCase())).toBe(true);
      expect(matchesFilter(item, searchableFields, "PostGreSQL".toLowerCase())).toBe(true);
    });

    it("should match partial strings in direct fields", () => {
      const item = { name: "Full Stack Developer", techStack: undefined };
      const searchableFields = ["Full Stack Developer"];
      expect(matchesFilter(item, searchableFields, "stack")).toBe(true);
      expect(matchesFilter(item, searchableFields, "full")).toBe(true);
      expect(matchesFilter(item, searchableFields, "developer")).toBe(true);
    });

    it("should match partial strings in tech stack", () => {
      const item = { name: "Project", techStack: [{ name: "JavaScript" }, { name: "TypeScript" }] };
      const searchableFields = ["Project"];
      expect(matchesFilter(item, searchableFields, "script")).toBe(true);
      expect(matchesFilter(item, searchableFields, "type")).toBe(true);
    });

    it("should return true if any searchable field matches", () => {
      const item = { techStack: [{ name: "React" }] };
      const searchableFields = ["Frontend Developer", "Building web applications", "Remote position"];
      expect(matchesFilter(item, searchableFields, "frontend")).toBe(true);
      expect(matchesFilter(item, searchableFields, "building")).toBe(true);
      expect(matchesFilter(item, searchableFields, "remote")).toBe(true);
    });

    it("should handle empty tech stack array", () => {
      const item = { name: "Project", techStack: [] };
      const searchableFields = ["Project"];
      expect(matchesFilter(item, searchableFields, "project")).toBe(true);
      expect(matchesFilter(item, searchableFields, "nonexistent")).toBe(false);
    });
  });

  describe("getExperienceSearchFields", () => {
    it("should extract title, organization, and all description items", () => {
      const experience: Experience = {
        title: "Software Engineer",
        organization: "Tech Corp",
        description: ["Built web applications", "Worked with team", "Improved performance"],
        techStack: [{ name: "React" }]
      };
      const fields = getExperienceSearchFields(experience);
      expect(fields).toEqual([
        "Software Engineer",
        "Tech Corp",
        "Built web applications",
        "Worked with team",
        "Improved performance"
      ]);
    });

    it("should handle experience with empty description array", () => {
      const experience: Experience = {
        title: "Intern",
        organization: "Startup Inc",
        description: []
      };
      const fields = getExperienceSearchFields(experience);
      expect(fields).toEqual(["Intern", "Startup Inc"]);
    });

    it("should handle experience with single description item", () => {
      const experience: Experience = {
        title: "Developer",
        organization: "Company",
        description: ["Single task"]
      };
      const fields = getExperienceSearchFields(experience);
      expect(fields).toEqual(["Developer", "Company", "Single task"]);
    });
  });

  describe("getProjectSearchFields", () => {
    it("should extract name and description", () => {
      const project: Project = {
        name: "Portfolio Website",
        description: "Personal portfolio built with React and TypeScript",
        techStack: [{ name: "React" }, { name: "TypeScript" }]
      };
      const fields = getProjectSearchFields(project);
      expect(fields).toEqual(["Portfolio Website", "Personal portfolio built with React and TypeScript"]);
    });

    it("should handle project with empty description", () => {
      const project: Project = {
        name: "Todo App",
        description: ""
      };
      const fields = getProjectSearchFields(project);
      expect(fields).toEqual(["Todo App", ""]);
    });

    it("should not include tech stack in searchable fields", () => {
      const project: Project = {
        name: "E-commerce Site",
        description: "Online shopping platform",
        techStack: [{ name: "Vue" }, { name: "Node.js" }]
      };
      const fields = getProjectSearchFields(project);
      expect(fields).toEqual(["E-commerce Site", "Online shopping platform"]);
      expect(fields).not.toContain("Vue");
      expect(fields).not.toContain("Node.js");
    });
  });

  describe("Integration: Filter Functions Working Together", () => {
    it("should filter experiences by title", () => {
      const experiences: Experience[] = [
        {
          title: "Software Engineer",
          organization: "Tech Corp",
          description: ["Built applications"],
          techStack: [{ name: "React" }]
        },
        {
          title: "Data Analyst",
          organization: "Data Co",
          description: ["Analyzed data"],
          techStack: [{ name: "Python" }]
        }
      ];
      const filtered = experiences.filter((exp) => matchesFilter(exp, getExperienceSearchFields(exp), "software"));
      expect(filtered).toHaveLength(1);
      expect(filtered[0]?.title).toBe("Software Engineer");
    });

    it("should filter experiences by organization", () => {
      const experiences: Experience[] = [
        {
          title: "Engineer",
          organization: "Google",
          description: ["Work"]
        },
        {
          title: "Engineer",
          organization: "Microsoft",
          description: ["Work"]
        }
      ];
      const filtered = experiences.filter((exp) => matchesFilter(exp, getExperienceSearchFields(exp), "google"));
      expect(filtered).toHaveLength(1);
      expect(filtered[0]?.organization).toBe("Google");
    });

    it("should filter experiences by description content", () => {
      const experiences: Experience[] = [
        {
          title: "Developer",
          organization: "Company A",
          description: ["Built REST APIs", "Worked on frontend"]
        },
        {
          title: "Developer",
          organization: "Company B",
          description: ["Designed databases", "Wrote documentation"]
        }
      ];
      const filtered = experiences.filter((exp) => matchesFilter(exp, getExperienceSearchFields(exp), "rest apis"));
      expect(filtered).toHaveLength(1);
      expect(filtered[0]?.organization).toBe("Company A");
    });

    it("should filter experiences by tech stack", () => {
      const experiences: Experience[] = [
        {
          title: "Frontend Dev",
          organization: "Company A",
          description: ["Work"],
          techStack: [{ name: "React" }, { name: "Vue" }]
        },
        {
          title: "Backend Dev",
          organization: "Company B",
          description: ["Work"],
          techStack: [{ name: "Node.js" }, { name: "Python" }]
        }
      ];
      const filtered = experiences.filter((exp) => matchesFilter(exp, getExperienceSearchFields(exp), "python"));
      expect(filtered).toHaveLength(1);
      expect(filtered[0]?.title).toBe("Backend Dev");
    });

    it("should filter projects by name", () => {
      const projects: Project[] = [
        {
          name: "E-commerce Platform",
          description: "Shopping site",
          techStack: [{ name: "React" }]
        },
        {
          name: "Blog System",
          description: "Content management",
          techStack: [{ name: "Vue" }]
        }
      ];
      const filtered = projects.filter((proj) => matchesFilter(proj, getProjectSearchFields(proj), "e-commerce"));
      expect(filtered).toHaveLength(1);
      expect(filtered[0]?.name).toBe("E-commerce Platform");
    });

    it("should filter projects by description", () => {
      const projects: Project[] = [
        {
          name: "Project A",
          description: "Real-time chat application"
        },
        {
          name: "Project B",
          description: "Static website generator"
        }
      ];
      const filtered = projects.filter((proj) => matchesFilter(proj, getProjectSearchFields(proj), "real-time"));
      expect(filtered).toHaveLength(1);
      expect(filtered[0]?.name).toBe("Project A");
    });

    it("should filter projects by tech stack", () => {
      const projects: Project[] = [
        {
          name: "Project A",
          description: "Description A",
          techStack: [{ name: "Svelte" }, { name: "TypeScript" }]
        },
        {
          name: "Project B",
          description: "Description B",
          techStack: [{ name: "Angular" }, { name: "RxJS" }]
        }
      ];
      const filtered = projects.filter((proj) => matchesFilter(proj, getProjectSearchFields(proj), "svelte"));
      expect(filtered).toHaveLength(1);
      expect(filtered[0]?.name).toBe("Project A");
    });

    it("should return all items when filter text is empty", () => {
      const experiences: Experience[] = [
        { title: "Job 1", organization: "Org 1", description: ["Desc 1"] },
        { title: "Job 2", organization: "Org 2", description: ["Desc 2"] },
        { title: "Job 3", organization: "Org 3", description: ["Desc 3"] }
      ];
      const filtered = experiences.filter((exp) => matchesFilter(exp, getExperienceSearchFields(exp), ""));
      expect(filtered).toHaveLength(3);
    });

    it("should return empty array when no items match", () => {
      const projects: Project[] = [
        { name: "React App", description: "Built with React" },
        { name: "Vue App", description: "Built with Vue" }
      ];
      const filtered = projects.filter((proj) => matchesFilter(proj, getProjectSearchFields(proj), "angular"));
      expect(filtered).toHaveLength(0);
    });
  });
});
