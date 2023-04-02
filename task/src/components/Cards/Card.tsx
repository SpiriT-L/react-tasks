import React from 'react';
import styles from './Cards.module.scss';
import { User } from '../../types/types';

// eslint-disable-next-line react/function-component-definition
const Card = ({ data }: { data: User }) => {
  return (
    <>
      {data.map((item: User) => (
        <ul className={styles.card} key="{item.id}">
          <li className={styles.context}>
            <img
              src="https://picsum.photos/200/120/?random"
              alt="img"
              className={styles.img}
            />
            <div
              className={(styles.firstName, styles.item)}
              key="item.first_name"
            >
              <h4>First Name:</h4> {item.first_name}
            </div>
            <div
              className={(styles.lastName, styles.item)}
              key="item.last_name"
            >
              <h4>Last Name:</h4> {item.last_name}
            </div>
            <div className={(styles.email, styles.item)} key="item.email">
              <h4>Email:</h4> {item.email}
            </div>
            <div className={(styles.gender, styles.item)} key="item.gender">
              <h4>Gender:</h4> {item.gender}
            </div>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Card;
