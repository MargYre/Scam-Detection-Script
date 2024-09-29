# Scam-Detection-Script

## Description

Ce script permet de détecter les annonces de véhicules de voitures qui sont considérées comme des "scams" en fonction de règles prédéfinies.

## Installation
Suivez ces étapes pour configurer le projet et exécuter le script :


```bash
npm init -y
npm install typescript --save-dev
npx tsc --init
npm install -D ts-node
```

## Execution

```bash
ts-node src/index.ts
```

## Avertissement : services fictifs

Le code dans src/services.ts est entièrement fictif et simule des appels à des services externes. Ces services (par exemple, le calcul de la côte d'un véhicule ou la vérification d'immatriculation) sont mockés (simulés) et ne contactent pas de véritables bases de données ou APIs.

Ces services sont implémentés uniquement à des fins de démonstration pour ce projet. En production, vous devriez remplacer ces appels par de véritables requêtes vers des services externes.