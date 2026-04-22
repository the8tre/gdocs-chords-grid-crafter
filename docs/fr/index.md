---
layout: default
lang: fr
permalink: /index.html
---
## Motivation et description
La notation en grille d’accords est un outil très utile pour s’assurer que tous les membres de votre groupe jouent la même chose. Pour en savoir plus, consultez [cet article](https://en.wikipedia.org/wiki/Chord_chart#Grid_notation) et [celui-ci](https://www.imusic-school.com/blog/fr-guitare/debuter-guitare/grille-accords/).

Cette extension vous permet de créer et de maintenir vos grilles d’accords directement depuis votre document Google Docs.  
Elle insère votre grille dans le document en cours d’édition et vous permet de la modifier ultérieurement si nécessaire.

<img src="assets/images/overview.png"/> 

## Installation
Installez-la depuis le [Google Workspace Marketplace](https://workspace.google.com/marketplace/app/chords_grid_crafter/288629459826).

## Lancement
L’extension est accessible depuis n’importe quel document Google Docs ouvert via le menu `Extensions -> Chords Grid Crafter -> Afficher le panneau`. Cela ouvre un panneau latéral avec toutes les fonctionnalités disponibles.

## Utilisation
Chaque champ de saisie représente 1 mesure de votre musique.  
Saisissez vos accords dans le champ texte en les séparant par un espace.  
<img src="assets/images/basic_usage.png" width="200px"/><br/>
Vous pouvez saisir jusqu’à 4 accords par mesure, qui seront automatiquement disposés dans la grille comme suit :

| Nombre d’accords | Aperçu                                                    | Détails                                                                                                                                                                              |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1                | <img src="assets/images/1_chord.png" width="100px"/>      |                                                                                                                                                                                      |
| 2                | <img src="assets/images/2_chords.png" width="100px"/>     |                                                                                                                                                                                      |
| 3                | <img src="assets/images/3_chords.png" width="100px"/>     |                                                                                                                                                                                      |
| 3 alternatif     | <img src="assets/images/3_chords_alt.png" width="100px"/> | Avec 3 accords, vous pouvez sélectionner une disposition alternative de la mesure via le bouton dédié : <img src="assets/images/alt_layout.png" width="200px"/> |
| 4                | <img src="assets/images/4_chords.png" width="100px"/>     |                                                                                                                                                                                      |

Une fois la première mesure saisie, cliquez sur le bouton `+` ou appuyez sur `[Entrée]` pour ajouter une nouvelle ligne :  
<img src="assets/images/add_row.png" width="200px"/>
> 💡
> Vous pouvez naviguer entre les lignes avec les touches fléchées haut/bas du clavier.

Une fois toutes vos mesures saisies, placez le curseur dans le document à l’endroit souhaité et cliquez sur le bouton `Insérer / Remplacer` :  

| Saisie                                              | Résultat                                                 |
| --------------------------------------------------- | -------------------------------------------------------- |
| <img src="assets/images/insert.png" width="200px"/> | <img src="assets/images/simple_grid.png" width="200px"/> |



### Modifier une grille existante
Pour apporter des modifications à une grille d’accords déjà créée, sélectionnez-la dans votre document et cliquez sur le bouton `Charger la sélection`.  
L’éditeur sera rempli avec le contenu de votre grille, en conservant tous les paramètres initiaux (échelle, police, etc.).  
<img src="assets/images/re_edit.png"/>

## Paramètres

### Forme
Choisissez le rendu de chaque cellule de la grille :
- Carré
  - <img src="assets/images/square.png" width="100px"/>
- Rectangle
  - <img src="assets/images/rectangle.png" width="100px"/>

### Police
Choisissez la police d’affichage dans la liste déroulante.  
La police est utilisée à la fois dans le panneau d’aperçu et lors de l’insertion dans le document.

### Ordre de lecture des accords
Choisissez dans la liste déroulante si les accords doivent être lus dans le sens horaire ou non :
- Sens horaire
  - <img src="assets/images/4_clockwise.png" width="100px"/> <img src="assets/images/3_clockwise.png" width="100px"/>
- Sens anti-horaire
  - <img src="assets/images/4_non_clockwise.png" width="100px"/> <img src="assets/images/3_non_clockwise.png" width="100px"/>

### Échelle de sortie
Redimensionne la grille au pourcentage spécifié.

## Problèmes ou idées d’amélioration
Ce plugin est un projet personnel et non lucratif. Le code est open source et disponible [ici](https://github.com/the8tre/gdocs-chords-grid-crafter) sur GitHub. Il ne collecte aucune de vos données et ne lit pas de documents autres que celui en cours d’édition. Si vous avez des idées d’amélioration ou si vous rencontrez un problème, n’hésitez pas à me le faire savoir — je ferai de mon mieux pour y répondre selon mes disponibilités.
