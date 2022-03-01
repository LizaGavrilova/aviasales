const updateSortButtons = (newSortButtons) => ({
  type: 'UPDATE_SORT_BUTTONS',
  payload: newSortButtons
});

const updateFilter = (newFilterItems) => ({
  type: 'UPDATE_FILTER',
  payload: newFilterItems
})

export {
  updateSortButtons,
  updateFilter  
};