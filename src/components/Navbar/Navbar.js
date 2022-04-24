import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

import imageEmail from './images/email.svg';
import imageLinkedin from './images/linkedin.svg';
import imageTwitter from './images/twitter.svg';
import imageInstagram from './images/instagram.svg';

function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">vinicius machado</Link>
      </h1>

      <div className={styles['menu-icon']}>
        <div className={styles['menu-line']}></div>
        <div className={styles['menu-line']}></div>
        <div className={styles['menu-line']}></div>
      </div>

      <div className={styles['menu-desk']}>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link to="/">
                projetos <span>/ work</span>
              </Link>
            </li>
            <li>
              <Link to="what-i-do">
                o que eu faço <span>/ what I do</span>
              </Link>
            </li>
            <li>
              <Link to="about-me">
                sobre mim <span>/ about me</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.social}>
          <img className={styles['ico-email']} src={imageEmail} />
          <img
            className={styles['ico-linkedin']}
            src={imageLinkedin}
            alt={'LinkedIn'}
          />
          <img
            className={styles['ico-twitter']}
            src={imageTwitter}
            alt={'Twitter'}
          />
          <img
            className={styles['ico-instagram']}
            src={imageInstagram}
            alt={'Instagram'}
          />
        </div>
      </div>

      <div className={styles['menu-mobi']}>mobi menu</div>
    </header>
  );
}

export default Navbar;
