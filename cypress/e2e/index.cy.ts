import '@percy/cypress';

describe('/index', () => {
	function useNavbar(name: string) {
		cy.get('@navbar').contains(name).as('anchor');
		cy.get('@anchor').click();

		cy.get('@anchor').should('have.class', 'active');
		cy.get('@navbar')
			.get('ul')
			.children()
			.not(`:contains('${name}')`)
			.each($el => cy.wrap($el).should('not.have.class', 'active'));
	}

	it('displays all pages correctly', () => {
		cy.visit('/');
		cy.dataCy('navbar').as('navbar');

		useNavbar('Home');
		cy.dataCy('post').find('img');
		cy.percySnapshot('Home page');

		useNavbar('About');
		cy.percySnapshot('About page');

		useNavbar('Games');
		cy.percySnapshot('Games page');

		useNavbar('Bots');
		cy.dataCy('bot').find('img');
		cy.percySnapshot('Bots page');
	});
});