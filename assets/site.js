/* Only local language selection. No analytics, tracking, cookies or network requests. */
(() => {
  const root = document.documentElement;
  const storageKey = 'krakentic-site-language';
  let lang = 'en';
  try { if (localStorage.getItem(storageKey) === 'ar') lang = 'ar'; } catch (_) {}
  function apply(next) {
    lang = next === 'ar' ? 'ar' : 'en';
    root.dataset.lang = lang;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-language-button]').forEach(button => {
      button.textContent = lang === 'ar' ? 'English' : 'العربية';
      button.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
      button.setAttribute('aria-pressed', lang === 'ar' ? 'true' : 'false');
    });
    try { localStorage.setItem(storageKey, lang); } catch (_) {}
  }
  document.addEventListener('DOMContentLoaded', () => {
    apply(lang);
    document.querySelectorAll('[data-language-button]').forEach(button => {
      button.addEventListener('click', () => apply(lang === 'en' ? 'ar' : 'en'));
    });
  });
})();
