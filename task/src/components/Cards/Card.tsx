import React from 'react';
import styles from './Cards.module.scss';
import { User } from '../../types/types';

// eslint-disable-next-line react/function-component-definition
const Card = ({ data }: { data: User }) => {
  return (
    <>
      {data.map((item: User) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.context}>
            <img
              src="https://picsum.photos/200/120/?random"
              alt="img"
              className={styles.img}
            />
            <div className={(styles.firstName, styles.item)}>
              <h4>First Name:</h4> {item.first_name}
            </div>
            <div className={(styles.lastName, styles.item)}>
              <h4>Last Name:</h4> {item.last_name}
            </div>
            <div className={(styles.email, styles.item)}>
              <h4>Email:</h4> {item.email}
            </div>
            <div className={(styles.gender, styles.item)}>
              <h4>Gender:</h4> {item.gender}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
