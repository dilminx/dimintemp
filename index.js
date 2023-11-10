const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const postRoutes = require('./routes/post');


const app = express();


// app middlware
app.use(bodyParser.json());

//rout middlwre
app.use('/post', postRoutes);

// domain name issu fix 
app.use(cors());

const PORT = 8000;
const DB_URL = 'mongodb+srv://dilminmongodb:dilmin1999@mernapp.k2tpzqs.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('Connect DB Successful');
    app.listen(PORT,()=>{
        console.log(`listening on port ${PORT}`);
    });
})
.catch((err)=>{console.log("db error: " + err)})


