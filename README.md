BMCircuits static site → Jekyll (GitHub Pages)

This repository has been migrated from a static HTML template to a GitHub Pages–compatible Jekyll structure with shared layouts and includes.

What changed
- Added core Jekyll files and folders:
  - _config.yml with site metadata, permalink style, and plugins (jekyll-seo-tag, jekyll-sitemap)
  - _layouts/default.html and _layouts/page.html
  - _includes/head.html, header.html, footer.html, analytics.html (disabled placeholder)
- Refactored pages to use shared layouts/includes
- Updated navigation and favicon to use images/BMC_Logo_v3.png
- Migrated pages:
  - index.html → Home (Jekyll page)
  - generic.html → about.md (About)
  - contact.html → contact.md (Contact)
  - elements.html retained as a reference page (not linked in nav)
  - Added placeholder pages: services.md, portfolio.md

Local development
Option A: Use Bundler with the GitHub Pages gem (recommended)
1) Ensure Ruby and Bundler are installed
2) Add a Gemfile with the following (optional; not included by default):

   source "https://rubygems.org"
   gem "github-pages", group: :jekyll_plugins

3) Install and serve:

   bundle install
   bundle exec jekyll serve

Option B: Use vanilla Jekyll
1) Install Jekyll and the plugins:

   gem install jekyll jekyll-seo-tag jekyll-sitemap

2) Serve:

   jekyll serve

The site will be available at http://localhost:4000 (baseurl may change that path; see below).

GitHub Pages considerations
- Plugins: Only allow-listed plugins run on GitHub Pages. This site uses jekyll-seo-tag and jekyll-sitemap, which are supported.
- url and baseurl: Update these in _config.yml for accurate canonical URLs and sitemap entries.
  - For user/org sites (username.github.io), leave baseurl: "" and set url to "https://username.github.io".
  - For project sites (username.github.io/repo), set url to "https://username.github.io" and baseurl to "/repo".
- Assets and links use Jekyll's relative_url filter to work with or without a baseurl.

Contact form (Formspree)
- The Contact page will render a form only if formspree_id is set in _config.yml:

  formspree_id: "your-form-id"

- If left blank, the page displays contact details and a note on enabling the form.

Structure overview
- _config.yml          Jekyll configuration
- _includes/           Shared partials (head, header, footer, analytics)
- _layouts/            Base templates (default, page)
- index.html           Home
- about.md             About
- services.md          Services (placeholder)
- portfolio.md         Portfolio (placeholder)
- contact.md           Contact (with optional Formspree form)
- assets/              CSS/JS/fonts from template
- images/              Site images (uses BMC_Logo_v3.png as logo + favicon)
- elements.html        Old reference page from template (not linked in nav)

Notes
- Do not edit the GitHub Actions or CI/CD workflow files unless required; focus on site code.
- Use the _includes and _layouts to keep pages consistent and DRY.
