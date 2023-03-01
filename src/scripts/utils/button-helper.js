const ButtonHelper = {
  _scrollToContent(event) {
    event.preventDefault();
    const content = document.querySelector('#content');
    content.scrollIntoView({ behavior: 'smooth' });
  },

  _skipToContent(event) {
    event.preventDefault();
    const content = document.querySelector('#content');
    content.tabIndex = -1;
    content.focus();
    // eslint-disable-next-line no-use-before-define
    content.addEventListener('blur', removeTabIndex);

    function removeTabIndex() {
      content.removeAttribute('tabindex');
      content.removeEventListener('blur', removeTabIndex);
    }
  },

  _openInstagram(event) {
    event.preventDefault();
    const url = 'https://www.instagram.com/kukuhwjnrk';
    window.open(url, '_blank').focus();
  },

  scrollToContent() {
    const skipContent = document.querySelector('.skip-content');
    skipContent.addEventListener('click', this._skipToContent);
  },

  scrollHeroBtn() {
    const heroBtn = document.querySelector('#hero-btn');
    heroBtn.addEventListener('click', this._scrollToContent);
  },

  openInstagram() {
    const aboutBtn = document.querySelector('#about-btn');
    aboutBtn.addEventListener('click', this._openInstagram);
  },
};

export default ButtonHelper;
