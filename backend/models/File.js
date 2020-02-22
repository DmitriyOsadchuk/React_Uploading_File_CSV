const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let fileSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    file: {
        type: Array
    }

}, {
    collection: 'list_files'
})

module.exports = mongoose.model('File', fileSchema)