import React,{useContext, useEffect} from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect( () =>{
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="row mt-5 justify-content-between">
      <div className="col-sm-5 align-self-center" >
        <ContactForm />
      </div>
      <div className="col-sm-5 p-2 mt-3 mt-sm-0 " style={{ maxHeight: '600px', overflowY: 'auto' }}>
        <ContactFilter/>
        <Contacts />
      </div>

    </div>
  )
}
export default Home
