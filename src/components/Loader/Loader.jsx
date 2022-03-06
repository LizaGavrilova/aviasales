import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';

import classes from './Loader.module.scss';

function Loader(props) {
  const { tickets, isStop } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isStop) {
      setCount(tickets.length / 120);
    } else {
      setCount(100);
    }
  }, [isStop, tickets.length]);

  return (
    <div className={classes.loader}>
      <LoadingBar progress={count} color="#2196F3" shadow={false} height="5px" />
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    tickets: state.tickets,
    isStop: state.isStop,
  };
};

Loader.defaultProps = {
  tickets: [],
  isStop: false,
};

Loader.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  isStop: PropTypes.bool,
};

export default connect(mapStateToProps)(Loader);
