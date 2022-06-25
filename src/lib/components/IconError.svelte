<script lang="ts">
	import { fade } from 'svelte/transition';

	export let center = true;
</script>

<div class:center={center} in:fade="{{ delay: 100, duration: 100 }}">
	<i class="fas fa-exclamation-triangle fa-3x" />
</div>

<style lang="scss">
	.center {
		text-align: center;
	}
</style>