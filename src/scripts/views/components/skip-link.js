class SkipLink extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `  
      <a href="" class="skip-content">Skip to content</a>
    `;
  }
}

customElements.define('skip-link', SkipLink);
