import { useState } from 'react';
import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react';

import imageEmail from './images/email.svg';
import imageLinkedin from './images/linkedin.svg';
import imageTwitter from './images/twitter.svg';
import imageInstagram from './images/instagram.svg';

function Navbar() {
  const [isMobiMenuOpen, setIsMobiMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <NavLink to="/">vinicius machado</NavLink>
      </h1>

      <div className={styles['menu-icon']}>
        <div className={styles['menu-line']}></div>
        <div className={styles['menu-line']}></div>
        <div className={styles['menu-line']}></div>
      </div>

      <div
        className={[
          styles.navbar,
          styles[`${isMobiMenuOpen ? 'navbar-mobi-menu' : ''}`],
        ].join(' ')}
      >
        <nav>
          <ul>
            <li onClick={() => setIsMobiMenuOpen(false)}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles['link-active'] : ''
                }
              >
                projetos <span>/ work</span>
              </NavLink>
            </li>

            <li onClick={() => setIsMobiMenuOpen(false)}>
              <NavLink
                to="what-i-do"
                className={({ isActive }) =>
                  isActive ? styles['link-active'] : ''
                }
              >
                o que eu faço <span>/ what I do</span>
              </NavLink>
            </li>

            <li onClick={() => setIsMobiMenuOpen(false)}>
              <NavLink
                to="about-me"
                className={({ isActive }) =>
                  isActive ? styles['link-active'] : ''
                }
              >
                sobre mim <span>/ about me</span>
              </NavLink>
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

      <div className={styles['navbar-mobi']}>
        <Hamburger toggled={isMobiMenuOpen} toggle={setIsMobiMenuOpen} />
      </div>
    </header>
  );
}

export default Navbar;
