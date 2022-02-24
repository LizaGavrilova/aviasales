import React from 'react';

import classes from './Filter.module.scss';

export default function Filter() {
  return (
    <div className={classes.filter}>
      <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className={classes['.filter-item']}>
        <input
          type="checkbox"
          id='all'
          name='all'
          className={classes.input}        
        />
        <label htmlFor='all' className={classes.label}>
          Все
        </label>
      </div>

      <div className={classes['.filter-item']}>
        <input
          type="checkbox"
          id='no_transfer'
          name='no_transfer'
          className={classes.input}        
        />
        <label htmlFor='no_transfer' className={classes.label}>
          Без пересадок
        </label>
      </div>

      <div className={classes['.filter-item']}>
        <input
          type="checkbox"
          id='one_transfer'
          name='one_transfer'
          className={classes.input}        
        />
        <label htmlFor='one_transfer' className={classes.label}>
          1 пересадка
        </label>
      </div>

      <div className={classes['.filter-item']}>
        <input
          type="checkbox"
          id='two_transfer'
          name='two_transfer'
          className={classes.input}        
        />
        <label htmlFor='two_transfer' className={classes.label}>
          2 пересадки
        </label>
      </div>

      <div className={classes['.filter-item']}>
        <input
          type="checkbox"
          id='three_transfer'
          name='three_transfer'
          className={classes.input}        
        />
        <label htmlFor='three_transfer' className={classes.label}>
          3 пересадки
        </label>
      </div>
    </div>
  )
};