// script.js
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const cancelBtn = document.getElementById("cancelBtn");

  // Function to show the pop-up
  function showPopup() {
    popup.style.display = "block";
  }

  // Event listener for Cancel button
  cancelBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Show the pop-up when the page loads
  showPopup();
});


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
  