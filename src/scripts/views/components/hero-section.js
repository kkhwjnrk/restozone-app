class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero-section full-hero skeleton">
        <div class="hero-container container">
          <div class="hero-text">
            <h1 class="hero-heading">Temukan <span>Restoran</span> Favoritmu</h1>
            <p class="hero-description">Jelajahi restoran terbaik, masakan favorit dan pengalaman kuliner menakjubkan</p>
            <button class="btn primary-btn" id="hero-btn" aria-label="Tombol kunjungi halaman">Kunjungi</button>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
