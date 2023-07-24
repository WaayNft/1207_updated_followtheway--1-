var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var menu = document.querySelector('.menu');
var isMenuOpen = false;

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
  
  if (isMenuOpen) {
    menu.style.display = 'none';
    isMenuOpen = false;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const barsMenu = document.querySelector('.bars__menu');
  let isMenuOpen = false;

  function showMenu() {
    menu.style.display = 'block';
  }

  function hideMenu() {
    if (!isMenuOpen) {
      menu.style.display = 'none';
    }
  }

  // Show/hide menu on hover
  barsMenu.addEventListener('mouseenter', showMenu);
  barsMenu.addEventListener('mouseleave', hideMenu);
  menu.addEventListener('mouseenter', showMenu);
  menu.addEventListener('mouseleave', hideMenu);

  // Toggle menu on click
  barsMenu.addEventListener('click', function() {
    isMenuOpen = !isMenuOpen;
    menu.style.display = isMenuOpen ? 'block' : 'none';
  });

  // Close menu when clicking line__bars
  line1__bars.addEventListener('click', animateBars);
  line2__bars.addEventListener('click', animateBars);
  line3__bars.addEventListener('click', animateBars);

  // Scroll to sections on link click
  const waayLink = document.querySelector('.menu li:nth-child(1) a');
  const roadmapLink = document.querySelector('.menu li:nth-child(2) a');
  const teamLink = document.querySelector('.menu li:nth-child(3) a');
  const faqLink = document.querySelector('.menu li:nth-child(4) a');

  const roadmapSection = document.querySelector('.second-section');
  const teamSection = document.querySelector('.third-section');
  const faqSection = document.querySelector('.fourth-section');
  const firstSection = document.querySelector('.first-section');

  waayLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: firstSection.offsetTop, behavior: 'smooth' });
    menu.style.display = 'none';
    isMenuOpen = false;
  });

  roadmapLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: roadmapSection.offsetTop, behavior: 'smooth' });
    menu.style.display = 'none';
    isMenuOpen = false;
  });

  teamLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: teamSection.offsetTop, behavior: 'smooth' });
    menu.style.display = 'none';
    isMenuOpen = false;
  });

  faqLink.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: faqSection.offsetTop, behavior: 'smooth' });
    menu.style.display = 'none';
    isMenuOpen = false;
  });
});
