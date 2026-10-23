# Hèctor Gutiérrez — Portfolio

Static, bilingual portfolio built with plain HTML, CSS, and JavaScript. It has no build step and is ready to publish with GitHub Pages.

## Preview locally

Open `index.html` in a browser, or run a local static server from this folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish with GitHub Pages

1. Push these files to the root of a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing the site (usually `main`) and the `/ (root)` folder, then save.

GitHub Pages will publish the static site; no workflow, package installation, or build command is needed. Relative asset paths allow it to work from either a user-site or project-site URL.

## Update content

Edit the Catalan and English text in `index.html`. Add translations using `data-ca` and `data-en` attributes so the language switch continues to work. Keep the stylesheet and script paths relative for GitHub Pages project sites.
