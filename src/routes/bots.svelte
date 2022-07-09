<script lang="ts">
	import IconError from '$lib/components/IconError.svelte';
	import IconLoading from '$lib/components/IconLoading.svelte';
	import type { Bot } from '$lib/sanity/schema';
	import { PortableText } from '@portabletext/svelte';
	
	export let bots: Bot[];
	export let error: Error;
</script>

<h1>Bots</h1>
{#if error}
	<IconError />
{:else if bots}
	{#if bots.length}
		{#each bots as bot}
			{@debug bot}
			<article>
				<header>
					<h2>{bot.name}</h2>
					<img src={bot.icon?.url} alt={bot.icon?.alt} />
				</header>
				<PortableText
					value={bot.description}
				/>
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
		& > h2 {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	
		& > img {
			width: 32px;
		}
	}
</style>