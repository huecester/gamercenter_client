describe('/index', () => {
	it('displays a working navbar', () => {
		cy.visit('/');
		cy.dataCy('navbar').as('navbar');

		const ROUTES = [ 
			{ name: 'Home', href: '/' },
			{ name: 'About', href: '/about' },
			{ name: 'Games', href: '/games' },
			{ name: 'Bots', href: '/bots' },
		];

		for (const route of ROUTES) {
			cy.get('@navbar').contains(route.name).as('anchor');
			cy.get('@anchor').click();

			cy.get('@anchor').should('have.class', 'active');
			cy.get('@navbar')
				.get('ul')
				.children()
				.not(`:contains("${route.name}")`)
				.each($el => cy.wrap($el).should('not.have.class', 'active'));

			cy.url().should('match', new RegExp(`${route.href}$`));
		}
	});
});