---
layout: default
lang: fr
permalink: /privacy_policy.html
---
# Politique de confidentialité

_Dernière mise à jour : 23 avril 2026_

Cette politique s'applique à l'extension Google Docs **Chords Grid Crafter** (l'« Extension »).

## Ce que fait l'Extension

Chords Grid Crafter est un panneau latéral permettant de créer des grilles d'accords et de les insérer dans le document Google Docs actuellement ouvert. Tout le rendu des grilles s'effectue localement dans votre navigateur (sur un élément canvas dans le panneau latéral). Aucun serveur appartenant à ce projet n'est impliqué.

## Données accédées et leur utilisation

**Votre document Google**

L'Extension lit et écrit uniquement le document Google Docs actuellement ouvert dans votre navigateur lorsque vous utilisez le panneau latéral. Plus précisément, elle :
- Insère ou remplace une image PNG inline contenant votre grille d'accords.
- Lit ou écrit le champ de texte alternatif (alt-text) de l'image pour stocker et récupérer la configuration de la grille (préfixée `CGC_DATA`).

Cet accès est limité au document actif. L'Extension ne peut accéder à aucun autre fichier de votre Drive ni à aucun autre service Google.

**Votre paramètre de langue**

L'Extension lit votre paramètre de langue (ex. : `en`, `fr`) via le moteur d'exécution Google Apps Script afin d'afficher le panneau dans votre langue. Cette valeur est utilisée uniquement à cet effet et n'est ni stockée ni transmise.

**Rien d'autre**

L'Extension ne lit pas votre nom, adresse e-mail, photo de profil, liste de fichiers Drive ni aucune autre information personnelle. Elle n'accède à aucun document autre que celui que vous êtes en train de modifier.

## Données accessibles par le développeur

Aucune. L'Extension fonctionne entièrement comme un Google Apps Script rattaché à votre compte Google. Le développeur ne dispose d'aucun serveur, aucun backend, aucune infrastructure de journalisation et aucun système d'analyse. Rien de ce que vous saisissez, insérez ou stockez via cette Extension n'est visible ni accessible par le développeur.

## Services tiers

Le panneau latéral charge des polices et icônes depuis Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) et la feuille de style standard d'Apps Script (`ssl.gstatic.com`). Ce sont des services CDN de Google. Leur chargement envoie une requête HTTP standard depuis votre navigateur vers les serveurs de Google (votre adresse IP et les en-têtes de votre navigateur sont impliqués, comme pour toute page web chargeant une police Google). Aucune donnée de grille d'accords ni aucun contenu de document ne figure dans ces requêtes. Le traitement de ces requêtes CDN par Google est régi par la [Politique de confidentialité de Google](https://policies.google.com/privacy).

Aucune donnée n'est envoyée à un tiers quelconque.

## Conformité aux API Google

Cette Extension respecte la [Politique relative aux données utilisateur des services API Google](https://developers.google.com/terms/api-services-user-data-policy), y compris les exigences d'utilisation limitée.

## Conservation et suppression des données

L'Extension ne stocke rien en dehors de votre propre document Google. La configuration des grilles d'accords réside exclusivement dans le champ alt-text des images que vous avez insérées dans vos documents. Pour la supprimer, supprimez l'image du document. Le développeur ne conserve aucune copie de vos données.

## Vos droits

Le développeur ne détenant aucune donnée personnelle vous concernant, il n'y a rien à demander, corriger ou supprimer de son côté. Pour supprimer toute trace d'activité de l'Extension, désinstallez-la via Google Workspace et supprimez les images de grilles d'accords de vos documents.

## Sécurité

L'Extension est open source. Le code source complet est disponible sur [github.com/the8tre/gdocs-chords-grid-crafter](https://github.com/the8tre/gdocs-chords-grid-crafter). Tous les traitements s'effectuent au sein de l'infrastructure de Google (Apps Script + votre navigateur). Le développeur n'exploite aucun serveur, base de données ni point d'accès externe.

## Mises à jour de la politique

Si cette politique est mise à jour, la date de « Dernière mise à jour » en haut de cette page sera modifiée. Pour les changements significatifs, un avis sera publié dans le [dépôt GitHub](https://github.com/the8tre/gdocs-chords-grid-crafter) de l'Extension. La poursuite de l'utilisation de l'Extension après une mise à jour de la politique vaut acceptation de la politique révisée.

## Avis EEE

Pour les utilisateurs dans l'Espace économique européen : le développeur de cette Extension est un particulier agissant à titre non commercial. L'Extension est un projet hobby gratuit qui ne génère aucun revenu. Le développeur n'est pas un « professionnel » au sens du droit de la consommation de l'UE.

## Contact

Pour toute question ou préoccupation relative à la confidentialité, veuillez ouvrir un ticket dans le [dépôt GitHub](https://github.com/the8tre/gdocs-chords-grid-crafter/issues).

## À propos

Cette Extension a été créée parce que la notation en grilles d'accords est vraiment utile pour les arrangements musicaux, et qu'il n'existait pas de moyen simple de la créer directement dans Google Docs. Le développeur est un passionné de code et de basse avec un emploi à plein temps. Aucune activité commerciale, aucun revenu, aucun intérêt pour vos données.
