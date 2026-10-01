# MusicHub

MusicHub is a static music streaming-style landing page and lyrics-view mockup built with HTML and CSS. The project recreates a modern Spotify-inspired interface with a top navigation bar, sidebar, artist panel, player controls, and a lyrics-focused main area.

## What this project does

This repository contains front-end mockups for a music platform experience. The main sections include:

- A home-style interface in [Home/home.html](Home/home.html)
- A lyrics/artist/player layout in [telaLetras/index.html](telaLetras/index.html)
- Shared branding and interface assets in [Assets](Assets)
- Styling rules in [telaLetras/style.css](telaLetras/style.css) and [Styles/global.css](Styles/global.css)

The design focuses on the visual experience of a streaming app, including:

- purple-themed dashboard styling
- artist and music metadata panel
- album art and playback controls
- song lyrics panel
- responsive, static composition for a prototype or UI concept

## Why it is useful

This project is useful for:

- learning front-end layout techniques with HTML and CSS
- prototyping a music streaming UI without a backend
- exploring a Spotify-like visual design in a lightweight project
- practicing static web page composition and asset organization

### Key features

- Spotify-inspired navigation and layout
- Dedicated lyrics view with music player at the bottom
- Artist information section with album art
- Rich iconography and brand assets for a polished mockup
- Fully static front-end, which makes it easy to open and modify locally

## Project structure

```text
.
├── Assets/
│   ├── Aleatorio.svg
│   ├── Busca.svg
│   ├── Filtrar.svg
│   ├── ...
│   ├── Logo horizontal.svg
│   └── Logo vertical.svg
├── Home/
│   ├── home.css
│   ├── home.html
│   └── home.js
├── Projeto-MusicHub/
├── Styles/
│   └── global.css
├── telaLetras/
│   ├── assets/
│   ├── index.html
│   ├── index2.html
│   ├── index3.html
│   ├── index4.html
│   ├── index5.html
│   └── style.css
├── .gitignore
└── README.md
```

## Getting started

### Prerequisites

This project is a static HTML/CSS front-end, so you do not need a package manager or build tool.

You only need:

- a modern browser
- a local web server if you prefer serving files over HTTP

### Run locally

Option 1: open the page directly in a browser

- Open [Home/home.html](Home/home.html) for the home mockup
- Open [telaLetras/index.html](telaLetras/index.html) for the lyrics/player mockup

Option 2: serve the repo locally

```bash
git clone https://github.com/luisoferreira/Projeto-MusicHub.git
cd Projeto-MusicHub
python -m http.server 8000
```

Then open:

- `http://localhost:8000/Home/home.html`
- `http://localhost:8000/telaLetras/index.html`

### Example usage

Because this is a visual mockup, the main workflow is to browse the static pages and modify the HTML/CSS to customize:

- colors and typography
- layout spacing and panels
- branding, icons, and album art
- text content and song metadata

## Documentation and help

This repository does not currently include a dedicated docs folder or formal contributor guide. For support and questions:

- open an issue in the GitHub repository: https://github.com/luisoferreira/Projeto-MusicHub/issues
- review the project files in this repository for layout and styling references

## Maintainer and contribution

The repository is maintained by the project owner, `luisoferreira`.

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Open a pull request with a clear description of the visual or functional improvement

This project is intentionally lightweight, so contributions are usually focused on:

- UI layout improvements
- design refinements
- asset updates
- accessibility and responsiveness tweaks
- new mockup pages or sections

### Repository status

- No `LICENSE` file is currently present in the repository.
- No formal `CONTRIBUTING.md` file is currently present.
- The project is a front-end mockup and does not include a backend or deployment pipeline.

## Notes

This repository is best understood as a static prototype rather than a production web application. The HTML files define the structure and the CSS files define the visual design, making it easy to adapt for learning, experimentation, or design iteration.
