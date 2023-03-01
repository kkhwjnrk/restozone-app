import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';
import { itActsAsFavoriteRestoModel } from './contract/favorite-resto-contract';

describe('Favorite restaurant idb contract test implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
