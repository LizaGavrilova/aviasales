import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { Ticket } from '../Ticket';
import { ErrorMessage } from '../ErrorMessage';

import classes from './TicketList.module.scss';

function TicketList(props) {
  const {tickets, error} = props;

  const errorMessage = error ? <ErrorMessage /> : null;

  return (
    <div className={classes["ticket-list"]}>
      {errorMessage}
      {
        tickets.map((el) => (
          <Ticket
            key={shortid.generate()}
            ticket={el}
          />
        ))
      }
      <button
      type='button'
        className={classes.button}
      >
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  )
};

const mapStateToProps = function (state) {
  return {
    tickets: state.tickets,
    error: state.error
  }
}

TicketList.defaultProps = {
  tickets: [],
  error: false
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.bool
};

export default connect(mapStateToProps)(TicketList);