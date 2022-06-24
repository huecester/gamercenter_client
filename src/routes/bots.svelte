<script lang="ts">
	import IconError from '$lib/components/IconError.svelte';
	import IconLoading from '$lib/components/IconLoading.svelte';
	import type * as Schema from '$lib/sanity/schema';
	import { PortableText } from '@portabletext/svelte';
	
	export let bots: Schema.Bot[];
	export let error: Error;
</script>

<h1>Bots</h1>
{#if error}
	<IconError />
{:else if bots}
	{#if bots.length}
		{#each bots as bot}
			<article>
				<h2>{bot.name}</h2>
				<PortableText
					value={bot.description}
				/>
				<a href={bot.invite_link}>Invite {bot.name}</a>
			</article>
		{/each}
	{:else}
		<p>No bots found.</p>
	{/if}
{:else}
	<IconLoading />
{/if}

<style lang="scss">
	h2 {
		margin: 0;
	}
	article {
		background-color: variables.$nord1;
		padding: 1rem;
		border: 2px solid variables.$nord2;

		& > a {
			color: inherit;
			text-decoration: inherit;
			display: inline-block;
			background-color: variables.$nord10;
			padding: .75rem;
		}
	}
</style>