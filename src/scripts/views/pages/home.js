import RestaurantSource from '../../data/restaurant-source';
import ButtonHelper from '../../utils/button-helper';
import { restaurantListTemplate } from '../templates/base-template';

const Home = {
  async render() {
    return `
      <hero-section></hero-section>
      <section class="section container" id="content">
        <div class="section-heading">
          <span class="section-subtitle skeleton">Katalog</span>
          <h2 class="section-title skeleton">Eksplorasi Restoran Terbaik</h2>
        </div>
        <div class="catalog-list" id="catalog-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restoContainer = document.querySelector('#catalog-list');
    restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += restaurantListTemplate(restaurant);
    });
    ButtonHelper.scrollHeroBtn();
  },
};

export default Home;
