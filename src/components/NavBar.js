import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="navbar navbar-default"> {/*<!-- Static navbar -->*/}
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">React & Redux - Examples</Link>
        </div>

        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo">Todo List</Link></li>
            <li><Link to="/contacts">Contact List</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="https://github.com/saulobr88/react-redux-example" target="_blank">GitHub</a></li>
          </ul>
        </div>{/*<!--/.nav-collapse -->*/}
      </div>{/*<!--/.container-fluid -->*/}
    </nav>
    )
}

export default NavBar;