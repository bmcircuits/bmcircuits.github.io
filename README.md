# BMCircuits Marketing Site

This site is built on the TEMPLATED "Theory" theme with enhancements for a Jekyll-powered portfolio.

## Projects collection

A custom Jekyll collection `_projects/` models portfolio items. Each project outputs a page using the `project` layout and is listed on `portfolio.html`.

- Collection defined in `_config.yml`.
- Output URLs: `/projects/:slug/`.
- Default layout: `project`.

### Front matter fields

Add a new Markdown file under `_projects/your-slug.md` using this schema:

```
---
layout: project
# Required
title: My Project Title
slug: your-slug
# Recommended
year: 2025
client: ACME Corp
role: Lead Engineer
stack: [KiCad, STM32, FreeRTOS]
tags: [electronics, embedded, stm32]
summary: One-sentence overview used on cards.
# Optional
outcomes:
  - Bullet point outcome A
  - Bullet point outcome B
images:
  # Either strings (paths) or objects with src/alt
  - /assets/projects/your-slug/hero.jpg
  - src: /assets/projects/your-slug/detail.jpg
    alt: Test setup on the bench
links:
  - label: Source
    url: https://github.com/example/repo
featured: false
---

Markdown body here. Add sections, lists, etc.
```

Place representative images in `assets/projects/<slug>/`. Use web-friendly sizes (ideally < 2000px wide) and filenames without spaces.

### Featured projects

Set `featured: true` in the project front matter to mark it for homepage use. You can render featured items from any page with Liquid, for example:

```
{% assign featured = site.projects | where: 'featured', true %}
{% for p in featured %}
  <a href="{{ p.url }}">{{ p.title }}</a>
{% endfor %}
```

## Portfolio listing and filtering

- `portfolio.html` loops through `site.projects` to build a responsive card grid.
- Each card exposes `data-tags` for client-side filtering.
- The filter UI generates tag buttons from all project tags.
- Filtering is implemented in `assets/js/projects.js`.

## Project pages (layout)

- `_layouts/project.html` renders the project metadata, optional links, the markdown body, and a responsive image gallery.
- The gallery images are lazy-loaded and open in a lightweight lightbox.
- Meta badges are rendered via `_includes/project-meta.html` (year, client, role, stack, tags).

## Assets

- Styling for badges, gallery, and portfolio grid lives in `assets/css/projects.css`.
- JS for lazy loading, lightbox, and filtering lives in `assets/js/projects.js`.

## Development notes

- This repository is a static site; if using Jekyll locally, run `bundle exec jekyll serve` and visit `http://localhost:4000`.
- Ensure images referenced in project front matter exist under `assets/projects/<slug>/`.
- Keep tags short and lowercase for cleaner URLs and filters.
