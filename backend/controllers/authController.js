const crypto = require('crypto') ;
const jwt = require('jsonwebtoken') ;
const { promisify} = require('util') ;

const User = require('../models/userModel') ;
const catchAsync = require('../utils/catchAsync') ;

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRESIN + 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);

  //Remove the password from the output
  user.password = undefined;
  user.confirm_password = undefined ;

  res.status(statusCode).json({
    status: 'success',
    data: {
      token,
      user,
    },
  });
};

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
  
    //1) check if email and password exists
    if (!email || !password) {
      res.status(400).json({
        status: 'failed',
        data: {
            message: 'Please provide a password and a username'
        }
      })
      return next();
    }
    //2) cheack if the user exists && password is correct
    const user = await User.findOne({ email: email }).select('+password');
  
    if (!user || !(await user.correctPassword(password, user.password))) {
      res.status(401).json({
        status: 'failed',
        data: {
            message: 'Incorrect password or username'
        }
      })
      return next();
    }
    //3)if everything is ok send the token
  
    createSendToken(user, 200, res);
});

exports.singup = catchAsync(async (req, res) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirm_password: req.body.confirm_password,
    passwordChangedAt: req.body.passwordChangedAt,
  });

  createSendToken(newUser, 201, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  //1)Get Token and ch3eck if it exists
  var token = req.headers.token ;
  if(!token) {
    res.status(401).json({
      status: 'failed',
      data: {
        message: 'You are not logged in'
      }
    })
    next() ;
  }

  //2) Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3) check if the user exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    res.status(401).json({
      status: 'failed',
      data: {
        message: 'The user doesnt exists'
      }
    })
    next() ;
  }

  //GRNT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
});