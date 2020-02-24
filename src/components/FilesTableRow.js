import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class FilesTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteFile = this.deleteFile.bind(this);
    }

    deleteFile() {
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
                <td> { this.props.obj.user_email } </td>
                    <td> { this.props.obj.date } </td>
                    <td> { this.props.obj.value } </td>
                    <td> { this.props.obj.currency } </td>
                    <td> { this.props.obj.status } </td>
                <td>
                    <Button onClick = { this.deleteFile } size = "sm" variant = "danger" > Delete </Button>
                </td>
            </tr>
        );
    }
}