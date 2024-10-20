<script>
    import '../app.css';
</script>

<svelte:head>
    <title>Aritra Saharay</title>
    <meta name="description"
          content="Aritra Saharay's personal resume and portfolio site showcasing experience, skills, and projects."/>
</svelte:head>

<header class="header">
    <h2 class="built-using">Built using SSG with
        <a href="https://kit.svelte.dev/"
           class="sveltekit-link shadow-lg hover:scale-105 transition-transform duration-300">
            <img src="Svelte-Logo.png" alt="Svelte Logo" class="svelte-logo"/>
            <span class="text-accent">
            SvelteKit
        </span>
        </a>
    </h2>
</header>


<main>
    <slot/>
</main>

<style>
    .header {
        text-align: center;
        padding: 1em 0;
    }

    .sveltekit-link {
        display: inline-flex;
        align-items: center;
        color: inherit;
        text-decoration: none;
    }

    .built-using {
        display: inline-flex;
        align-items: center;
        font-size: 1.25rem;
    }

    .svelte-logo {
        width: 24px;
        height: 24px;
        margin: 0 0.5em;
    }

    main {
        padding: 2em;
    }
</style>