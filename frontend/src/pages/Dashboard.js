import React, { useEffect} from 'react';
import { Button, Table} from 'semantic-ui-react' ;
import { connect } from 'react-redux';
import dateFormat from 'dateformat' ;
import Loading from '../components/Loading' ;
import history from '../history' ;
import {
    get_all_inquery
} from "../action/inquery/inqueryActions" ;

import "../css/Dashboard.css" ;

const Dashboard = ({inqueries, get_all_inquery, loader}) => {
    useEffect(() => {
        const token = sessionStorage.getItem('token') ;

        if(!token) {
            return history.push('/login') ;
        }

        console.log(token) ;
        get_all_inquery(token) ;
    },[])

    const handleLogout = () =>{
        sessionStorage.removeItem('token') ;
        history.push('/')
    }

    return (
        <div className="dashboard">
            {loader ? <Loading /> : ''}
            <div className="cont">
                <h2>Inquery</h2>
                <Button onClick={handleLogout} className="logout__btn" primary>Logout</Button>
            </div>
            <Table celled textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Sl No.</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone no.</Table.HeaderCell>
                        <Table.HeaderCell style={{width: '40rem'}}>Message</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {inqueries.map((inquery,i) =>{
                        return <Table.Row>
                                    <Table.Cell>{i+1}</Table.Cell>
                                    <Table.Cell>{inquery.first_name}</Table.Cell>
                                    <Table.Cell>{inquery.last_name}</Table.Cell>
                                    <Table.Cell>{inquery.email}</Table.Cell>
                                    <Table.Cell>{inquery.contact_no}</Table.Cell>
                                    <Table.Cell>{inquery.message}</Table.Cell>
                                    <Table.Cell>{ inquery.date? dateFormat(inquery.date,"dddd, mmmm dS, yyyy, h:MM:ss TT"): ''}</Table.Cell>
                                </Table.Row>
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        inqueries : state.inquery,
        loader: state.loader
    }
}

export default connect(mapStateToProps, {get_all_inquery})(Dashboard) ;
