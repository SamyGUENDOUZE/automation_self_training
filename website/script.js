function changeTab(tabName) {
// Cacher tous les contenus
let contents = document.getElementsByClassName('content');
for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active-content');
}

// Désactiver tous les onglets
let tabs = document.getElementsByClassName('tab');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active-tab');
}

// Afficher le contenu de l'onglet sélectionné
let selectedContent = document.getElementById('content' + tabName.charAt(0).toUpperCase() + tabName.slice(1));
selectedContent.classList.add('active-content');

// Activer l'onglet sélectionné
let selectedTab = document.getElementById('tab' + tabName.charAt(0).toUpperCase() + tabName.slice(1));
selectedTab.classList.add('active-tab');
}
  

function submitForm() {
    // Récupère les valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const dateNaissance = document.getElementById('dateNaissance').value;
  
    // Récupère la tranche d'âge sélectionnée
    let trancheAge = '';
    const radios = document.getElementsByName('trancheAge');
    for (const radio of radios) {
      if (radio.checked) {
        trancheAge = radio.value;
        break;
      }
    }
  
    // Vérifie que tous les champs obligatoires sont remplis
    if (nom.trim() === '' || prenom.trim() === '' || dateNaissance.trim() === '' || trancheAge === '') {
      alert('Veuillez remplir tous les champs obligatoires.');
      return; // Arrête la fonction si un champ obligatoire est vide
    }
  
    // Vérifie que les champs "Nom" et "Prénom" contiennent uniquement des caractères alphabétiques
    const alphabetRegex = /^[a-zA-Z\s]*$/;
    if (!alphabetRegex.test(nom) || !alphabetRegex.test(prenom)) {
      alert('Les champs "Nom" et "Prénom" ne doivent contenir que des caractères alphabétiques.');
      return;
    }
  
    // Vérifie que la date de naissance n'est pas dans le futur
    const today = new Date();
    const selectedDate = new Date(dateNaissance);
    if (selectedDate > today) {
      alert('La date de naissance ne peut pas être dans le futur.');
      return;
    }

    // Affiche les informations dans une alerte
    alert(`Nom: ${nom}\nPrénom: ${prenom}\nDate de naissance: ${dateNaissance}\nTranche d'âge: ${trancheAge}`);
  

    // Ligne de code qui sert à formater la date dans le format DD-MM-YYYY si besoin, ne pas oublier de dé-commenter celle du dessus
    // const formattedDate = selectedDate.toLocaleDateString('fr-FR'); 
    // alert(`Nom: ${nom}\nPrénom: ${prenom}\nDate de naissance: ${formattedDate}\nTranche d'âge: ${trancheAge}`);
    }

  
  