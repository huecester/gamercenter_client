<script lang="ts">
	type Link = {
		name: string,
		href: string,
	}

	const LINKS: Link[] = [ 
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Games', href: '/games' },
		{ name: 'Bots', href: '/bots' },
	];
</script>

<nav data-cy="navbar">
	<ul>
		{#each LINKS as link}
			<li>
				<a href={link.href.toString()}>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</nav>