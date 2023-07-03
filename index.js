const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const dotenv = require('dotenv');
const port = 8080;
const app = express();


dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection Succesful")).catch((err)=>{
    console.log(err);
});


app.use('/api/v1/', require('./routes/inventory'));



app.listen(port, function(err){
    if(err){
        console.log('Error while ruuing the server', err);
        return;
    }
    console.log('Server is running fine on port', port);
})