class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="nav container skeleton">
        <a href="/" class="logo">Restozone<span>.</span></a>
        <button class="menu-toggle" id="menu-toggle" aria-label="tombol menu">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="menu-item-container" id="menu-item">
          <ul class="menu-item-list">
            <li class="menu-item"><a href="#/home" class="menu-link active-link">Home</a></li>
            <li class="menu-item"><a href="#/favorit" class="menu-link">Favorit</a></li>
            <li class="menu-item"><a href="#/tentang-kami" class="menu-link">Tentang Kami</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
