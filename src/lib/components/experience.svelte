<script lang="ts">
  import type { Experience } from "$lib/types";
  import { Badge } from "$lib/components/ui/badge/index";

  let { title, organization, description, startDate, endDate, techStack }: Experience = $props();
</script>

<div aria-label={"Experience Details for " + title} class="flex flex-col">
  <b>{title} @ {organization}</b>
  <span>{startDate} - {endDate}</span>
  <ul aria-label="Experience Description" class="flex list-outside list-disc flex-col items-start justify-start pl-5">
    {#if description.length === 1}
      <p class="m-2 w-full text-left">{description[0]}</p>
    {:else}
      {#each description as desc, i (i)}
        <li class="m-2 w-full text-left">{desc}</li>
      {/each}
    {/if}
  </ul>
  {#if techStack.length > 0}
    <div aria-label={`Tech stack for ${title} at ${organization}`} class="m-2 flex flex-row flex-wrap gap-2">
      {#each techStack as tech, i (tech.name || i)}
        <Badge class={tech.color}>{tech.name}</Badge>
      {/each}
    </div>
  {/if}
</div>
