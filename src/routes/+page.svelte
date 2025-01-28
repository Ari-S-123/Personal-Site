<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import { profileLinks } from "$lib/data/links";
  import * as Card from "$lib/components/ui/card/index";
  import { Separator } from "$lib/components/ui/separator/index";
  import { webDevProjects, dataVizProjects } from "$lib/data/projects";
  import { experiences } from "$lib/data/experiences";
  import Project from "$lib/components/Project.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import * as Collapsible from "$lib/components/ui/collapsible/index";
  import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
  import CollapsibleContentTransition from "$lib/components/CollapsibleContentTransition.svelte";
</script>

<main class="max-w-3xl min-w-[320px] w-full flex flex-col m-0 items-center justify-center gap-4">
  <Card.Root>
    <Card.Header>
      <Avatar.Root
        aria-label="Picture of Website Author"
        class="h-72 w-72 rounded-full object-cover border-accent border-4 profile-border self-center"
      >
        <Avatar.Image src="Professional Profile Pic.jpg" alt="Picture of Ari" />
        <Avatar.Fallback>Picture of Ari</Avatar.Fallback>
      </Avatar.Root>
      <Card.Description class="text-4xl text-white font-bold">Ari S.</Card.Description>
    </Card.Header>
    <Card.Content class="flex flex-row justify-center gap-2">
      <b class="text-2xl text-white">Student & Aspiring SWE</b>
    </Card.Content>
    <Card.Footer class="flex flex-row items-center justify-center">
      <div aria-label="Links to social media profiles" class="flex flex-row items-center justify-between gap-0.5 my-6">
        {#each profileLinks as profileLink}
          <Button
            variant="link"
            target="_blank"
            rel="noreferrer noopener"
            href={profileLink.url}
            aria-label={profileLink.ariaLabel}
            ><img src={profileLink.iconPath} alt={profileLink.iconAlt} class="profile-links expand" />
          </Button>
        {/each}
      </div>
    </Card.Footer>
  </Card.Root>
  <Card.Root aria-label="Card containing list of experiences">
    <Collapsible.Root
      class="space-y-2 m-4 min-w-[320px] max-w-3xl"
      aria-label="Collapsible component containing list of experiences"
    >
      <div class="flex items-center justify-between space-x-4">
        <h3 class="text-2xl font-bold">Experience</h3>
        <Collapsible.Trigger
          class={buttonVariants({ variant: "ghost", size: "icon", class: "w-9 p-0" })}
          aria-label="Click this button to expand the experience section"
        >
          <ChevronsUpDown class="size-4" />
          <span class="sr-only">Toggle Experience</span>
        </Collapsible.Trigger>
      </div>
      <CollapsibleContentTransition class="space-y-2" aria-label="List of experiences">
        {#each experiences as experience}
          <Experience {...experience} />
          {#if experiences[experiences.length - 1] !== experience}
            <Separator data-testid="experience-separator" class="my-4" />
          {/if}
        {/each}
      </CollapsibleContentTransition>
    </Collapsible.Root>
  </Card.Root>
  <Card.Root aria-label="Card containing list of web dev projects">
    <Collapsible.Root
      class="space-y-2 m-4 min-w-[320px] max-w-3xl"
      aria-label="Collapsible component containing list of web dev projects"
    >
      <div class="flex items-center justify-between space-x-4">
        <h3 class="text-2xl font-bold">Web Dev Projects</h3>
        <Collapsible.Trigger
          class={buttonVariants({ variant: "ghost", size: "icon", class: "w-9 p-0" })}
          aria-label="Click this button to expand the web dev projects section"
        >
          <ChevronsUpDown class="size-4" />
          <span class="sr-only">Toggle Web Dev Projects</span>
        </Collapsible.Trigger>
      </div>
      <CollapsibleContentTransition class="space-y-2" aria-label="List of web dev projects">
        {#each webDevProjects as webDevProject}
          <Project {...webDevProject} />
          {#if webDevProjects[webDevProjects.length - 1] !== webDevProject}
            <Separator data-testid="web-dev-separator" class="my-4" />
          {/if}
        {/each}
      </CollapsibleContentTransition>
    </Collapsible.Root>
  </Card.Root>
  <Card.Root aria-label="Card containing list of dataviz projects">
    <Collapsible.Root
      class="space-y-2 m-4 min-w-[320px] max-w-3xl"
      aria-label="Collapsible component containing list of dataviz projects"
    >
      <div class="flex items-center justify-between space-x-4">
        <h3 class="text-2xl font-bold">DataViz Projects</h3>
        <Collapsible.Trigger
          class={buttonVariants({ variant: "ghost", size: "icon", class: "w-9 p-0" })}
          aria-label="Click this button to expand the dataviz projects section"
        >
          <ChevronsUpDown class="size-4" />
          <span class="sr-only">Toggle DataViz Projects</span>
        </Collapsible.Trigger>
      </div>
      <CollapsibleContentTransition class="space-y-2" aria-label="List of dataviz projects">
        {#each dataVizProjects as dataVizProject}
          <Project {...dataVizProject} />
          {#if dataVizProjects[dataVizProjects.length - 1] !== dataVizProject}
            <Separator data-testid="dataviz-separator" class="my-4" />
          {/if}
        {/each}
      </CollapsibleContentTransition>
    </Collapsible.Root>
  </Card.Root>
</main>
