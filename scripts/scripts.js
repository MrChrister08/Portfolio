// Dark/Light Mode Toggle
const toggleButton = document.getElementById('toggle-theme');
const themeStyle = document.getElementById('theme-style');

toggleButton.addEventListener('click', function() {
  if (themeStyle.getAttribute('href') === 'styles/dark.css') {
    themeStyle.href = 'styles/light.css';
  } else {
    themeStyle.href = 'styles/dark.css';
  }
});
