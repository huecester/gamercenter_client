<script lang="ts">
	import IconError from '$lib/components/IconError.svelte';
	import IconLoading from '$lib/components/IconLoading.svelte';
	import SanityImage from '$lib/components/SanityImage.svelte';
	import type { Post } from '$lib/sanity/schema';
	import { PortableText } from '@portabletext/svelte';

	export let posts: Post[];
	export let error: Error;

	const components = {
		types: {
			image: SanityImage,
		},
	};
</script>

{#if error}
	<IconError />
{:else if posts}
	{#if posts.length}
		{#each posts as post}	
			<article>
				<h2>{post.title}</h2>
				<!-- TODO add date -->
				<PortableText 
					value={post.body}
					{components}
				/>
			</article>
		{/each}
	{:else}
		<IconError />
	{/if}
{:else}
	<IconLoading />
{/if}