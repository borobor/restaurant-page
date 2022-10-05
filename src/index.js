import renderHome from './homePage.js';
import renderMenu from './menuPage.js';
import renderAbout from './aboutPage.js';

const content = document.getElementById('content');
const header = document.createElement('div');
const tabHome = document.createElement('button');
const tabMenu = document.createElement('button');
const tabAbout = document.createElement('button');

tabHome.textContent = 'Home';
tabMenu.textContent = 'Menu';
tabAbout.textContent = 'About';

header.appendChild(tabHome);
header.appendChild(tabMenu);
header.appendChild(tabAbout);

content.appendChild(header);

tabHome.addEventListener('click', renderHome);
tabMenu.addEventListener('click', renderMenu);
tabAbout.addEventListener('click', renderAbout);