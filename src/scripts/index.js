import 'regenerator-runtime';
import './views/components/page';
import '../styles/style.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  appBar: document.querySelector('.app-bar'),
  menu: document.querySelector('#menu-item'),
  toggle: document.querySelector('#menu-toggle'),
  toggleIcon: document.querySelector('.fa-bars'),
  menuLink: document.querySelectorAll('.menu-link'),
  mainContent: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
