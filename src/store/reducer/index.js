const initialState = {
  filterItems: [
    { name: 'all', label: 'Все', isCheck: false },
    { name: 'no_transfer', label: 'Без пересадок', isCheck: true },
    { name: 'one_transfer', label: '1 пересадка', isCheck: true },
    { name: 'two_transfer', label: '2 пересадки', isCheck: false },
    { name: 'three_transfer', label: '3 пересадки', isCheck: false },
  ],
  sortButtons: [
    { name: 'inexpensive', label: 'САМЫЙ ДЕШЕВЫЙ', isActive: true },
    { name: 'quick', label: 'САМЫЙ БЫСТРЫЙ', isActive: false },
  ],
  ticketCount: 5,
  searchId: '',
  tickets: [],
  isStop: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SORT_BUTTONS':
      return {
        ...state,
        sortButtons: action.payload,
      };

    case 'UPDATE_FILTER':
      return {
        ...state,
        filterItems: action.payload,
      };

    case 'UPDATE_TICKET_COUNT':
      return {
        ...state,
        ticketCount: state.ticketCount + 5,
      };

    case 'UPDATE_SEARCH_ID':
      return {
        ...state,
        searchId: action.payload,
      };

    case 'UPDATE_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      };

    case 'TOGGLE_STOP':
      return {
        ...state,
        isStop: action.payload,
      };

    case 'TOGGLE_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
