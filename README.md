# stevencompere.com

Site personnel de Steven Compère, docteur en chimie des matériaux et ingénieur chimiste.
Site statique (HTML/CSS/JS, sans dépendance ni étape de compilation) publié par GitHub Pages
depuis la branche `main`, avec le domaine défini dans `CNAME`.

## Principe

La page est volontairement courte et sobre : c'est une vitrine, pas le CV. Une phrase par poste,
quatre familles de compétences, des références abrégées, pas de bandeau de chiffres. Le détail
(missions, formation, engagements) se trouve dans les CV en PDF ; la liste des communications
reste sur la page, repliée par défaut.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Tout le contenu de la page, en français et en anglais |
| `assets/css/site.css` | Mise en page et couleurs (variables en tête de fichier, modes clair et sombre) |
| `assets/js/site.js` | Bascule FR/EN, menu mobile, lien actif, animations |
| `assets/fonts/` | Polices auto-hébergées (Source Serif 4, IBM Plex Sans et Mono, licence OFL) |
| `assets/img/` | Favicon, icône Apple et image d'aperçu pour les partages (`og-card.png`, 1200×630) |
| `CV_Steven_Compere.pdf` | CV en français, proposé quand la page est en français |
| `CV_Steven_Compere_EN.pdf` | CV en anglais, proposé quand la page est en anglais |
| `portrait.jpg` | Photo de profil |

## Modifier le contenu

Chaque texte existe en deux versions côte à côte :

```html
<span lang="fr">Texte en français</span><span lang="en">English text</span>
```

Le bouton FR/EN masque simplement l'une des deux. Pensez à modifier les deux versions.
Le lien `https://stevencompere.com/?lang=en` ouvre directement la version anglaise.

**Ajouter une publication** : dans `index.html`, section `03 PUBLICATIONS`, copier un bloc
`<li class="pub reveal">…</li>`, le coller en tête de liste, puis adapter l'année, le titre,
la ligne de référence (auteurs abrégés, revue) et le DOI. Mettre à jour le nombre d'articles
dans la phrase d'introduction de la section.

**Ajouter une communication** : dans la même section, bloc repliable « Communications en
congrès », copier un bloc `<li class="conf">…</li>` et le coller en tête de liste. Mettre à
jour le total dans la phrase du bloc.

**Mettre à jour le CV** : remplacer `CV_Steven_Compere.pdf` (français) et/ou `CV_Steven_Compere_EN.pdf`
(anglais) en gardant exactement les mêmes noms de fichiers.

**Changer une couleur** : modifier les variables `--accent`, `--ink`, etc. au début de
`assets/css/site.css` (bloc `:root` pour le mode clair, bloc `prefers-color-scheme: dark`
pour le mode sombre).

**Après une modification de `site.css`** : changer le suffixe `?v=…` du lien vers la feuille
de style, en haut de `index.html`, pour que les visiteurs ne gardent pas l'ancienne en cache.

## Aperçu en local

```bash
python -m http.server 8000
```

puis ouvrir <http://localhost:8000>.
