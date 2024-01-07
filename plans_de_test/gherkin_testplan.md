<u><h3> Epic </u >: <u> Vérification de texte dans l'onglet Texte </h3></u>


[ ] <span style = "color:#3C830C">***Scénario: Vérifier que le texte contient 1000 caractères*** </span><br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Texte" <br>
**Et que** le texte contient exactement 1000 caractères <br>
**Alors** le texte est considéré comme valide <br>
**Et** aucune erreur n'est affichée

---
---

<h3><u> Epic </u> : <u> Test de l'onglet Input </u></h3>

[ ] <span style = "color:#3C830C">***Scénario: Cas passant - Remplir le champ Texte avec une valeur valide*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur entre un texte valide dans le champ de type "texte" <br>
**Alors** le champ est considéré comme rempli avec succès <br>
**Et** aucune erreur n'est affichée 

[ ] <span style = "color:#3C830C">***Scénario: Cas passant - Remplir le champ Nombre avec une valeur valide*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur entre un nombre valide dans le champ de type "nombre" <br>
**Alors** le champ est considéré comme rempli avec succès <br>
**Et** aucune erreur n'est affichée 

[ ] <span style = "color:#3C830C">***Scénario: Cas passant - Remplir le champ Email avec une adresse email valide*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur entre une adresse email valide dans le champ de type "email" <br>
**Alors** le champ est considéré comme rempli avec succès <br>
**Et** aucune erreur n'est affichée

[ ] <span style = "color:#3C830C">***Scénario: Cas passant #1 - Remplir le champ Heure avec une heure valide en écrivant une heure correcte directement dans le champ*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" avec Firefox <br>
**Quand** l'utilisateur entre une heure valide dans le champ de type "heure" <br>
**Alors** le champ est considéré comme rempli avec succès <br>
**Et** aucune erreur n'est affichée

<!-- [ ] <span style = "color:#3C830C">***Scénario: Cas passant #2 - Remplir le champ Heure avec une heure valide en cliquant sur l'icône*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" avec Firefox <br>
**Quand** l'utilisateur clique sur l'icône de l'horloge <br>
**Alors** le timepicker apparaît <br>
**Et** l'utilisateur peut choisir l'heure qu'il souhaite <br>
**Et** aucune erreur n'est affichée -->

[ ] <span style = "color:#3C830C">***Scénario: Cas passant #1 - Remplir le champ Date avec une date valide en écrivant un date correcte directement dans le champ*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" avec Firefox <br>
**Quand** l'utilisateur entre une date valide dans le champ de type "date" <br>
**Alors** le champ est considéré comme rempli avec succès <br>
**Et** aucune erreur n'est affichée

<!-- [ ] <span style = "color:#3C830C">***Scénario: Cas passant #2 - Remplir le champ Date avec une date valide en cliquant sur l'icône*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" avec Firefox <br>
**Quand** l'utilisateur clique sur l'icône du calendrier <br>
**Alors** le calendrier apparaît <br>
**Et** l'utilisateur peut choisir la date qu'il souhaite <br>
**Et** aucune erreur n'est affichée -->

[ ] <span style = "color:#3C830C">***Scénario: Cas passant - Choisir la couleur (Hexadécimal)*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur clique dans le champ de type "couleur" <br>
**Alors** l'utilisateur clique deux fois sur les flèches à côté des champs RGB <br>
**Et** le choix HEX apparaît <br>
**Et** l'utilisateur clique sur le champ pour choisir sa couleur <br>
**Et** aucune erreur n'est affichée
<!-- Après plusieurs tests, il est beaucoup plus simple de choisir uniquement la couleur hexadécimal quitte à faire une fonction qui convertit le HSL et le RGB en HEX éventuellement -->

[ ] <span style = "color:#FD0D0D">***Scénario: Cas non-passant - Remplir le champ Nombre avec une valeur non-numérique*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur entre une valeur non-numérique dans le champ de type "nombre" <br>
**Alors** le champ est considéré comme invalide <br>
**Et** un message d'erreur est affiché indiquant que la valeur doit être un nombre 

[ ] <span style = "color:#FD0D0D">***Scénario: Cas non-passant - Remplir le champ Email avec une adresse email invalide*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur entre une adresse email invalide dans le champ de type "email" <br>
**Alors** le champ est considéré comme invalide <br>
**Et** un message d'erreur est affiché indiquant que l'adresse email est invalide

<span style = "color:#DFE218">***On aurait pu faire d'autres cas non-passants comme mettre des liens ou essayer de mettre des images avec dans le champ texte; pour le champ couleur mettre des valeurs hors champs ou pour l'hexadécimal commencer par des caractères spéciaux autres que le #, etc... Ici, le but est juste de montrer des choses simples et comment les plans de tests vont de pair avec l'automatisation*** </span> <br>

---
---

<h3><u> Epic </u> : <u> Test de l'onglet Dropdown Menu </u></h3>

[ ] <span style="color:#3C830C">***Scénario: Tester toutes les options du menu déroulant*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Dropdown Menu" <br>
**Quand** l'utilisateur sélectionne chaque option du menu déroulant <br>
**Alors** le menu déroulant affiche l'option sélectionnée à chaque étape <br>
**Et** aucune erreur n'est affichée 

---
---

<h3><u> Epic </u> : <u> Test de l'onglet Checkbox </u></h3>

[ ] <span style="color:#3C830C">***Scénario: Tester toutes les options des cases à cocher*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Checkbox" <br>
**Quand** l'utilisateur sélectionne chaque option de la liste des cases à cocher <br>
**Alors** chaque case à cocher est cochée et affiche l'option sélectionnée <br>
**Et** aucune erreur n'est affichée 

---
---

<h3><u> Epic </u> : <u> Test de l'onglet Button Radios </u></h3>

[ ] <span style="color:#3C830C">***Scénario: Tester toutes les options des boutons radio*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Button Radios" <br>
**Quand** l'utilisateur sélectionne chaque option des boutons radio <br>
**Alors** le bouton radio correspondant à l'option est activé <br>
**Et** aucune erreur n'est affichée 

---
---

<h3><u> Epic </u> : <u> Test de l'onglet Toggle switch </u></h3>

[ ] <span style="color:#3C830C">***Scénario: Tester le toggle switch quand il est activé ET désactivé*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Toggle switch" <br>
**Et** que le toggle switch est désactivé par défaut <br>
**Quand** l'utilisateur clique sur le toggle switch <br>
**Alors** le toggle switch change de couleur <br>
**Et** réciproquement lorsque l'utilisateur reclique dessus 

---
---

<h3><u> Epic </u> : <u> Test de l'onglet Toggle slider </u></h3>

[ ] <span style="color:#3C830C">***Scénario: Tester le slider à chaque graduation*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Slider" <br>
**Et** que la valeur par défaut est 0 <br>
**Quand** l'utilisateur sélectionne chaque option du slider <br>
**Alors** la valeur du slider est mise à jour en fonction de l'option sélectionnée <br>
**Et** aucune erreur est affichée 

---
---

<h3><u> Epic </u> : <u> Test de l'onglet Formulaire </u></h3>

[ ] <span style="color:#3C830C">***Scénario: Cas passant - Remplir tous les champs avec des valeurs valides*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Formulaire" <br>
**Quand** l'utilisateur remplit tous les champs avec des valeurs valides <br>
**Et** qu'il sélectionne chaque option de la tranche d'âge <br>
**Alors** le formulaire accepte les données et aucune erreur n'est affichée <br>
**Et** le choix de la tranche d'âge fonctionne correctement à chaque étape <br>
**Et** aucune erreur n'est affichée

[ ] <span style="color:#FD0D0D;">***Scénario: Cas non-pasant - Laisser un champ obligatoire vide*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Formulaire" <br>
**Quand** l'utilisateur clique sur "Submit" sans remplir un champ obligatoire <br>
**Alors** le formulaire devrait afficher une erreur indiquant que certains champs sont obligatoires <br>


[ ] <span style="color:#FD0D0D;">***Scénario: Cas non-pasant - Sélectionner aucune tranche d'âge*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Formulaire" <br>
**Quand** l'utilisateur clique sur "Submit" sans sélectionner de tranche d'âge <br>
**Alors** le formulaire devrait afficher une erreur indiquant que la tranche d'âge est obligatoire <br>


[ ] <span style="color:#FD0D0D;">***Scénario: Cas non-pasant - Saisir une date de naissance invalide*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Formulaire" <br>
**Quand** l'utilisateur entre une date de naissance invalide <br>
**Alors** le formulaire devrait afficher une erreur indiquant que la date de naissance est invalide <br>


[ ] <span style="color:#FD0D0D;">***Scénario: Cas non-pasant - Entrer des caractères non alphabétiques dans les champs "Nom" ou "Prénom"*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Formulaire" <br>
**Quand** l'utilisateur entre des caractères non alphabétiques dans les champs "Nom" ou "Prénom" <br>
**Alors** le formulaire devrait afficher une erreur indiquant que seuls les caractères alphabétiques sont autorisés dans ces champs <br>


[ ] <span style="color:#FD0D0D;">***Scénario: Cas non-pasant - Saisir une date de naissance dans le futur*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Formulaire" <br>
**Quand** l'utilisateur entre une date de naissance future <br>
**Alors** le formulaire devrait afficher une erreur indiquant que la date de naissance ne peut pas être dans le futur <br>