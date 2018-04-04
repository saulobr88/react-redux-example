import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Contacts from './Contacts';

const App = () => {
    return(
        <Router>
        <div className="App">
          <Route path='/' exact render={ () => <div>Hello World!</div>} />
          <Route path='/contacts' exact render={ ()=> <Contacts />} />
        </div>
      </Router>
    );
}

export default App;