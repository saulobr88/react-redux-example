import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addContact } from '../store/actions/contacts_crud_actions';

class AddContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showForm: false,
            addBtnTxt: 'Add Contact',
            subtmitMsg: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        if(this.state.showForm)
            this.setState( { showForm: false, addBtnTxt: 'Add Contact' });
        else
            this.setState( { showForm: true, addBtnTxt: 'Hide Form' });
    }

    handleSubmit(e){
        e.preventDefault();        
        if ( !this.name.value.trim() ) {
            this.setState( { subtmitMsg: 'Name value must be provided' } );
            return
        }
        if ( !this.phone.value.trim() ) {
            this.setState( { subtmitMsg: 'Phone value must be provided' });
            return
        }

        const newContact = {
            id: uuidv1(),
            name: this.name.value,
            phone: this.phone.value
        };

        this.props.addContact(newContact); // will dispatch
        this.name.value = '';
        this.phone.value = '';
        this.setState( {subtmitMsg: ''} );
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="pull-right">
                        <button className="btn btn-primary"
                        onClick={this.toggleForm}
                        >{ this.state.addBtnTxt }</button>
                    </div>
                </div>

                <div className='container' style={{ textAlign:'center'}} hidden={ !this.state.showForm } >
                    <h3>New Contact</h3>
                    <span>{this.state.subtmitMsg}</span>
                    <form className='form-inline' onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='name'>Name:</label>
                            {' '}
                            <input type='text' className='form-control'
                                id='name' placeholder='Name' ref={ (ref)=> this.name = ref }
                            />
                        </div>
                        {' '}
                        <div className='form-group'>
                            <label htmlFor='phone'>Phone:</label>
                            {' '}
                            <input type='text' className='form-control'
                                id='phone' placeholder='Phone number' ref={ (ref)=> this.phone = ref }
                            />
                        </div>
                        {' '}
                        <button type="submit" className="btn btn-success">Save</button>
                    </form>
                </div>
                <hr />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addContact: newContact => dispatch(addContact(newContact))
      };
};

export default connect(null, mapDispatchToProps)(AddContactForm);