import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');
  const { filterContacts, clearFilter, filtered } = contactContext;
  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  }, [filtered]);
  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  }
  return (
    <form>
      <div className="form-group">
      <input ref={text} placeholder="Search Contacts..." type="text" onChange={onChange}  className="form-control"/>
      </div>
    </form>
  )
}
export default ContactFilter
