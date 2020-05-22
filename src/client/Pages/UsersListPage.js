import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const UsersList = ({ fetchAllUsers, users }) => {
  useEffect(() => {
    users ? null : fetchAllUsers();
  }, []);

  const renderUsers = () => {
    return users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  if (!users) return <div>no users</div>;

  return (
    <div>
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
  component: connect(mapStateToProps, mapDispatchToProps)(UsersList),
  loadData: loadData,
};
