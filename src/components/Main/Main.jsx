import React from 'react';

import { TicketList } from '../TicketList';
import { SortingButtons } from '../SortingButtons';

import classes from './Main.module.scss';

export default function Main() {
  return (
    <div className={classes.main}>
      <SortingButtons />
      <TicketList />
    </div>
  );
}
