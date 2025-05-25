import { describe, it, expect } from "vitest";
import Page from "../../routes/+page.svelte";
import { render, screen } from "@testing-library/svelte";
import { profileLinks } from "$lib/data";

describe("Profile Card", () => {
  it("should render the profile avatar with correct attributes", () => {
    render(Page);
    const avatarContainer = screen.getByLabelText("Picture of Website Author");
    expect(avatarContainer).toHaveClass(
      "relative",
      "flex",
      "shrink-0",
      "overflow-hidden",
      "size-72",
      "rounded-full",
      "border-primary",
      "border-4",
      "profile-border"
    );
    const avatar = screen.getByAltText("Picture of Ari");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", "Profile-Pic.webp");
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
    expect(socialContainer).toHaveClass("flex", "flex-row", "items-center", "justify-between", "gap-0.5", "my-6");
    profileLinks.forEach((link) => {
      const button = screen.getByRole("link", { name: link.ariaLabel });
      expect(button).toHaveAttribute("href", link.url);
      expect(button).toHaveAttribute("target", "_blank");
      expect(button).toHaveAttribute("rel", "noreferrer noopener");
      const img = screen.getByAltText(link.iconAlt);
      expect(img).toHaveAttribute("src", link.iconPath);
      expect(img).toHaveClass("profile-links", "expand");
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
  it("should render data viz projects section with correct heading", () => {
    render(Page);
    const dataVizHeading = screen.getByRole("heading", { name: "Data Viz Projects" });
    expect(dataVizHeading).toHaveClass("text-2xl", "font-bold");
  });
});
