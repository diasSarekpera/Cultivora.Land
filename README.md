# Cultivora Land : Le jardin du savoir

Bibliothèque de lecture. Palette monochrome verte (forêt profonde → vert
clair) + crème comme unique neutre chaud, sans doré. Trois portes
d'entrée dans le contenu : **Comprendre le monde**, **Se comprendre
soi-même**, **Créer de la valeur**.

## Structure

```
index.html                          Page d'accueil (hero, 3 portes, derniers articles)
pages/blog/<slug>/index.html        Page de lecture d'un article (8/8 construits)
                                     (la page listing pages/blog/ a été retirée, remplacée par pages/contenus/)
pages/contenus/index.html           Liste filtrable par porte (?porte=<id>)
pages/about/index.html              À propos / mission (contenu tiré de pitch.md)
pages/contact/index.html            Formulaire de contact (non connecté, voir plus bas)
pages/abonnement/index.html         Formulaire d'abonnement (non connecté, voir plus bas)
styles/                             Variables, reset, styles globaux, composants, pages
assets/images/logo.png              Logo officiel
assets/images/og-default.jpg        Image de partage par défaut (1200×630)
assets/images/articles/<slug>.jpg   Vignette + image de partage propre à chaque article
JSON/content.json                   Les 8 articles classés par porte (source de vérité)
content-source/bibliotheque/        Les 8 articles sources en Markdown
content-source/pitch.md             Le pitch/mission du projet
```

## Fait (mise à jour)

- Toutes les pages liées depuis le header/footer/accueil existent désormais :
  accueil, à propos, nos contenus (filtrable), blog (liste), 8 articles de
  blog, contact, abonnement. Plus aucun lien du site ne mène vers une page
  inexistante : c'était la cause des « Not Found ».
- Toutes les pages utilisent des chemins absolus (`/pages/...`,
  `/assets/...`, `/styles/...`) pour éviter les erreurs de chemins relatifs
  une fois déployé.
- Vignettes vertes (sans doré, conformes à `docs/thumbnail-prompts.md`)
  intégrées : sur l'accueil, la page « Nos contenus », le blog et en image
  de couverture sur chaque page d'article.
- Balises **Open Graph** et **Twitter Card** ajoutées sur toutes les pages
  (`og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`...).
  Chaque article utilise sa propre vignette comme image de partage ; les
  autres pages utilisent `assets/images/og-default.jpg`, une image générée
  à partir du logo (1200×630). Un lien `canonical` est aussi présent sur
  chaque page.
- Favicon ajouté (logo).

## Pas encore fait / à faire avant mise en ligne définitive

- **Formulaires (Contact et Abonnement) non connectés.** Ce sont des sites
  statiques (pas de backend) : les formulaires sont prêts visuellement mais
  ne soumettent nulle part. Branchez-les à un service (Formspree, Brevo,
  Mailchimp...) ou ajoutez un petit backend. L'e-mail de contact affiché
  (`bonjour@cultivora-land.com`) est un espace réservé à remplacer par
  votre vraie adresse.
- Les liens de réseaux sociaux du footer pointent vers `#`, à remplacer
  par les vrais comptes.
- Le temps de lecture affiché est calculé automatiquement (nombre de mots
  du fichier Markdown source ÷ 180 mots/minute), à ajuster si besoin.

## Après déploiement

Pour vérifier que l'image de partage apparaît bien sur les réseaux :
- Facebook/LinkedIn : https://developers.facebook.com/tools/debug/
- Twitter/X : https://cards-dev.twitter.com/validator (ou partager en DM)
- Général : https://www.opengraph.xyz/

Ces outils lisent en direct la version déployée : pensez à redéployer le
site sur Render avant de tester, et à vider leur cache si vous aviez déjà
testé une ancienne version.
