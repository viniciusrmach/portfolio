import styles from './Navbar.module.scss';

import imageEmail from './images/email.svg';
import imageLinkedin from './images/linkedin.svg';
import imageTwitter from './images/twitter.svg';
import imageInstagram from './images/instagram.svg';

function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>vinicius machado</h1>
      <div className={styles['menu-icon']}>
        <div className={styles['menu-line']}></div>
        <div className={styles['menu-line']}></div>
        <div className={styles['menu-line']}></div>
      </div>

      <nav className={styles.menu}>
        <ul>
          <li className={styles.item}>
            projetos <p>/ work</p>
          </li>
          <li className={styles.item2}>
            o que eu faço <p>/ what I do</p>
          </li>
          <li className={styles.item3}>
            sobre mim <p>/ about</p>
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
    </header>
  );
}

export default Navbar;
