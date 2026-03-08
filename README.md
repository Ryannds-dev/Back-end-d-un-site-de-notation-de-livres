# My Star ReadIn 📚

Application web full-stack de notation de livres. Découvrez les meilleures lectures, notez vos livres favoris et partagez vos coups de cœur avec la communauté.

🌐 **Application en ligne** : [my-star-readin-site-de-notation-de-livres.vercel.app](https://my-star-readin-site-de-notation-de-livres.vercel.app)

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Architecture du projet](#architecture-du-projet)
- [Installation et lancement](#installation-et-lancement)
- [Variables d'environnement](#variables-denvironnement)
- [API — Endpoints](#api--endpoints)

---

## Fonctionnalités

### Visiteurs (non connectés)
- Consulter tous les livres disponibles sur la page d'accueil
- Voir les **3 livres les mieux notés** par la communauté
- Consulter la fiche détaillée d'un livre (titre, auteur, année, genre, note moyenne)

### Utilisateurs connectés
- **Créer un compte** et se connecter
- **Ajouter un livre** avec titre, auteur, année de publication, genre, note personnelle et image de couverture
- **Modifier** un livre qu'on a publié
- **Supprimer** un livre qu'on a publié
- **Noter** n'importe quel livre de 1 à 5 étoiles (une note par utilisateur et par livre)

---

## Stack technique

### Frontend
| Technologie | Rôle |
|---|---|
| React 18 | Framework UI |
| React Router v6 | Navigation |
| React Hook Form | Gestion des formulaires |
| Axios | Requêtes HTTP |
| FontAwesome | Icônes (étoiles) |
| Fredoka One + Nunito | Typographie (Google Fonts) |

### Backend
| Technologie | Rôle |
|---|---|
| Node.js + Express 5 | Serveur API REST |
| MongoDB + Mongoose | Base de données |
| JSON Web Token (JWT) | Authentification |
| bcrypt | Hashage des mots de passe |
| Multer | Réception des fichiers image |
| Sharp | Optimisation et redimensionnement des images |
| Cloudinary | Hébergement des images en production |
| dotenv | Gestion des variables d'environnement |

### Déploiement
- **Frontend** : Vercel
- **Backend** : Render
- **Base de données** : MongoDB Atlas

---

## Architecture du projet

```
my-star-readin/
├── Frontend/               # Application React
│   ├── public/             # Fichiers statiques (favicon, og-image, manifest)
│   └── src/
│       ├── components/     # Composants réutilisables
│       │   ├── Books/      # BookItem, BookForm, BookRatingForm, BestRatedBooks
│       │   ├── Header/     # Barre de navigation
│       │   └── Footer/     # Pied de page
│       ├── pages/          # Pages de l'application
│       │   ├── Home/       # Page d'accueil
│       │   ├── Book/       # Fiche détail d'un livre
│       │   ├── AddBook/    # Ajout d'un livre
│       │   ├── updateBook/ # Modification d'un livre
│       │   └── SignIn/     # Connexion / Inscription
│       ├── images/         # Assets visuels
│       ├── lib/            # Fonctions utilitaires et hooks
│       └── utils/          # Configuration (URL de l'API)
│
└── Backend/                # API REST Node.js
    ├── controllers/        # Logique métier (books, users)
    ├── middleware/         # Auth JWT, Multer, Sharp, Cloudinary
    ├── models/             # Schémas Mongoose (Book, User)
    ├── routes/             # Définition des routes API
    └── server.js           # Point d'entrée du serveur
```

---

## Installation et lancement

### Prérequis
- Node.js v18+
- Un compte MongoDB Atlas
- Un compte Cloudinary

### Backend

```bash
cd Backend
npm install
npm run dev   # développement (nodemon)
npm start     # production
```

Le serveur démarre sur `http://localhost:4000`.

### Frontend

```bash
cd Frontend
npm install
npm start
```

L'application s'ouvre sur `http://localhost:3000`.

---

## Variables d'environnement

### Backend — `Backend/.env`

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=votre_secret_jwt
CLOUDINARY_CLOUD_NAME=votre_cloud_name
CLOUDINARY_API_KEY=votre_api_key
CLOUDINARY_API_SECRET=votre_api_secret
```

### Frontend — `Frontend/.env.local`

```env
REACT_APP_API_URL=https://votre-backend.onrender.com
```

> Sans cette variable, le frontend pointe par défaut sur `http://localhost:4000`.

---

## API — Endpoints

### Authentification

| Méthode | Route | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/signup` | Créer un compte | Non |
| `POST` | `/api/auth/login` | Se connecter | Non |

### Livres

| Méthode | Route | Description | Auth |
|---|---|---|---|
| `GET` | `/api/books` | Récupérer tous les livres | Non |
| `GET` | `/api/books/bestrating` | Top 3 des livres les mieux notés | Non |
| `GET` | `/api/books/:id` | Récupérer un livre par son ID | Non |
| `POST` | `/api/books` | Ajouter un livre (avec image) | Oui |
| `PUT` | `/api/books/:id` | Modifier un livre | Oui |
| `DELETE` | `/api/books/:id` | Supprimer un livre | Oui |
| `POST` | `/api/books/:id/rating` | Noter un livre (1 à 5) | Oui |

> Les routes protégées nécessitent un header `Authorization: Bearer <token>`.

---

*My Star ReadIn — v2.0.0*
