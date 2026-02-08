<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import { Button } from "$lib/components/ui/button";
  import { profileLinks } from "$lib/data";
  import * as Card from "$lib/components/ui/card/index";
  import { Separator } from "$lib/components/ui/separator/index";
  import { projects } from "$lib/data";
  import { experiences } from "$lib/data";
  import Project from "$lib/components/project.svelte";
  import Experience from "$lib/components/experience.svelte";
  import * as HoverCard from "$lib/components/ui/hover-card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { matchesFilter, getExperienceSearchFields, getProjectSearchFields } from "$lib/filters";

  /**
   * User-entered search filter text.
   * @type {string}
   */
  let filterText = $state("");

  /**
   * Cache lowercase version of filter text for performance optimization.
   * Automatically recomputes when filterText changes.
   * @type {string}
   */
  const normalizedFilterText = $derived(filterText.toLowerCase());

  /**
   * Reactive filtered array of experiences.
   * Automatically updates when normalizedFilterText changes.
   * @type {typeof experiences}
   */
  const filteredExperiences = $derived(
    experiences.filter((exp) => matchesFilter(exp, getExperienceSearchFields(exp), normalizedFilterText))
  );

  /**
   * Reactive filtered array of projects.
   * Automatically updates when normalizedFilterText changes.
   * @type {typeof projects}
   */
  const filteredProjects = $derived(
    projects.filter((proj) => matchesFilter(proj, getProjectSearchFields(proj), normalizedFilterText))
  );

  /**
   * Navigation metadata for section links, allowing horizontal tab-like navigation
   * that stays in sync with the currently visible filtered sections.
   */
  type SectionNavItem = {
    /** Unique DOM identifier that doubles as the scroll target. */
    id: string;
    /** Human-readable label shown in the navigation. */
    label: string;
    /** In-page anchor reference pointing to the section container. */
    href: string;
    /** Whether the section currently has visible items and should be rendered. */
    isVisible: boolean;
  };

  /**
   * Derived list of sections used to render horizontal navigation links.
   * Updates reactively as filters change so tabs are shown only for sections that have results.
   */
  const sectionNavItems = $derived<SectionNavItem[]>([
    {
      id: "experience",
      label: "Experience",
      href: "#experience",
      isVisible: filteredExperiences.length > 0
    },
    {
      id: "projects",
      label: "Projects",
      href: "#projects",
      isVisible: filteredProjects.length > 0
    }
  ]);

  /**
   * Boolean guard indicating whether any section is available for navigation.
   * Prevents rendering of empty navigation containers when filters yield no results.
   * @type {boolean}
   */
  const hasVisibleSectionNavItems = $derived(sectionNavItems.some((item) => item.isVisible));

  /**
   * Handles search input events by updating the filter text.
   * The filtered arrays will automatically update via their $derived declarations.
   *
   * @param {Event} event - The input event from the search field
   * @returns {void}
   */
  function handleSearch(event: Event): void {
    filterText = (event.target as HTMLInputElement).value;
  }
</script>

<main class="m-0 flex w-full max-w-3xl min-w-[320px] flex-col items-center justify-center gap-4">
  <Card.Root class="glowing-border min-w-[320px]">
    <Card.Header class="justify-items-center">
      <HoverCard.Root>
        <HoverCard.Trigger
          href="Easter-Egg.webp"
          target="_blank"
          rel="noreferrer noopener"
          class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          aria-label="Easter Egg Link"
        >
          <Avatar.Root aria-label="Picture of Website Author" class="glowing-border size-64 rounded-full border">
            <Avatar.Image src="Profile-Pic.png" alt="Picture of Ari" class="object-cover" />
            <Avatar.Fallback>Picture of Ari</Avatar.Fallback>
          </Avatar.Root>
        </HoverCard.Trigger>
        <HoverCard.Content class="glowing-border flex w-20 items-center justify-center gap-1" aria-label="Easter Egg"
          >🐰🥚</HoverCard.Content
        >
      </HoverCard.Root>
      <Card.Description class="text-4xl font-bold text-white">Ari</Card.Description>
    </Card.Header>
    <Card.Content class="flex flex-row justify-center gap-2">
      <b class="text-2xl text-white">👨🏽‍💻</b>
    </Card.Content>
    <Card.Footer aria-label="Links to social media profiles" class="flex flex-row items-center justify-between">
      {#each profileLinks as profileLink, i (profileLink.url || i)}
        <Button
          variant="link"
          target="_blank"
          rel="noreferrer noopener"
          href={profileLink.url}
          aria-label={profileLink.ariaLabel}
          size="icon"
          class="expand size-12"
          ><img src={profileLink.iconPath} alt={profileLink.iconAlt} />
        </Button>
      {/each}
    </Card.Footer>
  </Card.Root>
  <Input
    type="text"
    aria-label="Search"
    placeholder="🔎"
    class="glowing-border max-w-xs"
    bind:value={filterText}
    oninput={handleSearch}
  />
  {#if hasVisibleSectionNavItems}
    <nav class="flex flex-wrap items-center justify-center gap-2 px-3 py-2" aria-label="Section navigation">
      {#each sectionNavItems as item (item.id)}
        {#if item.isVisible}
          <Button
            variant="secondary"
            size="sm"
            href={item.href}
            class="glowing-border expand w-full max-w-48 border px-3 text-center leading-tight"
            aria-label={`Jump to ${item.label}`}
          >
            {item.label}
          </Button>
        {/if}
      {/each}
    </nav>
  {/if}
  {#if filteredExperiences.length > 0}
    <Card.Root id="experience" class="glowing-border" aria-label="Card containing list of experiences">
      <Card.Header>
        <h3 class="text-2xl font-bold">Experience</h3>
      </Card.Header>
      <Card.Content class="space-y-2" aria-label="List of experiences">
        {#each filteredExperiences as experience, i (experience.title || i)}
          <Experience {...experience} />
          {#if filteredExperiences[filteredExperiences.length - 1] !== experience}
            <Separator data-testid="experience-separator" class="my-4" />
          {/if}
        {/each}
      </Card.Content>
    </Card.Root>
  {/if}
  {#if filteredProjects.length > 0}
    <Card.Root id="projects" class="glowing-border" aria-label="Card containing list of projects">
      <Card.Header>
        <h3 class="text-2xl font-bold">Projects</h3>
      </Card.Header>
      <Card.Content class="space-y-2" aria-label="List of projects">
        {#each filteredProjects as project, i (project.name || i)}
          <Project {...project} />
          {#if filteredProjects[filteredProjects.length - 1] !== project}
            <Separator data-testid="project-separator" class="my-4" />
          {/if}
        {/each}
      </Card.Content>
    </Card.Root>
  {/if}
</main>
