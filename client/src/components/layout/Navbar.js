import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;
  const onLogout = () => {
    logout();
    clearContacts();
  }
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"> <span className="hide-sm"> Logout</span> </i>
        </a>
      </li>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <li className="nav-item mx-2">
        <NavLink exact activeClassName="navbar_active" className="nav-link text-light" to="/register">
          Register</NavLink>
      </li>
      <li className="nav-item mx-2">
        <NavLink exact activeClassName="navbar_active" className="nav-link text-light" to="/login">
          Login</NavLink>
      </li>
    </Fragment>
  )


  return (
    <nav className="navbar navbar-light mb-5 text-light bg-info">
      <h1>
        <i className={icon} />{title}
      </h1>
      <ul className="navbar-nav d-flex flex-row justify-content-around align-items-center">
        {isAuthenticated ? authLinks : guestLinks}

      </ul>
    </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: ' Contacts ',
  icon: 'fas fa-user'
}
export default Navbar

