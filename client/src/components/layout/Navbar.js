import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';
import Logo from './logo.svg';
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
      <li>Hello {user && user.name.split(" ")[0]} </li>
      <li>
        <a onClick={onLogout} href="#!" className="ml-1" title="logout">
          <i className="fas fa-sign-out-alt text-white" /> <span className="text-white" >Logout</span>
        </a>
      </li>
    </Fragment>
  )
  const guestLinks = (
    <Fragment>
      <li className="nav-item mx-2">
        <NavLink exact activeClassName="navbar_active" className="nav-link text-light" to="/login">
          Login</NavLink>
      </li>
      <li className="nav-item mx-2">
        <NavLink exact activeClassName="navbar_active" className="nav-link text-light" to="/register">
          Sign Up</NavLink>
      </li>
      <li className="nav-item mx-2">
        <NavLink exact activeClassName="navbar_active" className="nav-link text-light" to="/about">
          About
</NavLink>
      </li>
    </Fragment>
  )


  return (
    <nav className="navbar d-flex align-items-center justify-content-center justify-content-md-between navbar-light mb-4 text-light bg-info px-5">
      <h1 className="text-center " >
        <img src={Logo} alt="logo" /> <span className="brand"> {title}</span>
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
  title: ' PhoneBoOk ',
  icon: 'fas fa-book'
}
export default Navbar

