// ---------- DARK MODE
const setDarkMode = (isDark) => {
    if (isDark) {
        document.querySelector('html').classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.querySelector('html').classList.remove('dark');
        localStorage.theme = 'light';
    }
}
if (localStorage.theme === 'dark') {
    setDarkMode(true);
    document.querySelector('#dark-mode-toggle').checked = true;
}
document.querySelector('#dark-mode-toggle').addEventListener('change', (e) => {
    if (e.target.checked) {
        setDarkMode(true);
    } else {
        setDarkMode(false);
    }
});