import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
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

      setAlert(error + ' 🙃', 'danger');
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
      setAlert('Please,fill all the fields ', 'danger')
    } else {
      login({
        email,
        password
      });
    }
  }
  const { email, password } = user;
  return (
    <div className="row bg-info py-5 p-sm-5 rounded justify-content-center align-items-center mt-5 ">
      <div className=" col-lg-6">
        <div className="bg-light d-flex flex-column text-info bg-light p-4 rounded ">
          <div className="usericon bg-info text-white  text-center">
            <h3 className="text-white"><i className="fas fa-user" /> </h3>

          </div>
          <h3 className="text-center my-2 brand">Log in to your Account</h3>

          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="lead" htmlFor="email" >Email</label>
              <input type="email" name="email" id="email" className="form-control" spellCheck="false" autoComplete="off" value={email} onChange={onChange} />
            </div>
            <div className="form-group">
              <label className="lead" htmlFor="password">Password</label>
              <input type="password" name="password" id="password" className="form-control" spellCheck="false" autoComplete="off" value={password} onChange={onChange} />
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn btn-info btn-block" />
            </div>
          </form>

          <div className="text-center">
            <hr />
            <h6>New to PhoneBoOk ? <Link className="text-info" to="/register">Sign Up</Link> </h6>
          </div>
        </div>



      </div>

    </div>

  )
}
export default Login
