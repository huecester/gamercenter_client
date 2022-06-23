<script lang="ts">
	import { page } from '$app/stores';

	const ROUTES = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Games', href: '/games' },
		{ name: 'Bots', href: '/bots' },
	];
</script>

<nav data-cy="navbar">
	<ul>
		{#each ROUTES as route}
			<li>
				<a href={route.href} class:active={$page.url.pathname === route.href}>
					{route.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		margin: 1rem;

		& > ul {
			display: flex;
			flex-direction: row;

			background-color: variables.$nord1;
			padding: 0;
			
			& > li {
				list-style-type: none;

				& > a {
					color: inherit;
					text-decoration: inherit;

					display: block;
					padding: .75rem 1rem;

					transition: .1s background-color;
					&.active {
						background-color: variables.$nord10;
					}
					&:hover {
						background-color: variables.$nord9;
					}
				}
			}
		}
	}
</style>