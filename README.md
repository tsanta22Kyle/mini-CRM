# Mini CRM 

Projet réalisé dans le cadre d’un test technique [AriMayi].

Le but est de créer un mini CRM en Next.js avec une interface fluide, responsive, et des données mockées.

## Démarrage local

```bash
git clone https://github.com/tsanta22kyle/mini-CRM.git
cd mini-crm
npm install
npm run dev


---

### 3. 🧩 Fonctionnalités

```
## Fonctionnalités

- 🔐 Page de connexion mockée (aucune validation réelle)
- 🏠 Dashboard 
- 📄 Liste de clients mockés avec :
  - Table triable par nom
  - Barre de recherche
- 👤 Fiche client avec :
  - Détail complet
  - Historique d’activité mocké
- ➕ Formulaire d’ajout de client :
  - Nom, prénom, email, téléphone
  - Validation des champs

## Stack technique

- Next.js (App Router)
- React
- TypeScript ✅
- Tailwind CSS + ShadCN UI
- Zustand pour la gestion d’état
- React Hook Form
- AG Grid pour la table dynamique

## Choix techniques

- Utilisation de ShadCN pour une UI moderne et composable
- Zustand pour la gestion de l'utilisateur connecté
- AG Grid pour plus de contrôle sur la table (plutôt que TanStack)
- Cookies (via middleware) pour simuler une session utilisateur

## Organisation du code

- `/app`: routes + layout principal
- `/components`: composants UI
- `/lib`: fonctions helpers / state
- `/data`: mock data
- `/middleware.ts`: redirection si pas connecté

## Bonus implémentés

- ✅ Tags pour chaque client
- ✅ Pagination dans la table
- ✅ Responsive mobile
- ✅ Middleware Next.js pour protéger les routes privées


