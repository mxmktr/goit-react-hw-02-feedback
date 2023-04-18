import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

export default function Section({ message, children }) {
  return (
    <>
      <h1 className={css.title}>{message}</h1>
      {children}
    </>
  );
}

Section.propTypes = {
  message: PropTypes.string,
};
