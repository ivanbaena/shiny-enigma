import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  wide: PropTypes.string,
  floated: PropTypes.string,
};
const defaultProps = {
  wide: null,
  floated: null,
};

const Column = ({ children, wide, floated }) => {
  return (
    <div
      className={classnames('column', {
        wide: `${wide} wide`,
        floated: `${floated} floated`,
      })}
    >
      {children}
    </div>
  );
};

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
