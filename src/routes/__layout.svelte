<script lang="ts" context="module">
	/** @type {import('./__types/__layout').Load} */
	export async function load(context: { url: string }) {
		return {
			props: { url: context.url },
		};
	}
</script>

<script lang="ts">
	import '$lib/styles/global.scss';
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { fly } from 'svelte/transition';

	export let url: string;

	const TRANSITION_OFFSET = 30;
	const TRANSITION_DURATION = 400;
	const TRANSITION_DELAY = 55;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
	<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet"> 
	<script src="https://kit.fontawesome.com/c401fc9ffa.js" crossorigin="anonymous"></script>
</svelte:head>

<Header />
<Navbar />

{#key url}
	<main
		in:fly={{ delay: TRANSITION_DURATION + TRANSITION_DELAY, duration: TRANSITION_DURATION, y: TRANSITION_OFFSET, opacity: 0 }}
		out:fly={{ duration: TRANSITION_DURATION, y: TRANSITION_OFFSET, opacity: 0 }}
	>
		<slot />
	</main>
{/key}

<style lang="scss">
	main {
		margin: 1rem;
	}
</style>