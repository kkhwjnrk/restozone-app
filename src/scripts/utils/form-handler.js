import RestaurantSource from '../data/restaurant-source';

const FormHandler = {
  init({ form, container, id }) {
    this._form = form;
    this._nameInput = form.querySelector('#name');
    this._reviewInput = form.querySelector('#review');
    this._reviewsContainer = container;
    this._restaurantId = id;

    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._onSubmit();
    });
  },

  async _onSubmit() {
    const review = {
      id: this._restaurantId,
      name: this._nameInput.value,
      review: this._reviewInput.value,
      date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
    };

    try {
      await RestaurantSource.postReview(review);
      console.log(review.date);
      this._addReviewToContainer(review);
      this._resetForm();
    } catch (error) {
      console.error(error);
    }
  },

  _addReviewToContainer(review) {
    const reviewTemplate = `
      <article class="review-data">
        <p>${review.name}</p>
        <p><em>"${review.review}"</em></p>
        </article>
        `;
    // <p>${review.date}</p>
    this._reviewsContainer.insertAdjacentHTML('beforeend', reviewTemplate);
  },

  _resetForm() {
    this._nameInput.value = '';
    this._reviewInput.value = '';
  },
};

export default FormHandler;
