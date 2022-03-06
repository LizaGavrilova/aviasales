import React from 'react';

import logo from '../../image/logo.svg';

import classes from './Header.module.scss';

export default function Header() {
  return (
    <div className={classes.header}>
      <img className={classes.logo} alt="logo" src={logo} />
    </div>
  );
}
