import React, {Component} from 'react';

import ContactList from '../containers/ContactList';

const ContactDetail = (props) => {
    if(!props.contact) {
        return (
            <div>Click one of the contacts to see details.</div>
        );
    }

    return (
        <div>
            <h4>Details for: {props.contact.name}</h4>
            <div>Phone: {props.contact.phone}</div>
        </div>
    );
}

const App = () => {
    return(
        <div>
            <ContactList />
        </div>
    );
}

export default App;