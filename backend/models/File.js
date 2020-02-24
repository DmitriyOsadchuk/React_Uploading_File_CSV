const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let fileSchema = new Schema({
    user_email: {
        type: String
    },
    date: {
        type: String
    },
    value: {
        type: Number
    },
    currency: {
        type: String
    },
    status: {
        type: String
    }

}, {
    collection: 'list_files'
})

module.exports = mongoose.model('File', fileSchema)