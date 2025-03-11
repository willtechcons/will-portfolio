const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row">
          <div className="hero-text wow fadeInUp">
            <span>Hi, I'm</span>
            <h1>Huy Nguyen</h1>
            <h3>Tech Consulting & ERP Solutions</h3>
            <p>
            Some years you win, some years you gain character.
            Passionate about technology and helping businesses make smarter decisions.
            </p>
            <div className="hero-btn-container">
              <a href="#contact" className="btn primary-btn">
                Download CV
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
            <img src="images/will.png" alt="will_img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
