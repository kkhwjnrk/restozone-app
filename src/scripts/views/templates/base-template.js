import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const restaurantListTemplate = (restaurant) => `
  <article href="#/detail/${restaurant.id}" class="catalog-card">
    <div class="catalog-banner skeleton">
      <picture>
        <source media="(max-width: 576px)" srcset="${CONFIG.SMALL_IMAGE_URL + restaurant.pictureId}">
        <img src="${CONFIG.MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="lazyload catalog-img" loading="lazy">
      </picture>
      <div class="catalog-rating skeleton">
        <i class="fa-solid fa-star"></i>
        <span>${restaurant.rating}</span>
      </div>
    </div>
    <div class="catalog-info">
      <a href="#/detail/${restaurant.id}" class="catalog-name skeleton">${restaurant.name}</a>
      <p class="catalog-city skeleton">${restaurant.city}</p>
    </div>
  </article>
`;

const detailRestaurantTemplate = (restaurant) => `

  <div class="resto-detail">
    <article class="resto-data">
      <div class="resto-banner-img skeleton">
        <picture>
          <source media="(max-width: 576px)" srcset="${CONFIG.SMALL_IMAGE_URL + restaurant.pictureId}">
          <img src="${CONFIG.MEDIUM_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="lazyload resto-img" loading="lazy">
        </picture>
      </div>
      <div class="resto-info">
        <h2 class="resto-name skeleton">${restaurant.name}</h2>
        <div class="resto-rating skeleton">
          <i class="fa-solid fa-star"></i>
          <span>${restaurant.rating}</span>
        </div>
      </div>
      <span class="resto-address skeleton">${restaurant.address}, ${restaurant.city}</span>
      <div class="resto-category">
        <span class="skeleton">Kategori :</span>
        ${restaurant.categories.map((categories) => `
          <span class="skeleton">${categories.name}</span>
        `).join('')}
      </div>
      <p class="resto-description skeleton">${restaurant.description}</p>
    </article>
    <aside class="resto-menu">
      <div class="foods">
        <p class="skeleton">Makanan :</p>
        ${restaurant.menus.foods.map((food) => `
          <p class="skeleton">${food.name}</p>
        `).join('')}
      </div>
      <div class="drinks">
        <p class="skeleton">Minuman :</p>
        ${restaurant.menus.drinks.map((drink) => `
          <p class="skeleton">${drink.name}</p>
        `).join('')}
      </div>
    </aside>
  </div>
  <div class="review-container">
    <p class="review-heading skeleton">Apa kata pelanggan?</p>
    <div class="review-content">
      <form class='review-form' id="review-form">
        <span class="skeleton">Masukan Penilaianmu</span>
        <div class="form-group skeleton">
          <input type="text" id="name" name="name" autocomplete="off" maxlength="32" required>
          <label for="name">Nama</label>
        </div>
        <div class="form-group skeleton">
          <textarea id="review" name="review" rows="5" autocomplete="off" required></textarea>
          <label for="review">Penilaianmu</label>
        </div>
        <div class="submit-btn">
          <button type="submit" class="btn secondary-btn skeleton">Kirim</button>
        </div>
      </form>
      ${restaurant.customerReviews.map((review) => `
        <article class="review-data">
          <p class="skeleton name">${review.name}</p>
          <p class="skeleton">${review.date}</p>
          <p class="skeleton"><em>"<span class="review">${review.review}</span>"</em></p>
        </article>
      `).join('')}
    </div>
  </div> 
`;

const likeRestoBtnTemplate = () => `
  <button aria-label="menyukai restoran ini" id="likeButton" class="like-btn">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const unlikeRestoBtnTemplate = () => `
  <button aria-label="batal menyukai restoran ini" id="likeButton" class="like-btn">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  detailRestaurantTemplate,
  restaurantListTemplate,
  likeRestoBtnTemplate,
  unlikeRestoBtnTemplate,
};
