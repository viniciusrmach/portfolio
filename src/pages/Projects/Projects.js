import styles from './Projects.module.scss';
import CardsContainer from '../../components/CardsContainer/CardsContainer';

function Projects() {
  return (
    <>
      <h2 className={styles['page-name']}>
        projetos <span>/ work</span>
      </h2>
      <CardsContainer />
    </>
  );
}

export default Projects;
