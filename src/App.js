import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const allTestimonials = [
  {
    avatar: 'SF',
    name: 'Stephanie F',
    quote: 'WOW does not begin to describe!',
    text: 'The Neat Method team unpacked my entire house after a move. They took such care to create organized, beautiful, functional spaces in each of my rooms. They took my needs and goals into account, and I am enjoying our new home SO MUCH MORE because of what these ladies created. I will be grateful to them forever.',
  },
  {
    avatar: 'KB',
    name: 'Kimberly B',
    quote: 'My husband came home from a trip and I found him just standing and staring...',
    text: '...at the incredibly organized shelves. Another friend asked if I could move the coffee pot in there and we could sit and stare at the gorgeous baskets that were beautifully labeled! My children have actually kept it completely organized. You will not be disappointed when you hire the NEAT Method team.',
  },
  {
    avatar: 'KM',
    name: 'Kiana M',
    quote: 'A tremendous weight has been lifted.',
    text: "I found the productivity that I needed now that I have organized spaces. Even my 3-year-old daughter is more excited about cleaning. When she's done working with something, she'll often put it away (without being prompted) before moving onto something else. I can't wait to work with NEAT Method again!!!",
  },
  {
    avatar: 'JL',
    name: 'Jessica L',
    quote: 'A clear space clears your mind.',
    text: "I was overwhelmed with the clutter in my office, and now it's a space I actually want to work in. It's amazing how much a clear space clears your mind. I'm so grateful for the peace of mind this has brought me!",
  },
  {
    avatar: 'MR',
    name: 'Megan R',
    quote: 'Seamless and professional from start to finish.',
    text: 'From the initial consultation to the final reveal, the process was seamless and professional. They handled everything with such care and created systems that are actually easy to maintain. Highly recommend to anyone feeling overwhelmed.',
  },
  {
    avatar: 'DA',
    name: 'David A',
    quote: 'Life-changing is not an exaggeration.',
    text: "I never realized how much my cluttered home was impacting my stress levels. The team came in and created a sense of calm and order I haven't felt in years. It's not just about being tidy; it's about having a system that works for you.",
  },
  {
    avatar: 'SC',
    name: 'Sarah C',
    quote: 'They thought of everything!',
    text: "I was impressed by their attention to detail. They didn't just organize; they optimized. From the pantry to the playroom, every space is now intuitive and easy to maintain. They thought of everything, and the result is more beautiful and functional than I could have imagined.",
  },
];

const faqs = [
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing is customized based on the scope of your project. We offer a complimentary consultation to discuss your needs and provide a detailed proposal. Please contact us to get started!',
  },
  {
    question: 'What services do you offer?',
    answer: 'We provide comprehensive organizing solutions tailored to transform your living spaces. Our services include: single-space organization, complete whole-home unpacking, ongoing maintenance, and specialized concierge services like new construction consulting.',
  },
  {
    question: 'How long does the process take?',
    answer: 'The duration of the project depends on the size and complexity of the space. We will provide a time estimate in your custom proposal after the initial consultation.',
  },
  {
    question: 'Do I have to get rid of my belongings?',
    answer: 'Not at all! Our process is about creating functional systems that work for you and your belongings. We will guide you through an editing process, but the final decision to keep or discard an item is always yours.',
  },
  {
    question: 'Is the cost of organizing products included?',
    answer: 'The cost of organizing products is not included in the service fee. We will recommend and can shop for products that fit your style and budget, which will be billed separately.',
  },
];

function App() {
  const [showFooterBar, setShowFooterBar] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  const [activeFaq, setActiveFaq] = useState(null);
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

  const showMoreTestimonials = () => {
    setVisibleTestimonials(prev => prev + 3);
  };

  const toggleFaq = index => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
            <h1>Changing How You<br />Feel About <em>Home</em></h1>
            <p className="hero-subtext">Let us help you put <em>joy</em> back in your space,<br />not be overwhelmed by it.</p>
            <button className="cta-btn hero-btn">Get Organized</button>
          </div>
        </div>
      </section>
      <section className="local-organizer-section">
        <h2 className="local-organizer-heading">Connect with your local professional organizer</h2>
        <div className="local-organizer-subheading">
          Discover a new sense of joy, beauty, and clarity
        </div>
        <div className="local-organizer-content">
          <div className="local-organizer-profile">
            <img className="local-organizer-img" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Kristian Dunning" />
          </div>
          <div className="local-organizer-divider"></div>
          <div className="local-organizer-info">
            <div className="local-organizer-name">Connie Walker</div>
            <div className="local-organizer-title">Owner, Grand Rapids</div>
            <div className="local-organizer-rating">
              <span className="local-organizer-stars">★★★★★</span>
              <span className="local-organizer-score">5.0</span>
              <span className="local-organizer-reviews">(3)</span>
            </div>
            <a href="#" className="local-organizer-learn">Learn More</a>
          </div>
        </div>
        <div className="local-organizer-btn-wrap">
          <button className="cta-btn local-organizer-btn">Get Started</button>
        </div>
      </section>

      <section className="any-space-section">
        <h2 className="any-space-title">Every Space, Covered</h2>
        <p className="any-space-description">
          We recognize that life gets hectic and that maintaining an organized home can
          become a challenge. NEAT Method will design and implement a customized
          solution that is not only effective but sustainable.
        </p>
        <hr className="any-space-divider" />
        <div className="any-space-list">
          <div className="any-space-row">
            <span className="any-space-item">✓ Kitchens</span>
            <span className="any-space-item">✓ Closets</span>
            <span className="any-space-item">✓ Bathrooms</span>
            <span className="any-space-item">✓ Kids Rooms</span>
            <span className="any-space-item">✓ Pantries</span>
          </div>
          <div className="any-space-row">
            <span className="any-space-item">✓ Laundry/Linens</span>
            <span className="any-space-item">✓ Garages</span>
            <span className="any-space-item">✓ Craft Rooms/Office</span>
            <span className="any-space-item">+ More</span>
          </div>
        </div>
        <button className="cta-btn any-space-btn">Get Started</button>
      </section>

      <section className="process-section">
        <div className="process-header">
          <div className="process-subtitle">OUR PROCESS</div>
          <h2 className="process-title">What To Expect</h2>
        </div>
        <div className="process-cards">
          <div className="process-card">
            <div className="process-card-text">
              <div className="process-step">STEP 1</div>
              <h3 className="process-card-title">Meet Your Professional Organizer</h3>
              <p className="process-card-desc">Every NEAT experience begins with an in-home consultation so we can get to know you and understand your needs.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1589571894960-20452674C889?q=80&w=2940&auto=format&fit=crop" alt="Meet the organizer" className="process-card-img" />
          </div>
          <div className="process-card">
            <div className="process-card-text">
              <div className="process-step">STEP 2</div>
              <h3 className="process-card-title">Book Your Project</h3>
              <p className="process-card-desc">Following the consultation we'll create a custom proposal for your review. If everything looks good, schedule the project with your organizer.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1495434199341-510ea6769e9a?q=80&w=2940&auto=format&fit=crop" alt="Booking the project" className="process-card-img" />
          </div>
          <div className="process-card">
            <div className="process-card-text">
              <div className="process-step">STEP 3</div>
              <h3 className="process-card-title">Relax And We'll Work Our Magic</h3>
              <p className="process-card-desc">On the day of your project we'll empty the space, categorize the contents and map out a tailored system, before finalizing with organizing solutions.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1515542706656-8e61a70845ac?q=80&w=2940&auto=format&fit=crop" alt="Relaxing during the process" className="process-card-img" />
          </div>
          <div className="process-card">
            <div className="process-card-text">
              <div className="process-step">STEP 4</div>
              <h3 className="process-card-title">Enjoy Your Space</h3>
              <p className="process-card-desc">Your experience will end with a walk-through to ensure you are 100% satisfied with the results — we'll even take care of any donations.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1600195078235-927962a938be?q=80&w=2940&auto=format&fit=crop" alt="Enjoying the new space" className="process-card-img" />
          </div>
        </div>
      </section>

      <section className="what-we-do-section">
        <div className="what-we-do-header">
          <div className="what-we-do-subtitle">HOME ORGANIZATION SERVICES</div>
          <h2 className="what-we-do-title">What We Do</h2>
          <p className="what-we-do-description">
            Our teams will design and implement customized solutions for each client using our
            proven method of organizing and professional understanding of the best materials to
            create lifelong systems.
          </p>
        </div>
        <div className="what-we-do-grid">
          <div className="what-we-do-card">
            <h3 className="what-we-do-card-title">Whole Home Organization</h3>
            <p className="what-we-do-card-desc">Our expert team transforms any space in your home - kitchens, closets, bathrooms, playrooms, garages, and everything in between. We create customized solutions for spaces of all sizes.</p>
          </div>
          <div className="what-we-do-card">
            <h3 className="what-we-do-card-title">Home Refresh</h3>
            <p className="what-we-do-card-desc">We refresh previously organized spaces with label updates, product rearrangement, re-folding, and seasonal adjustments to keep your systems functioning perfectly year-round. Available through regularly scheduled maintenance or as needed.</p>
          </div>
          <div className="what-we-do-card">
            <h3 className="what-we-do-card-title">Move Management</h3>
            <p className="what-we-do-card-desc">Comprehensive moving support including pre-move editing, move coordination, unpacking, and complete organization of your new home.</p>
          </div>
          <div className="what-we-do-card">
            <h3 className="what-we-do-card-title">Renovation Support</h3>
            <p className="what-we-do-card-desc">We consult on renovation plans using our knowledge of your belongings and create temporary living solutions during construction.</p>
          </div>
          <div className="what-we-do-card">
            <h3 className="what-we-do-card-title">Holiday Organizing Services</h3>
            <p className="what-we-do-card-desc">Expert assistance with holiday preparation and takedown, including decorations, gift organization, and entertaining essentials.</p>
          </div>
          <div className="what-we-do-card">
            <h3 className="what-we-do-card-title">Vacation Property Setup</h3>
            <p className="what-we-do-card-desc">Organization and preparation services for vacation homes and rental properties, ensuring they're perfectly set up for your arrival or guests.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-header">
          <div className="testimonials-subtitle">5-STAR REVIEWS</div>
          <h2 className="testimonials-title">Client Testimonials</h2>
        </div>
        <div className="testimonial-list">
          {allTestimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
            <React.Fragment key={index}>
              <div className="testimonial-item">
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <span className="testimonial-name">{testimonial.name}</span>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-stars">★★★★★</div>
                  <h3 className="testimonial-quote">{testimonial.quote}</h3>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
              {index < visibleTestimonials - 1 && index < allTestimonials.length - 1 && (
                <hr className="testimonial-divider" />
              )}
            </React.Fragment>
          ))}
        </div>
        {visibleTestimonials < allTestimonials.length && (
          <div className="show-more-testimonials">
            <button onClick={showMoreTestimonials} className="show-more-btn">
              MORE REVIEWS <span>↓</span>
            </button>
          </div>
        )}
      </section>

      <section className="faq-section">
        <div className="faq-header">
          <div className="faq-subtitle">LEARN MORE</div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className={`faq-icon ${activeFaq === index ? 'open' : ''}`}>›</span>
              </div>
              <div className={`faq-answer ${activeFaq === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <blockquote>
          <div className="quote-main">
            The way your home is set up should support the way you want to feel. Once your space is organized, life feels lighter, simpler, and begins to spark joy.<br />Welcome to a home [Harmonized].
          </div>
        </blockquote>
        <button className="cta-btn quote-section-btn">Get Started</button>
      </section>

      <hr className="footer-divider" />

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-subscribe">
            <div className="footer-logo">Harmonized</div>
            <form className="footer-email-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email for news..." />
              <button type="submit">→</button>
            </form>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>HOME ORGANIZING</h4>
              <ul>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Book a Consultation</a></li>
                <li><a href="#">Organizing Services FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>ABOUT US</h4>
              <ul>
                <li><a href="#">Team</a></li>
                <li><a href="#">Diversity</a></li>
                <li><a href="#">Organizers</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-secondary">
          <div className="footer-copyright">
            <p><a href="#" className="copyright-link">© 2025</a> <a href="#">Terms</a> <a href="#">Privacy</a></p>
          </div>
        </div>
      </footer>

      <div className={`footer-bar${showFooterBar ? ' footer-bar-visible' : ''}`}>
        <span className="footer-bar-text">Experience an elevated approach to a calm and sophisticated home</span>
        <button className="footer-bar-btn">Get Started</button>
      </div>
    </div>
  );
}

export default App;
