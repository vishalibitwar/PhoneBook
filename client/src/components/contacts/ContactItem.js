import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';
const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { _id, name, email, phone, type } = contact;
  const onDelete = () => {
    contactContext.deleteContact(_id);
    contactContext.clearCurrent();
  }
  const onUpdate = () => {
    contactContext.setCurrent(contact);
  }
  return (
    <div className="card text-dark bg-white mb-3 ">
      <div className="card-header bg-info text-white">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h5>{name}</h5>
          <span className="badge badge-light">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </div> </div>
      <div className="card-body">
        <h6>
          <i className="fas fa-envelope mr-2" /> {email}
        </h6>
        <h6>
          <i className="fas fa-phone mr-2" />  {phone}
        </h6>
        <div className="d-flex justify-content-end align-items-center">
          <button title="Edit Contact" onClick={onUpdate} className="btn mx-2 btn-sm btn-outline-secondary"><i className="fa fa-edit"></i></button>
          <button onClick={onDelete} title="Delete Contact" className="btn mx-2 btn-sm btn-outline-danger"><i className="fas fa-trash" /></button>
        </div>
      </div>
    </div>
  )
}
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}
export default ContactItem
