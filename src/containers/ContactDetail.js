import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../store/actions/contacts_crud_actions';
import selectContact from '../store/actions/select_contact_action';

class ContactDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deleted: false
        }

        this.deleteContact = this.deleteContact.bind(this);
    }

    deleteContact() {
        let Contact = {
            name: this.props.contact.name,
            phone: this.props.contact.phone,
            id: this.props.contact.id
        };
        
        this.props.deleteContact(Contact); // will dispatch
        this.setState({deleted: true});

        setTimeout( () => {
            this.props.selectContact(null);
        }, 3000);
    }

    componentWillReceiveProps() {
        this.setState({deleted: false});
    }

    render() {
        if(!this.props.contact) {
            return (
                <div>Click one of the contacts to see details.</div>
            );
        }

        if(this.state.deleted) {
            return (
                <div>
                    <h4>Contact Deleted</h4>
                    <div>Name: {this.props.contact.name}</div>
                    <div>Phone: {this.props.contact.phone}</div>
                </div>
            );
        }
    
        return (
            <div>
                <h4>Details for: {this.props.contact.name}</h4>
                <div>Phone: {this.props.contact.phone}</div>
                <div className="pull-right">
                    <button className="btn btn-success">Edit {this.props.contact.name}</button>
                    { ' ' }
                    <button className="btn btn-danger"
                        onClick={ this.deleteContact }
                    >Remove {this.props.contact.name}</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        contact: state.activeContact 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteContact: Contact => dispatch(deleteContact(Contact)),
        selectContact: Contact => dispatch(selectContact(Contact))
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);