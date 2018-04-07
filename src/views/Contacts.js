import React from 'react';
import ContactList from '../containers/ContactList';
import ContactDetail from '../containers/ContactDetail';
import Menu from '../components/Menu';
import AddContactForm from '../components/AddContactForm';


const Contacts = () => {
 return (
    <div>
        <Menu />
        <AddContactForm />
        <ContactList />
        <ContactDetail />
    </div>
 )
}

export default Contacts;