<u>Epic</u> : <u>Vérification de texte dans l'onglet Texte</u>

[ ] <span style = "color:#3C830C">***Scénario: Vérifier que le texte contient 1000 caractères*** </span><br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Texte" <br>
**Et que** le texte contient exactement 1000 caractères <br>
**Alors** le texte est considéré comme valide <br>
**Et** aucune erreur n'est affichée

---
---

<u> Epic </u> : <u> Test de l'onglet Input </u>

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
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur entre une heure valide dans le champ de type "heure" <br>
**Alors** le champ est considéré comme rempli avec succès <br>
**Et** aucune erreur n'est affichée

[ ] <span style = "color:#3C830C">***Scénario: Cas passant #2 - Remplir le champ Heure avec une heure valide en cliquant sur l'icône*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur clique sur l'icône de l'horloge <br>
**Alors** le timepicker apparaît <br>
**Et** l'utilisateur peut choisir l'heure qu'il souhaite <br>
**Et** aucune erreur n'est affichée

[ ] <span style = "color:#3C830C">***Scénario: Cas passant #1 - Remplir le champ Date avec une date valide en écrivant un date correcte directement dans le champ*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur entre une date valide dans le champ de type "date" <br>
**Alors** le champ est considéré comme rempli avec succès <br>
**Et** aucune erreur n'est affichée

[ ] <span style = "color:#3C830C">***Scénario: Cas passant #2 - Remplir le champ Date avec une date valide en cliquant sur l'icône*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur clique sur l'icône du calendrier <br>
**Alors** le calendrier apparaît <br>
**Et** l'utilisateur peut choisir la date qu'il souhaite <br>
**Et** aucune erreur n'est affichée

[ ] <span style = "color:#3C830C">***Scénario: Cas passant #1 - Choisir la couleur (RGB)*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur clique dans le champ de type "couleur" <br>
**Alors** le choix est, par défaut, en RGB <br>
**Et** l'utilisateur clique sur chaque champ pour choisir sa couleur <br>
**Et** aucune erreur n'est affichée 

[ ] <span style = "color:#3C830C">***Scénario: Cas passant #2 - Choisir la couleur (HSL)*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur clique dans le champ de type "couleur" <br>
**Alors** l'utilisateur clique sur les flèches à côté des champs RGB <br>
**Et** le choix HSL apparaît <br>
**Et** l'utilisateur clique sur chaque champ pour choisir sa couleur <br>
**Et** aucune erreur n'est affichée

[ ] <span style = "color:#3C830C">***Scénario: Cas passant #3 - Choisir la couleur (Hexadécimal)*** </span> <br>
**Étant donné que** l'utilisateur est sur la page dans l'onglet "Input" <br>
**Quand** l'utilisateur clique dans le champ de type "couleur" <br>
**Alors** l'utilisateur clique deux fois sur les flèches à côté des champs RGB <br>
**Et** le choix HEX apparaît <br>
**Et** l'utilisateur clique sur le champ pour choisir sa couleur <br>
**Et** aucune erreur n'est affichée

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

