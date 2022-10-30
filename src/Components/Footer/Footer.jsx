import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-name">Nazwa firmy - wszelkie prawa zastrzeżone, 2019.</p>
        <div className="icons-container">
          <a href="https://www.instagram.com">
            <FontAwesomeIcon className="icons" icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon className="icons fb-icon" icon={faSquareFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
}
