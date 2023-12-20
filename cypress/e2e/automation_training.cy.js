describe('Onglet Texte', () => {

  it('Scénario : Vérifier que le texte contient 1000 caractères', () => {
    // Se rendre sur le site en local/beta/env. de test/prod selon le cas => Remplacer l'URL par la bonne adresse et/ou le bon port
    cy.visit('http://127.0.0.1:5500/website/index.html') 

    // Vérifier que le texte contient exactement 1000 caractères 
    cy.get('[data-test="tab-text"]')
      .click();
    // .invoke permet de demander explicitement à Cypress d'obtenir le texte sous forme de chaîne
    cy.get('[data-test="content-text"] > :nth-child(3)')
      .invoke('text')
      .should('have.length', 1000);
  });

});

describe('Onglet Dropdown menu', () => {

  it('Scénario : Test toutes les options du menu déroulant', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-dropdown"]').click();

    // Liste des options du menu déroulant
    const options = ['Argenta', 'Azuria', 'Parmanie', 'Carmin-sur-Mer', 'Cramois\'île', 'Jadielle','Safrania', 'Céladopole'];

    // Parcours de chaque option
    options.forEach((option) => {
          cy.get('#cities-dropdown')
            .select(option);
        // Réinitialise le menu déroulant pour passer à l'option suivante
        cy.get('[data-test="tab-dropdown"]').click();
    });
  });

});

describe.only('Onglet Toggle switch', () => {

  it('Scénario: Tester le toggle switch quand il est activé ET désactivé', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-toggleSwitch"]').click();

    //Succesion d'étapes pour vérifier que le toggle est désactivé PAR DEFAUT puis activé pour être de nouveau désactivé
    cy.get('.toggle-checkbox')
      .should('not.be.checked');
    cy.get('.toggle-switch')
    .click();
    cy.get('.toggle-checkbox')
      .should('be.checked');
    cy.get('.toggle-switch')
    .click();
    cy.get('.toggle-checkbox')
      .should('not.be.checked');
  });

});