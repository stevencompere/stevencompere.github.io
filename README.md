# stevencompere.com

Site personnel de Steven Compère. Une page statique (HTML et CSS, sans dépendance ni étape de
compilation), publiée par GitHub Pages depuis la branche `main`, avec le domaine défini dans `CNAME`.

## Principe

Une page courte et sobre : qui je suis, mon parcours, mes publications, comment me joindre.
Une colonne, une police, pas d'effets. Le détail est dans les CV en PDF.

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | Tout le contenu, en français et en anglais |
| `assets/css/site.css` | Mise en page ; les couleurs sont en tête de fichier (mode clair, puis mode sombre) |
| `assets/fonts/` | Police du site (Source Serif 4, licence OFL) |
| `assets/img/` | Icônes du site |
| `portrait.jpg` | Photo, aussi utilisée comme image d'aperçu lors d'un partage |
| `CV_Steven_Compere.pdf` | CV en français, proposé quand la page est en français |
| `CV_Steven_Compere_EN.pdf` | CV en anglais, proposé quand la page est en anglais |
| `404.html` | Page affichée pour une adresse inconnue |

## Modifier le contenu

Chaque texte existe en deux versions côte à côte :

```html
<span lang="fr">Texte en français</span><span lang="en">English text</span>
```

Une seule s'affiche, selon la langue de la page. Pensez à modifier les deux versions.
Les boutons FR / EN, en haut de page, changent la langue sans recharger la page. L'adresse se termine
alors par `?lang=en` ou `?lang=fr`, ce qui permet d'envoyer un lien dans une langue précise.

**Ajouter une publication** : dans `index.html`, sous « Publications et brevet », copier une ligne
`<li>…</li>`, la coller en tête de liste, puis adapter les auteurs, le titre, la référence et le lien DOI.

**Mettre à jour le CV** : remplacer `CV_Steven_Compere.pdf` et/ou `CV_Steven_Compere_EN.pdf`
en gardant exactement les mêmes noms de fichiers.

**Après une modification de `site.css`** : changer le suffixe `?v=…` du lien vers la feuille de style,
dans `index.html` et dans `404.html`, pour que les visiteurs ne gardent pas l'ancienne en cache.

## Aperçu en local

```bash
python -m http.server 8000
```

puis ouvrir <http://localhost:8000>.
