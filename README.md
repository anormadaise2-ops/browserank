# BrowserRank

Mini-site statique en français pour comparer les navigateurs : points forts, confidentialité, anonymat, vitesse, légèreté et personnalisation.

## Prévisualiser
Ouvrez `index.html` dans un navigateur. Le site fonctionne sans serveur et sans base de données. La police peut être chargée depuis Google Fonts ; une connexion Internet est nécessaire pour celle-ci.

## Avant la publication — important
Remplacez toutes les occurrences de `https://VOTRE-DOMAINE.example/` dans :
- `index.html` (balise canonical et données structurées JSON-LD)
- `robots.txt`
- `sitemap.xml`

par l'URL publique réelle du site, avec le bon protocole HTTPS. Si vous utilisez GitHub Pages à l'adresse `https://UTILISATEUR.github.io/NOM-DU-REPO/`, utilisez cette adresse exacte et ajustez aussi le sitemap si le site est publié dans un sous-dossier.

## Publication gratuite avec GitHub Pages
1. Créez un dépôt public sur GitHub.
2. Envoyez tous les fichiers de ce dossier à la racine du dépôt.
3. Dans **Settings → Pages**, sélectionnez **Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Attendez la publication, puis ouvrez l'URL affichée par GitHub Pages.
5. Corrigez les URL canoniques et le sitemap avant de demander l'indexation.
6. Dans Google Search Console, ajoutez la propriété correspondant à l'URL publiée, vérifiez-la, puis soumettez `sitemap.xml` et demandez l'indexation de la page d'accueil.

## SEO inclus
- Titre et description meta en français
- Balise canonical à remplacer
- Directive robots index/follow
- `robots.txt` et `sitemap.xml`
- Données structurées `WebSite`
- Structure HTML sémantique et mise en page responsive

## Transparence du classement
Les notes dans `script.js` sont des évaluations éditoriales indicatives, pas des mesures de laboratoire ni un classement universel. Elles peuvent être modifiées en éditant l'objet `browsers`. Aucun score ne garantit l'anonymat. Pour le sujet de l'anonymat, le site distingue explicitement Tor Browser des protections anti-traqueurs des navigateurs du quotidien.

## Limites
- Être prêt techniquement pour l'indexation ne garantit pas que Google indexera la page.
- Pas de promesse d'anonymat absolu : les comptes connectés, empreintes de navigateur, réglages et comportements peuvent permettre de vous reconnaître.
- Les liens de téléchargement pointent vers les sites officiels connus ; vérifiez régulièrement qu'ils sont toujours exacts.
