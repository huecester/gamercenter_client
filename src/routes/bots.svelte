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
				<a href={bot.inviteLink}>Invite {bot.name}</a>
			</article>
		{/each}
	{:else}
		<IconError />
	{/if}
{:else}
	<IconLoading />
{/if}