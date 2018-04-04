import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React & Redux - Examples</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        
        <Navbar.Collapse>
          <Nav>

            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
          
            <NavItem eventKey={2} componentClass={Link} href="/todo" to="/todo">
              Todo List
            </NavItem>
          
            <NavItem eventKey={3} componentClass={Link} href="/contacts" to="/contacts">
              Contact List
            </NavItem>

          </Nav>
          <Nav pullRight>
            <NavItem eventKey={4} 
              componentClass={Link} 
              href="https://github.com/saulobr88/react-redux-example"
              to="https://github.com/saulobr88/react-redux-example"
              target="_blank"
              style={{marginRight: 2 + "em"}}
              >
                <i className="fa fa-github"></i> GitHub
            </NavItem>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Menu;