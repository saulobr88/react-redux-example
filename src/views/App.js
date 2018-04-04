import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';
import Todo from './Todo';

const App = () => {
    return(
        <Router>
        <div className="App">
          <Route path='/' exact render={ () => <Home />} />
          <Route path='/contacts' exact render={ ()=> <Contacts />} />
          <Route path='/todo' exact render={ ()=> <Todo />} />
        </div>
      </Router>
    );
}

export default App;