import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersListPage = ({ fetchAllUsers, users }) => {
  useEffect(() => {
    !users || users.length === 0 ? fetchAllUsers() : null;
  }, [users]);

  const renderUsers = () => {
    return users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  if (!users || users.length === 0) return <div>no users</div>;

  const head = () => {
    return (
      <Helmet>
        <title>{`${users.length} Users Loaded`}</title>
        <meta property='og:type' content='Users App' />
      </Helmet>
    );
  };
  return (
    <div>
      {head()}
      <ul>{renderUsers()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = { fetchAllUsers: fetchUsers };

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(UsersListPage),
  loadData: loadData,
};
