const initialState = {
  filterItems: [
    {name: 'all', label: 'Все', isCheck: false},
    {name: 'no_transfer', label: 'Без пересадок', isCheck: true},
    {name: 'one_transfer', label: '1 пересадка', isCheck: true},
    {name: 'two_transfer', label: '2 пересадки', isCheck: false},
    {name: 'three_transfer', label: '3 пересадки', isCheck: false}
  ],
  sortButtons: [
    {name: 'inexpensive', label: 'САМЫЙ ДЕШЕВЫЙ', isActive: true},
    {name: 'quick', label: 'САМЫЙ БЫСТРЫЙ', isActive: false},
    {name: 'optimal', label: 'ОПТИМАЛЬНЫЙ', isActive: false}
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SORT_BUTTONS':
      return {
        ...state,
        sortButtons: action.payload
      };
    
    case 'UPDATE_FILTER':
      return {
        ...state,
        filterItems: action.payload
      }

    default:
      return state;
  };
};

export default reducer;