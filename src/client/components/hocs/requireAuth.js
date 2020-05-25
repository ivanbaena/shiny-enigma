import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (Component) => {
  const requireAuth = (props) => {
    useEffect(() => {}, []);

    switch (props.auth) {
      case false:
        return <Redirect to='/' />;
      case null:
        return <div>...loadding</div>;
      default:
        return <Component {...props} />;
    }
  };
  const mapStateToProps = ({ auth }) => {
    return { auth };
  };
  return connect(mapStateToProps)(requireAuth);
};
