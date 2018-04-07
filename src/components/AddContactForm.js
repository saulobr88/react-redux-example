import React, { Component } from 'react';


const AddButom = () => {
    return(
        <div className="row">
            <div className="pull-right">
                <button className="btn btn-primary">Add Contact</button>
            </div>
        </div>
    );
}


class AddContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showForm: false,
            addBtnTxt: 'Add Contact'
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

    handleSubmit(){
        console.log('handleSubmit executado');
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

export default AddContactForm;