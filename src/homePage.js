function renderHome() {
  if (content.children.length > 1) {
    content.removeChild(content.lastChild);
  }

  const homePage = document.createElement('div');
  homePage.classList.add('page-content');

  const homeText = document.createElement('div');
  homeText.classList.add('block-content');
  homeText.textContent = "We are a family owned business and we cook some great food!";

  homePage.appendChild(homeText);
  content.appendChild(homePage);
}

export default renderHome;