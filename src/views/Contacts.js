import React from 'react';
import ContactList from '../containers/ContactList';
import ContactDetail from '../containers/ContactDetail';

const Contacts = () => {
 return (
    <div>
        <ContactList />
        <ContactDetail />
    </div>
 )
}

export default Contacts;