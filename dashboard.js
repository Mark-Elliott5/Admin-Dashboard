"use strict"

const root = document.querySelector(':root');
const darkModeButton = document.getElementById('dark-mode');
const darkModeSVGs = document.getElementsByClassName('filter-dark-mode');

darkModeButton.addEventListener('click', () => {
    console.log('Dark Mode enabled');
    root.style.setProperty('--backdrop-color', '#475569');
    root.style.setProperty('--accent-color', '#94a3b8');
    root.style.setProperty('--primary-color', '#64748b');
    root.style.setProperty('--shading-color', '#1e293b');
    root.style.setProperty('--subtext-color', 'lightgrey');
    root.style.setProperty('--text-color', 'white');
    for (let i = 0; i < darkModeSVGs.length; i++) {
        darkModeSVGs[i].classList.add('invert');
    }
})