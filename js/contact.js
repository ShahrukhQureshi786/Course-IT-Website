// Navbar js
document.addEventListener('DOMContentLoaded', () => {
  // Handle dropdown menu
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    const link = item.querySelector('.menu-link');
    const menu = item.querySelector('.dropdown-menu');

    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Close any open dropdowns
      menuItems.forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
        }
      });
      // Toggle the current dropdown
      item.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
      if (!item.contains(event.target)) {
        item.classList.remove('active');
      }
    });
  });
});