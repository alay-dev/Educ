import React from 'react' ;
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux' ;
import {
    add_inquery
} from '../action/inquery/inqueryActions' ;

import "../css/contactus.css" ;

class Contactus extends React.Component {

    state = { fName: '', lName:'', phone: '', email:'', message: '' } ;

    resetForm = () =>{
        this.setState({ fName: '', lName: '', phone: '', email: '', message: ''})
    }

    render() {
        return (
            <div id="contact" className="contactus">
                <h2>Contact Us</h2>
                <h4>We will get back to you asap!!</h4>
                <Form onSubmit ={(e) =>{this.props.add_inquery(this.state.fName, this.state.lName, this.state.phone, this.state.email, this.state.message); this.resetForm() }}>
                    <Form.Group className="grp">
                        <Form.Input
                            onChange = {(e) =>this.setState({fName: e.target.value})}
                            value={this.state.fName}
                            className="input__grp" fluid label="First Name" placeholder="First Name"/>
                        <Form.Input 
                            onChange = {(e) =>this.setState({lName: e.target.value})}
                            value={this.state.lName}
                            className="input__grp" fluid label="Last Name" placeholder="Last Name"/>
                    </Form.Group>
                    <Form.Input 
                        onChange = {(e) =>this.setState({email: e.target.value})}
                        value={this.state.email}
                        className="input" fluid label="Email" placeholder="Email"/>
                    <Form.Input 
                        onChange = {(e) =>this.setState({phone: e.target.value})}
                        value={this.state.phone}
                        className="input" fluid label="Phone" placeholder="Phone" />
                    <Form.TextArea 
                        onChange = {(e) =>this.setState({message: e.target.value})}
                        value={this.state.message}
                        className="input" fluid label="Message" placeholder="Message"/>
                    <Form.Button style={{margin: 'auto', width: '10rem'}} primary>Submit</Form.Button>
                </Form>
            </div>
        ) ;
    }
}

const mapStateToProps = (state) =>{
    return {
        state
    }
}

export default connect(mapStateToProps,{add_inquery})(Contactus) ;
