const path = require('path') ;
const express = require('express') ;
const morgan = require('morgan') ;
const bodyParser = require('body-parser') ;
const cors = require('cors') ;

const inqueryRoutes = require('./routes/inqueryRoutes') ;
const userRoutes = require('./routes/userRoutes') ;

const app = express() ;

if (process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev')) ;
}

const corsOptions = {
    origin: 'https://educ-lake.vercel.app',
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE"
}

app.use(cors(corsOptions))

app.use(bodyParser.json({ limit: '100kb' })) ;
app.use(express.urlencoded({ extended: true})) ;

app.use('/api/inquery', inqueryRoutes );
app.use('/api/users', userRoutes) ;

app.all('*', (req, res, next) =>{
    return res.status(500).json({
        status: 'error',
        message: 'Invalid Route'
    });
});

module.exports = app ; 