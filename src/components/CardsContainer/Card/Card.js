import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

function Card({ path, image, title, description, client }) {
  return (
    <Link className={styles['react-router-link']} to={`project/${path}`}>
      <div className={styles.card}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.client}>{client}</p>
      </div>
    </Link>
  );
}

export default Card;
