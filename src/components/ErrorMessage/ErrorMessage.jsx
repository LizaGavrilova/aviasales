import React from 'react';

import classes from './ErrorMessage.module.scss';

export default function ErrorMessage() {
  return (
    <div className={classes.error}>
      <span>Что-то пошло не так...</span>
    </div>
  );
}
