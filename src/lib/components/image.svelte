<script lang="ts">
  import { optimize } from "$lib/image";

  export type ImageProps = {
    url: string;
    description: string;
    className: string;
  };

  let { url, description, className }: ImageProps = $props();
</script>

<img class={className ?? "absolute left-0 top-0 w-full h-full"} srcset={optimize(url)} alt={description} />
