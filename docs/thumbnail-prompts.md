# Prompts : miniatures des articles (palette verte, sans doré)

Structure identique à ton exemplaire ("Pourquoi l'argent perd-il de sa
valeur ?") : portrait pensif à gauche dans une forêt éclairée par la
lumière dorée du soleil (ça, on garde, c'est de l'éclairage
photographique naturel, pas une couleur d'interface), titre en grand à
côté, bandeau vertical vert foncé à droite avec le logo, le nom, la
tagline et le bouton "Lecture".

**Seul changement : tous les accents dorés du bandeau (ligne de
séparation, tagline, bouton lecture, libellé "LECTURE") passent au vert
clair `#7ed957`, plus aucune trace de doré dans l'interface.**

Format : paysage 16:9, ~1280×720.

---

## Prompt de base (à copier, puis remplacer le titre à chaque fois)

```
Miniature de type vignette d'article, format paysage 16:9, mockup UI
haute fidélité. À gauche (environ 70% de la largeur) : photo réaliste
d'une personne au teint mat, cheveux bouclés courts, en position
pensive, main sur le menton, regardant vers le haut à droite, dans une
forêt dense avec des rayons de soleil doré traversant les arbres en
arrière-plan (lumière chaude naturelle, feuillage flouté au premier
plan dans les coins). Par-dessus la photo, à droite du visage, un
titre en grand texte gras condensé sans-serif, sur 2 à 3 lignes,
aligné à gauche, en blanc avec une ombre portée noire douce pour la
lisibilité, sauf la ligne ou le groupe de mots le plus important, qui
est en vert `#2f8f4e` (vert émeraude, pas trop clair pour rester
lisible sur fond de forêt).

À droite (environ 30% de la largeur) : bandeau vertical à fond vert
foncé uni (`#0c2417`), coins extérieurs arrondis, avec une fine bordure
verte claire (`#7ed957`) sur le bord droit et en haut. À l'intérieur,
centré verticalement dans la moitié supérieure : le logo circulaire
Cultivora Land (silhouette de croissant de lune combinant un profil de
visage et des feuilles qui poussent, en dégradé de vert), puis en
dessous "CULTIVORA" et "LAND" en blanc, gras, majuscules, sur deux
lignes centrées. Sous le nom, un petit point vert clair (`#7ed957`)
avec un fin trait horizontal vert clair de chaque côté. Puis "Le
Jardin du Savoir" en italique, dans une police serif fine, en couleur
crème (`#f6f1e4`), PAS en doré.

Plus bas dans le bandeau, un cercle avec une bordure fine vert clair
(`#7ed957`) contenant une icône de triangle "lecture/play" de la même
couleur vert clair, et sous le cercle le mot "LECTURE" en majuscules,
espacé, en vert clair (`#7ed957`), PAS en doré.

Aucune trace de couleur dorée ou jaune dans le bandeau : uniquement
vert foncé, vert clair, blanc et crème.

TITRE À AFFICHER SUR LA MINIATURE :
"[TITRE ICI]"
```

---

## Les 8 titres à utiliser (un prompt par article)

Pour chaque article, reprends le prompt de base et remplace la
dernière ligne par le découpage indiqué (la partie **en gras** est
celle à mettre en vert émeraude, le reste en blanc).

| Article (slug)                                   | Titre à afficher sur la miniature                          |
|---                                                 |---                                                           |
| `comment-les-forets-rafraichissent-la-planete`    | COMMENT **LES FORÊTS** RAFRAÎCHISSENT LA PLANÈTE           |
| `pourquoi-payons-nous-des-impots`                 | POURQUOI **PAYONS-NOUS** DES IMPÔTS ?                       |
| `pourquoi-sommes-nous-en-colere`                  | POURQUOI SOMMES-NOUS **EN COLÈRE ?**                        |
| `pourquoi-baillons-nous`                          | POURQUOI **BÂILLONS-NOUS ?**                                |
| `pourquoi-dormons-nous`                           | POURQUOI **DORMONS-NOUS ?**                                 |
| `sommes-nous-vraiment-nos-pensees`                | SOMMES-NOUS VRAIMENT **NOS PENSÉES ?**                      |
| `pourquoi-largent-perd-il-de-sa-valeur`           | POURQUOI **L'ARGENT** PERD-IL DE SA VALEUR ?                |
| `pourquoi-une-bonne-idee-ne-suffit-pas`           | POURQUOI **UNE BONNE IDÉE** NE SUFFIT PAS ?                 |

Note sur le dernier : le titre complet de l'article ("...pour créer
une entreprise ?") est trop long pour tenir sur une miniature, je l'ai
raccourci pour l'image seulement. Le titre complet reste inchangé sur
la page de l'article elle-même.

---

## Exemple concret entièrement rédigé (celui que tu avais déjà)

```
Miniature de type vignette d'article, format paysage 16:9, mockup UI
haute fidélité. À gauche (environ 70% de la largeur) : photo réaliste
d'une personne au teint mat, cheveux bouclés courts, en position
pensive, main sur le menton, regardant vers le haut à droite, dans une
forêt dense avec des rayons de soleil doré traversant les arbres en
arrière-plan. Par-dessus la photo, titre en grand texte gras condensé
sans-serif sur 3 lignes, aligné à gauche : "POURQUOI" (blanc),
"L'ARGENT" (vert émeraude #2f8f4e), "PERD-IL DE SA VALEUR ?" (blanc).

À droite, bandeau vertical vert foncé (#0c2417) à coins arrondis,
bordure vert clair (#7ed957). Logo circulaire Cultivora Land en haut,
puis "CULTIVORA LAND" en blanc gras, point et trait vert clair, "Le
Jardin du Savoir" en italique crème (#f6f1e4), bouton cercle "lecture"
et libellé "LECTURE" tous les deux en vert clair (#7ed957), aucun
doré dans le bandeau.
```
