<script lang="ts">
  import "../app.css";
  import * as Avatar from "$lib/components/ui/avatar/index";
  import * as HoverCard from "$lib/components/ui/hover-card";
  import { fly } from "svelte/transition";

  let { children } = $props();
</script>

<svelte:head>
  <title>Aritra Saharay</title>
  <meta
    name="description"
    content="Aritra Saharay's personal resume and portfolio site showcasing experience, skills, and projects."
  />
</svelte:head>

<main>
  {@render children?.()}
</main>

<footer aria-label="footer" class="text-center mb-2">
  <h2 aria-label="Technology used to build this static site" class="inline-flex items-center justify-center">
    Powered by
    <HoverCard.Root>
      <HoverCard.Trigger
        aria-label="SvelteKit Docs Link"
        href="https://svelte.dev/docs/kit/introduction"
        target="_blank"
        rel="noreferrer noopener"
        class="expand underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black mx-2 inline-flex items-center font-svelte text-accent"
      >
        @sveltejs/kit
      </HoverCard.Trigger>
      <HoverCard.Content aria-label="Hovercard" class="rounded-lg w-80" forceMount>
        {#snippet child({ props, open })}
          {#if open}
            <div {...props} transition:fly={{ duration: 300 }}>
              <div class="flex space-x-4">
                <Avatar.Root aria-label="Logo of web framework used">
                  <Avatar.Image src="Svelte-Logo.png" alt="Svelte Logo" />
                  <Avatar.Fallback>Svelte Logo</Avatar.Fallback>
                </Avatar.Root>
                <div class="space-y-1">
                  <h4 aria-label="Name of web framework used" class="text-sm font-semibold">SvelteKit</h4>
                  <p aria-label="Motto of web framework used" class="text-sm">Web development, streamlined.</p>
                </div>
              </div>
            </div>
          {/if}
        {/snippet}
      </HoverCard.Content>
    </HoverCard.Root>
  </h2>
</footer>
