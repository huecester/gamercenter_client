/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		/**
		 * Get an element by its `data-cy` attribute.
		 * @example cy.dataCy('submit');
		 */
		dataCy(value: string): Chainable<JQuery<HTMLElement>>;
	}
}