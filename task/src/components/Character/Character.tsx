import styles from './Character.module.scss';

function Character({ character }) {
  return (
    <>
      <div className={styles.characterCard}>
        <h4 className={styles.name}>{character.name}</h4>
        <img
          className={styles.images}
          src={character.image}
          alt={character.name}
        />
        <p className={styles.originName}>{character.origin.name}</p>
      </div>
    </>
  );
}

export default Character;
