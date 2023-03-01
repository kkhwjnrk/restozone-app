const AppBarInitiator = {
  init({
    appBar,
    menu,
    toggle,
    toggleIcon,
    menuLink,
    mainContent,
  }) {
    window.addEventListener('scroll', (event) => {
      this._changeBackground(event, appBar);
    });

    toggle.addEventListener('click', (event) => {
      this._openMenu(event, menu, toggleIcon);
    });

    menuLink.forEach((link) => {
      link.addEventListener('click', (event) => {
        this._menuLinkClicked(event, menuLink, menu, toggleIcon);
      });
    });

    mainContent.addEventListener('click', (event) => {
      this._closeMenu(event, menu, toggleIcon);
    });
  },

  _changeBackground(event, appBar) {
    event.stopPropagation();
    if (window.scrollY >= 100) {
      appBar.classList.add('change-header');
    } else {
      appBar.classList.remove('change-header');
    }
  },

  _openMenu(event, menu, toggleIcon) {
    event.stopPropagation();
    menu.classList.toggle('open-menu');
    toggleIcon.classList.toggle('fa-xmark');
  },

  _closeMenu(event, menu, toggleIcon) {
    event.stopPropagation();
    menu.classList.remove('open-menu');
    toggleIcon.classList.remove('fa-xmark');
  },

  _menuLinkClicked(event, menuLink, menu, toggleIcon) {
    event.stopPropagation();
    const clickedLink = event.target;
    menuLink.forEach((link) => {
      link.classList.remove('active-link');
    });
    clickedLink.classList.add('active-link');
    menu.classList.remove('open-menu');
    toggleIcon.classList.remove('fa-xmark');
  },
};

export default AppBarInitiator;
