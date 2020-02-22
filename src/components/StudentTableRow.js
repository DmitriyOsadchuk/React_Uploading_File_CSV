import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:4000/list_files/delete-file/' + this.props.obj._id)
            .then((res) => {
                console.log('File successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td> { this.props.obj.name } </td>
                    <td > { this.props.obj.email } </td>
                    <td> { this.props.obj.rollno } </td>
                <td>
                    <Button onClick = { this.deleteStudent } size = "sm" variant = "danger" > Delete </Button>
                </td>
            </tr>
        );
    }
}