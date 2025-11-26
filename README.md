# CamerEat 🍔

![Logo CamerEat](public/images/phone.png)

Bienvenue sur le projet **CamerEat**, la vitrine web d'un service de livraison de repas moderne et dynamique. Ce projet a pour but de présenter le service aux utilisateurs, aux futurs restaurants partenaires et aux coursiers.

## 📜 Description

CamerEat est une application web front-end qui sert de page d'accueil pour un service de livraison fictif. Le site est conçu pour être attractif, responsive et interactif, avec des animations fluides pour améliorer l'expérience utilisateur.

## ✨ Fonctionnalités

- **Page d'accueil (`index.html`)** : Une page de présentation complète avec plusieurs sections :
  - Un **héros** percutant pour capter l'attention.
  - Des **catégories** de produits (Restauration, Courses, etc.).
  - Une section pour télécharger l'**application mobile**.
  - Des sections dédiées pour **devenir partenaire** ou **coursier**.
  - Un appel à l'action clair et un pied de page complet.
- **Page Partenaire (`partenaire.html`)** :
  - Un formulaire élégant et fonctionnel permettant aux restaurants de soumettre leur demande de partenariat.
  - Intégration avec **EmailJS** pour envoyer les données du formulaire directement par e-mail.
- **Page Commander (`commander.html`)** :
  - Une page incitant les utilisateurs à télécharger l'application mobile avec des liens vers l'App Store et Google Play.
- **Interactivité et Animations (`main.js`)** :
  - La barre de navigation change d'apparence au défilement.
  - Les sections apparaissent en fondu au fur et à mesure que l'utilisateur navigue.
  - Le défilement vers les ancres (comme "Devenir coursier") est fluide.

## 🛠️ Technologies utilisées

- **HTML5** : Pour la structure sémantique des pages.
- **CSS3** : Pour le style, le design responsive (via Media Queries) et les animations de base.
- **JavaScript (ES6+)** : Pour la dynamique du site, la gestion des événements et les animations via l'API `IntersectionObserver`.
- **Vite** : Comme outil de build et serveur de développement rapide pour le front-end.
- **EmailJS** : Pour gérer l'envoi de formulaires côté client sans nécessiter de backend.

## 🚀 Installation et Lancement

Pour lancer le projet sur votre machine locale, suivez ces étapes :

1.  **Clonez le dépôt** (si vous utilisez Git) :
    ```bash
    git clone <url-du-depot>
    cd project-folder
    ```

2.  **Installez les dépendances** :
    Le projet utilise un environnement `node_modules`, ce qui implique l'utilisation de `npm` ou `yarn`.
    ```bash
    npm install
    ```

3.  **Lancez le serveur de développement** :
    Le projet semble configuré avec Vite, la commande standard est :
    ```bash
    npm run dev
    ```

4.  Ouvrez votre navigateur et allez à l'adresse `http://localhost:5173` (ou le port indiqué dans votre terminal).

## ⚙️ Configuration

Pour que le formulaire de la page `partenaire.html` fonctionne, vous devez configurer vos propres identifiants **EmailJS**.

1.  Créez un compte sur emailjs.com.
2.  Récupérez votre **User ID**.
3.  Créez un service de messagerie (ex: Gmail) et récupérez son **Service ID**.
4.  Créez un template d'e-mail et récupérez son **Template ID**.
5.  Ouvrez le fichier `partenaire.html` et mettez à jour ces valeurs :
    - La ligne `emailjs.init("VOTRE_USER_ID");`
    - Les variables `serviceID` et `templateID` dans le script d'envoi.

## 📂 Structure des fichiers

```
├── index.html          # Page d'accueil
├── partenaire.html     # Page pour devenir partenaire
├── commander.html      # Page de téléchargement de l'app
├── main.js             # Script principal pour les animations et l'interactivité
├── style.css           # Feuille de style principale
├── public/             # Contient les ressources statiques (images, etc.)
└── package.json        # Dépendances et scripts du projet
```# sitevictrine
# sitevictrine
