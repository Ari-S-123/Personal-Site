<script lang="ts">
  import "../app.css";
  import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import * as HoverCard from "$lib/components/ui/hover-card/index.js";

  let { children } = $props();
</script>

<svelte:head>
  <title>Aritra Saharay</title>
  <meta charset="UTF-8" />
  <meta
    name="description"
    content="Aritra Saharay's personal resume and portfolio site showcasing experience, skills, and projects."
  />
  <meta
    name="keywords"
    content="HTML, CSS, Tailwind, JavaScript, TypeScript, NodeJS, Svelte, SvelteKit, Web Development, Software Engineer, Software Developer, Software Engineering, Personal Website, Resume, Portfolio, Projects, Experience, Skills, Aritra Saharay"
  />
  <meta name="author" content="Aritra Saharay" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<main>
  {@render children?.()}
</main>

<footer aria-label="Site Footer" class="text-center mb-2">
  <HoverCard.Root>
    <HoverCard.Trigger
      href="https://svelte.dev"
      target="_blank"
      rel="noreferrer noopener"
      class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
      aria-label="SvelteKit Link"
    >
      <h2
        aria-label="Technology used to build this static personal site"
        class="inline-flex items-center justify-center gap-1"
      >
        Powered by
        <img src="Svelte-Logo.png" alt="Svelte Logo" class="size-6" />
      </h2>
    </HoverCard.Trigger>
    <HoverCard.Content class="w-80">
      <div class="flex justify-evenly space-x-4 items-center">
        <Avatar.Root class="m-0">
          <Avatar.Image src="Svelte-Logo.png" alt="Svelte Logo" />
          <Avatar.Fallback>SK</Avatar.Fallback>
        </Avatar.Root>
        <div class="space-y-1" aria-label="Technology Information">
          <h4 class="text-sm font-semibold" aria-label="Technology Name">SvelteKit</h4>
          <p class="text-sm" aria-label="Technology Description">Cybernetically enhanced web apps.</p>
          <div class="flex items-center pt-2">
            <CalendarDaysIcon class="mr-2 size-4 opacity-70" />
            <span class="text-muted-foreground text-xs" aria-label="Date Author started using technology">
              Joined October 2024
            </span>
          </div>
        </div>
      </div>
    </HoverCard.Content>
  </HoverCard.Root>
</footer>
