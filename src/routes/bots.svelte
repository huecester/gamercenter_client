<script lang="ts">
	import BasePortableText from '$lib/components/BasePortableText.svelte';
	import IconError from '$lib/components/IconError.svelte';
	import IconLoading from '$lib/components/IconLoading.svelte';
	import type { Bot } from '$lib/sanity/schema';
	
	export let bots: Bot[];
	export let error: Error;
</script>

<h1>Bots</h1>
{#if error}
	<IconError />
{:else if bots}
	{#if bots.length}
		{#each bots as bot}
			<article data-cy="bot">
				<header>
					<img src={bot.icon?.url} alt={bot.icon?.alt} />
					<h2>{bot.name}</h2>
				</header>
				<BasePortableText value={bot.description} />
				<a href={bot.inviteLink}>Invite {bot.name}</a>
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
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
	
		& > img {
			width: 32px;
		}
	}
</style>