// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('main-navbar');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Trigger the scroll event once on page load to ensure initial styling
    window.dispatchEvent(new Event('scroll'));
  });
  