import React, { Component } from 'react';
import {connect} from 'react-redux';

import Menu from '../components/Menu';

class Test extends Component {

    constructor(props) {
        super(props);

        this.consoleStore = this.consoleStore.bind(this);
    }

    consoleStore() {
        console.log(this.props);
    }

    render() {
        return(
            <div>
                <Menu />
                <button
                    onClick={ this.consoleStore }
                >Console Store</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps)(Test);