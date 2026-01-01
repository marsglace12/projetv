# ADR 0003 – Progression basée sur les jours corrects

## Status
Accepted

## Context
Le leveling doit récompenser la régularité (1 jour, 3 jours, 1 semaine, etc.).

## Decision
Un “jour correct” est défini par un score journalier (0..5).
Le level-up dépend du nombre de jours corrects cumulés via des seuils.

## Consequences
- Encourage la constance
- Logique serveur simple à tester
- Les seuils peuvent évoluer sans changer le modèle
