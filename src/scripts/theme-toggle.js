// src/scripts/theme-toggle.js
const themeToggleButton = document.getElementById('theme-toggle-button');
const sunIcon = document.getElementById('theme-toggle-sun-icon'); // Assuming an ID for the sun icon
const moonIcon = document.getElementById('theme-toggle-moon-icon'); // Assuming an ID for the moon icon

const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    if (sunIcon) sunIcon.classList.add('hidden');
    if (moonIcon) moonIcon.classList.remove('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    if (sunIcon) sunIcon.classList.remove('hidden');
    if (moonIcon) moonIcon.classList.add('hidden');
  }
};

const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
};

// Initialize theme
const initializeTheme = () => {
  let theme = localStorage.getItem('theme');
  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  localStorage.setItem('theme', theme); // Ensure localStorage is set
  applyTheme(theme);
};

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', toggleTheme);
}

// Apply theme on initial load
// Use DOMContentLoaded to ensure elements are available if icons are part of the button
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme(); 
    // Re-select icons here if they are dynamically added or to be safe
    // const sunIcon = document.getElementById('theme-toggle-sun-icon'); 
    // const moonIcon = document.getElementById('theme-toggle-moon-icon');
    // applyTheme(localStorage.getItem('theme')); // Apply again to ensure icons are correct
});
