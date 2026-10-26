# Cultivora Land : Le jardin du savoir

Bibliothèque de lecture. Palette monochrome verte (forêt profonde → vert
clair) + crème comme unique neutre chaud, sans doré. Trois portes
d'entrée dans le contenu : **Comprendre le monde**, **Se comprendre
soi-même**, **Créer de la valeur**.

## Structure

```
index.html                          Page d'accueil (hero, 3 portes, derniers articles)
pages/blog/<slug>/index.html        Page de lecture d'un article (7 publiés)
                                     (la page listing pages/blog/ a été retirée, remplacée par pages/contenus/)
pages/contenus/index.html           Liste filtrable par porte (?porte=<id>)
pages/about/index.html              À propos / mission (contenu tiré de pitch.md)
pages/contact/index.html            Formulaire de contact (non connecté, voir plus bas)
pages/abonnement/index.html         Formulaire d'abonnement (non connecté, voir plus bas)
styles/                             Variables, reset, styles globaux, composants, pages
assets/images/logo.png              Logo officiel
assets/images/og-default.jpg        Image de partage par défaut (1200×630)
assets/images/articles/<slug>.jpg   Vignette + image de partage propre à chaque article
JSON/content.json                   Tous les articles classés par porte (source de vérité, champ `published`)
content-source/bibliotheque/        Les articles sources en Markdown (11 fichiers)
content-source/pitch.md             Le pitch/mission du projet
```

## Publication (mise à jour)

- **Dépubliés** (pages HTML retirées du site, textes `.md`, miniatures et
  entrées JSON conservés, `published: false`) : les 4 autres articles (« Sommes-nous vraiment nos pensées ? » et « Pourquoi bâillons-nous ? » ont été republiés, ainsi que « Pourquoi dormons-nous ? »).
  Les anciennes pages restent récupérables dans l'historique git.
- **Publié** : `qui-a-reellement-ecrit-la-bible` (porte « Comprendre le monde ») et
  `sommes-nous-vraiment-nos-pensees`, `pourquoi-baillons-nous` et
  `pourquoi-avons-nous-besoin-de-croire` et `pourquoi-vieillissons-nous` (porte « Se comprendre soi-même »), ainsi que
  `pourquoi-payons-nous-des-impots` (porte « Comprendre le monde ») et
  `pourquoi-dormons-nous` (porte « Se comprendre soi-même »).
  Les miniatures des articles publiés sont toutes en place (1200×674).
  Les miniatures de ces deux articles (Bible, croire) sont en place (1200×674).
  La miniature de la Bible est en place (`assets/images/articles/qui-a-reellement-ecrit-la-bible.jpg` et `.webp`, 1200×674).
- La section « Sur le même thème » est absente de la page tant qu'aucun
  autre article n'est publié.

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


## Page d'abonnement (front prêt, backend à brancher)

Le formulaire de `pages/abonnement/` est terminé côté interface : validation de
l'adresse, état d'envoi, message de succès, messages d'erreur, champ anti-spam
(`website`, doit rester vide). Fichiers : `styles/pages/abonnement/abonnement.css`
et `assets/js/subscribe.js`.

**Contrat attendu du backend** : `POST /api/subscribe` (modifiable via l'attribut
`data-endpoint` du formulaire), corps JSON `{ "email": "..." }` :

| Réponse | Effet à l'écran |
| --- | --- |
| 2xx | « Merci, à très vite ! » (inscription enregistrée) |
| 400 / 422 | « Cette adresse e-mail ne semble pas valide. » |
| 429 | « Trop de tentatives. Réessayez dans quelques minutes. » |
| autre / réseau / > 12 s | « L'inscription est momentanément indisponible… » |

Tant que ce point d'entrée n'existe pas, un visiteur qui s'abonne voit le message
« momentanément indisponible » : aucune fausse confirmation n'est affichée.

## Partage des articles (Open Graph)

Chaque page d'article déclare sa propre miniature comme image de partage
(`og:image` et `twitter:image` → `/assets/images/articles/<slug>.jpg`, URL
absolue en `https://cultivora-land.onrender.com`). Si le domaine change, il
faut remplacer cette adresse dans les balises `og:url`, `og:image`,
`twitter:image` et `canonical` des pages.

Les réseaux sociaux gardent l'aperçu en cache : après un redéploiement ou un
changement de miniature, forcer une nouvelle lecture (Facebook : Sharing
Debugger → « Scrape Again » ; LinkedIn : Post Inspector ; WhatsApp : partager
le lien avec un paramètre en plus, ex. `?v=2`).
