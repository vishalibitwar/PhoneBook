import React, { useState, useEffect, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import AlertContext from '../../context/alert/alertContext'

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;
  const { setAlert } = alertContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current])
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Personal'
  });

  const { name, email, phone, type } = contact;
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }
  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
      setAlert(' Please, fill all the fields 😐', 'danger');
    } else if (name.trim().length < 2) {
      setAlert(' Name must contain alleast 2 character 😐', 'danger');
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setAlert(' Enter Valid Email address 😕 !', 'danger');
    } else if (!(/^[7-9][0-9]{9}$/).test(phone)) {
      setAlert(' Enter Valid Mobile No. 😕 !', 'danger');
    } else if (current === null) {
      addContact(contact);
      clearAll();
    } else {
      updateContact(contact);
      clearCurrent();
    }

  }
  const clearAll = () => {
    clearCurrent();
  }

  return (
    <div className="bg-info p-4 rounded text-light">
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
          <label className="lead" htmlFor="Phone">Mobile No.</label>
          <input type="number" name="phone" id="Phone" className="form-control" spellCheck="false" autoComplete="off" value={phone} onChange={onChange} />
        </div>
        <div className="form-group lead">
          <input type="radio" name="type" value="personal" onChange={onChange} checked={type === 'personal'} /> Personal {' '}
          <input type="radio" name="type" value="professional" onChange={onChange} checked={type === 'professional'} /> {' '} Professional
              </div>
        <div className="form-group">
          <input type="submit" value={current ? 'Update Contact' : 'Add Contact '} className="btn btn-outline-light btn-block" />
        </div>


        {current && <button className="btn btn-block btn-light" onClick={clearAll} >Clear</button>}
      </form>
    </div>
  )
}
export default ContactForm;
