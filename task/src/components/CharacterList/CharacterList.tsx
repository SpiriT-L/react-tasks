import Character from '../Character/Character';
import NavPage from '../NavPage/NavPage';
import styles from './Character.module.scss';

// function NavPage() {
//   return (
//     <div className={styles.navbar}>
//       <button>Prev</button>
//       <button>Next</button>
//     </div>
//   );
// }

function CharacterList({ characters, page, setPage }) {
  return (
    <>
      <h2 className={styles.title}>Rick end Morty</h2>
      <NavPage page={page} setPage={setPage} />

      <div className={styles.characterCardList}>
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
      <NavPage page={page} setPage={setPage} />
    </>
  );
}

export default CharacterList;
