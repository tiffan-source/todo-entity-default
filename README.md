# 🧩 todo-entity-default

**`todo-entity-default`** est un module TypeScript qui fournit une implémentation **par défaut** des entités et des cas d’usage (use cases) définis dans le module `todo-entity`.

---

## 🎯 Objectif

Ce package a pour objectif d’offrir une première implémentation concrète des règles métier définies dans le module abstrait `todo-entity`.  
Il rend ainsi les entités et cas d’usage exploitables dans une application réelle.

---

## ⚙️ Fonctionnalités

- 🏗️ Implémentation de `TodoEntity` (et autres entités définies)
- 🚀 Implémentation par défaut de cas d’usage comme `CreateTodoUseCase`, etc.
- 🧪 Inclut des tests unitaires simples
- 🔄 Conçu pour être facilement remplaçable ou extensible (grâce aux interfaces)

---

## 🗂️ Structure du projet

```bash
todo-entity-default/
├── src/
│ ├── entities/ # Implémentations des interfaces d'entités
│ ├── factories/ # Usines pour créer des instances d'entités
│ └── index.ts # Point d’entrée du module
├── tests/
│ ├── entities/ # Tests des entités
│ └── factories/ # Tests des usines
├── README.md # Ce fichier
├── tsconfig.json # Config TypeScript
├── eslint.config.mjs # Config ESLint
└── package.json # Déclaration du module npm
```

---

## 📦 Installation

```bash
npm install todo-entity-default
```

---

## 🧩 Architecture

Ce module est destiné à servir dans une architecture hexagonale (ou Clean Architecture), en tant que "provider" pour le domaine métier.

- ✅ Conforme aux interfaces de todo-entity
- 🧱 Faible couplage
- 🔄 Modulable

---

## 🔗 Documentation

La description complète des entités, types et cas d’usage se trouve dans le fichier [`DOC.md`](./docs/DOC.md), maintenu séparément pour suivre l’évolution du projet.
