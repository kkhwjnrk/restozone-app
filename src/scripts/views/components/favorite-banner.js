class FavoriteBanner extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero-section half-hero">
        <div class="hero-container container">
          <div class="hero-text">
            <h1 class="hero-heading"><span>Favorit</span></h1>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('favorite-banner', FavoriteBanner);
