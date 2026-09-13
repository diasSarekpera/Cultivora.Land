# Cultivora Land — Le jardin du savoir

Bibliothèque de lecture. Palette monochrome verte (forêt profonde → vert
clair) + crème comme unique neutre chaud, sans doré. Trois portes
d'entrée dans le contenu : **Comprendre le monde**, **Se comprendre
soi-même**, **Créer de la valeur**.

## Structure

```
index.html                     Page d'accueil (hero, 3 portes, derniers articles)
pages/blog/<slug>/index.html   Page de lecture d'un article (1 exemple construit)
styles/bases/                  Variables, reset, styles globaux
styles/components/             Header, footer
styles/pages/home/             Hero, 3 portes, grille des derniers articles
styles/pages/article/          Page de lecture d'un article
assets/images/logo.png         Logo officiel
JSON/content.json              Les 8 articles classés par porte
content-source/bibliotheque/   Les 8 articles sources en Markdown
content-source/pitch.md        Le pitch/mission du projet (utile pour la page À propos)
```

## Fait

- Page d'accueil complète et fonctionnelle (vrai HTML/CSS, pas une image).
- Modèle de page de lecture construit et validé sur l'article
  *Sommes-nous vraiment nos pensées ?* — gabarit réutilisable pour les
  7 autres articles.
- Logo officiel intégré (header + footer).

## Pas encore fait

- Générer les pages de lecture pour les 7 autres articles à partir du
  même gabarit.
- Page « Nos contenus » (liste filtrable par porte).
- Pages À propos, Contact, Abonnement.
- Le temps de lecture affiché sur la page article est actuellement une
  estimation manuelle — à calculer automatiquement si le nombre
  d'articles grandit.

## Point d'attention

Les images de vignettes préparées (`lecture.png` et les autres captures
type miniature YouTube) utilisent un bandeau doré — ce qui contredit la
décision de palette 100% verte + crème prise pour le reste du site.
Elles n'ont pas été intégrées telles quelles pour cette raison. À
statuer : les refaire sans doré, ou les garder uniquement pour un usage
externe (réseaux sociaux) séparé de l'identité du site.
