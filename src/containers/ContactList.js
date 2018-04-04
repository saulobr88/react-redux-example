import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ContactList extends Component {
    
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        return this.props.contacts.map((contact) => {
          return (
            <li
                key={contact.phone}
                onClick={() => { console.log(contact) }}
                className='list-group-item'>{contact.name}
            </li>
          );
        });
    }

    render(){
        return(
            <ul className = 'list-group col-sm-4'>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    };
}

export default connect(mapStateToProps)(ContactList);