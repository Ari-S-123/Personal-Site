<script lang="ts">
  import "../app.css";
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
    <a
      aria-label="SvelteKit Docs Link"
      href="https://svelte.dev/docs/kit/introduction"
      target="_blank"
      rel="noreferrer noopener"
      class="expand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black mx-2 inline-flex items-center"
    >
      <img src="Svelte-Logo.png" alt="Svelte Logo" class="size-6" />
    </a>
  </h2>
</footer>
