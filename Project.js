
document.querySelectorAll('.accordion__heading').forEach(heading => {
    heading.addEventListener('click', () => {
        // Hide all panels first
        document.querySelectorAll('.accordion__panel').forEach(panel => {
            panel.style.display = 'none'; // Hide all panels
            panel.previousElementSibling.setAttribute('aria-expanded', 'false'); // Update aria-expanded for each heading
        });
        
        // Show the clicked panel
        const panel = heading.nextElementSibling; // Select the associated panel
        const expanded = heading.getAttribute('aria-expanded') === 'true'; // Check if it's currently expanded

        // Toggle the display of the clicked panel
        if (expanded) {
            panel.style.display = 'none'; // Hide if it was shown
        } else {
            panel.style.display = 'block'; // Show if it was hidden
        }
        
        // Update the aria-expanded attribute
        heading.setAttribute('aria-expanded', !expanded);
    });
});

const headings = document.querySelectorAll('.accordion__heading');
headings.forEach(heading => {
    heading.addEventListener('click', function() {
        // Remove active class from all headings and panels
        headings.forEach(h => h.classList.remove('active'));
        document.querySelectorAll('.accordion__panel').forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked heading and its associated panel
        this.classList.add('active');
        this.nextElementSibling.classList.add('active');
    });
});
www.addEventListener("click", function (e) {
    if (item.style.display === "none") {
      item.style.display = "block";
      www.style.color = "lightblue";
    } else {
      item.style.display = "none";
      www.style.color = "white";
    }
  });