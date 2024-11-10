<script lang="ts">
	import type { Experience } from '$lib/types/Experience';
	import { Badge } from '$lib/components/ui/badge/index';

	let { title, organization, description, startDate, endDate, techStack }: Experience = $props();
</script>

<div aria-label="Experience Details" class="flex flex-col">
	<b>{title} @ {organization}</b>
	<i>{startDate} - {endDate}</i>
	<ul aria-label="Experience Description" class="list-disc list-inside flex flex-col">
		{#each description as desc}
			<li class="m-2">{desc}</li>
		{/each}
	</ul>
	{#if techStack.length > 0}
		<div
			aria-label={`Tech stack for ${title} at ${organization}`}
			class="flex flex-row flex-wrap gap-2 my-2"
		>
			{#each techStack as tech}
				<Badge class={tech.color}>{tech.name}</Badge>
			{/each}
		</div>
	{/if}
</div>
