import { describe, it, expect } from "vitest";
import Layout from "../../routes/+layout.svelte";
import { render, screen, within } from "@testing-library/svelte";

describe("Head metadata", () => {
  it("should set correct page title and meta description", () => {
    render(Layout);
    expect(document.title).toBe("Aritra Saharay");
    const metaDescription = document.head.querySelector('meta[name="description"]');
    expect(metaDescription).not.toBeNull();
    expect(metaDescription?.getAttribute("name")).toBe("description");
    expect(metaDescription?.getAttribute("content")).toBe(
      "Aritra Saharay's personal resume and portfolio site showcasing experience, skills, and projects."
    );
  });
});

describe("Footer", () => {
  it("should render the footer with correct text and structure", () => {
    render(Layout);
    const footer = screen.getByLabelText("Site Footer");
    expect(footer).toHaveClass("text-center");
    expect(footer).toBeVisible();

    const link = within(footer).getByLabelText("SvelteKit Link");
    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", "https://svelte.dev");

    const heading = within(link).getByRole("heading", {
      name: /Technology used to build this static personal site/i
    });
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Powered by");

    const svelteLogo = within(heading).getByAltText("Svelte Logo");
    expect(svelteLogo).toBeVisible();
    expect(svelteLogo).toHaveAttribute("srcset", "Svelte-Logo.webp");
  });

  it("should render SvelteKit link with correct attributes", () => {
    render(Layout);
    const link = screen.getByLabelText("SvelteKit Link");
    expect(link).toHaveAttribute("href", "https://svelte.dev");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer noopener");
  });
});

describe("Main content", () => {
  it("should render main element", () => {
    render(Layout);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
