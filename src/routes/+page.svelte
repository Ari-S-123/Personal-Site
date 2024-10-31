<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { profileLinks, projectLinks } from '$lib/data/links';
</script>

<main>
	<Avatar.Root
		aria-label="Picture of Website Author"
		class="w-64 h-64 rounded-full object-cover border-accent border-4 profile-border"
	>
		<Avatar.Image src="Professional Profile Pic.jpg" alt="Picture of Ari" />
		<Avatar.Fallback>Picture of Ari</Avatar.Fallback>
	</Avatar.Root>
	<div
		aria-label="Links to social media profiles"
		class="flex flex-row justify-center gap-0.5 my-6"
	>
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
	<h1 class="text-4xl font-bold m-2">Hi, I'm <span class="text-accent">Ari</span></h1>
	<p class="text-lg font-bold m-2 max-w-4xl">
		I'm a full-stack SWE and a student pursuing a Master's Degree in CS at Northeastern University.
		My present interests lie at the intersection of Web/Mobile Development, Data Visualization, and
		A11y. However, I love learning new things, so I am open to any opportunity that increases the
		breadth and depth of my skillsets.
	</p>
	<div
		aria-label="Links to projects"
		class="flex flex-row justify-center gap-8 mx-4 my-2 font-bold"
	>
		{#each projectLinks as projectLink}
			<Button
				target="_blank"
				rel="noreferrer noopener"
				class="p-4 rounded-lg text-base font-bold expand"
				size="lg"
				href={projectLink.url}
				aria-label={projectLink.ariaLabel}
				>{projectLink.iconAlt}
			</Button>
		{/each}
	</div>
</main>
