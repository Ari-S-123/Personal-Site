<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { profileLinks } from '$lib/data/links';
	import * as Card from '$lib/components/ui/card/index';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index';
	import { Separator } from '$lib/components/ui/separator/index';
	import { webDevProjects, dataVizProjects } from '$lib/data/projects';
	import { experiences } from '$lib/data/experiences';
	import Project from '$lib/components/Project.svelte';
	import Experience from '$lib/components/Experience.svelte';
</script>

<main>
	<div class="flex flex-row items-center justify-start gap-2 flex-wrap">
		<Card.Root>
			<Card.Header>
				<Avatar.Root
					aria-label="Picture of Website Author"
					class="h-96 w-96 rounded-full object-cover border-accent border-4 profile-border self-center"
				>
					<Avatar.Image src="Professional Profile Pic.jpg" alt="Picture of Ari" />
					<Avatar.Fallback>Picture of Ari</Avatar.Fallback>
				</Avatar.Root>
				<Card.Description class="text-4xl text-white font-bold">Ari S.</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-row justify-center gap-2">
				<b class="text-2xl text-white">Student & Fullstack SWE</b>
			</Card.Content>
			<Card.Footer class="flex flex-row items-center justify-center">
				<div
					aria-label="Links to social media profiles"
					class="flex flex-row items-center justify-between gap-0.5 my-6"
				>
					{#each profileLinks as profileLink}
						<Button
							variant="link"
							target="_blank"
							rel="noreferrer noopener"
							href={profileLink.url}
							aria-label={profileLink.ariaLabel}
							><img
								src={profileLink.iconPath}
								alt={profileLink.iconAlt}
								class="profile-links expand"
							/>
						</Button>
					{/each}
				</div>
			</Card.Footer>
		</Card.Root>
		<div class="flex flex-col items-center justify-evenly gap-2">
			<ScrollArea data-testid="Scroll Area" class="h-52 max-w-3xl rounded-md border">
				<div class="p-4">
					<h4 class="mb-4 text-xl font-bold leading-none">Experiences</h4>
					{#each experiences as experience}
						<Experience {...experience} />
						<Separator data-testid="experience-separator" class="my-2" />
					{/each}
				</div>
			</ScrollArea>
			<ScrollArea data-testid="Scroll Area" class="h-52 max-w-3xl rounded-md border">
				<div class="p-4">
					<h4 class="mb-4 text-xl font-bold leading-none">Web Dev Projects</h4>
					{#each webDevProjects as webDevProject}
						<Project {...webDevProject} />
						<Separator data-testid="web-dev-separator" class="my-2" />
					{/each}
				</div>
			</ScrollArea>
			<ScrollArea data-testid="Scroll Area" class="h-52 max-w-3xl rounded-md border">
				<div class="p-4">
					<h4 class="mb-4 text-xl font-bold leading-none">DataViz Projects</h4>
					{#each dataVizProjects as dataVizProject}
						<Project {...dataVizProject} />
						<Separator data-testid="dataviz-separator" class="my-2" />
					{/each}
				</div>
			</ScrollArea>
		</div>
	</div>
</main>
