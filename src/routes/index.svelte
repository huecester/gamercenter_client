<script lang="ts">
	import BasePortableText from '$lib/components/BasePortableText.svelte';
	import IconError from '$lib/components/IconError.svelte';
	import IconLoading from '$lib/components/IconLoading.svelte';
	import type { Post } from '$lib/sanity/schema';

	export let posts: Post[];
	export let error: Error;

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
				<BasePortableText value={post.body} />
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