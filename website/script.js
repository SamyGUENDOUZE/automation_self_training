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

// Affiche les informations dans une alerte
alert(`Nom: ${nom}\nPrénom: ${prenom}\nDate de naissance: ${dateNaissance}\nTranche d'âge: ${trancheAge}`);
}
  