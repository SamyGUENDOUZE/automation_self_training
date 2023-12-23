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
    cy.get('[data-test="tab-dropdown"]')
      .click();

    // Liste des options du menu déroulant
    const options = ['Argenta', 'Azuria', 'Parmanie', 'Carmin-sur-Mer', 'Cramois\'île', 'Jadielle','Safrania', 'Céladopole'];

    // Parcours de chaque option
    options.forEach((option) => {
        cy.get('#cities-dropdown')
          .select(option);
        // Réinitialise le menu déroulant pour passer à l'option suivante
        cy.get('[data-test="tab-dropdown"]')
          .click();
    });
  });

});

describe('Onglet Checkboxes', () => {

  it('Scénario: Tester toutes les options des cases à cocher', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-checkboxes"]')
      .click();

    // Liste des sélécteurs pour les checkboxes sans le -checkbox
    const choices = ['goku', 'gohan', 'goten', 'vegeta', 'trunks'];

    // Check de chaque checkbox à travers une liste plutôt que de le faire un par un
    choices.forEach((choice) => {
      cy.get(`#${choice}-checkbox`)
        .should('not.be.checked')
        .check()
        .should('be.checked')
        .uncheck()
        .should('not.be.checked');
    });
  });

});

describe('Onglet Boutons Radios', () => {

  it('Scénario: Tester toutes les options des boutons radio', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-radioButtons"]')
      .click();

    // Liste des sélecteurs pour les boutons radio sans le -radio
    const choices = ['pikachu', 'evoli', 'bulbizarre', 'carapuce', 'salamèche'];

    // Vérifier l'état initial (aucun bouton radio n'est sélectionné)
    choices.forEach((choice) => {
      cy.get(`#${choice}-radio`)
        .should('not.be.checked');
    });

    // Sélectionner chaque bouton radio un par un
    choices.forEach((choice) => {
      cy.get(`#${choice}-radio`)
        .should('not.be.checked')
        .check()
        .should('be.checked');
    });
  });

});

describe.only('Onglet Input', () => {

  it('Scénario: Cas passant - Remplir le champ Texte avec une valeur valide', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-input"]')
      .click();
  
    const text = 'SonGoku@';
    cy.get('#text-input')
      .type(text)
      .should('have.value', text)
      .invoke('val') 
      .should('match',  /^[A-Za-z\s-_!@#$%^&*()]+$/); // REGEX pour vérifier si la valeur contient uniquement des lettres
  });

  it('Scénario: Cas passant - Remplir le champ Nombre avec une valeur valide', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-input"]')
      .click();
  
    const number = '121212';
    cy.get('#number-input')
      .type(number)
      .should('have.value', number)
      .invoke('val')
      .then(parseInt) // Convertir la valeur en un entier
      .should('be.a', 'number'); 
  });
   
  it('Scénario: Cas passant - Remplir le champ Email avec une adresse email valide', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-input"]')
      .click();
  
    const email = 'test@example.com';
    cy.get('#email-input')
      .type(email)
      .should('have.value', email)
      .invoke('val')
      .should('match', /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/);
  });
  
  it('Scénario: Cas passant #1 - Remplir le champ Heure avec une heure valide en écrivant une heure correcte directement dans le champ', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-input"]').click();

    // Scénario #1
    const hour1 = '14:30';
    cy.get('#time-input')
      .type(hour1)
      .should('have.value', hour1);
  });

  it('Scénario: Cas passant #2 - Remplir le champ Heure avec une heure valide en cliquant sur l\'icône', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-input"]').click();

    // Scénario #2
    const hour2 = '17:45';
    cy.get('#time-input')
      .click()
      .get('.clockpicker-popover')
      .should('be.visible')
      .find('.clockpicker-tick')
      .contains(hour2)
      .click();

    cy.get('#time-input')
      .should('have.value', hour2);
  });

  it('Scénario: Cas passant #1 - Remplir le champ Date avec une date valide en écrivant une date correcte directement dans le champ', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-input"]').click();
  
    const date = '2023-12-20'; // Remplacez avec une date valide
    cy.get('#date-input')
      .type(date)
      .should('have.value', date);
  });
  
  it('Scénario: Cas passant #2 - Remplir le champ Date avec une date valide en cliquant sur l\'icône', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-input"]').click();
  
    const date = '2023-12-20'; 
    cy.get('#date-input')
      .click()
      .get('.datepicker-days')
      .should('be.visible')
      .find('.day:not(.old):first')
      .click();
  
    cy.get('#date-input')
      .should('have.value', date);
  });
  

});

describe('Onglet Toggle switch', () => {

  it('Scénario: Tester le toggle switch quand il est activé ET désactivé', () => {
    cy.visit('http://127.0.0.1:5500/website/index.html');
    cy.get('[data-test="tab-toggleSwitch"]')
      .click();

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