import React, { Component } from 'react';
import css from './Button.module.css';

export default function Button({ buttonOnClick }) {
  return (
    <>
      <button type="button" className={css.button} onClick={buttonOnClick}>
        Good
      </button>
      <button type="button" className={css.button} onClick={buttonOnClick}>
        Neutral
      </button>
      <button type="button" className={css.button} onClick={buttonOnClick}>
        Bad
      </button>
    </>
  );
}
