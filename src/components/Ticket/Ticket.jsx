import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';

import classes from './Ticket.module.scss';

function Ticket(props) {
  const {ticket} = props;
  const { price, carrier, segments } = ticket;

  // Цена
  const priceToString = (num) => String(num).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  const strPrice = priceToString(price);

  const logo = `//pics.avs.io/99/36/${carrier}.png`;

  // Пересадки
  const transferToStr = (num) => {
    switch (num) {
      case 1: 
        return 'ПЕРЕСАДКА'
      case 2: 
        return 'ПЕРЕСАДКИ'
      case 3: 
        return 'ПЕРЕСАДКИ'
      case 4: 
        return 'ПЕРЕСАДКИ'
      default:
        return 'ПЕРЕСАДОК'
    }
  };

  // Время в пути 

  

  return (
    <div className={classes.ticket}>
      <div className={classes.price_logo}>
        <div className={classes.price}>{strPrice} P</div>
        <img className={classes.logo} alt='logo' src={logo} />
      </div>

      {
        segments.map((item) => (
          <div className={classes.info} key={shortid.generate()}>
            <div className={classes['gray-text']}>{item.origin} - {item.destination}</div>
            <div className={classes['gray-text']}>В ПУТИ</div>
            <div className={classes['gray-text']}>{(item.stops.length) ? item.stops.length : 'БЕЗ'} {transferToStr(item.stops.length)}</div>

            <div className={classes.text}>10:45-08:00</div>
            <div className={classes.text}>21ч 15м</div>
            <div className={classes.text}>{item.stops.join(', ')}</div>
          </div>
        ))
      }
    </div>
  )
};

// const mapStateToProps = function (state) {
//   return {
    
//   }
// }

Ticket.defaultProps = {
  ticket: {}
};

Ticket.propTypes = {
  ticket: PropTypes.object
};

export default connect()(Ticket);