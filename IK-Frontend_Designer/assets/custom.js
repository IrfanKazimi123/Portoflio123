// custom.js

// Example: log to console to test
console.log('Custom JS is loaded!');

// Example: add a click event to buttons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.card-button');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log('Project button clicked:', e.target.href);
    });
  });
});
