<script lang="ts">
	import '../app.css';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as HoverCard from '$lib/components/ui/hover-card';

	let { children } = $props();
</script>

<svelte:head>
	<title>Aritra Saharay</title>
	<meta
		name="description"
		content="Aritra Saharay's personal resume and portfolio site showcasing experience, skills, and projects."
	/>
</svelte:head>

<header class="text-center my-4">
	<h2 class="inline-flex items-center justify-center text-lg">
		Built using SSG with
		<HoverCard.Root>
			<HoverCard.Trigger
				href="https://svelte.dev/docs/kit/introduction"
				target="_blank"
				rel="noreferrer noopener"
				class="expand pt-1 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black mx-2 inline-flex items-center font-svelte text-accent"
			>
				@sveltejs/kit
			</HoverCard.Trigger>
			<HoverCard.Content class="rounded-lg w-80">
				<div class="flex space-x-4">
					<Avatar.Root>
						<Avatar.Image src="Svelte-Logo.png" alt="Svelte Logo" />
						<Avatar.Fallback>Svelte Logo</Avatar.Fallback>
					</Avatar.Root>
					<div class="space-y-1">
						<h4 class="text-sm font-semibold">SvelteKit</h4>
						<p class="text-sm">Web development, streamlined.</p>
					</div>
				</div>
			</HoverCard.Content>
		</HoverCard.Root>
	</h2>
</header>

<main>
	{@render children?.()}
</main>
