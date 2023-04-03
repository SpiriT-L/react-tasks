import React, { useRef, useState } from 'react';
import styles from './Form.module.scss';

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
  const [error, setError] = useState(false);

  const [checkedHTML, setCheckedHTML] = useState(false);
  const [checkedCSS, setCheckedCSS] = useState(false);
  const [checkedJS, setCheckedJS] = useState(false);
  const [checkedReact, setCheckedReact] = useState(false);
  const fileInput = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.length === 0 || email.length === 0) {
      setError(true);
    }
    // console.log(fileInput.current.files[0], firstName);
  };

  const addCard = () => {
    <div className={styles.card}>
      <div className={styles.context}>
        {/* <img
          src={fileInput.current.files[0]}
          alt="img"
          className={styles.img}
        /> */}
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
          <h4>Skills:</h4> {checkedHTML} {checkedCSS} {checkedJS} {checkedReact}
        </div>
      </div>
    </div>;
  };
  console.log(addCard());

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.block}>
          <label className={styles.label} htmlFor="FirstName">
            <h4 className={styles.h4}>First Name:</h4>
          </label>
          <div className={styles.inputBlock}>
            <input
              className={styles.inputText}
              type="text"
              name="firstName"
              id="FirstName"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
            />
            {error && firstName.length <= 0 ? (
              <div className={styles.error}>
                Error. The field cannot be empty
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className={styles.block}>
          <label className={styles.label} htmlFor="Email">
            <h4 className={styles.h4}>Email:</h4>
          </label>
          <div className={styles.inputBlock}>
            <input
              className={styles.inputText}
              type="email"
              name="email"
              id="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            {error && email.length <= 0 ? (
              <div className={styles.error}>
                Error. The field cannot be empty
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className={styles.block}>
          <label className={styles.label} htmlFor="inputSelect">
            <h4 className={styles.h4}>Country:</h4>
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
          <h4 className={styles.h4}>Age:</h4>
          {ageItems.map((ageItem: string) => (
            <label className={styles.label} htmlFor="radio" key={ageItem}>
              <input
                className={styles.radio}
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
          <label className={(styles.label, styles.checkox)} htmlFor="skils">
            <h4 className={styles.h4}>Skils:</h4>
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              name="HTML"
              id="checked"
              value={checkedHTML}
              onChange={() => setCheckedHTML('HTML')}
            />{' '}
            HTML
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              name="CSS"
              id="checked"
              value={checkedCSS}
              onChange={() => setCheckedCSS('CSS')}
            />{' '}
            CSS
            <input
              className={styles.inputCheckbox}
              type="checkbox"
              name="JS"
              id="checked"
              value={checkedJS}
              onChange={() => setCheckedJS('JS')}
            />{' '}
            JS
            <input
              className={styles.inputCheckbox}
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
          <h4 className={styles.h4}>Images:</h4>

          <label className={styles.label} htmlFor="img">
            <input type="file" name="Images" id="img" ref={fileInput} />
          </label>
        </div>
        <input
          className={styles.submit}
          type="submit"
          value="Submit"
          onClick={addCard}
        />
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
    </>
  );
}
