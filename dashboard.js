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
    if (!(body.classList.contains('grid-collapse'))) {
        console.log('sidebar collapsed');
        body.classList.add('grid-collapse');
        sidebar.classList.add('side-bar-collapse');
    } else {
        console.log('sidebar expanded');
        body.classList.remove('grid-collapse');
        sidebar.classList.remove('side-bar-collapse');
    }
})