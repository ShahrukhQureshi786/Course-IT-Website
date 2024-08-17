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

// Navbar for Toggling the Menu on Mobile View
document.querySelector('.navbar-toggle').addEventListener('click', function () {
  document.querySelector('.navbar-menu').classList.toggle('active');
});


// Extra ordin Section
let currentPhase = 1;
const phases = document.querySelectorAll('.extra-ordinary-phase');
const universe = document.querySelector('.extra-ordinary-universe');

window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const phaseThreshold = window.innerHeight / 2;

    if (scrollPos > phaseThreshold * currentPhase && currentPhase < phases.length) {
        phases[currentPhase - 1].style.opacity = '0';
        phases[currentPhase - 1].style.transform = 'translateY(-50px)';
        phases[currentPhase].style.opacity = '1';
        phases[currentPhase].style.transform = 'translateY(0)';
        currentPhase++;
    }

    if (scrollPos < phaseThreshold * (currentPhase - 1) && currentPhase > 1) {
        phases[currentPhase - 1].style.opacity = '0';
        phases[currentPhase - 1].style.transform = 'translateY(50px)';
        phases[currentPhase - 2].style.opacity = '1';
        phases[currentPhase - 2].style.transform = 'translateY(0)';
        currentPhase--;
    }
});


//  Moving content

document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.my-carousel-track');
  const items = Array.from(track.children);

  // Duplicate items to create a seamless loop effect
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  const totalItems = items.length;
  const itemWidth = 200; // Width of each item in pixels
  const gap = 20; // Gap between items in pixels

  // Set the width of the track to accommodate all items including duplicates
  track.style.width = `${(totalItems * 2) * (itemWidth + gap)}px`;

  // Adjust the keyframe animation
  const animationDuration = 30; // Duration of the scroll in seconds
  const keyframes = `
    @keyframes my-scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-${totalItems * (itemWidth + gap)}px);
      }
    }
  `;
  
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = keyframes;
  document.head.appendChild(styleSheet);

  // Apply the updated animation duration
  track.style.animationDuration = `${animationDuration}s`;
});