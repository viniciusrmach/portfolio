import styles from './Trueet.module.scss';

import trophyIcon from '../images/trophy.svg';
import placeholderImage from './images/1110x620.png';

function Trueet() {
  return (
    <>
      <div className={styles['main-container']}>
        <div className={styles['mobi-padding']}>
          <h2 className={styles['title-primary']}>Trueet</h2>
          <h2 className={styles['subtitle-primary']}>
            A notícia falsa está circulando. Avise seus amigos.
          </h2>

          <div className={styles['info-credits-outer-container']}>
            <div className={styles['info-credits-inner-container']}>
              <div className={styles['info-credits-client']}>
                GLOBAL EDITORS NETWORK • 2018
              </div>

              <div className={styles['info-credits-category-title']}>
                Pesquisa e produção
              </div>
              <div className={styles['info-credits-category-collaborators']}>
                Luís Guilherme Julião, Mateus Paulino e Vinicius Machado
              </div>

              <div className={styles['info-credits-category-title']}>
                Wireframe
              </div>
              <div className={styles['info-credits-category-collaborators']}>
                Vinicius Machado
              </div>

              <div className={styles['info-credits-prize-container']}>
                <div className={styles['info-credits-prize-icon']}>
                  <img src={trophyIcon} alt="Troféu" />
                </div>

                <div className={styles['info-credits-prize-info']}>
                  <div className={styles['info-credits-prize-title']}>
                    EditorsLab - Google News Initiative
                  </div>
                  <div className={styles['info-credits-prize-description']}>
                    2018 • 1º Lugar
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className={styles['text-primary']}>
            O turbulento cenário político do Brasil próximo às eleições de 2018
            fizeram com que a Global Editors Network (GEN) desembarcasse pela
            primeira vez no país com um desafio: encontrar ideias para combater
            informações falsas que circulavam livremente nas redes. Para isso, a
            GEN reuniu equipes formadas por jornalistas, designers e
            desenvolvedores de diferentes veículos de mídia, startups e
            universidades no EditorsLab — um hackaton promovido pela Google News
            Initiative. A competição foi em São Paulo e durou dois dias
            inteiros, desde a pesquisa até a solução e apresentação da proposta
            para os jurados. Com o projeto &apos;Trueet&apos;, nossa equipe ficou em 1º
            lugar e representou o Brasil no GEN Summit 2018, em Lisboa,
            Portugal.
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

export default Trueet;
