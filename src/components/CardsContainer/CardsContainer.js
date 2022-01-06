import styles from './CardsContainer.module.scss';
import works from './data/works';

import Card from './Card/Card';

function CardsContainer() {
  return (
    <div className={styles['outer-container']}>
      <div className={styles['inner-container']}>
        {works.map((work) => (
          <Card
            image={work.image}
            title={work.title}
            description={work.description}
            client={work.client}
          />
        ))}
      </div>
    </div>
  );
}

export default CardsContainer;
