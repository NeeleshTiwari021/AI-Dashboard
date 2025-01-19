import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© 2025 AI Dashboard. All rights reserved.</p>
        <div className="footer__links">
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
