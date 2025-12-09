<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import { Button } from "$lib/components/ui/button";
  import { profileLinks } from "$lib/data";
  import * as Card from "$lib/components/ui/card/index";
  import { Separator } from "$lib/components/ui/separator/index";
  import {
    webDevProjects,
    dataVizProjects,
    hackathonProjects,
    distributedSystemsProjects,
    mlProjects
  } from "$lib/data";
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
   * Reactive filtered array of web development projects.
   * Automatically updates when normalizedFilterText changes.
   * @type {typeof webDevProjects}
   */
  const filteredWebDevProjects = $derived(
    webDevProjects.filter((proj) => matchesFilter(proj, getProjectSearchFields(proj), normalizedFilterText))
  );

  /**
   * Reactive filtered array of data visualization projects.
   * Automatically updates when normalizedFilterText changes.
   * @type {typeof dataVizProjects}
   */
  const filteredDataVizProjects = $derived(
    dataVizProjects.filter((proj) => matchesFilter(proj, getProjectSearchFields(proj), normalizedFilterText))
  );

  /**
   * Reactive filtered array of hackathon projects.
   * Automatically updates when normalizedFilterText changes.
   * @type {typeof hackathonProjects}
   */
  const filteredHackathonProjects = $derived(
    hackathonProjects.filter((proj) => matchesFilter(proj, getProjectSearchFields(proj), normalizedFilterText))
  );

  /**
   * Reactive filtered array of distributed systems projects.
   * Automatically updates when normalizedFilterText changes.
   * @type {typeof distributedSystemsProjects}
   */
  const filteredDistributedSystemsProjects = $derived(
    distributedSystemsProjects.filter((proj) => matchesFilter(proj, getProjectSearchFields(proj), normalizedFilterText))
  );

  /**
   * Reactive filtered array of ml projects.
   * Automatically updates when normalizedFilterText changes.
   * @type {typeof mlProjects}
   */
  const filteredMlProjects = $derived(
    mlProjects.filter((proj) => matchesFilter(proj, getProjectSearchFields(proj), normalizedFilterText))
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
      id: "ml-projects",
      label: "ML Projects",
      href: "#ml-projects",
      isVisible: filteredMlProjects.length > 0
    },
    {
      id: "distributed-systems-projects",
      label: "Distributed Systems",
      href: "#distributed-systems-projects",
      isVisible: filteredDistributedSystemsProjects.length > 0
    },
    {
      id: "web-dev-projects",
      label: "Web Dev Projects",
      href: "#web-dev-projects",
      isVisible: filteredWebDevProjects.length > 0
    },
    {
      id: "data-viz-projects",
      label: "Data Viz Projects",
      href: "#data-viz-projects",
      isVisible: filteredDataVizProjects.length > 0
    },
    {
      id: "hackathon-projects",
      label: "Hackathon Projects",
      href: "#hackathon-projects",
      isVisible: filteredHackathonProjects.length > 0
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
          class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
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
          class="size-12"
          ><img src={profileLink.iconPath} alt={profileLink.iconAlt} class="expand" />
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
    <nav
      class="grid w-full max-w-2xl grid-cols-2 items-center justify-center justify-items-center gap-2 px-3 py-2"
      aria-label="Section navigation"
    >
      {#each sectionNavItems as item (item.id)}
        {#if item.isVisible}
          <Button
            variant="secondary"
            size="sm"
            href={item.href}
            class="glowing-border w-full max-w-48 border px-3 text-center leading-tight"
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
  {#if filteredMlProjects.length > 0}
    <Card.Root id="ml-projects" class="glowing-border" aria-label="Card containing list of ml projects">
      <Card.Header>
        <h3 class="text-2xl font-bold">ML Projects</h3>
      </Card.Header>
      <Card.Content class="space-y-2" aria-label="List of ml projects">
        {#each filteredMlProjects as mlProject, i (mlProject.name || i)}
          <Project {...mlProject} />
          {#if filteredMlProjects[filteredMlProjects.length - 1] !== mlProject}
            <Separator data-testid="ml-separator" class="my-4" />
          {/if}
        {/each}
      </Card.Content>
    </Card.Root>
  {/if}
  {#if filteredDistributedSystemsProjects.length > 0}
    <Card.Root
      id="distributed-systems-projects"
      class="glowing-border"
      aria-label="Card containing list of distributed systems projects"
    >
      <Card.Header>
        <h3 class="text-2xl font-bold">Distributed Systems Projects</h3>
      </Card.Header>
      <Card.Content class="space-y-2" aria-label="List of distributed systems projects">
        {#each filteredDistributedSystemsProjects as distributedSystemsProject, i (distributedSystemsProject.name || i)}
          <Project {...distributedSystemsProject} />
          {#if filteredDistributedSystemsProjects[filteredDistributedSystemsProjects.length - 1] !== distributedSystemsProject}
            <Separator data-testid="distributed-systems-separator" class="my-4" />
          {/if}
        {/each}
      </Card.Content>
    </Card.Root>
  {/if}
  {#if filteredWebDevProjects.length > 0}
    <Card.Root id="web-dev-projects" class="glowing-border" aria-label="Card containing list of web dev projects">
      <Card.Header>
        <h3 class="text-2xl font-bold">Web Dev Projects</h3>
      </Card.Header>
      <Card.Content class="space-y-2" aria-label="List of web dev projects">
        {#each filteredWebDevProjects as webDevProject, i (webDevProject.name || i)}
          <Project {...webDevProject} />
          {#if filteredWebDevProjects[filteredWebDevProjects.length - 1] !== webDevProject}
            <Separator data-testid="web-dev-separator" class="my-4" />
          {/if}
        {/each}
      </Card.Content>
    </Card.Root>
  {/if}
  {#if filteredDataVizProjects.length > 0}
    <Card.Root id="data-viz-projects" class="glowing-border" aria-label="Card containing list of dataviz projects">
      <Card.Header>
        <h3 class="text-2xl font-bold">Data Viz Projects</h3>
      </Card.Header>
      <Card.Content class="space-y-2" aria-label="List of dataviz projects">
        {#each filteredDataVizProjects as dataVizProject, i (dataVizProject.name || i)}
          <Project {...dataVizProject} />
          {#if filteredDataVizProjects[filteredDataVizProjects.length - 1] !== dataVizProject}
            <Separator data-testid="dataviz-separator" class="my-4" />
          {/if}
        {/each}
      </Card.Content>
    </Card.Root>
  {/if}
  {#if filteredHackathonProjects.length > 0}
    <Card.Root id="hackathon-projects" class="glowing-border" aria-label="Card containing list of hackathon projects">
      <Card.Header>
        <h3 class="text-2xl font-bold">Hackathon Projects</h3>
      </Card.Header>
      <Card.Content class="space-y-2" aria-label="List of hackathon projects">
        {#each filteredHackathonProjects as hackathonProject, i (hackathonProject.name || i)}
          <Project {...hackathonProject} />
          {#if filteredHackathonProjects[filteredHackathonProjects.length - 1] !== hackathonProject}
            <Separator data-testid="hackathon-separator" class="my-4" />
          {/if}
        {/each}
      </Card.Content>
    </Card.Root>
  {/if}
</main>
