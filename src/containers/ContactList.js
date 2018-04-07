import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AddContactForm from '../components/AddContactForm';

import selectContact from '../store/actions/select_contact_action';

class ContactList extends Component {

    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        return this.props.contacts.map((contact) => {
          return (
            <li
                key={contact.id}
                onClick={() => { this.props.selectContact(contact) }}
                className='list-group-item'>{contact.name}
            </li>
          );
        });
    }

    render() {
        return(
            <div>
                <AddContactForm />
                <ul className = 'list-group col-sm-4'>
                    {this.renderList()}
                </ul>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( 
        { selectContact: selectContact },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);