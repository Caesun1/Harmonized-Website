import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [showFooterBar, setShowFooterBar] = useState(false);
  const heroRef = useRef(null);
  const asSeenOnRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setShowFooterBar(heroBottom < 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowFooterBar(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="header" ref={headerRef}>
        <div className="logo">LOGO</div>
        <nav className="nav">
          <a href="#shop">Shop</a>
          <a href="#hire">Hire Us</a>
          <a href="#book">Our Book</a>
          <a href="#learn">Learn</a>
        </nav>
      </header>
      <div className="consult-bar">
        <a href="#schedule" className="consult-link">
          BOOK YOUR FREE 15-MINUTE PHONE CONSULTATION NOW!
        </a>
      </div>
      <section
        className="hero"
        style={{
          background: "url('/hero-hammock.jpg') center center/cover no-repeat"
        }}
        ref={heroRef}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Changing the way you feel about home.</h1>
            <button className="cta-btn">Get Organized</button>
          </div>
        </div>
      </section>
      <div className={`footer-bar${showFooterBar ? ' footer-bar-visible' : ''}`}>
        <span className="footer-bar-text">Experience an elevated approach to a calm and sophisticated home</span>
        <button className="footer-bar-btn">Get Started</button>
      </div>
      <section className="quote-section">
        <blockquote>
          <div className="quote-main">
            The way your home is set up should support the way you want to feel. Once your space is organized, life feels lighter, simpler, and begins to spark joy.<br />Welcome to a home [Harmonized].
          </div>
        </blockquote>
      </section>
      <section className="as-seen-on-section" ref={asSeenOnRef}>
        <div className="as-seen-on-label">AS SEEN ON</div>
        <div className="as-seen-on-logos">
          <span className="as-seen-on-nextdoor">nextdoor</span>
          <span className="as-seen-on-divider">|</span>
          <span className="as-seen-on-facebook">facebook</span>
          <span className="as-seen-on-divider">|</span>
          <span className="as-seen-on-text">Bridge to Our Future</span>
          <span className="as-seen-on-divider">|</span>
          <span className="as-seen-on-text">The Walker Collection</span>
        </div>
      </section>
      <section className="organizer-section">
        <div className="organizer-image-wrap">
          <img className="organizer-image" src="/Two-Women-Cleaning.jpg" alt="Two Women Cleaning" />
        </div>
        <div className="organizer-card">
          <div className="organizer-card-label">YOUR EXPERT</div>
          <div className="organizer-card-title">HOME ORGANIZERS</div>
          <div className="organizer-card-desc">
            [Harmonized] will take your home from chaotic to composed. Our expert organizers create beautiful, sustainable systems based on your needs and lifestyle.
          </div>
          <div className="organizer-card-links">
            <a href="#">Bathrooms</a> | <a href="#">Closets</a> | <a href="#">Kitchens</a> | <a href="#">Pantries</a> | <a href="#">Playrooms</a> | <a href="#">Nurseries</a> | <a href="#">Offices & More!</a>
          </div>
          <button className="cta-btn organizer-btn">Get Organized</button>
        </div>
      </section>
    </div>
  );
}

export default App;
