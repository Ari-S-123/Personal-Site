<script lang="ts">
  import type { Experience } from "$lib/types/Experience";
  import { Badge } from "$lib/components/ui/badge/index";

  let { title, organization, description, startDate, endDate, techStack }: Experience = $props();
</script>

<div aria-label={"Experience Details for " + title} class="flex flex-col">
  <b>{title} @ {organization}</b>
  <i>{startDate} - {endDate}</i>
  <ul aria-label="Experience Description" class="list-disc list-outside flex flex-col items-start justify-start pl-5">
    {#each description as desc, i (i)}
      <li class="m-2 text-left w-full">{desc}</li>
    {/each}
  </ul>
  {#if techStack.length > 0}
    <div aria-label={`Tech stack for ${title} at ${organization}`} class="flex flex-row flex-wrap gap-2 m-2">
      {#each techStack as tech, i (tech.name || i)}
        <Badge class={tech.color}>{tech.name}</Badge>
      {/each}
    </div>
  {/if}
</div>
