<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import { Button, buttonVariants } from "$lib/components/ui/button";
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
  import * as Collapsible from "$lib/components/ui/collapsible/index";
  import { ChevronsUpDown } from "@lucide/svelte";
  import CollapsibleContentTransition from "$lib/components/collapsible-content-transition.svelte";
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
  <Card.Root class="glowing-border">
    <Card.Header class="justify-items-center">
      <HoverCard.Root>
        <HoverCard.Trigger
          href="Easter-Egg.webp"
          target="_blank"
          rel="noreferrer noopener"
          class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
          aria-label="Easter Egg Link"
        >
          <Avatar.Root aria-label="Picture of Website Author" class="glowing-border size-64 rounded-full border-1">
            <Avatar.Image src="Profile-Pic.png" alt="Picture of Ari" class="object-cover" />
            <Avatar.Fallback>Picture of Ari</Avatar.Fallback>
          </Avatar.Root>
        </HoverCard.Trigger>
        <HoverCard.Content class="glowing-border flex w-20 items-center justify-center gap-1" aria-label="Easter Egg"
          >🐰🥚</HoverCard.Content
        >
      </HoverCard.Root>
      <Card.Description class="text-4xl font-bold text-white">Ari S.</Card.Description>
    </Card.Header>
    <Card.Content class="flex flex-row justify-center gap-2">
      <b class="text-2xl text-white">Student & Aspiring SWE</b>
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
  {#if filteredExperiences.length > 0}
    <Card.Root class="glowing-border" aria-label="Card containing list of experiences">
      <Collapsible.Root
        class="mx-4 max-w-3xl min-w-[320px] space-y-2"
        aria-label="Collapsible component containing list of experiences"
      >
        <div class="flex items-center justify-between space-x-4">
          <h3 class="text-2xl font-bold">Experience</h3>
          <Collapsible.Trigger
            class={buttonVariants({ variant: "ghost", size: "icon", class: "glowing-border w-9 border-1 p-0" })}
            aria-label="Click this button to expand the experience section"
          >
            <ChevronsUpDown class="size-4" />
            <span class="sr-only">Toggle Experience</span>
          </Collapsible.Trigger>
        </div>
        <CollapsibleContentTransition class="space-y-2" aria-label="List of experiences">
          {#each filteredExperiences as experience, i (experience.title || i)}
            <Experience {...experience} />
            {#if filteredExperiences[filteredExperiences.length - 1] !== experience}
              <Separator data-testid="experience-separator" class="my-4" />
            {/if}
          {/each}
        </CollapsibleContentTransition>
      </Collapsible.Root>
    </Card.Root>
  {/if}
  {#if filteredMlProjects.length > 0}
    <Card.Root class="glowing-border" aria-label="Card containing list of ml projects">
      <Collapsible.Root
        class="mx-4 max-w-3xl min-w-[320px] space-y-2"
        aria-label="Collapsible component containing list of ml projects"
      >
        <div class="flex items-center justify-between space-x-4">
          <h3 class="text-2xl font-bold">ML Projects</h3>
          <Collapsible.Trigger
            class={buttonVariants({ variant: "ghost", size: "icon", class: "glowing-border w-9 border p-0" })}
            aria-label="Click this button to expand the ml projects section"
          >
            <ChevronsUpDown class="size-4" />
            <span class="sr-only">Toggle ML Projects</span>
          </Collapsible.Trigger>
        </div>
        <CollapsibleContentTransition class="space-y-2" aria-label="List of ml projects">
          {#each filteredMlProjects as mlProject, i (mlProject.name || i)}
            <Project {...mlProject} />
            {#if filteredMlProjects[filteredMlProjects.length - 1] !== mlProject}
              <Separator data-testid="ml-separator" class="my-4" />
            {/if}
          {/each}
        </CollapsibleContentTransition>
      </Collapsible.Root>
    </Card.Root>
  {/if}
  {#if filteredDistributedSystemsProjects.length > 0}
    <Card.Root class="glowing-border" aria-label="Card containing list of distributed systems projects">
      <Collapsible.Root
        class="mx-4 max-w-3xl min-w-[320px] space-y-2"
        aria-label="Collapsible component containing list of distributed systems projects"
      >
        <div class="flex items-center justify-between space-x-4">
          <h3 class="text-2xl font-bold">Distributed Systems Projects</h3>
          <Collapsible.Trigger
            class={buttonVariants({ variant: "ghost", size: "icon", class: "glowing-border w-9 border-1 p-0" })}
            aria-label="Click this button to expand the distributed systems projects section"
          >
            <ChevronsUpDown class="size-4" />
            <span class="sr-only">Toggle Distributed Systems Projects</span>
          </Collapsible.Trigger>
        </div>
        <CollapsibleContentTransition class="space-y-2" aria-label="List of distributed systems projects">
          {#each filteredDistributedSystemsProjects as distributedSystemsProject, i (distributedSystemsProject.name || i)}
            <Project {...distributedSystemsProject} />
            {#if filteredDistributedSystemsProjects[filteredDistributedSystemsProjects.length - 1] !== distributedSystemsProject}
              <Separator data-testid="distributed-systems-separator" class="my-4" />
            {/if}
          {/each}
        </CollapsibleContentTransition>
      </Collapsible.Root>
    </Card.Root>
  {/if}
  {#if filteredWebDevProjects.length > 0}
    <Card.Root class="glowing-border" aria-label="Card containing list of web dev projects">
      <Collapsible.Root
        class="mx-4 max-w-3xl min-w-[320px] space-y-2"
        aria-label="Collapsible component containing list of web dev projects"
      >
        <div class="flex items-center justify-between space-x-4">
          <h3 class="text-2xl font-bold">Web Dev Projects</h3>
          <Collapsible.Trigger
            class={buttonVariants({ variant: "ghost", size: "icon", class: "glowing-border w-9 border-1 p-0" })}
            aria-label="Click this button to expand the web dev projects section"
          >
            <ChevronsUpDown class="size-4" />
            <span class="sr-only">Toggle Web Dev Projects</span>
          </Collapsible.Trigger>
        </div>
        <CollapsibleContentTransition class="space-y-2" aria-label="List of web dev projects">
          {#each filteredWebDevProjects as webDevProject, i (webDevProject.name || i)}
            <Project {...webDevProject} />
            {#if filteredWebDevProjects[filteredWebDevProjects.length - 1] !== webDevProject}
              <Separator data-testid="web-dev-separator" class="my-4" />
            {/if}
          {/each}
        </CollapsibleContentTransition>
      </Collapsible.Root>
    </Card.Root>
  {/if}
  {#if filteredDataVizProjects.length > 0}
    <Card.Root class="glowing-border" aria-label="Card containing list of dataviz projects">
      <Collapsible.Root
        class="mx-4 max-w-3xl min-w-[320px] space-y-2"
        aria-label="Collapsible component containing list of dataviz projects"
      >
        <div class="flex items-center justify-between space-x-4">
          <h3 class="text-2xl font-bold">Data Viz Projects</h3>
          <Collapsible.Trigger
            class={buttonVariants({ variant: "ghost", size: "icon", class: "glowing-border w-9 border-1 p-0" })}
            aria-label="Click this button to expand the dataviz projects section"
          >
            <ChevronsUpDown class="size-4" />
            <span class="sr-only">Toggle Data Viz Projects</span>
          </Collapsible.Trigger>
        </div>
        <CollapsibleContentTransition class="space-y-2" aria-label="List of dataviz projects">
          {#each filteredDataVizProjects as dataVizProject, i (dataVizProject.name || i)}
            <Project {...dataVizProject} />
            {#if filteredDataVizProjects[filteredDataVizProjects.length - 1] !== dataVizProject}
              <Separator data-testid="dataviz-separator" class="my-4" />
            {/if}
          {/each}
        </CollapsibleContentTransition>
      </Collapsible.Root>
    </Card.Root>
  {/if}
  {#if filteredHackathonProjects.length > 0}
    <Card.Root class="glowing-border" aria-label="Card containing list of hackathon projects">
      <Collapsible.Root
        class="mx-4 max-w-3xl min-w-[320px] space-y-2"
        aria-label="Collapsible component containing list of hackathon projects"
      >
        <div class="flex items-center justify-between space-x-4">
          <h3 class="text-2xl font-bold">Hackathon Projects</h3>
          <Collapsible.Trigger
            class={buttonVariants({ variant: "ghost", size: "icon", class: "glowing-border w-9 border-1 p-0" })}
            aria-label="Click this button to expand the hackathon projects section"
          >
            <ChevronsUpDown class="size-4" />
            <span class="sr-only">Toggle Hackathon Projects</span>
          </Collapsible.Trigger>
        </div>
        <CollapsibleContentTransition class="space-y-2" aria-label="List of hackathon projects">
          {#each filteredHackathonProjects as hackathonProject, i (hackathonProject.name || i)}
            <Project {...hackathonProject} />
            {#if filteredHackathonProjects[filteredHackathonProjects.length - 1] !== hackathonProject}
              <Separator data-testid="hackathon-separator" class="my-4" />
            {/if}
          {/each}
        </CollapsibleContentTransition>
      </Collapsible.Root>
    </Card.Root>
  {/if}
</main>
