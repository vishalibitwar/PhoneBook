import React, { useState, useEffect, Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;
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
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
      clearCurrent();
    }
    clearAll();
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
          <input type="email" name="email" id="email" className="form-control" spellCheck="false" autoComplete="off" value={email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label className="lead" htmlFor="Phone">Phone</label>
          <input type="text" name="phone" id="Phone" className="form-control" spellCheck="false" autoComplete="off" value={phone} onChange={onChange} />
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
