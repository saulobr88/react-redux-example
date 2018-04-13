import React from 'react';
import ContactList from '../containers/ContactList';
import ContactDetail from '../containers/ContactDetail';
import Menu from '../components/Menu';

const Contacts = () => {
 return (
    <div>
        <Menu />
        <ContactList />
        <ContactDetail />
    </div>
 )
}

export default Contacts;