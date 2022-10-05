function renderMenu() {
  if (content.children.length > 1) {
    content.removeChild(content.lastChild);
  }

  const menuPage = document.createElement('div');
  menuPage.classList.add('page-content');

  const menuText = document.createElement('div');
  menuText.textContent = 'Check out our awesome menu here!';

  menuPage.appendChild(menuText);
  content.appendChild(menuPage);
}

export default renderMenu;