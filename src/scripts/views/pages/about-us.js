import ButtonHelper from '../../utils/button-helper';

const AboutUs = {
  async render() {
    return `
      <about-banner></about-banner>
      <section class="section container" id="content">
        <div class="about-container">
          <div class="about-content">
            <div class="skeleton">
              <picture>
                <source media="(max-width: 576px)" srcset="./images/about-image-small.jpg">
                <img src="./images/about-image-large.jpg" alt="About image" class="about-img" loading="lazy">
              </picture>
            </div>
            <div class="about-info">
              <h2 class="about-heading skeleton">Restozone</h2>
              <p class="about-description skeleton">Restozone adalah sebuah platform yang menyediakan katalog restoran terlengkap. Cari dan temukan restoran terbaik di Indonesia dengan beragam pilihan menu di Restozone. Dapatkan informasi sebelum memutuskan untuk berkunjung ke restoran pilihanmu.</p>
              <button class="btn secondary-btn skeleton" id="about-btn" aria-label="Tombol menuju instagram pengembang">Kontak Saya</button>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    ButtonHelper.openInstagram();
  },
};

export default AboutUs;
