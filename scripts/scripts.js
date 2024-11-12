// Toggle dark/light mode and switch sun/moon icons
const toggleThemeBtn = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

toggleThemeBtn.addEventListener('click', function () {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  }
});

// Initialize particles.js for interactive background
particlesJS.load('particles-js', 'scripts/particles.json', function() {
  console.log('particles.js loaded');
});
