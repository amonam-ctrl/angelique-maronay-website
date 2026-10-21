/* Site content is intentionally stored in /content/site.json for easy Pages CMS editing. */
(() => {
  const navButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-nav');
  if (navButton && navigation) {
    const setMenu = (isOpen) => {
      navigation.classList.toggle('is-open', isOpen);
      navButton.setAttribute('aria-expanded', String(isOpen));
      navButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    };
    navButton.addEventListener('click', () => setMenu(navButton.getAttribute('aria-expanded') !== 'true'));
    navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
  }
  document.getElementById('year').textContent = new Date().getFullYear();

  const get = (obj, path) => path.split('.').reduce((item, key) => item?.[key], obj);
  const safeUrl = (value) => {
    if (typeof value !== 'string') return '';
    const trimmed = value.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('/') && !trimmed.startsWith('//')) return trimmed;
    try {
      const url = new URL(trimmed);
      return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
    } catch { return ''; }
  };

  fetch('/content/site.json', { cache: 'no-cache' })
    .then((response) => { if (!response.ok) throw Error('Content was not found'); return response.json(); })
    .then((content) => {
      document.querySelectorAll('[data-content]').forEach((node) => {
        const newValue = get(content, node.dataset.content);
        if (typeof newValue === 'string') node.textContent = newValue;
      });
      document.querySelectorAll('[data-image]').forEach((image) => {
        const src = safeUrl(get(content, image.dataset.image));
        if (src) {
          image.src = src;
          image.hidden = false;
          if (image.dataset.image === 'site.heroImage') image.alt = content.site?.heroImageAlt || 'An antique desk with a love letter, flowers and books';
          if (image.dataset.image === 'book.coverImage') image.alt = 'Cover of ' + (content.book?.title || 'the featured novel');
          if (image.dataset.image === 'about.portraitImage') {
            document.getElementById('portrait-art').hidden = true;
          }
        }
      });
      document.querySelectorAll('[data-link]').forEach((link) => {
        const value = safeUrl(get(content, link.dataset.link));
        if (value) { link.href = value; link.hidden = false; }
      });
      const email = content.social?.emailAddress?.trim();
      const emailLink = document.querySelector('[data-mail]');
      if (emailLink && email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailLink.href = 'mailto:' + encodeURIComponent(email).replace('%40', '@');
        emailLink.hidden = false;
      }
      if (content.site?.siteTitle) {
        document.title = content.site.siteTitle;
        document.querySelector('meta[property="og:title"]')?.setAttribute('content', content.site.siteTitle);
      }
      if (content.site?.siteDescription) {
        document.querySelector('meta[name="description"]')?.setAttribute('content', content.site.siteDescription);
        document.querySelector('meta[property="og:description"]')?.setAttribute('content', content.site.siteDescription);
      }
    })
    .catch(() => {
      // The default HTML remains readable even before Netlify publishes the site.
      // file:// previews cannot fetch JSON; use a local server or Netlify instead.
    });
})();
