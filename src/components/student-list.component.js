import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';


export default class StudentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list_files: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/list_files/')
            .then(res => {
                this.setState({
                    list_files: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.list_files.map((res, i) => {
            return <StudentTableRow obj = { res } key = { i }/>;
        });
    }


    render() {
        return ( < div className = "table-wrapper" >
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Email </th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.DataTable()}
                </tbody>
            </Table>
        </div>);
        }
    }