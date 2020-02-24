import React, { Component } from "react";
import axios from 'axios';
import Papa from 'papaparse';

export default class FilesUpload extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onSubmit = this.onSubmit.bind(this);
        this.updateData = this.updateData.bind(this);

        // Setting up state
        this.state = {
            csvfile: undefined,
            file: ''
        }
    }

    handleChange = event => {
        Papa.parse(event.target.files[0], {
            complete: this.updateData,
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
        });
    };

    updateData(result) {
        this.setState({ file: result.data })
        const { file } = this.state;
        console.log(file);
    }

    onSubmit(e) {
        e.preventDefault()
        let files = this.state.file
        for (let index = 0; index < files.length; ++index) {
            console.log(files[index])

            const fileObject = {
                user_email: files[index].user_email,
                date: files[index].date,
                value: files[index].value,
                currency: files[index].currency,
                status: files[index].status
            }
            axios.post('http://localhost:4000/list_files/create-file', fileObject)
                .then(res => console.log(res.data));
        }
    }


    render() {
        return (

            <div className="container">
                <div className="row">
                    <form>
                        <div className="form-group">
                            <input
                                className="csv-input"
                                type="file"
                                ref={input => {
                                    this.filesInput = input;
                                }}
                                name="file"
                                placeholder={null}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.onSubmit}> Upload now!</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
