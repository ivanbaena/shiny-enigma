import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

const UsersList = ({ fetchAllUsers, users }) => {
  useEffect(() => {
    fetchAllUsers();
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
