import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from '../Header';
import { Loader } from '../Loader';
import { Filter } from '../Filter';
import { Main } from '../Main';

import { getTicketsData, loadNewTickets } from '../../actions';

import classes from './App.module.scss';

function App(props) {
  const { searchId, isStop, getTicketsArr, addNewTickets} = props; 

  useEffect(() => {
    getTicketsArr();   
  }, [getTicketsArr]);

  useEffect(() => {
    if (searchId && !isStop) {
      addNewTickets(searchId)
    };
  });

  return (
    <div className={classes.app}>
      <Header />
      <Loader />
      <Filter />
      <Main />
    </div>
  )
};

const mapStateToProps = function (state) {
  return {
    searchId: state.searchId,
    tickets: state.tickets,
    isStop: state.isStop
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getTicketsArr: (searchId) => dispatch(getTicketsData(searchId)),
    addNewTickets: (searchId) => dispatch(loadNewTickets(searchId))
  }
};

App.defaultProps = {
  searchId: '',
  isStop: false,
  getTicketsArr: () => {},
  addNewTickets: () => {}
};

App.propTypes = {
  searchId: PropTypes.string,
  isStop: PropTypes.bool,
  getTicketsArr: PropTypes.func,
  addNewTickets: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);