import styles from './CardsContainer.module.scss';
import works from './data/works';

import Card from './Card/Card';

function CardsContainer() {
  return (
    <div className={styles.container}>
      {works.map((work) => (
        <Card
          image={work.image}
          title={work.title}
          description={work.description}
          client={work.client}
        />
      ))}
    </div>
  );
}

export default CardsContainer;
