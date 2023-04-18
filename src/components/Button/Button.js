import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
