<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div in:fade="{{ delay: 100, duration: 100 }}">
	<i class="fas fa-exclamation-triangle fa-3x" />
</div>

<style lang="scss">
	div {
		text-align: center;
	}
</style>