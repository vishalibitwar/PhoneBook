import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || password2.trim() === '' ) {
      setAlert(' Please, fill all the fields 😐', 'danger');
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setAlert(' Enter Valid Email address 😕 !', 'danger');
    }
    else if (password !== password2) {
      setAlert(' Passwords do not match 😬 ', 'danger');
    } else {
      register({
        name,
        email,
        password
      })
    }
  }
  const { name, email, password, password2 } = user;
  return (
    <div className="row justify-content-center align-items-center mt-5 ">
      {/* <h3 className=" col-12 text-info text-center mb-2 ">Register Account</h3> */}
      <div className="col-md-5 col-11 bg-info p-4 rounded text-light container ">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="lead" htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="form-control" spellCheck="false" autoComplete="off" value={name} onChange={onChange} />
          </div>
          <div className="form-group">
            <label className="lead" htmlFor="email" >Email</label>
            <input type="text" name="email" id="email" className="form-control" spellCheck="false" autoComplete="off" value={email} onChange={onChange} />
          </div>
          <div className="form-group">
            <label className="lead" htmlFor="password">Password</label>
            <input type="password" minLength="6" name="password" id="password" className="form-control" spellCheck="false" autoComplete="off" value={password} onChange={onChange} />
          </div>
          <div className="form-group">
            <label className="lead" htmlFor="password2">Confirm Password</label>
            <input type="password" minLength="6" name="password2" id="password2" className="form-control" spellCheck="false" autoComplete="off" value={password2} onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="submit" value="Sign Up" className="btn btn-outline-light btn-block" />
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register
