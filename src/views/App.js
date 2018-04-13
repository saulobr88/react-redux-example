import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';
import Todo from './Todo';
import Test from './Test';

const App = () => {
    return(
        <Router>
        <div className="App">
          <Route path='/' exact render={ () => <Home />} />
          <Route path='/contacts' exact render={ ()=> <Contacts />} />
          <Route path='/todo' exact render={ ()=> <Todo />} />
          <Route path='/test' exact render={ ()=> <Test />} />
        </div>
      </Router>
    );
}

export default App;