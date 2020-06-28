import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import trimClass from '../../../../utils/trimClass';

const propTypes = {
  divided: PropTypes.string,
  celled: PropTypes.string,
  equalWidth: PropTypes.string,
};
const defaultProps = {
  divided: '',
  celled: '',
  equalWidth: '',
};

const Grid = ({ children, divided, celled, equalWidth }) => {
  const [isClient, setClient] = useState(false);
  let a = false;
  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div className={trimClass(`ui grid ${divided} ${celled} ${equalWidth}`)}>
      {isClient && <div>client!</div>}
      {children}
    </div>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
