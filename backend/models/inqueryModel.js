const mongoose = require('mongoose') ;

const InquerySchema = new mongoose.Schema({
    first_name: {
        type: String,
        require:[ true, 'First Name missing']
    },
    last_name: {
        type: String,
        required: [true, 'Last name is missing']
    },
    contact_no :{
        type: Number,
    },
    email :{
        type: String,
        required: [true, 'Email is missing']
    },
    message: {
        type: String,
        required: [true, 'Message is missing']
    },
    date: {
        type: Date,
        required: [true, 'Date is missing' ]
    }
});

const Inquery = mongoose.model('Inquery', InquerySchema) ;
module.exports = Inquery ;