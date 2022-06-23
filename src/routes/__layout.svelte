<script lang="ts">
	import '$lib/styles/global.scss';
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	const TRANSITION_DURATION = 375;
	const TRANSITION_OFFSET = 100;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
	<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet"> 
</svelte:head>

<Header />
<Navbar />

{#key $page.url.toString()}
	<main
		in:fly={{ delay: TRANSITION_DURATION, duration: TRANSITION_DURATION, x: -TRANSITION_OFFSET, opacity: 0 }}
		out:fly={{ duration: TRANSITION_DURATION, x: TRANSITION_OFFSET, opacity: 0 }}
	>
		<slot />
	</main>
{/key}

<style lang="scss">
	main {
		margin: 1rem;
	}
</style>