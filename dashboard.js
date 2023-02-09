"use strict"

const root = document.querySelector(':root');
const darkModeButton = document.getElementById('dark-mode');
const darkModeSVGs = document.getElementsByClassName('filter-dark-mode');

const sidebarExpandButton = document.getElementById('side-bar-expand');
const sidebar = document.getElementById('side-bar');
const body = document.body;

const blocker = document.getElementById('blocker');
const themesBar = document.getElementById('theme-selector');
const themesButtons = document.getElementsByName('theme');

darkModeButton.addEventListener('click', () => {
    blocker.classList.remove('hide-themes-bar');
})

themesBar.addEventListener('change', (e) => {
    console.log(`${e.target.value}`);
    root.className = '';
    root.classList.add(`${e.target.value}`);
    blocker.classList.add('hide-themes-bar')
    if (!(e.target.value == 'default')) {
        for (let i = 0; i < darkModeSVGs.length; i++) {
            darkModeSVGs[i].classList.add('invert');
        }
    } else {
        for (let i = 0; i < darkModeSVGs.length; i++) {
            darkModeSVGs[i].classList.remove('invert');
        }
    }
})

sidebarExpandButton.addEventListener('click', () => {
    console.log('sidebar collapsed');
    body.classList.toggle('grid-collapse');
    sidebar.classList.toggle('side-bar-collapse');
})

blocker.addEventListener('click', () => {
    blocker.classList.add('hide-themes-bar');
})