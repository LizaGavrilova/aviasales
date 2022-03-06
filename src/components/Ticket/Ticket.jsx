import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';

import classes from './Ticket.module.scss';

function Ticket(props) {
  const { ticket } = props;
  const { price, carrier, segments } = ticket;

  // Цена
  const priceToString = (num) => String(num).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  const strPrice = priceToString(price);

  const logo = `//pics.avs.io/99/36/${carrier}.png`;

  // Пересадки
  const transferToStr = (num) => {
    switch (num) {
      case 1:
        return 'ПЕРЕСАДКА';
      case 2:
        return 'ПЕРЕСАДКИ';
      case 3:
        return 'ПЕРЕСАДКИ';
      case 4:
        return 'ПЕРЕСАДКИ';
      default:
        return 'ПЕРЕСАДОК';
    }
  };

  // Время в пути
  const timeTravel = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `${hours > 9 ? hours : `0${hours}`}ч ${minutes > 10 ? minutes : `0${minutes}`}м`;
  };

  // Время вылета-прилета
  const timeDepartureArrival = (date, duration) => {
    const hoursDeparture = new Date(date).getHours();
    const minDeparture = new Date(date).getMinutes();

    let hoursArrival = hoursDeparture + Math.floor(duration / 60);
    let minArrival = minDeparture + (duration % 60);

    if (hoursArrival > 24) {
      hoursArrival -= 24;
    }
    if (minArrival > 59) {
      hoursArrival += 1;
      minArrival -= 60;
    }
    const hoursDepartureStr = hoursDeparture > 9 ? hoursDeparture : `0${hoursDeparture}`;
    const minDepartureStr = minDeparture > 10 ? minDeparture : `0${minDeparture}`;
    const hoursArrivalStr = hoursArrival > 9 ? hoursArrival : `0${hoursArrival}`;
    const minArrivalStr = minArrival > 10 ? minArrival : `0${minArrival}`;

    return `${hoursDepartureStr}:${minDepartureStr} - ${hoursArrivalStr}:${minArrivalStr}`;
  };

  return (
    <div className={classes.ticket}>
      <div className={classes.price_logo}>
        <div className={classes.price}>{strPrice} P</div>
        <img className={classes.logo} alt="logo" src={logo} />
      </div>

      {segments.map((item) => (
        <div className={classes.info} key={shortid.generate()}>
          <div className={classes['gray-text']}>
            {item.origin} - {item.destination}
          </div>
          <div className={classes['gray-text']}>В ПУТИ</div>
          <div className={classes['gray-text']}>
            {item.stops.length ? item.stops.length : 'БЕЗ'} {transferToStr(item.stops.length)}
          </div>

          <div className={classes.text}>{timeDepartureArrival(item.date, item.duration)}</div>
          <div className={classes.text}>{timeTravel(item.duration)}</div>
          <div className={classes.text}>{item.stops.join(', ')}</div>
        </div>
      ))}
    </div>
  );
}

Ticket.defaultProps = {
  ticket: {},
};

Ticket.propTypes = {
  ticket: PropTypes.object,
};

export default connect()(Ticket);
