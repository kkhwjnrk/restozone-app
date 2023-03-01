const assert = require('assert');

Feature('Adding and removing favorite restaurants');

const like = '[aria-label="menyukai restoran ini"]';
const unlike = '[aria-label="batal menyukai restoran ini"]';

Before((I) => {
  I.amOnPage('/#/favorit');
});

Scenario('showing empty favorite restaurants', async (I) => {
  I.seeElement('#content');
  I.see('Anda tidak memiliki restoran favorit.', '.section-title');
});

Scenario('likes a restaurant', async (I) => {
  I.see('Anda tidak memiliki restoran favorit.', '.section-title');

  I.amOnPage('/#/home');
  I.seeElement('.catalog-name');

  const restaurant = locate('.catalog-name').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.seeElement(like);
  I.click(like);

  I.amOnPage('/#/favorit');
  I.seeElement('.catalog-card');

  const likeRestaurantTitle = await I.grabTextFrom('.catalog-name');
  assert.strictEqual(restaurantTitle, likeRestaurantTitle);
});

Scenario('cancel liked a restaurant', async (I) => {
  I.see('Anda tidak memiliki restoran favorit.', '.section-title');

  I.amOnPage('/#/home');
  I.seeElement('.catalog-name');

  const restaurant = locate('.catalog-name').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.seeElement(like);
  I.click(like);

  I.amOnPage('/#/favorit');
  I.seeElement('.catalog-card');

  const likeRestaurantTitle = await I.grabTextFrom('.catalog-name');
  assert.strictEqual(restaurantTitle, likeRestaurantTitle);

  I.click(locate('.catalog-name'));
  I.seeElement(unlike);
  I.click(unlike);

  I.amOnPage('/#/favorit');
  I.see('Anda tidak memiliki restoran favorit.', '.section-title');
});
