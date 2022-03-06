import React from 'react';

import classes from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={classes.message}>
      <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
    </div>
  );
}
