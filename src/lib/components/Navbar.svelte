<script lang="ts">
	import routes from '$lib/data/routes.json';

	export let url: URL;
</script>

<nav data-cy="navbar">
	<ul>
		{#each routes as route}
			<li>
				{#if url.pathname === route.href}
					<div class="active">
						{route.name}
					</div>
				{:else}
					<a href={route.href}>
						{route.name}
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		margin: 1rem;
	}

	ul {
		display: flex;
		flex-direction: row;

		background-color: variables.$nord1;
		border: 2px solid variables.$nord2;
		padding: 0;
	}

	li {
		list-style-type: none;

		& > a, & > div {
			color: inherit;
			text-decoration: inherit;
			cursor: pointer;

			display: block;
			padding: .75rem 1rem;

			transition: .1s background-color;
			&:hover {
				background-color: variables.$nord9;
			}
		}
	}

	.active {
		background-color: variables.$nord10;
	}
</style>