import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { Ticket } from '../Ticket';

import classes from './TicketList.module.scss';

function TicketList(props) {
  const {tickets} = props;

  return (
    <div className={classes["ticket-list"]}>
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
  }
}

TicketList.defaultProps = {
  tickets: []
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(TicketList);