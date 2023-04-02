import React, { useRef, useState } from 'react';
import styles from '../Cards/Cards.module.scss';

const COUNTRY = [
  {
    id: 1,
    value: 'Belarus',
    title: 'Belarus',
  },
  {
    id: 2,
    value: 'Ukraine',
    title: 'Ukraine',
  },
  {
    id: 3,
    value: 'Poland',
    title: 'Poland',
  },
  {
    id: 4,
    value: 'Lithuania',
    title: 'Lithuania',
  },
];

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [inputSelect, setInputSelect] = useState('');
  const [inputRadio, setInputRadio] = useState('');
  const handlerChange = (e) => {
    setInputSelect(e.target.value);
  };
  const ageItems = ['0-18', '18-25', '25-40'];
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');

  const [checkedHTML, setCheckedHTML] = useState(false);
  const [checkedCSS, setCheckedCSS] = useState(false);
  const [checkedJS, setCheckedJS] = useState(false);
  const [checkedReact, setCheckedReact] = useState(false);
  const fileInput = useRef();
  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log(fileInput.current.files[0], firstName);
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handlerSubmit}>
        <div className={styles.block}>
          <label htmlFor="FirstName">
            <h4>First Name:</h4>
          </label>
          <input
            type="text"
            name="firstName"
            id="FirstName"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
          />
        </div>
        <div className={styles.block}>
          <label htmlFor="Email">
            <h4>Email:</h4>
          </label>
          <input
            type="email"
            name="email"
            id="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className={styles.inputBlock}>
          <label htmlFor="inputSelect">
            <h4>Country:</h4>
          </label>
          <select
            className={(styles.input, styles.select)}
            name="education"
            id="inputSelect"
            value={inputSelect}
            onChange={handlerChange}
          >
            {COUNTRY.map(({ id, value, title }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.block}>
          <h4>Age:</h4>
          {ageItems.map((ageItem: string) => (
            <label htmlFor="radio" key={ageItem}>
              <input
                type="radio"
                name="0-18"
                id="checked"
                checked={inputRadio === ageItem}
                onChange={() => setInputRadio(ageItem)}
              />{' '}
              {ageItem}
            </label>
          ))}
        </div>
        <div className={styles.block}>
          <label htmlFor="skils">
            <h4>Skils:</h4>
            <input
              type="checkbox"
              name="HTML"
              id="checked"
              value={checkedHTML}
              onChange={() => setCheckedHTML('HTML')}
            />{' '}
            HTML
            <input
              type="checkbox"
              name="CSS"
              id="checked"
              value={checkedCSS}
              onChange={() => setCheckedCSS('CSS')}
            />{' '}
            CSS
            <input
              type="checkbox"
              name="JS"
              id="checked"
              value={checkedJS}
              onChange={() => setCheckedJS('JS')}
            />{' '}
            JS
            <input
              type="checkbox"
              name="React"
              id="checked"
              value={checkedReact}
              onChange={() => setCheckedReact('React')}
            />{' '}
            React
          </label>
        </div>
        <div className={styles.block}>
          <h4>Images:</h4>

          <label htmlFor="img">
            <input type="file" name="Images" id="img" ref={fileInput} />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      {/* <div className={styles.card}>
        <div className={styles.context}>
          <img
            src={fileInput.current.files[0]}
            alt="img"
            className={styles.img}
          />
          <div className={(styles.firstName, styles.item)}>
            <h4>First Name:</h4> {firstName}
          </div>
          <div className={(styles.email, styles.item)}>
            <h4>Email:</h4> {email}
          </div>
          <div className={(styles.country, styles.item)}>
            <h4>Country:</h4> {inputSelect}
          </div>
          <div className={(styles.age, styles.item)}>
            <h4>Age:</h4> {inputRadio}
          </div>
          <div className={(styles.skills, styles.item)}>
            <h4>Skills:</h4> {checkedHTML} {checkedCSS} {checkedJS}{' '}
            {checkedReact}
          </div>
        </div>
      </div> */}
    </div>
  );
}
