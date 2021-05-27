const express  = require('express') ;
const inqueryController = require('../controllers/inqueryController') ;
const authController = require('../controllers/authController') ;

const router = express.Router() ;

router
    .route('/')
    .get(authController.protect, inqueryController.getAllInquery)
    .post(inqueryController.createInquery)
    .patch(authController.protect, inqueryController.updateInquery)
    .delete(authController.protect, inqueryController.deleteInquery) ;

module.exports = router ;