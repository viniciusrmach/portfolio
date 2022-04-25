import styles from './AboutMe.module.scss';

import profileImage from './images/vinicius-machado.png';

function AboutMe() {
  return (
    <div className={styles['main-container']}>
      <div className={styles['profile-block']}>
        <img className={styles['profile-image']} src={profileImage} />

        <div
          className={[styles['profile-text'], styles['mobi-padding']].join(' ')}
        >
          <div className={styles['profile-text']}>
            eu acredito em projetos com narrativas bem construídas que infor
            projetos que contribuem com informação relevante.
          </div>
          <div className={styles['profile-text']}>
            Em até 6 linhas você precisa contar: onde você vive, onde estudou,
            experiências de trabalho e cursos que fez, área de atuação, projetos
            pessoais que fez, interesses e dizer que é sócio-fundador da
            Nautilus. Em até 10 linhas você precisa contar: onde você vive, onde
            estudou, experiências de trabalho e cursos que fez, área de atuação,
            projetos pessoais que fez, interesses e dizer que é sócio-fundador
            da Nautilus
          </div>
          <div className={styles['profile-text']}>
            / Em até 6 linhas você precisa contar: onde você vive, onde estudou,
            experiências de trabalho e cursos que fez, área de atuação, projetos
            pessoais que fez, interesses e dizer que é sócio-fundador da
            Nautilus. Em até 10 linhas você precisa contar: onde você vive, onde
            estudou, experiências de trabalho e cursos que fez, área de atuação,
            projetos pessoais que fez, interesses e dizer que é sócio-fundador
            da Nautilus
          </div>

          <div className={styles['contact-title']}>Contato</div>
          <div className={styles['contact-emil']}>viniciusrmach@gmail.com</div>
        </div>
      </div>

      <hr></hr>

      <div className={[styles['info-block'], styles['mobi-padding']].join(' ')}>
        About Me
      </div>
    </div>
  );
}

export default AboutMe;
