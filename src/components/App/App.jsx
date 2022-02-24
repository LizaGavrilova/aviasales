import React from 'react';

import { Header } from '../Header';
import { Filter } from '../Filter';
import { Main } from '../Main';

import classes from './App.module.scss';

export default function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Filter />
      <Main />
    </div>
  )
};