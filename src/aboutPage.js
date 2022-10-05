function renderAbout() {
  if (content.children.length > 1) {
    content.removeChild(content.lastChild);
  }

  const aboutPage = document.createElement('div');
  const aboutText = document.createElement('div');

  aboutText.textContent = 'You can find us here!';

  aboutPage.appendChild(aboutText);
  content.appendChild(aboutPage);
}

export default renderAbout;