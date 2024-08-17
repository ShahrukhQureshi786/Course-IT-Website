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

// Cards js
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  const prevButton = document.querySelector('.prev-btn');
  const nextButton = document.querySelector('.next-btn');
  const cardsToShow = 3; // Number of cards to show at a time
  let currentIndex = 0;

  function showCards(index) {
    cards.forEach((card, i) => {
      if (i >= index && i < index + cardsToShow) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function nextCard() {
    if (currentIndex + cardsToShow < cards.length) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
    showCards(currentIndex);
  }

  function prevCard() {
    if (currentIndex > 0) {
      currentIndex -= 1;
    } else {
      currentIndex = cards.length - cardsToShow;
    }
    showCards(currentIndex);
  }

  // Event listeners for navigation buttons
  prevButton.addEventListener('click', () => {
    prevCard();
  });

  nextButton.addEventListener('click', () => {
    nextCard();
  });

  // Initialize the card display
  showCards(currentIndex);
});
