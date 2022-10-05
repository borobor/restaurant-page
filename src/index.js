import renderHome from './homePage.js';
import renderMenu from './menuPage.js';
import renderAbout from './aboutPage.js';
import './style.css';

const content = document.getElementById('content');
const header = document.createElement('div');
const tabHome = document.createElement('button');
const tabMenu = document.createElement('button');
const tabAbout = document.createElement('button');

header.classList.add('header');

tabHome.textContent = 'Home';
tabMenu.textContent = 'Menu';
tabAbout.textContent = 'About';


header.appendChild(tabHome);
header.appendChild(tabMenu);
header.appendChild(tabAbout);

const tabs = header.querySelectorAll('button');
tabs.forEach(tab => tab.classList.add('header-tab'));

content.appendChild(header);

tabHome.addEventListener('click', renderHome);
tabMenu.addEventListener('click', renderMenu);
tabAbout.addEventListener('click', renderAbout);