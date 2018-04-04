import React from 'react';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div>
            <Menu />
            {/*<!-- Main component for a primary marketing message or call to action -->*/}
            <div className="jumbotron">
                <h1>React & Redux - Examples</h1>
                <p>
                This project contains a set of examples using Redux with ReactJS, 
                is a quick exercise to illustrate how to use both together. 
                It includes the responsive CSS and HTML provided by&nbsp;
                <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">
                react-boostrap package
                </a>, 
                so it also adapts to your viewport and device.
                </p>
                <div className="btn-toolbar" role="toolbar">
                    <div className="btn-group" role="group">
                        <a className="btn btn-primary" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            ReactJS
                        </a>
                    </div>
                    <div className="btn-group" role="group">
                        <a className="btn btn-success" href="https://redux.js.org/"  target="_blank" rel="noopener noreferrer">
                            Redux
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;