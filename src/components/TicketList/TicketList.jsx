import React from 'react';

import { Ticket } from '../Ticket';

import classes from './TicketList.module.scss';

export default function App() {
  return (
    <div className={classes["ticket-list"]}>
      <Ticket />
      <button
      type='button'
        className={classes.button}
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  )
};