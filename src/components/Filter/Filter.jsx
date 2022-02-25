import React from 'react';

import classes from './Filter.module.scss';

export default function Filter() {
  return (
    <div className={classes.filter}>
      <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <ul>
        <li className={classes['filter-item']}>
          <label htmlFor='all' className={classes.label}>
            <input
              type="checkbox"
              id='all'
              name='all'
              className={classes.input}        
            />
            <span className={classes['check-box']} />
              Все
          </label>
        </li>

        <li className={classes['filter-item']}>
          <label htmlFor='no_transfer' className={classes.label}>
            <input
              type="checkbox"
              id='no_transfer'
              name='no_transfer'
              checked
              className={classes.input}        
            />
            <span className={classes['check-box']} />
              Без пересадок
          </label>
        </li>

        <li className={classes['filter-item']}>
          <label htmlFor='one_transfer' className={classes.label}>
            <input
              type="checkbox"
              id='one_transfer'
              name='one_transfer'
              className={classes.input}        
            />
            <span className={classes['check-box']} />
              1 пересадка
          </label>
        </li>

        <li className={classes['filter-item']}>
          <label htmlFor='two_transfer' className={classes.label}>
            <input
              type="checkbox"
              id='two_transfer'
              name='two_transfer'
              className={classes.input}        
            />
            <span className={classes['check-box']} />
              2 пересадки
          </label>
        </li>

        <li className={classes['filter-item']}>
          <label htmlFor='three_transfer' className={classes.label}>
            <input
              type="checkbox"
              id='three_transfer'
              name='three_transfer'
              className={classes.input}        
            />
            <span className={classes['check-box']} />
              3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
};