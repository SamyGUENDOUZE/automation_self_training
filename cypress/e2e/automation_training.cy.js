describe('Onglet Texte', () => {

  it('Scénario : Vérifier que le texte contient 1000 caractères', () => {
    // Se rendre sur le site en local/beta/env. de test/prod selon le cas => Remplacer l'URL par la bonne adresse et/ou le bon port
    cy.visit('/index.html') 

    // Vérifier que le texte contient exactement 1000 caractères 
    cy.get('[data-test="tab-text"]')
      .click();
    // .invoke permet de demander explicitement à Cypress d'obtenir le texte sous forme de chaîne
    cy.get('[data-test="content-text"] > :nth-child(3)')
      .invoke('text')
      .should('have.length', 1000);
  });

});

describe('Onglet Input', () => {

  it('Scénario: Cas passant - Remplir les différents champs avec des valeurs valides ET conformes', () => {
    cy.visit('/index.html');
    cy.get('[data-test="tab-input"]')
      .click();
  
    const text = 'SonGoku@';
    cy.get('[data-test="text-input"]')
      .type(text)
      .should('have.value', text)
      .invoke('val') 
      .should('match',  /^[A-Za-z\s-_!@#$%^&*()~`]+$/); // REGEX pour vérifier si la valeur contient uniquement des lettres et des caractères spéciaux

    const number = '121212';
    cy.get('[data-test="number-input"]')
      .type(number)
      .should('have.value', number)
      .invoke('val')
      .then(parseInt) // Convertir la valeur en un entier
      .should('be.a', 'number'); 

    const email = 'test@example.com';
    cy.get('[data-test="email-input"]')
      .type(email)
      .should('have.value', email)
      .invoke('val')
      .should('match', /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/);

    const hour = '14:30';
    cy.get('[data-test="time-input"]')
      .type(hour)
      .should('have.value', hour);

    const date = '2023-12-20'; // Pour les tests, on est obligés de garder ce format de date
    cy.get('[data-test="date-input"]')
      .type(date)
      .should('have.value', date);

    const hexColor = '#ff7e29'; // Après plusieurs tests, c'est mieux de choisir le format hexadécimal. Si on veut tester le RGB/HSL, c'est mieux d'écrire une fonction qui convertit ces valeurs en hexadécimal
    cy.get('[data-test="color-input"]')
      .invoke('val', hexColor)
      .trigger('change')
      .should('have.value', hexColor);
  });
});

describe('Onglet Dropdown menu', () => {

  it('Scénario : Test toutes les options du menu déroulant', () => {
    cy.visit('/index.html');
    cy.get('[data-test="tab-dropdown"]')
      .click();

    // Liste des options du menu déroulant
    const options = ['Argenta', 'Azuria', 'Parmanie', 'Carmin-sur-Mer', 'Cramois\'île', 'Jadielle','Safrania', 'Céladopole'];

    // Parcours de chaque option
    options.forEach((option) => {
        cy.get('[data-test="cities-dropdown"]')
          .select(option);
        // Réinitialise le menu déroulant pour passer à l'option suivante
        cy.get('[data-test="tab-dropdown"]')
          .click();
    });
  });

});

describe('Onglet Checkboxes', () => {

  it('Scénario: Tester toutes les options des cases à cocher', () => {
    cy.visit('/index.html');
    cy.get('[data-test="tab-checkboxes"]')
      .click();

    // Liste des sélécteurs pour les checkboxes sans le -checkbox
    const choices = ['goku', 'gohan', 'goten', 'vegeta', 'trunks'];

    // Check de chaque checkbox à travers une liste plutôt que de le faire un par un
    choices.forEach((choice) => {
      cy.get(`[data-test=${choice}-checkbox]`)
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
    cy.visit('/index.html');
    cy.get('[data-test="tab-radioButtons"]')
      .click();

    // Liste des sélecteurs pour les boutons radio sans le -radio
    const choices = ['pikachu', 'evoli', 'bulbizarre', 'carapuce', 'salamèche'];

    // Vérifier l'état initial (aucun bouton radio n'est sélectionné)
    choices.forEach((choice) => {
      cy.get(`[data-test=${choice}-radio]`)
        .should('not.be.checked');
    });

    // Sélectionner chaque bouton radio un par un
    choices.forEach((choice) => {
      cy.get(`[data-test=${choice}-radio]`)
        .should('not.be.checked')
        .check()
        .should('be.checked');
    });
  });

});

describe('Onglet Toggle switch', () => {

  it('Scénario: Tester le toggle switch quand il est activé ET désactivé', () => {
    cy.visit('/index.html');
    cy.get('[data-test="tab-toggleSwitch"]')
      .click();

    // switch ON / switch OFF
    cy.checkToggleStateAndClick();
  });

});

describe('Test de l\'onglet Formulaire', () => {

  it('Scenario : Cas passant - Remplir tous les champs avec des valeurs valides', () => {
    cy.visit('/index.html'); 
    cy.get('[data-test="tab-form"]')
      .click();

    // Options de la tranche d'âge
    const tranchesAge = ['moins20', '20a50', 'plus50'];

    // Remplir les champs avec des valeurs valides
    cy.get('#nom').type('Doé');
    cy.get('#prenom').type('John');
    cy.get('#dateNaissance').type('1990-01-01');

    // Boucle sur les options de la tranche d'âge
    tranchesAge.forEach((trancheAge) => {

      // Sélectionner l'option de la tranche d'âge actuelle
      cy.get(`#${trancheAge}`).check();

      // Soumettre le formulaire
      cy.get('button').click();

      // Permet de vérifier qu'une alerte est bien générée
      cy.on('window:alert', cy.stub());
    });
  });

  // Ce cas de test marche si on oublie chaque option, y compris les tranches d'âges
  it('Scenario : Cas non-passant - Laisser un champ obligatoire vide', () => {
    cy.visit('/index.html');
    cy.get('[data-test="tab-form"]')
      .click();

    // Cliquer sur "Submit" sans remplir un champ obligatoire
    cy.get('button').click();

    // Permet de vérifier qu'une alerte est bien générée
    cy.on('window:alert', cy.stub()); 
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Veuillez remplir tous les champs obligatoires.')
    })

  });

  it('Scénario: Cas non-pasant - Saisir une date de naissance invalide/dans le futur', () => {
    cy.visit('/index.html'); 
    cy.get('[data-test="tab-form"]')
      .click();

    // Options de la tranche d'âge
    const tranchesAge = ['moins20', '20a50', 'plus50'];

    // Remplir les champs avec des valeurs valides
    cy.get('#nom').type('Doe');
    cy.get('#prenom').type('John');
    cy.get('#dateNaissance').type('2030-12-12');

    // Boucle sur les options de la tranche d'âge
    tranchesAge.forEach((trancheAge) => {

      // Sélectionner l'option de la tranche d'âge actuelle
      cy.get(`#${trancheAge}`).check();

      // Soumettre le formulaire
      cy.get('button').click();

      cy.on('window:alert', cy.stub()); 
      cy.on('window:alert', (str) => {
      expect(str).to.equal('La date de naissance ne peut pas être dans le futur.')
      })
    });
  });

  it('Scénario: Cas non-pasant - Entrer des caractères non alphabétiques dans les champs "Nom" ou "Prénom"', () => {
    cy.visit('/index.html'); 
    cy.get('[data-test="tab-form"]')
      .click();

    // Options de la tranche d'âge
    const tranchesAge = ['moins20', '20a50', 'plus50'];

    // Remplir les champs avec des valeurs valides
    cy.get('#nom')
      .type('1234');
    cy.get('#prenom')
      .type('@`(');
    cy.get('#dateNaissance')
      .type('2030-12-12');

    // Boucle sur les options de la tranche d'âge
    tranchesAge.forEach((trancheAge) => {

      // Sélectionner l'option de la tranche d'âge actuelle
      cy.get(`#${trancheAge}`)
        .check();

      // Soumettre le formulaire
      cy.get('button')
        .click();

      cy.on('window:alert', cy.stub()); 
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Les champs "Nom" et "Prénom" ne doivent contenir que des caractères alphabétiques.')
      })
    });
  });

});