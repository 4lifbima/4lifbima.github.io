const darkModeIcon = document.getElementById('darkMode-icon');
const body = document.body;

// Toggle dark mode on click
darkModeIcon.addEventListener('click', function () {
  body.classList.toggle('dark-mode');

  // Check and store current mode in local storage for persistence
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'on');
  } else {
    localStorage.setItem('darkMode', 'off');
  }
});

// Check for stored dark mode preference on page load
const storedMode = localStorage.getItem('darkMode');
if (storedMode === 'on') {
  body.classList.add('dark-mode');
}
