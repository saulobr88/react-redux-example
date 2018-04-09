import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact, updateContact } from '../store/actions/contacts_crud_actions';
import selectContact from '../store/actions/select_contact_action';

class ContactDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deleted: false,
            updating: false,
            subtmitMsg: ''
        };

        this.deleteContact = this.deleteContact.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({deleted: false, updating: false});
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

    showEditForm() {
        this.setState( {updating: true} );
    }

    handleSubmit(e) {
        e.preventDefault();
        if ( !this.name.value.trim() ) {
            this.setState( { subtmitMsg: 'Name value must be provided' } );
            return
        }
        if ( !this.phone.value.trim() ) {
            this.setState( { subtmitMsg: 'Phone value must be provided' });
            return
        }

        let Contact = {
            name: this.name.value,
            phone: this.phone.value,
            id: this.props.contact.id
        };

        this.props.updateContact(Contact); // will dispatch
        this.props.selectContact(Contact); // will dispatch
        this.cancelEdit();
    }

    cancelEdit() {
        this.setState( {updating: false} );
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

        if(this.state.updating) {
            return(
            <div className='container' style={{ textAlign:'center'}} >
                <h3>Edit Contact</h3>
                <span>{this.state.subtmitMsg}</span>
                <form className='form-inline' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name:</label>
                        {' '}
                        <input type='text' className='form-control'
                            id='name' 
                            placeholder='Name' 
                            ref={ (ref)=> this.name = ref }
                            defaultValue={ this.props.contact.name }
                        />
                    </div>
                    {' '}
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone:</label>
                        {' '}
                        <input type='text' className='form-control'
                            id='phone' 
                            placeholder='Phone number' 
                            ref={ (ref)=> this.phone = ref }
                            defaultValue={ this.props.contact.phone }
                        />
                    </div>
                    {' '}
                    <button type="submit" className="btn btn-success">Update</button>
                    {' '}
                    <button type="reset" onClick={ this.cancelEdit } className="btn btn-warning">Cancel</button>
                </form>
            </div>
            );
        }

        return (
            <div>
                <h4>Details for: {this.props.contact.name}</h4>
                <div>Phone: {this.props.contact.phone}</div>
                <div className="pull-right">
                    <button className="btn btn-success"
                        onClick={ this.showEditForm }
                    >Edit {this.props.contact.name}</button>
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
        updateContact: Contact => dispatch(updateContact(Contact)),
        selectContact: Contact => dispatch(selectContact(Contact))
      };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);