document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem('svitanok_theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
  
  if(themeToggle) {
    updateThemeIcon(savedTheme);
    themeToggle.addEventListener('click', () => {
      const current = htmlElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      htmlElement.setAttribute('data-theme', next);
      localStorage.setItem('svitanok_theme', next);
      updateThemeIcon(next);
    });
  }
  
  updateCounters();
});

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if(!btn) return;
  btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

function updateCounters() {
  const cart = JSON.parse(localStorage.getItem('svitanok_cart')) || [];
  const wishlist = JSON.parse(localStorage.getItem('svitanok_wishlist')) || [];
  
  const cartCount = document.getElementById('cart-count');
  const wishlistCount = document.getElementById('wishlist-count');

  if(cartCount) cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  if(wishlistCount) wishlistCount.textContent = wishlist.length;
}
