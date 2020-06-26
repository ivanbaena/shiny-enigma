import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Header.module.css';

import Image from './Image';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href='/api/logout'>Logout</a>
  ) : (
    <a href='/api/auth/google'>Login</a>
  );
  return (
    <nav>
      <div className={styles.nav}>
        <Link to='/' className='brand-logo'>
          React-SSR
        </Link>
        <ul className='right'>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/admins'>Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
        <Image />
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(Header);
