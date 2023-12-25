// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('checkToggleStateAndClick', () => {
    // Vérifie que le toggle est décoché par défaut)
    cy.get('[data-test="toggle-checkbox"]')
      .should('not.be.checked');
  
    cy.get('[data-test="toggle-switch"]')
      .click();
  
    // Vérifier que le toggle est coché après le clic
    cy.get('[data-test="toggle-checkbox"]')
      .should('be.checked');

    cy.get('[data-test="toggle-switch"]')
    .click();
  });