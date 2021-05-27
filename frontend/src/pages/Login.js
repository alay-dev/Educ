import React, { useEffect, useState } from 'react'
import { Card, Form, Button } from 'semantic-ui-react';
import { Link} from 'react-router-dom' ;
import { connect } from 'react-redux' ;
import {
    login
} from "../action/auth/authActions" ;
import history from '../history' ;

import '../css/Login.css' ;
import Loader from '../components/Loading';
import Loading from '../components/Loading';
import SnackBar from '../components/SnackBar';

const Login = ({login, loader, message}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('') ;

    useEffect(()=>{
        setPassword('');
        setEmail('') ;

        if(sessionStorage.getItem('token')) {
            history.push('/dashboard') ;
        }
    },[loader]);

    return (
        <div className="login">
            {loader ? <Loading /> : ''}
            {message ? <SnackBar />: ''}
            <Card className="card">
                <h2>Admin Login</h2>
                <Form onSubmit ={() => login(email, password)}>
                    <label>Email</label>
                    <input 
                        onChange={(e) =>setEmail(e.target.value)}
                        value = {email} 
                        placeholder="Email" type="email" />
                    <label>Password</label>
                    <input 
                        onChange={(e) =>setPassword(e.target.value)}
                        value={password}
                        placeholder="Password" type="password" />
                    <Button type="submit" primary>Log in</Button>
                </Form>
            </Card>
        </div>
    )
}

const mapStateToProps = state =>{
    return  {
        loader: state.loader,
        message: state.message
    }
}

export default connect(mapStateToProps, { login})(Login) ;
