import styles from './InfoItem.module.scss';

function InfoItem({ name, primaryText, year, secondaryText, url = '' }) {
  return (
    <div className={styles['container']}>
      <h4 className={styles['title']}>
        {name} • {year}
      </h4>

      <p className={styles['text-primary']}>{primaryText}</p>

      <p className={styles['text-secondary']}>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {secondaryText}
          </a>
        ) : (
          secondaryText
        )}
      </p>
    </div>
  );
}

export default InfoItem;
