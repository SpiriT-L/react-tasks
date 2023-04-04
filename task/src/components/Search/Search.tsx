import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './Search.module.scss';
import { User } from '../../types/types';
import Card from '../Cards/Card';
import { Users } from '../../users';

export default function Search() {
  const [query, setQuery] = useState(() => {
    const saved: string = localStorage.getItem('query');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  const search = (data: User) => {
    return data.filter((item: User) =>
      item.first_name.toLowerCase().includes(query)
    );
  };

  useEffect(() => {
    localStorage.setItem('query', JSON.stringify(query));
  }, [query]);

  return (
    <>
      <div className={styles.form}>
        <form className={styles.formImput}>
          {/* <SearchIcon className={styles.searchIcon} /> */}
          <input
            className={styles.searchImput}
            placeholder="Search input"
            type="search"
            value={query}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setQuery(e.target.value);
            }}
          />
        </form>
        <div className={styles.cards}>
          <Card data={search(Users)} />
        </div>
      </div>
    </>
  );
}
