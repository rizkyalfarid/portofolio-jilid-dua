class MainProfile extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="main-profile" id="home">
    <div id="main-profile">
      <h1>Hello👋, I am <span>Rizky Al Farid Hafizh</span></h1>
      <h2><span>Frontend Web Developer</span></h2>
      <p>Frontend Developer based in Cianjur. Focus to build and maintaining a website to increase accessibility and responsive interaction of every component. Make sure the web loads properly. Sometimes developing micro-interaction in the Frontend of the Website. And I am also integrating with backend API or CMS</p>
      <div class="button">
        <div class="button-div">
          <button>Hire Me !</button>
          <button>Send Message📧</button>
        </div>
        <div class="social-div">
          <a href="https://github.com/rizkyAlFarid" target="_blank">
            <i class="fa-brands fa-github social"></i>
          </a>
          <a href="https://www.instagram.com/rizky31afh_/" target="_blank">
            <i class="fa-brands fa-instagram social"></i>
          </a>
          <a href="https://www.linkedin.com/in/rizky-al-farid-hafizh-744bb3254/" target="_blank">
            <i class="fa-brands fa-linkedin social"></i>
          </a>
          <a href="https://www.linkedin.com/in/rizky-al-farid-hafizh-744bb3254/" target="_blank">
            <i class="fa-brands fa-dev social"></i>
          </a>
        </div>
      </div>
      <div class="social-media">
        <a href="https://github.com/rizkyAlFarid" target="_blank">
          <i class="fa-brands fa-github social"></i>
        </a>
        <a href="https://www.instagram.com/rizky31afh_/" target="_blank">
          <i class="fa-brands fa-instagram social"></i>
        </a>
        <a href="https://www.linkedin.com/in/rizky-al-farid-hafizh-744bb3254/" target="_blank">
          <i class="fa-brands fa-linkedin social"></i>
        </a>
        <a href="https://www.linkedin.com/in/rizky-al-farid-hafizh-744bb3254/" target="_blank">
          <i class="fa-brands fa-dev social"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="image-profile">
    <figure>
      <img src="${this.src}" alt="Avatars Icon" title="Rizky Al Farid">
    </figure>
  </div>
    `
  }
}

customElements.define('main-profile', MainProfile);