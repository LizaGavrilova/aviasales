import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import apiService from '../../services/ApiService';

import { Header } from '../Header';
import { Filter } from '../Filter';
import { Main } from '../Main';

import { getTickets, updateSearchId } from '../../actions';

import classes from './App.module.scss';

class App extends Component {
  componentDidMount() {
    const {getTicketsArr, updateSearchID} = this.props;
    apiService.getId()
    .then((res) => {
      updateSearchID(res);
      getTicketsArr(res);
    });
  }
  
  componentDidUpdate(prevProps) {
    const {searchId, tickets, isStop, getTicketsArr} = this.props;
    if(!isStop && prevProps.tickets !== tickets) {
      getTicketsArr(searchId);
    }
  }

  render() {
    return (
      <div className={classes.app}>
      <Header />
      <Filter />
      <Main />
    </div>
    )    
  }
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
    getTicketsArr: (searchId) => dispatch(getTickets(searchId)),
    updateSearchID: (searchId) => dispatch(updateSearchId(searchId))
  }
};

App.defaultProps = {
  searchId: '',
  tickets: [],
  isStop: false,
  getTicketsArr: () => {},
  updateSearchID: () => {}
};

App.propTypes = {
  searchId: PropTypes.string,
  tickets: PropTypes.arrayOf(PropTypes.object),
  isStop: PropTypes.bool,
  getTicketsArr: PropTypes.func,
  updateSearchID: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);