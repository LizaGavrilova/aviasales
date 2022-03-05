import { getId, getTickets } from '../services/ApiService';

const updateSortButtons = (newSortButtons) => ({
  type: 'UPDATE_SORT_BUTTONS',
  payload: newSortButtons
});

const updateFilter = (newFilterItems) => ({
  type: 'UPDATE_FILTER',
  payload: newFilterItems
});

const updateTicketCount = () => ({
  type: 'UPDATE_TICKET_COUNT'
})

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

const toggleError = (value) => ({
  type: 'TOGGLE_ERROR',
  payload: value
});

const getTicketsData = () => async (dispatch) => {
  const { searchId } = await getId();
  dispatch(updateSearchId(searchId));
  let ticketsData;
  let status = false;

  try {
    const { tickets, stop } = await getTickets(searchId);
    ticketsData = tickets;
    status = stop;  
  } catch {
    const { tickets, stop } = await getTickets(searchId);
    ticketsData = tickets;
    status = stop;
  }
  dispatch(updateTickets(ticketsData));
  if (status) {
    dispatch(toggleStop(status));
  }  
};

const loadNewTickets = (searchId) => async (dispatch) => {
  let ticketsData;
  let status; 
  
  try {
    const { tickets, stop } = await getTickets(searchId);
    ticketsData = tickets;
    status = stop;    
  } catch {
    const { tickets, stop } = await getTickets(searchId);
    ticketsData = tickets;
    status = stop;
  }

  dispatch(updateTickets(ticketsData));
  if (status) {
    dispatch(toggleStop(status));
  }
}

export {
  updateSortButtons,
  updateFilter,
  updateTicketCount,
  updateSearchId,
  updateTickets,
  toggleStop,
  toggleError,
  getTicketsData,
  loadNewTickets
};