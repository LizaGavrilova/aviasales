import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { Ticket } from '../Ticket';
import { ErrorMessage } from '../ErrorMessage';
import { NotFound } from '../NotFound';

import { updateTicketCount } from '../../actions';

import classes from './TicketList.module.scss';

function TicketList(props) {
  const { tickets, filterItems, sortButtons, ticketCount, error, updateCount } = props;

  const addTicket = () => {
    updateCount();
  };

  // Фильтр пересадок
  const selectedFilter = filterItems
    .map((el, i) => {
      if (el.isCheck) {
        return i - 1;
      }
    })
    .filter((el) => typeof el !== 'undefined');

  const filteredTickets = tickets.filter((el) => {
    const transferThere = el.segments[0].stops.length;
    const transferBack = el.segments[1].stops.length;

    if (selectedFilter.includes(transferThere) && selectedFilter.includes(transferBack)) {
      return el;
    }
  });

  // Сортировка
  const selectedSort = sortButtons.filter((el) => el.isActive);

  const sortedTickets = (arr) => {
    if (selectedSort[0].name === 'inexpensive') {
      return arr.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
    if (selectedSort[0].name === 'quick') {
      return arr.sort((a, b) =>
        a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1
      );
    }
  };

  const visibleTicket = sortedTickets(filteredTickets).filter((item, i) => i < ticketCount);

  const errorMessage = error ? <ErrorMessage /> : null;

  const notFoundMessage = selectedFilter.length === 0 && !error ? <NotFound /> : null;

  return (
    <div className={classes['ticket-list']}>
      {errorMessage}
      {notFoundMessage}
      {visibleTicket.map((el) => (
        <Ticket key={shortid.generate()} ticket={el} />
      ))}
      {visibleTicket.length !== 0 && !error ? (
        <button type="button" className={classes.button} onClick={addTicket}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      ) : null}
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    tickets: state.tickets,
    filterItems: state.filterItems,
    sortButtons: state.sortButtons,
    ticketCount: state.ticketCount,
    error: state.error,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    updateCount: () => dispatch(updateTicketCount()),
  };
};

TicketList.defaultProps = {
  tickets: [],
  filterItems: [],
  sortButtons: [],
  ticketCount: 5,
  error: false,
  updateCount: () => {},
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  filterItems: PropTypes.arrayOf(PropTypes.object),
  sortButtons: PropTypes.arrayOf(PropTypes.object),
  ticketCount: PropTypes.number,
  error: PropTypes.bool,
  updateCount: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
