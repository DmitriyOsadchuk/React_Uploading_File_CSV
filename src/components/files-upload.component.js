import React, { Component } from "react";
import axios from 'axios';
import Papa from 'papaparse';

export default class FilesUpload extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateData = this.updateData.bind(this);

        // Setting up state
        this.state = {
            csvfile: undefined,
            file: ''
        }
    }

    handleChange = event => {
        this.setState({
            csvfile: event.target.files[0]
        });
    };

    importCSV = () => {
        const { csvfile } = this.state;
        Papa.parse(csvfile, {
            complete: this.updateData,
            header: true
        });
    };

    updateData(result) {
        var data = result.data;
        console.log(data);
    }


    onFileChange(e) {
        this.setState({ list_files: e.target.files })
    }

    onSubmit(e) {
        e.preventDefault()

        let formData = new FormData();
        for (const key of Object.keys(this.state.file)) {
            formData.append('list_files', this.state.file[key])
        }

        axios.post('http://localhost:4000/list_files/create-file', formData)
            .then(res => console.log(res.data));

    }


    render() {
            return (

                <div className="container">
                    <div className="row">
                        <form onSubmit={this.onSubmit}>
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
                                {/*<input type="file" name="file" onChange={this.onFileChange} multiple />*/}
                            </div>
                            <div className="form-group">
                                <button onClick={this.importCSV}> Upload now!</button>
                                {/*<button className="btn btn-primary" type="submit">Upload</button>*/}
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
}

// import React, { Component } from "react";
// import axios from 'axios';
// import Papa from 'papaparse';
// export default class FilesUpload extends Component {
//
//     constructor() {
//         super();
//         this.state = {
//             csvfile: undefined
//         };
//         this.updateData = this.updateData.bind(this);
//     }
//
//     handleChange = event => {
//         this.setState({
//             csvfile: event.target.files[0]
//         });
//     };
//
//     importCSV = () => {
//         const { csvfile } = this.state;
//         Papa.parse(csvfile, {
//             complete: this.updateData,
//             header: true
//         });
//     };
//
//     updateData(result) {
//         var data = result.data;
//         console.log(data);
//     }
//
//     render() {
//         console.log(this.state.csvfile);
//         return (
//             <div className="App">
//                 <h2>Import CSV File!</h2>
//                 <input
//                     className="csv-input"
//                     type="file"
//                     ref={input => {
//                         this.filesInput = input;
//                     }}
//                     name="file"
//                     placeholder={null}
//                     onChange={this.handleChange}
//                 />
//                 <p />
//                 <button onClick={this.importCSV}> Upload now!</button>
//             </div>
//         );
//     }
// }