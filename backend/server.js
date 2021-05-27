const mongoose = require('mongoose') ;
const dotenv = require('dotenv') ;

dotenv.config({ path: './config.env'}) ;
const app = require('./app') ;

const DB = process.env.DATABASE ;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then((con) =>{
        console.log('DB connection successful') ;
    }) ;

const port = process.env.PORT || 3000 ;

const server = app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});

