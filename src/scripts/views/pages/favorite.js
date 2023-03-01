import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { restaurantListTemplate } from '../templates/base-template';

const Favorite = {
  async render() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length > 0) {
      return `
        <favorite-banner></favorite-banner>
        <section class="section container" id="content">
          <div class="section-heading">
            <span class="section-subtitle skeleton">Favorit</span>
            <h2 class="section-title skeleton">Restoran Terbaik Pilihanmu</h2>
          </div>
          <div class="catalog-list" id="catalog-list"></div>
        </section>
      `;
    }

    return `
        <favorite-banner></favorite-banner>
        <section class="section container" id="content">
          <div class="section-heading">
            <h2 class="section-title">Anda tidak memiliki restoran favorit.</h2>
          </div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length > 0) {
      const restoContainer = document.querySelector('#catalog-list');
      restaurants.forEach((restaurant) => {
        restoContainer.innerHTML += restaurantListTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
