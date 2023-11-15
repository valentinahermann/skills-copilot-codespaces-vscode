// create web server using express
const express = require('express');
const router = express.Router();
// import the comments model
const Comments = require('../models/comments');

// get all comments
router.get('/', (req, res) => {
    Comments.find()
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
}
