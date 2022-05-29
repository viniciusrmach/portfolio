import styles from './WhatIDo.module.scss';

import placeholderImage from './images/540x332.png';

function WhatIDo() {
  return (
    <>
      <div className={styles['main-container']}>
        <div className={styles['mobi-padding']}>
          <h2 className={styles['title-primary']}>
            interface + design de informação
          </h2>
          <p className={styles['text-primary']}>
            Em até 6 linhas você precisa contar: onde você vive, onde estudou,
            experiências de trabalho e cursos que fez, área de atuação, projetos
            pessoais que fez, interesses e dizer que é sócio-fundador da
            Nautilus. Em até 10 linhas você precisa contar: onde você vive, onde
            estudou.
          </p>

          <h3 className={styles['title-secondary']}>interface</h3>
          <p className={styles['text-primary']}>
            Em até 6 linhas você precisa contar: onde você vive, onde estudou,
            experiências de trabalho e cursos que fez, área de atuação, projetos
            pessoais que fez, interesses e dizer que é sócio-fundador da
            Nautilus. Em até 10 linhas você precisa contar: onde você vive, onde
            estudou.
          </p>
        </div>
      </div>

      <div className={styles['content-image-container']}>
        <img className={styles['content-image']} src={placeholderImage} />
      </div>

      <div className={styles['main-container']}>
        <div className={styles['mobi-padding']}>
          <p className={styles['text-primary']}>
            Em até 6 linhas você precisa contar: onde você vive, onde estudou,
            experiências de trabalho e cursos que fez, área de atuação, projetos
            pessoais que fez, interesses e dizer que é sócio-fundador da
            Nautilus. Em até 10 linhas você precisa contar: onde você vive, onde
            estudou.
          </p>
        </div>
      </div>

      <div className={styles['content-image-container']}>
        <img className={styles['content-image']} src={placeholderImage} />
      </div>

      <div className={styles['main-container']}>
        <div className={styles['mobi-padding']}>
          <h3 className={styles['title-secondary']}>Design da informação</h3>
          <p className={styles['text-primary']}>
            Em até 6 linhas você precisa contar: onde você vive, onde estudou,
            experiências de trabalho e cursos que fez, área de atuação, projetos
            pessoais que fez, interesses e dizer que é sócio-fundador da
            Nautilus. Em até 10 linhas você precisa contar: onde você vive, onde
            estudou.
          </p>
        </div>
      </div>

      <div className={styles['content-image-container']}>
        <img className={styles['content-image']} src={placeholderImage} />
      </div>

      <div className={styles['content-image-container']}>
        <img className={styles['content-image']} src={placeholderImage} />
      </div>
    </>
  );
}

export default WhatIDo;
