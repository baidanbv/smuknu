import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
    <div className="wrapper">
      <div className={styles.socialLinks}>
        <a className={styles.icon} href="http://facebook.com">
          <FaFacebook />
        </a>
        <a className={styles.icon} href="http://instagram.com">
          <FaInstagram />
        </a>
        <a className={styles.icon} href="http://pinterest.com">
          <FaPinterest />
        </a>
        <a className={styles.icon} href="http://twitter.com">
          <FaTwitter />
        </a>
        <a className={styles.icon} href="http://youtube.com">
          <FaYoutube />
        </a>
      </div>
      <div className={styles.footerContacts}>
        <a href="mailto:mail@smuk.nu">mail@smuk.nu</a>
        <a href="tel:+45 123 345 33">+45 123 345 33</a>
      </div>
    </div>
  </div>
);

export default Footer;
