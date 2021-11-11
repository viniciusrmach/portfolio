import styles from './Card.module.scss';

function Card({ image, title, description, client }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.client}>{client}</p>
    </div>
  );
}


export default Card;
