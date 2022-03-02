import apiService from '../services/ApiService';

const updateSortButtons = (newSortButtons) => ({
  type: 'UPDATE_SORT_BUTTONS',
  payload: newSortButtons
});

const updateFilter = (newFilterItems) => ({
  type: 'UPDATE_FILTER',
  payload: newFilterItems
});

const updateSearchId = (searchId) => ({
  type: 'UPDATE_SEARCH_ID',
  payload: searchId
});

const updateTickets = (ticketsArr) => ({
  type: 'UPDATE_TICKETS',
  payload: ticketsArr
});

const toggleStop = (value) => ({
  type: 'TOGGLE_STOP',
  payload: value
});

const getTickets = (searchId) => ((dispatch) => {
    apiService.getTickets(searchId)
      .then((res) => {
        dispatch(updateTickets(res.tickets));
        if (res.stop) {
          dispatch(toggleStop(res.stop));
        };
      })
  }
);

export {
  updateSortButtons,
  updateFilter,
  updateSearchId,
  updateTickets,
  toggleStop,
  getTickets
};