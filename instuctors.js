document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const boxes = document.querySelectorAll('.box');

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    // Loop through all boxes and hide/show based on the search query
    boxes.forEach(box => {
      const instructorName = box.querySelector('h3').textContent.toLowerCase();
      const isVisible = instructorName.includes(query);
      box.style.display = isVisible ? "block" : "none";
    });
  });
});
