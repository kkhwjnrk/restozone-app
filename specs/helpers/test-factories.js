import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resto-idb';
import LikeBtnPresenter from '../../src/scripts/utils/like-btn-presenter';

const likeBtnPresenterWithRestaurant = async (restaurant) => {
  await LikeBtnPresenter.init({
    likeButtonContainer: document.querySelector('#like-btn-container'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { likeBtnPresenterWithRestaurant };
