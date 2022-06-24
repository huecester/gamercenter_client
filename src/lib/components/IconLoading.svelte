<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div out:fade="{{ duration: 100 }}">
	<i class="fas fa-spinner fa-3x fa-spin" />
</div>

<style lang="scss">
	div {
		text-align: center;
	}
</style>