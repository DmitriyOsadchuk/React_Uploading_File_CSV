let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// File Model
let fileSchema = require('../models/File');

// CREATE File
router.route('/create-file').post((req, res, next) => {
    fileSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// READ File
router.route('/').get((req, res) => {
    fileSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Single File
router.route('/edit-file/:id').get((req, res) => {
    fileSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update File
router.route('/update-file/:id').put((req, res, next) => {
    fileSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('File updated successfully !')
        }
    })
})

// Delete File
router.route('/delete-file/:id').delete((req, res, next) => {
    fileSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;