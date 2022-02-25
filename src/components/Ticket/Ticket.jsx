import React from 'react';

import logo from '../../image/S7.svg';

import classes from './Ticket.module.scss';

export default function App() {
  return (
    <div className={classes.ticket}>
      <div className={classes.price_logo}>
        <div className={classes.price}>13 400 P</div>
        <img className={classes.logo} alt='logo' src={logo} />
      </div>

      <div className={classes.info}>
        <div className={classes['gray-text']}>MOW - HKT</div>
        <div className={classes['gray-text']}>В ПУТИ</div>
        <div className={classes['gray-text']}>2 ПЕРЕСАДКИ</div>

        <div className={classes.text}>10:45-08:00</div>
        <div className={classes.text}>21ч 15м</div>
        <div className={classes.text}>HKG, JNB</div>
      </div>
    </div>
  )
};