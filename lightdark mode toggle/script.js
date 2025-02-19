// Get the checkbox element, theme text, and theme preference from localStorage
const themeToggleCheckbox = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const currentTheme = localStorage.getItem('theme');

// Apply the stored theme on page load
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggleCheckbox.checked = true;
        themeText.textContent = 'Dark Mode Toggle';
    }
}

// Toggle between light and dark mode when checkbox is clicked
themeToggleCheckbox.addEventListener('change', () => {
    if (themeToggleCheckbox.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        themeText.textContent = 'Dark Mode Toggle';
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
        themeText.textContent = 'Light Mode Toggle';
    }
});
