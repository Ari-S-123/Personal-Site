<script lang="ts">
	import { Collapsible, type WithoutChildrenOrChild } from 'bits-ui';
	import { slide } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	let {
		ref = $bindable(null),
		duration = 300,
		children,
		...restProps
	}: WithoutChildrenOrChild<Collapsible.ContentProps> & {
		duration?: number;
		children?: Snippet;
	} = $props();
</script>

<Collapsible.Content forceMount bind:ref {...restProps}>
	{#snippet child({ props, open })}
		{#if open}
			<div {...props} transition:slide={{ duration }}>
				{@render children?.()}
			</div>
		{/if}
	{/snippet}
</Collapsible.Content>
