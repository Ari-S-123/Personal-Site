<script lang="ts">
    import '../app.css';

    /** @type {{children?: import('svelte').Snippet}} */
    let {children} = $props();
</script>

<svelte:head>
    <title>Aritra Saharay</title>
    <meta name="description"
          content="Aritra Saharay's personal resume and portfolio site showcasing experience, skills, and projects."/>
</svelte:head>

<header class="text-center my-4">
    <h2 class="inline-flex items-center text-lg ">Built using SSG with
        <a href="https://svelte-omnisite.vercel.app"
           class="mx-2 gap-2 inline-flex items-center font-svelte shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="Svelte-Logo.png" alt="Svelte Logo" class="w-auto h-6"/>
            <span class="text-lg text-accent">
            SvelteKit
        </span>
        </a>
    </h2>
</header>

<main>
    {@render children?.()}
</main>
