<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import IconError from './IconError.svelte';
	import IconLoading from './IconLoading.svelte';
	import sanityClient from '$lib/sanity/client';

	export let portableText: CustomBlockComponentProps;
	const img = sanityClient.getDocument(portableText.value.asset._ref);
</script>

{#await img}
	<IconLoading center={false} />
{:then img}
	<img
		src={img?.url}
		alt={portableText.value.alt}
	/>
{:catch}
	<IconError center={false} />
{/await}