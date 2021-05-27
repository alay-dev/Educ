const catchAsync = require('../utils/catchAsync') ;
const Inquery = require('../models/inqueryModel') ;
const email = require('../utils/email') ;

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((el) => {
      if (allowedFields.includes(el)) {
        newObj[el] = obj[el];
      }
    });
  
    return newObj;
};

exports.createInquery = catchAsync(async (req, res, next) =>{
    const filteredBody = filterObj(
        req.body,
        'first_name',
        'last_name',
        'contact_no',
        'email',
        'message',
        'date'
    );

    const newInquery = await Inquery.create(filteredBody) ;
    
    res.status(201).json({
        status: 'success',
        data: {
            newInquery
        },
    });

    email(req.body.email) ;

    next() ;
});


exports.getAllInquery = catchAsync(async(req,res,next) =>{
    const inqueries = await Inquery.find() ;

    res.status(200).json({
        status: 'success',
        data: {
            inqueries
        }
    });
});

exports.updateInquery = catchAsync(async(req, res, next)=>{
    const inquery = await Inquery.findByIdAndUpdate(req.body.id, req.body ,{
        new: true,
        runValidators: true
    });

    if (!inquery) {
        res.status(404).json({
            status: 'failed',
            data: {
                message: 'Inquery doesnt exist'
            }
        })

        return next() ;
    }
    res.status(200).json({
        status:'success',
        data: {
            inquery
        }
    });
});

exports.deleteInquery = catchAsync(async(req, res, next) =>{
    const inquery = await Inquery.findByIdAndDelete(req.body.id);

    if(!inquery) {
        res.status(404).json({
            status: 'failed',
            data: {
                message: 'Inquery doesnt exist'
            }
        })
        return next() ;
    }

    res.status(204).json({
        status: 'success',
        data: {}
    });
});
