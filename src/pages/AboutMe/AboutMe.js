import styles from './AboutMe.module.scss';

import InfoItem from './InfoItem/InfoItem';

import profileImage from './images/vinicius-machado.png';

function AboutMe() {
  return (
    <div className={styles['main-container']}>
      <div className={styles['profile-container']}>
        <img className={styles['profile-image']} src={profileImage} alt="Vinicius Machado" />

        <div className={styles['mobi-padding']}>
          <h2 className={styles['profile-text-title']}>
            eu acredito em projetos com narrativas bem construídas que infor
            projetos que contribuem com informação relevante.
          </h2>
          <p className={styles['profile-text-primary']}>
            Em até 6 linhas você precisa contar: onde você vive, onde estudou,
            experiências de trabalho e cursos que fez, área de atuação, projetos
            pessoais que fez, interesses e dizer que é sócio-fundador da
            Nautilus. Em até 10 linhas você precisa contar: onde você vive, onde
            estudou, experiências de trabalho e cursos que fez, área de atuação,
            projetos pessoais que fez, interesses e dizer que é sócio-fundador
            da Nautilus
          </p>
          <p className={styles['profile-text-secondary']}>
            / Em até 6 linhas você precisa contar: onde você vive, onde estudou,
            experiências de trabalho e cursos que fez, área de atuação, projetos
            pessoais que fez, interesses e dizer que é sócio-fundador da
            Nautilus. Em até 10 linhas você precisa contar: onde você vive, onde
            estudou, experiências de trabalho e cursos que fez, área de atuação,
            projetos pessoais que fez, interesses e dizer que é sócio-fundador
            da Nautilus
          </p>

          <h3 className={styles['contact-title']}>Contato</h3>
          <p className={styles['contact-email']}>
            <a href="mailto:viniciusrmach@gmail.com">viniciusrmach@gmail.com</a>
          </p>
        </div>
      </div>

      <hr></hr>

      <div
        className={[styles['info-container'], styles['mobi-padding']].join(' ')}
      >
        <div className={styles['info-section']}>
          <h3 className={styles['info-title']}>Referências na web</h3>

          <InfoItem
            name="Nome do site"
            primaryText="Nome do projeto"
            year="2020"
            secondaryText="Acesse aqui"
            url="https://gowebit.com.br"
          />

          <InfoItem
            name="Nome do site"
            primaryText="Nome do projeto"
            year="2020"
            secondaryText="Acesse aqui"
            url="https://gowebit.com.br"
          />

          <InfoItem
            name="Nome do site"
            primaryText="Nome do projeto"
            year="2020"
            secondaryText="Acesse aqui"
            url="https://gowebit.com.br"
          />

          <InfoItem
            name="Nome do site"
            primaryText="Nome do projeto"
            year="2020"
            secondaryText="Acesse aqui"
            url="https://gowebit.com.br"
          />

          <InfoItem
            name="Nome do site"
            primaryText="Nome do projeto"
            year="2020"
            secondaryText="Acesse aqui"
            url="https://gowebit.com.br"
          />

          <InfoItem
            name="Nome do site"
            primaryText="Nome do projeto"
            year="2020"
            secondaryText="Acesse aqui"
            url="https://gowebit.com.br"
          />
        </div>

        <div className={styles['info-section']}>
          <h3 className={styles['info-title']}>Publicaçõoes</h3>

          <InfoItem
            name="In.Rio I"
            primaryText="Título da publicação"
            year="2018"
            secondaryText="Acesse aqui"
            url="https://gowebit.com.br"
          />

          <InfoItem
            name="Livro de fotografia"
            primaryText="Título da publicação"
            year="2018"
            secondaryText="Acesse aqui"
            url="https://gowebit.com.br"
          />

          <InfoItem
            name="Livro de fotografia"
            primaryText="Título da publicação"
            year="2018"
            secondaryText="Acesse aqui"
            url="https://gowebit.com.br"
          />
        </div>

        <div className={styles['info-section']}>
          <h3 className={styles['info-title']}>Prêmios</h3>

          <InfoItem
            name="Instituição do Prêmio"
            primaryText="Nome do Prêmio"
            year="2018"
            secondaryText="Categoria e nome do Prêmio (Award of excellence)"
          />

          <InfoItem
            name="Instituição do Prêmio"
            primaryText="Nome do Prêmio"
            year="2018"
            secondaryText="Categoria e nome do Prêmio (Award of excellence)"
          />

          <InfoItem
            name="Instituição do Prêmio"
            primaryText="Nome do Prêmio"
            year="2018"
            secondaryText="Categoria e nome do Prêmio (Award of excellence)"
          />

          <InfoItem
            name="Instituição do Prêmio"
            primaryText="Nome do Prêmio"
            year="2018"
            secondaryText="Categoria e nome do Prêmio (Award of excellence)"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
