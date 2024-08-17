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

//   Carousel js
  document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselInterval = 3000; // Interval for auto-slide in milliseconds
    let currentIndex = 0;
    let intervalId;

    function showSlide(index) {
      carouselItems.forEach((item, i) => {
        item.classList.remove('visible');
        if (i === index) {
          item.classList.add('visible');
        }
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
    }

    function startAutoSlide() {
      intervalId = setInterval(nextSlide, carouselInterval);
    }

    function stopAutoSlide() {
      clearInterval(intervalId);
    }

    // Event listeners for buttons
    prevButton.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });

    nextButton.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });

    // Initialize carousel
    showSlide(currentIndex);
    startAutoSlide();
  });
