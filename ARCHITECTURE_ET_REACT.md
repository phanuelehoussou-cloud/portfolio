# Guide d'Architecture & Utilisation de React dans le Portfolio

Ce document détaille de manière pédagogique comment **React 19** et **Vite** sont utilisés pour faire fonctionner votre portfolio, comment les composants sont découpés, et comment le flux de données et le rendu s'articulent.

---

## 1. Vue d'Ensemble & Principes Fondamentaux de React

React est une bibliothèque JavaScript déclarative basée sur des **composants réutilisables**. Au lieu de manipuler directement le DOM avec `document.getElementById` ou `innerHTML` à chaque changement, React utilise le concept d'**état (`state`)** et de **DOM Virtuel** :
- **Déclaratif :** Vous décrivez à quoi l'interface doit ressembler pour un état donné, et React met à jour automatiquement l'écran de manière optimale.
- **JSX (JavaScript XML) :** Une syntaxe qui combine la puissance de JavaScript avec une structure visuelle similaire au HTML.
- **Unidirectionnalité du flux de données :** Les données circulent des composants parents vers les composants enfants (via les `props`).

---

## 2. Arborescence & Architecture du Projet

```text
portfolio/
├── index.html              <-- Point d'entrée HTML chargé par le navigateur
├── package.json            <-- Liste des dépendances (React 19, Bootstrap, FontAwesome, etc.)
├── vite.config.js          <-- Configuration de Vite (bundler ultra-rapide)
│
├── public/                 <-- Fichiers statiques servis tels quels
│   ├── favicon.svg         <-- Icône de l'onglet du navigateur
│   └── icons.svg
│
└── src/                    <-- Code source de l'application React
    ├── main.jsx            <-- Point de montage React sur le DOM HTML (#root)
    ├── App.jsx             <-- Composant racine assemblant toutes les sections
    ├── App.css             <-- Styles globaux et conteneurs principaux
    ├── index.css           <-- Thème global : variables CSS, couleurs dark mode, polices
    │
    ├── assets/             <-- Médias importés dans le code (images, logos)
    │   └── profile.jpg     <-- Votre photo de profil
    │
    └── components/         <-- Composants modulaires découpés par section
        ├── Navbar.jsx & Navbar.css     <-- Barre de navigation fixe & responsive
        ├── Hero.jsx & Hero.css         <-- En-tête d'introduction ("Qui je suis ?")
        ├── About.jsx & About.css       <-- Détails du profil, citation CV & loisirs
        ├── Skills.jsx & Skills.css     <-- Compétences, jauges, timeline & CV
        ├── Projects.jsx & Projects.css <-- Galerie de projets, filtres & modale
        ├── Contact.jsx & Contact.css   <-- Formulaire interactif & coordonnées
        └── Footer.jsx & Footer.css     <-- Pied de page, copyright & bouton retour
```

---

## 3. Le Cycle de Démarrage : Du HTML à l'Écran

### Étape 1 : `index.html`
Le navigateur commence par lire ce fichier. Il contient une balise cible unique :
```html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

### Étape 2 : `src/main.jsx`
C'est le pont entre le DOM du navigateur et React :
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
- `createRoot` prend la `div#root` et en fait la racine de l'arbre de composants.
- Il injecte Bootstrap et vos styles globaux, puis affiche `<App />`.

### Étape 3 : `src/App.jsx`
Le composant maître qui assemble les différentes sections :
```jsx
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
```
Chaque balise comme `<Hero />` ou `<Skills />` est un **composant autonome** qui gère sa propre logique et son propre affichage.

---

## 4. Comment React est Utilisé dans Votre Code : Les Hooks Clés

### A. Le Hook `useState` (Gestion de l'état local)
L'état représente les variables qui, lorsqu'elles changent, doivent provoquer un rafraîchissement visuel de l'interface.

- **Exemple 1 : Effet machine à écrire (`Hero.jsx`)**
  ```jsx
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  ```
  À chaque lettre ajoutée ou effacée, `setDisplayText(...)` redéclenche l'affichage du nouveau texte sans recharger la page.

- **Exemple 2 : Onglets dynamiques (`Skills.jsx`)**
  ```jsx
  const [activeTab, setActiveTab] = useState('skills');
  // Permet d'alterner entre 'skills', 'education', ou 'experience'
  ```

- **Exemple 3 : Filtre de projets & Modale (`Projects.jsx`)**
  ```jsx
  const [filter, setFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);
  ```
  Quand vous cliquez sur un filtre (*ex: Python & Flask*), seul le tableau filtré est recalculé et affiché instantanément.

---

### B. Le Hook `useEffect` (Effets de bord et cycle de vie)
`useEffect` permet d'exécuter du code après le rendu d'un composant (abonnements, timers, écouteurs d'événements).

- **Exemple 1 : Surveillance du défilement (`Navbar.jsx`)**
  ```jsx
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      // Met en surbrillance automatique la section active à l'écran
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll); // Nettoyage
  }, []);
  ```
  Le tableau `[]` vide signifie que l'écouteur est branché une seule fois à l'ouverture, et la fonction retournée nettoie l'écouteur si le composant est démonté.

- **Exemple 2 : Animations d'apparition à l'écran (`IntersectionObserver`)**
  Présent dans `About.jsx`, `Skills.jsx`, `Projects.jsx` et `Contact.jsx` :
  ```jsx
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.fade-in-up').forEach((el) => {
            el.classList.add('visible');
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  ```

---

### C. Le Hook `useRef` (Accès direct à un élément du DOM)
Utilisé pour cibler une section précise sans manipuler manuellement des sélecteurs globaux :
```jsx
const sectionRef = useRef(null);
// Attribué dans le JSX :
<section ref={sectionRef} className="...">
```

---

## 5. Rendu Dynamique et Listes (`.map()`)

Plutôt que d'écrire 6 fois le même bloc HTML pour 6 projets, React permet d'itérer sur des tableaux JavaScript :
```jsx
{filteredProjects.map((project) => (
  <div key={project.id} className="col-md-6 col-lg-4">
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <button onClick={() => setActiveModalProject(project)}>
        En savoir plus
      </button>
    </div>
  </div>
))}
```
- L'attribut `key={project.id}` permet à React de suivre chaque carte individuellement pour ne réafficher que celle qui bouge.

---

## 6. Styles et Design Modulaire

- **Variables CSS globales (`src/index.css`) :** Couleurs néon, fonds sombres (`--dark-1`, `--dark-2`), dégradés et transitions.
- **Feuilles de style dédiées par composant :** Chaque composant possède son fichier `.css` compagnon (`Hero.css`, `Navbar.css`, etc.) pour éviter les conflits de nommage et faciliter la maintenance.
- **Intégration Bootstrap 5 :** Fournit le système de grille réactive (`container`, `row`, `col-lg-6`, etc.) et la compatibilité mobile native.
