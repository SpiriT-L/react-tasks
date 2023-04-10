import styles from './NavPage.module.scss';

function NavPage(props) {
  return (
    <>
      <div className={styles.navbar}>
        <button
          className={styles.btn}
          onClick={() => props.setPage(props.page - 1)}
        >
          Prev
        </button>
        <div className={styles.page}>Page: {props.page}</div>
        <button
          className={styles.btn}
          onClick={() => props.setPage(props.page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default NavPage;
