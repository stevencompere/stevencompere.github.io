# stevencompere.com

Site personnel de Steven Compère, docteur-ingénieur en chimie des matériaux.
Site statique (HTML/CSS/JS, sans dépendance ni étape de compilation) publié par GitHub Pages
depuis la branche `main`, avec le domaine défini dans `CNAME`.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Tout le contenu de la page, en français et en anglais |
| `assets/css/site.css` | Mise en page et couleurs (variables en tête de fichier, modes clair et sombre) |
| `assets/js/site.js` | Bascule FR/EN, menu mobile, lien actif, animations |
| `assets/fonts/` | Polices auto-hébergées (Source Serif 4, IBM Plex Sans et Mono, licence OFL) |
| `assets/img/` | Favicon, icône Apple et image d'aperçu pour les partages (`og-card.png`, 1200×630) |
| `CV_Steven_Compere.pdf` | CV téléchargeable depuis le site |
| `portrait.jpg` | Photo de profil |

## Modifier le contenu

Chaque texte existe en deux versions côte à côte :

```html
<span lang="fr">Texte en français</span><span lang="en">English text</span>
```

Le bouton FR/EN masque simplement l'une des deux. Pensez à modifier les deux versions.
Le lien `https://stevencompere.com/?lang=en` ouvre directement la version anglaise.

**Ajouter une publication** : dans `index.html`, section `04 PUBLICATIONS`, copier un bloc
`<li class="pub reveal">…</li>`, le coller en tête de liste, puis adapter l'année, le titre,
les auteurs, la revue et le DOI. Mettre à jour les compteurs (bandeau de chiffres en haut de
page et pastilles au-dessus de la liste).

**Mettre à jour le CV** : remplacer `CV_Steven_Compere.pdf` en gardant le même nom de fichier.

**Changer une couleur** : modifier les variables `--accent`, `--ink`, etc. au début de
`assets/css/site.css` (bloc `:root` pour le mode clair, bloc `prefers-color-scheme: dark`
pour le mode sombre).

## Aperçu en local

```bash
python -m http.server 8000
```

puis ouvrir <http://localhost:8000>.
