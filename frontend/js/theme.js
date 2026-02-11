export const initTheme = () => {
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;

    if (localStorage.getItem('theme') === 'light') {
        root.setAttribute('data-theme', 'light');
    }

    themeToggle.addEventListener('click', () => {
        if (root.getAttribute('data-theme') === 'light') {
            root.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
};