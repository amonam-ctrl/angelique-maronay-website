# The Love Letter Edition — Angélique Maronay

**Updated for image rights:** Your reference photograph is **not included** in the website or deployment packages. The homepage features **newly AI-generated original still-life artwork**, created for this design: vintage books, candlelight, flowers, and a handwritten journal. The website's social-sharing thumbnail also uses that new artwork. The final files contain **no copy of the photograph you provided**.

The homepage image is `site/images/original-romantic-still-life.jpg`. Replace it at any time in Pages CMS; use only images you own, have licensed, or have permission to publish.

# Angélique Maronay | Author Website

This is your custom, responsive romance-author website. It uses **Netlify for hosting**, **GitHub for file storage** and **Pages CMS for a simple content editor**. All three have free entry plans. You keep your GoDaddy domain, angeliquemaronay.com.

## What's included

- Antique love-letter homepage and responsive mobile layout
- Featured-book section for *The Quiet Between Us* (with clearly marked temporary cover art)
- About-the-author section with optional author-photo upload
- Reader-interest email form and contact form using Netlify Forms
- A thank-you page, draft privacy note, sitemap, and favicon
- Editable copy, book-cover image, author photo, and social/purchase links through Pages CMS
- `.pages.yml` configuration for Pages CMS and `netlify.toml` for Netlify

## Best method: Launch once, then edit through a dashboard

**1. Create a free GitHub account** at https://github.com/ if you don't have one.

**2. Create a new GitHub repository** (for example, `angelique-maronay-website`). Upload the *contents of this entire folder*, not the ZIP. Keep the `site` subfolder, `.pages.yml`, and `netlify.toml` in the repository root. You can use GitHub Desktop to make uploading straightforward: https://desktop.github.com/ . A private or public repository works as long as Pages CMS and Netlify have access.

**3. Create a free Netlify account** at https://app.netlify.com/ . Choose **Add new project → Import an existing project → GitHub**. Choose your repository. Netlify should pick up the included `netlify.toml`, which publishes the `site` folder. Deploy the site.

**4. Enable forms.** In your site's Netlify dashboard, open **Forms** and enable form detection if it is not already enabled. Then redeploy the site. Two forms should appear: `reader-letters` and `author-contact`. When someone uses a form, submissions appear in the Netlify dashboard. The reader-interest form **does not automatically email newsletters**; connect a mailing service later before sending updates. Set up notifications if desired.

**5. Connect Pages CMS so you can edit without coding.** Open https://app.pagescms.org/ and sign in with GitHub. Authorize the GitHub repository and select `angelique-maronay-website`. The `.pages.yml` file should present a simple editor labeled **Angélique Maronay Website**. Open it, edit the text or upload a portrait/cover, and press Save. Pages CMS commits changes to GitHub. Netlify publishes updates automatically from the connected repository.

**6. Connect angeliquemaronay.com.** In Netlify, visit **Domain management → Add a domain → Add a domain you already own**. Type `angeliquemaronay.com`, then follow Netlify's site-specific instructions for DNS at GoDaddy. **Do not guess which DNS records to change**—Netlify will give you the required values. If you later use domain email, preserve its MX/email records when changing DNS. This does not transfer domain ownership away from GoDaddy.

## Quick preview without GitHub

For a fast temporary Netlify site, extract the ZIP and drag the **`site` folder** onto https://app.netlify.com/drop . This gives you a temporary URL. You can manually update by uploading the updated `site` folder again. **This quick method does not provide automatic CMS editing.** For the edit-yourself dashboard, use GitHub + Pages CMS as described above.

You can also run a local preview by opening a terminal *inside the `site` folder* and running `python -m http.server 8000`, then opening http://localhost:8000 in your browser. Opening `index.html` directly with a double-click shows default sample text but may not load later JSON edits.

## Editing content

The friendly editor is at https://app.pagescms.org/ after GitHub is connected. It edits `site/content/site.json`. You can change:
- Hero and homepage wording, plus the new original romantic still-life artwork
- Book title, description, release status and final cover (upload an image)
- Author bio and portrait
- Reader-interest and contact section wording
- Social media links and future purchase link

The website currently uses **temporary vintage typography instead of your finalized book cover** and an illustration instead of an author photo. Upload your images in Pages CMS whenever you're ready. Social links remain hidden until you provide URLs. No release date or purchase availability has been invented.

## Important before going public

- **Review the draft privacy note at `site/privacy.html`** so it accurately describes how you will use contact information. There is a visible author-review warning on that page for now.
- Enable Netlify Forms and send a test submission to confirm both forms work. Forms do not function when previewed from a local HTML file.
- The reader-interest list is only a collection form. To send actual email newsletters, separately connect an email provider and import subscribers in accordance with your consent/privacy notice.
- Add your real book cover and author portrait if desired; adjust promotional blurb and release status when finalized.
- Netlify's free tier has usage/credit limits and can pause a site on reaching those limits. Review your dashboard's current plan details.
- This site uses Google Fonts. To use self-hosted fonts later, consult their licenses and the site's privacy/cookie needs.

## Where files live

`site/index.html` — website layout  
`site/styles.css` — colors, fonts, and mobile layout  
`site/script.js` — loads your editable content  
`site/content/site.json` — words and links you can edit in the dashboard  
`site/images/` — artwork and images  
`.pages.yml` — Pages CMS configuration  
`netlify.toml` — deploy folder and security headers

For font and color changes, the stylesheet contains labeled variables at the top; these are not part of the basic Pages CMS text editor. You can ask for a design revision later without rebuilding from scratch.
