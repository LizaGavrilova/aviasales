import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSortButtons } from '../../store/actions';
import classes from './SortingButtons.module.scss';

function SortingButtons(props) {
  const { sortButtons, updateSort } = props;

  const buttons = sortButtons.map(({ name, label, isActive }) => {
    let classNames;

    if (isActive) {
      classNames = classes.active;
    }

    const onClick = () => {
      const newArr = [...sortButtons].map((el) => {
        if (el.name === name) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }
        return el;
      });
      updateSort(newArr);
    };

    return (
      <button
        key={name}
        type="button"
        className={classNames ? `${classes.button} ${classNames}` : classes.button}
        onClick={onClick}
      >
        {label}
      </button>
    );
  });

  return <div className={`${classes['sort-buttons']} ${classes.unselectable}`}>{buttons}</div>;
}

const mapStateToProps = function (state) {
  return {
    sortButtons: state.sortButtons,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    updateSort: (newSortButtons) => dispatch(updateSortButtons(newSortButtons)),
  };
};

SortingButtons.defaultProps = {
  sortButtons: [],
  updateSort: () => {},
};

SortingButtons.propTypes = {
  sortButtons: PropTypes.arrayOf(PropTypes.object),
  updateSort: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingButtons);
