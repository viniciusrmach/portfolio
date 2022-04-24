import styles from './CardsContainer.module.scss';
import projects from '../../data/projects-cards';

import Card from './Card/Card';

function CardsContainer() {
  return (
    <div className={styles['outer-container']}>
      <div className={styles['inner-container']}>
        {projects.map((project) => (
          <Card
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            client={project.client}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsContainer;
