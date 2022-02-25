import React from 'react';

import classes from './SortingButtons.module.scss';

export default function SortingButtons() {
  return (
    <div className={`${classes['sort-buttons']} ${classes.unselectable}`}>
      <button
        type='button'
        className={classes.button}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>

      <button
        type='button'
        className={classes.button}
      >
        САМЫЙ БЫСТРЫЙ
      </button>

      <button
        type='button'
        className={classes.button}
      >
        ОПТИМАЛЬНЫЙ
      </button>

    </div>
  )
};