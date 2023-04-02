import React, { useEffect } from 'react';
import styles from './Forms.module.scss';
import Form from '../../components/Form/Form';

export default function Forms() {
  useEffect(() => {
    document.title = 'Forms';
  });
  return (
    <>
      <section className={styles.sectionForms}>
        <div className="container">
          <h2 className={styles.title}>Forms</h2>
          <Form />
        </div>
      </section>
    </>
  );
}
