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
              <a href="https://www.linkedin.com/in/rememberwill/" target="_blank" rel="noopener noreferrer" className="btn primary-btn">
                Will's Linkedin
              </a>
               <a href="#contact" className="btn secondary-btn">
                Contact
               </a>
            </div>
          </div>
          {/* Hero Image */}
          <div className="hero-img">
  <img 
    src="images/will.png" 
    alt="will_img" 
    style={{ 
      boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.3)", 
      borderRadius: "10px" // Bo góc nhẹ cho đẹp hơn 
    }} 
  />
</div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
