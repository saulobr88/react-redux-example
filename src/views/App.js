import React, {Component} from 'react';

import ContactList from '../containers/ContactList';
import ContactDetail from '../containers/ContactDetail';

const App = () => {
    return(
        <div>
            <ContactList />
            <ContactDetail />
        </div>
    );
}

export default App;