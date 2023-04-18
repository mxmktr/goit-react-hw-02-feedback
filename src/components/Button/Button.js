import React from 'react';
import css from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <>
      <button type="button" className={css.button} onClick={onClick}>
        Good
      </button>
      <button type="button" className={css.button} onClick={onClick}>
        Neutral
      </button>
      <button type="button" className={css.button} onClick={onClick}>
        Bad
      </button>
    </>
  );
}
