# Architecture – Projet V (MVP)

## Principes généraux
- Backend = **source de vérité**
- Logique de progression côté serveur
- Frontend orienté affichage et saisie utilisateur
- Architecture simple, testable, évolutive

---

## Architecture globale
- Frontend : React + TypeScript
- Backend : Java (Spring Boot)
- Communication : API REST JSON
- Hébergement : local (développement)

---

## Backend (Spring Boot)

### Rôle
- Gérer la logique de jeu
- Calculer score, XP, progression
- Garantir la cohérence des données

### Couches
- **domain** : règles métier (Character, Quests, Progression)
- **application** : services (calcul journée, progression)
- **api** : contrôleurs REST
- **infrastructure** : persistance (plus tard)

---

## Modèle de données (MVP)

### QuestTemplate
- id
- stat (INT, FOR, AGI, CHA, VIT)
- title
- description (optionnel)

### PlayerPlan
- userId
- selectedQuestByStat (stat → questTemplateId)

### DailyQuestStatus
- date
- stat
- questTemplateId
- completed (boolean)

### DailyReview
- date
- text
- satisfaction (1–10)

### Character
- level
- xp
- correctDaysCount
- statsPoints (INT, FOR, AGI, CHA, VIT)

---

## Calculs métier (backend)

### Score journalier
score = nombre de quêtes complétées (0..5)

### Journée correcte
isCorrectDay = score >= 3 AND dailyReview exists


### Récompenses
- XP journalier
- Incrément du compteur de journées correctes
- Progression de niveau si seuil atteint

---

## Frontend (React)

### Rôle
- Afficher l’état du jeu
- Permettre la saisie des actions
- Aucune logique métier critique

### Pages
- Setup Plan
- Today
- Dashboard

### État
- State UI local (formulaires, feedback)
- Données synchronisées via API

---

## Sécurité & Auth (hors MVP)
- Auth simple ou mock utilisateur unique
- Sécurité à introduire après validation du MVP

---

## Évolutions prévues
- Historique détaillé
- Graphiques de progression
- Difficulté dynamique
- PvP asynchrone
- Mobile (React Native)
