"use strict"

const root = document.querySelector(':root');
const darkModeButton = document.getElementById('dark-mode');
const darkModeSVGs = document.getElementsByClassName('filter-dark-mode');

const sidebarExpandButton = document.getElementById('side-bar-expand');
const sidebar = document.getElementById('side-bar');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    root.classList.toggle('dark-mode');
    for (let i = 0; i < darkModeSVGs.length; i++) {
        darkModeSVGs[i].classList.toggle('invert');
    }
})

sidebarExpandButton.addEventListener('click', () => {
    console.log('sidebar collapsed');
    body.classList.toggle('grid-collapse');
    sidebar.classList.toggle('side-bar-collapse');
})