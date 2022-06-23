describe('/index', () => {
	it('displays a working navbar', () => {
		cy.visit('/');
		cy.dataCy('navbar').as('navbar');

		const LINKS = [ 
			{ name: 'Home', href: '/' },
			{ name: 'About', href: '/about' },
			{ name: 'Games', href: '/games' },
			{ name: 'Bots', href: '/bots' },
		];

		for (const link of LINKS) {
			cy.get('@navbar').contains(link.name).click();
			cy.url().should('match', new RegExp(`${link.href}$`));
		}
	});
});