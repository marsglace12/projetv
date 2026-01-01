# MVP – Life RPG

## Vision
Transformer la vie réelle en jeu vidéo via des quêtes quotidiennes, des caractéristiques RPG et une progression basée sur la régularité.

Le MVP doit permettre une utilisation quotidienne simple, rapide et motivante.

---

## Core Loop
1. L’utilisateur configure un **Plan** en choisissant une quête par caractéristique.
2. Chaque jour, l’app affiche les **5 quêtes du jour** (issues du Plan).
3. L’utilisateur indique pour chaque quête si elle est réussie.
4. L’utilisateur écrit un **bilan de la journée** (journal) avec une note de satisfaction.
5. L’app calcule le **score du jour (0 à 5)**, attribue des récompenses et met à jour la progression.

---

## Caractéristiques (Stats)
Inspirées des RPG (type Dofus) :

- **Intelligence (INT)** : travail, études, concentration
- **Force (FOR)** : sport, activité physique
- **Agilité (AGI)** : développement de compétences (musique, lecture, apprentissage)
- **Chance (CHA)** : santé mentale, détente, social
- **Vitalité (VIT)** : sommeil, alimentation

---

## Quêtes

### Catalogue de quêtes
Chaque caractéristique dispose d’un **catalogue de quêtes prédéfinies**.

Exemples :
- FOR : 1h de sport, 30 min de gainage, 2h de promenade
- INT : 2h de deep work, 1h d’étude
- AGI : 30 min guitare, lire 20 pages
- CHA : méditation, sortie détente
- VIT : dormir 8h, repas équilibré

---

## Player Plan
- L’utilisateur choisit **1 quête par caractéristique** dans le catalogue.
- Le Plan est configuré au début du jeu.
- Le Plan est **modifiable à tout moment** (les jours suivants utiliseront la nouvelle configuration).

---

## Journée de jeu

### Quêtes du jour
- 5 quêtes (1 par caractéristique)
- Chaque quête peut être marquée :
  - Réussie
  - Non réussie

### Bilan journalier
- Texte libre (journal intime)
- Note de satisfaction globale (1 à 10)
- Date automatiquement associée

---

## Score journalier
- Le **score du jour** correspond au nombre de quêtes réussies :
  - Minimum : 0
  - Maximum : 5

---

## Définition d’une “journée correcte”
- Une journée est considérée comme **correcte** si :
  - Score du jour **≥ 3**
  - ET le bilan journalier est rempli

---

## Progression (Leveling)
La progression est basée sur le nombre de **journées correctes cumulées**.

Seuils MVP :
- Level 1 → 2 : 1 journée correcte
- Level 2 → 3 : +3 journées correctes
- Level 3 → 4 : +7 journées correctes
- Level 4 → 5 : +14 journées correctes

Les seuils sont configurables côté backend.

---

## XP (MVP)
- Bilan journalier rempli : +50 XP
- Bonus selon score : +10 XP par quête réussie
- Maximum par jour : 100 XP

L’XP est une gratification continue, le level dépend principalement des journées correctes.

---

## Écrans MVP
1. **Setup du Plan**
   - Choix d’une quête par caractéristique
2. **Aujourd’hui**
   - Liste des quêtes
   - Validation des réussites
   - Bilan + satisfaction
3. **Dashboard**
   - Level + XP
   - Progression vers le prochain niveau
   - Caractéristiques
   - Historique minimal des journées

---

## Hors scope MVP
- PvP / social
- Notifications
- Mobile app
- Items / classes
