import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  stretched: PropTypes.bool,
};
const defaultProps = {};

const Row = ({ children, className }) => {
  return (
    <div
      className={classnames('row', className, {
        stretched: 'stretched',
      })}
    >
      {children}
    </div>
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
