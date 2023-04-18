import React from 'react';
import css from './Section.module.css';

export default function Section({ message, children }) {
  return (
    <>
      <h1 className={css.title}>{message}</h1>
      {children}
    </>
  );
}
