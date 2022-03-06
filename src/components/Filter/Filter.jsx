import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions';
import classes from './Filter.module.scss';

function Filter(props) {
  const { filterItems, updateFilterItems } = props;
  let counter = 0;

  const filters = filterItems.map(({ name, label, isCheck }) => {
    if (isCheck) {
      counter += 1;
    }

    const onChange = () => {
      const newArr = [...filterItems];

      if (name === 'all' && !isCheck) {
        newArr.map((el) => {
          el.isCheck = true;
          return el;
        });
      }

      if (name === 'all' && isCheck) {
        newArr.map((el) => {
          el.isCheck = false;
          return el;
        });
      }

      if (name !== 'all' && isCheck) {
        newArr.map((el) => {
          if (el.name === name || el.name === 'all') {
            el.isCheck = false;
          }
          return el;
        });
      }

      if (name !== 'all' && !isCheck) {
        if (counter === 3) {
          newArr.map((el) => {
            el.isCheck = true;
            return el;
          });
        }

        newArr.map((el) => {
          if (el.name === name) {
            el.isCheck = true;
          }
          return el;
        });
      }

      updateFilterItems(newArr);
    };

    return (
      <li key={name} className={classes['filter-item']}>
        <label htmlFor={name} className={classes.label}>
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={isCheck}
            onChange={onChange}
            className={classes.input}
          />
          <span className={classes['check-box']} />
          {label}
        </label>
      </li>
    );
  });

  return (
    <div className={classes.filter}>
      <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <ul>{filters}</ul>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    filterItems: state.filterItems,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    updateFilterItems: (newFilterItems) => dispatch(updateFilter(newFilterItems)),
  };
};

Filter.defaultProps = {
  filterItems: [],
  updateFilterItems: () => {},
};

Filter.propTypes = {
  filterItems: PropTypes.arrayOf(PropTypes.object),
  updateFilterItems: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
