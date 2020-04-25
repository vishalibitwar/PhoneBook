import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please,fill all the fields', 'danger')
    } else {
      login({
        email,
        password
      });
    }
  }
  const { email, password } = user;
  return (
    <div className="row justify-content-center align-items-center mt-5 ">
      <h3 className=" col-12 text-info text-center my-3">Login</h3>
      <div className="col-md-5 col-11 bg-info p-4 rounded text-light container ">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="lead" htmlFor="email" >Email</label>
            <input type="email" name="email" id="email" className="form-control" spellCheck="false" autoComplete="off" value={email} onChange={onChange} required />
          </div>
          <div className="form-group">
            <label className="lead" htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="form-control" spellCheck="false" autoComplete="off" value={password} onChange={onChange} />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-outline-light btn-block" />
          </div>
        </form>
      </div>

    </div>

  )
}
export default Login
