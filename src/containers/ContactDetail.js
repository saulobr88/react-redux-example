import React, { Component } from 'react';
import { connect } from 'react-redux';

const SubMenu = ({contact}) => {
    return(
        <div className="pull-right">
            <button className="btn btn-success">Edit {contact.name}</button>
            { ' ' }
            <button className="btn btn-danger">Remove {contact.name}</button>
        </div>
    )
}


class ContactDetail extends Component {

    render() {
        if(!this.props.contact) {
            return (
                <div>Click one of the contacts to see details.</div>
            );
        }
    
        return (
            <div>
                <h4>Details for: {this.props.contact.name}</h4>
                <div>Phone: {this.props.contact.phone}</div>
                <SubMenu contact={this.props.contact} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        contact: state.activeContact 
        //activeContact is defined in the rootReducer
    }
}

export default connect(mapStateToProps)(ContactDetail);