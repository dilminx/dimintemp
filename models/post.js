const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    bookName:{
        type: String,
        required: true,
    },
    bookDesc:{
        type: String,
        required: true
    },
    bookAuthor:{
        type: String,
        required: true
    },
    bookPrice:{
        type: String,
        required: true
    },

});

module.exports =mongoose.model('Post',postSchema);


