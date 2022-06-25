<script lang="ts">
	import { fade } from 'svelte/transition';
	
	export let center = true;
</script>

<div class:center={center} out:fade="{{ duration: 100 }}">
	<i class="fas fa-spinner fa-3x fa-spin" />
</div>

<style lang="scss">
	.center {
		text-align: center;
	}
</style>