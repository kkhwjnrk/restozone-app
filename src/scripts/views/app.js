import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import AppBarInitiator from '../utils/appbar-initiator';
import SkeletonLoader from '../utils/loader-helper';
import ButtonHelper from '../utils/button-helper';

class App {
  constructor({
    appBar,
    menu,
    toggle,
    toggleIcon,
    menuLink,
    mainContent,
  }) {
    this._appBar = appBar;
    this._menu = menu;
    this._menuLink = menuLink;
    this._toggle = toggle;
    this._toggleIcon = toggleIcon;
    this._mainContent = mainContent;
    this._initialAppShell();
  }

  _initialAppShell() {
    AppBarInitiator.init({
      appBar: this._appBar,
      menu: this._menu,
      menuLink: this._menuLink,
      toggle: this._toggle,
      toggleIcon: this._toggleIcon,
      mainContent: this._mainContent,
      pageContent: this._pageContent,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._mainContent.innerHTML = await page.render();
    await page.afterRender();
    SkeletonLoader.loader();
    ButtonHelper.scrollToContent();
  }
}

export default App;
