class FooterSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <span class="footer-text skeleton">Made with <span>Love</span> &#169; 2023 Restozone.</span>
    `;
  }
}

customElements.define('footer-section', FooterSection);
