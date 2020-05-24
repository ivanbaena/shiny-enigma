import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

const AdminsListPage = ({ fetchAllAdmins, admins }) => {
  useEffect(() => {
    fetchAllAdmins();
  });

  const renderAdmins = () => {
    return admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  };
  return (
    <div>
      <h3>Protected List of Admins</h3>
      <ul>{renderAdmins()}</ul>
    </div>
  );
};

const mapStateToProps = ({ admins }) => {
  return { admins };
};

const mapDispatchToProps = { fetchAllAdmins: fetchAdmins };

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
