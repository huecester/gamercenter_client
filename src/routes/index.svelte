<script lang="ts">
	import IconError from '$lib/components/IconError.svelte';
	import IconLoading from '$lib/components/IconLoading.svelte';
	import PortableTextImage from '$lib/components/PortableTextImage.svelte';
	import type { Post } from '$lib/sanity/schema';
	import { PortableText } from '@portabletext/svelte';

	export let posts: Post[];
	export let error: Error;

	const components = {
		types: {
			image: PortableTextImage,
		},
	};

	function formatDate(date: Date) {
		const [_, month, day, year] = date.toDateString().split(' ');
		return `${month} ${day}, ${year}`;
	};
</script>

{#if error}
	<IconError />
{:else if posts}
	{#if posts.length}
		{#each posts as post}	
			<article>
				<header>
					<h2>{post.title}</h2>
					<time datetime={post._createdAt}>{formatDate(new Date(post._createdAt))}</time>
				</header>
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

<style lang="scss">
	header {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;

		& > time {
			font-size: 0.75rem;
			color: variables.$nord4;
		}
	}
</style>