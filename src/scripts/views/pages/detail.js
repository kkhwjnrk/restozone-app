import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FormHandler from '../../utils/form-handler';
import LikeBtnPresenter from '../../utils/like-btn-presenter';
import { detailRestaurantTemplate } from '../templates/base-template';

const Detail = {
  async render() {
    return `
      <detail-banner></detail-banner>
      <section class="section container" id="content"></section>
      <div id="like-btn-container"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#content');
    restoContainer.innerHTML = detailRestaurantTemplate(restaurant);

    LikeBtnPresenter.init({
      likeButtonContainer: document.querySelector('#like-btn-container'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        address: restaurant.address,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });

    const formContainer = document.querySelector('#review-form');
    const reviewsContainer = document.querySelector('.review-content');

    FormHandler.init({
      form: formContainer,
      container: reviewsContainer,
      id: restaurant.id,
    });
  },
};

export default Detail;
