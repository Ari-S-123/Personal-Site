<script lang="ts">
  import type { Experience } from "$lib/types";
  import { Badge } from "$lib/components/ui/badge/index";

  let { title, organization, description, startDate, endDate, techStack }: Experience = $props();
</script>

<div aria-label={"Experience Details for " + title} class="flex flex-col">
  <strong>{title} @ {organization}</strong>
  <span class="text-muted-foreground">{startDate} - {endDate}</span>
  <ul
    aria-label="Experience Description"
    class="flex list-outside list-disc flex-col items-start justify-start pl-5 text-left"
  >
    {#each description as desc, i (i)}
      <li class="mt-1 mb-1">{desc}</li>
    {/each}
  </ul>
  {#if techStack.length > 0}
    <div aria-label={`Tech stack for ${title} at ${organization}`} class="mt-2 flex flex-row flex-wrap gap-2">
      {#each techStack as tech, i (tech.name || i)}
        <Badge class={`${tech.color} ${tech.textColor}`}>{tech.name}</Badge>
      {/each}
    </div>
  {/if}
</div>
