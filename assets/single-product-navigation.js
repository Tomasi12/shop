// Anchor navigation must release Dawn's drawer focus trap before moving focus.
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[data-single-product-link]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

  const url = new URL(link.href);
  if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;

  const target = document.getElementById(url.hash.slice(1));
  if (!target) return;

  const drawer = link.closest('header-drawer');
  if (drawer && typeof drawer.closeMenuDrawer === 'function') {
    drawer.closeMenuDrawer(event, target);
    drawer.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', 'false');
  }

  const cartDrawer = link.closest('cart-drawer');
  if (cartDrawer && typeof cartDrawer.close === 'function') cartDrawer.close();

  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
});
