import React from 'react';
import ContactList from '../containers/ContactList';
import ContactDetail from '../containers/ContactDetail';
import NavBar from '../components/NavBar';

const Contacts = () => {
 return (
    <div>
        <NavBar />
        <ContactList />
        <ContactDetail />
    </div>
 )
}

export default Contacts;