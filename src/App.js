import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import About from './About';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggles menu visibility
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Reset menuOpen state when resizing above 1000px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000 && menuOpen) {
        setMenuOpen(false); // Close the menu on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="topline">
            <div className="header-container">
              {/* Make the logo clickable */}
              <Link to="/" className="logo" onClick={closeMenu}>PETER J. PUSTORINO</Link>
            </div>

            <div className={`navbar ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
          
          <div className={`ham-menu ${menuOpen ? "hidden" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div></div>

          {/* Close Menu (X) Button */}
      <div
        className={`close-menu ${menuOpen ? "visible" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
      </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
        </header>
      </div>
    </Router>
  );
}

// Keep your original Home page content intact
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggles menu visibility
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    
    <>
      <div className="herocontainer">
        <h1 className="hero">25+ years of high quality<br /> mediation services</h1>
      </div>
      <div className="buttongroup">
      <Link to="/about" onClick={closeMenu}>
        <button className="learnmore">Learn More</button>
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          <button className="contactus" onClick={closeMenu}>Contact Us</button>
        </Link>
      </div>
    </>
    
  );
}

export default App;