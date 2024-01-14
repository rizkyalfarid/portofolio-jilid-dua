class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <nav class="nav-container">
        <div class="nav-brand">
          <a href="#">RizkyAlFarid</a>
        </div>
        <ul class="nav-navigation" id="navigation">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#skill">Skill</a></li>
        </ul>
        <div class="hamburger-menu" id="hamburgerBtn">
          <i class="fa-solid fa-bars-staggered icon" id="hamburger"></i>
        </div>
        <button type="button" class="download" id="downloadButton">Download CV</button>
      </nav>
    `
  }
}

customElements.define('nav-content', Navbar);