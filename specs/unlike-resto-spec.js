import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/test-factories';

describe('Unliking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like-btn-container"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike button when the restaurant has been liked', async () => {
    await TestFactories.likeBtnPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="batal menyukai restoran ini"]')).toBeTruthy();
  });

  it('should not display like button when the restaurant has been liked', async () => {
    await TestFactories.likeBtnPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="menyukai restoran ini"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.likeBtnPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="batal menyukai restoran ini"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restoran is not in the list', async () => {
    await TestFactories.likeBtnPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('[aria-label="batal menyukai restoran ini"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
