<script lang="ts">
	import IconError from './IconError.svelte';
	import IconLoading from './IconLoading.svelte';
	import sanityClient from '$lib/sanity/client';
	import type { CustomBlockComponentProps } from '@portabletext/svelte';

	export let portableText: CustomBlockComponentProps;
	const img = sanityClient.getDocument(portableText.value.asset._ref);
</script>

{#await img}
	<IconLoading center={false} />
{:then img}
	{@debug img}
	<img
		src={img?.url}
		alt={portableText.value.alt}
	/>
{:catch}
	<IconError center={false} />
{/await}