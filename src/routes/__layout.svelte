<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Header />
<Navbar />

<main>
	<slot />
</main>