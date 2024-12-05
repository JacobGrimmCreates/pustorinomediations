import { Link } from 'react-router-dom';
import './App.css';
import profilePhoto from './profilephoto1.png'; // Ensure this image is in the src folder

function Contact() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/" className="logo">PETER J. PUSTORINO</Link> {/* Make logo clickable */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link className="active" to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="contact-container">
          <div className="contact-card">
          <div className="centerphoto">
            <img src={profilePhoto} alt="Peter J. Pustorino" className="profile-photo-about" />
            </div>
            <div class="info">
            <h3>Peter J. Pustorino</h3>
            <p>Mediator</p>
            <p>Phone: <a href="tel:9524653060">(952) 465-3060</a></p>
            <p>Email: <a href="mailto:pjpustorino@hotmail.com">pjpustorino@hotmail.com</a></p>
            
          </div>
          </div>
          <div className="contact-card">
          <div class="info">
            <h3>Kelly Grimm</h3>
            <p>Legal Assistant</p>
            <p>Phone: <a href="tel:9524653088">(952) 465-3088</a></p>
            <p>Email: <a href="mailto:kgrimm@pptplaw.com">kgrimm@pptplaw.com</a></p>
          </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Contact;