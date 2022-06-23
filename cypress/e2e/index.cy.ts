describe('/index', () => {
	it('displays a working navbar', () => {
		cy.visit('/');
		cy.dataCy('navbar').as('navbar');

		cy.get('@navbar').contains('Home').click();
		cy.get('@navbar').contains('Games').click();
		cy.get('@navbar').contains('About').click();
		cy.get('@navbar').contains('Bots').click();
	});
});