import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import profilePhoto from './profilephoto1.png'; // Ensure this image exists in the src folder

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="logo">PETER J. PUSTORINO</Link> {/* Make logo clickable */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

      <main className="about-container">
        <div className="profile-card">
          <img src={profilePhoto} alt="Peter J. Pustorino" className="profile-photo" />
          <h1 className="name">Peter J. Pustorino</h1>
          <h3 className="mediation">Mediation Services PA</h3>
          <section>
            <h4 className="primary">Practice Area:</h4>
            <h4 className="secondary">Mediation Services<br />Qualified Neutral</h4>
          </section>
          <section>
          <h4 className="primary">Specializations:</h4>
            <h4 className="secondary">Workers' Compensation<br />Employment Law</h4>
          </section>
          <section>
          <h4 className="primary">Education:</h4>
            <h4 className="secondary">
              William Mitchell College of Law (J.D., 1974)<br />
              Valparaiso University (B.S., 1965)
            </h4>
          </section>
          <section>
          <h4 className="primary">Bar Admissions:</h4>
            <h4 className="secondary">
              Minnesota Supreme Court, 1974<br />
              U.S. District Court, Minnesota, 1974<br />
              Wisconsin Supreme Court, 1990
            </h4>
          </section>
          <section>
          <h4 className="primary">Awards and Achievements:</h4>
            <h4 className="secondary">
              Listed in "Best Lawyers in America"<br />
              Listed in "National Registry of Who's Who"<br />
              Listed in "America's Most Honored Lawyers"<br />
              Selected as National Fellow by the CWCL<br />
              Selected as "Super Lawyer" by Law & Politics Magazine
            </h4>
          </section>
        </div>
      </main>
      </header>
    </div>
  );
}

export default About;