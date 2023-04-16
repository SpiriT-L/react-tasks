import React, { useEffect } from 'react';
import styles from './Home.module.scss';
import Search from '../../components/Search/Search';
import Api from '../../components/Api/Api';

export default function Home() {
  useEffect(() => {
    document.title = `Home`;
  });
  return (
    <>
      <section className={styles.sectionHome}>
        <div className="container">
          <h2 className={styles.title}>Home</h2>
          {/* <Search /> */}
          <Api />
        </div>
      </section>
    </>
  );
}
