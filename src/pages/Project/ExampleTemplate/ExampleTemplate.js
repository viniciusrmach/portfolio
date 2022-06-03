import styles from './ExampleTemplate.module.scss';

import trophyIcon from '../images/trophy.svg';
import placeholderImage from './images/1110x620.png';

function ExampleTemplate() {
  return (
    <>
      <div className={styles['main-container']}>
        <div className={styles['mobi-padding']}>
          <h2 className={styles['title-primary']}>RioShow Gastronomia</h2>
          <h2 className={styles['subtitle-primary']}>
            Os melhores restaurantes eleitos pela crítica reunidos em um guia
          </h2>

          <div className={styles['info-credits-outer-container']}>
            <div className={styles['info-credits-inner-container']}>
              <div className={styles['info-credits-client']}>
                RIOSHOW • 2019
              </div>

              <div className={styles['info-credits-category-title']}>
                Edição, seleção e conteúdo
              </div>
              <div className={styles['info-credits-category-collaborators']}>
                Inês Amorim e Marcella Sobral
              </div>

              <div className={styles['info-credits-category-title']}>
                UX e UI Design
              </div>
              <div className={styles['info-credits-category-collaborators']}>
                Vinicius Machado
              </div>

              <div className={styles['info-credits-category-title']}>
                Desenvolvimento
              </div>
              <div className={styles['info-credits-category-collaborators']}>
                Gabriel Valverde
              </div>

              <div className={styles['info-credits-prize-container']}>
                <div className={styles['info-credits-prize-icon']}>
                  <img src={trophyIcon} alt="Troféu" />
                </div>

                <div className={styles['info-credits-prize-info']}>
                  <div className={styles['info-credits-prize-title']}>
                    Nome do Prêmio
                  </div>
                  <div className={styles['info-credits-prize-description']}>
                    2019 • O Globo - Categoria Inovação
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className={styles['text-primary']}>
            O que é o projeto de modo mais formal (aplicativo, site,
            página,...), o objetivo do projeto (necessidades do cliente), como
            ele realiza este objetivo, resultados obtidos, tudo em até cinco
            linhas no desktop. O que é o projeto de modo mais formal
            (aplicativo, site, página,...), o objetivo do projeto (necessidades
            do cliente), como ele realiza este objetivo...
          </p>
        </div>
      </div>

      <div className={styles['content-image-container']}>
        <img
          className={styles['content-image']}
          src={placeholderImage}
          alt="Descrição da imagem"
        />
      </div>

      <div className={styles['main-container']}>
        <div className={styles['mobi-padding']}>
          <h3 className={styles['title-secondary']}>
            Fluxo do usuário: encontrar ou descobrir um restaurante
          </h3>
          <p className={styles['text-primary']}>
            Duas ou três linhas explicando a primeira parte do fluxo do usuário
            (entra no site, tem as opções A e B, etc.) ou explicando alguma
            coisa do método, algum rascunho, alguma simbologia ou conceito.
          </p>
        </div>
      </div>

      <div className={styles['content-image-container']}>
        <img
          className={styles['content-image']}
          src={placeholderImage}
          alt="Descrição da imagem"
        />
      </div>

      <div className={styles['main-container']}>
        <div className={styles['mobi-padding']}>
          <p className={styles['text-primary']}>
            Duas ou três linhas explicando a primeira parte do fluxo do usuário
            (entra no site, tem as opções A e B, etc.) ou explicando alguma
            coisa do método, algum rascunho, alguma simbologia ou conceito.
          </p>
        </div>
      </div>

      <div className={styles['content-image-container']}>
        <img
          className={styles['content-image']}
          src={placeholderImage}
          alt="Descrição da imagem"
        />
      </div>

      <div className={styles['content-image-container']}>
        <img
          className={styles['content-image']}
          src={placeholderImage}
          alt="Descrição da imagem"
        />
      </div>
    </>
  );
}

export default ExampleTemplate;
