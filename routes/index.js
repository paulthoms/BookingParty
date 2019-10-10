var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var CryptoJS = require('crypto-js');

//connect dbs
const MysqlDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tran@123456',
  database: 'mydb'
});


//define controller

var UserHandler = require('./user');
var LoginHandler = require('./login');
var RestaurantHandler = require('./restaurant');
var BookingHandler = require('./booking');

//end define controller



//create object controller

var User = new UserHandler(MysqlDB, jwt, CryptoJS);
var Login = new LoginHandler(MysqlDB, jwt, CryptoJS);
var Restaurant = new RestaurantHandler(MysqlDB,jwt,CryptoJS);
var Booking = new BookingHandler(MysqlDB,jwt,CryptoJS);

//end create object controller



//Global Middleware
var MiddlewareGlobal = require("../middleware/middlewareGlobal");
var checkGlobal = new MiddlewareGlobal(jwt);
router.use(checkGlobal.verifyToken);


/* GET home page. */

//API for user table
router.get('/users', User.getUser);
router.get('/user', User.getUserName);
router.post('/register', User.postUser);
router.put('/user/:id', User.updateUser);
router.delete('/user/:id', User.deleteUser);
//end API for user table

//API checkMail
router.get('/checkmail/:token', User.CheckMail);

//API for login
router.post('/login', Login.postLogin);

// router.post('/api/posts', verifyToken, function (req, res, next) {

//   jwt.verify(req.token, 'secretKey', function (err, authData) {
//     if (err) {
//       res.sendStatus(403);
//     }
//     else {
//       res.json({
//         message: "Post created .....",
//         authData: authData
//       });
//     }
//   });

//   res.json({
//     message: "Post created ....."
//   });



// });


// router.post('/api/login', function (req, res, next) {

//   //mock data user

//   const user = {
//     id: 1,
//     username: 'Brad',
//     email: 'brad@gmail.com'
//   }

//   jwt.sign({ user: user }, 'secretKey', { expiresIn: '1h' }, function (error, token) {
//     res.json({
//       token: token
//     })
//   });

//   var ciphertext = CryptoJS.AES.encrypt("My password", 'secretKey');
//   console.log(ciphertext.toString());

//   var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), 'secretKey');
//   var password = bytes.toString(CryptoJS.enc.Utf8);
//   console.log(password);


// });


//end API for login


//API for Booking table

// router.get('/booking');

//end API for Booking table


//API for restaurant table
var MiddlewareAdmin = require('../middleware/middlewareAdmin');
var checkAdmin = new MiddlewareAdmin(jwt);
router.get('/pub/restaurant',Restaurant.getRestaurant);
router.get('/pub/restaurant/:id',Restaurant.getRestaurantID);
router.post('/restaurant/new',checkAdmin.checkTokenAdmin,Restaurant.postRestaurant);
router.put('/restaurant/:id',checkAdmin.checkTokenAdmin,Restaurant.updateRestaurant);
router.delete('/restaurant/:id',checkAdmin.checkTokenAdmin,Restaurant.updateRestaurant);
//end API for restaurant table


//API for Booking table

router.get('/booking',checkAdmin.checkTokenAdmin,Booking.getBooking);
router.get('/booking/user',Booking.getBookingUser);
router.post('/booking/new',Booking.postBooking);
router.put('/booking/update',Booking.updateBooking);
router.delete('/booking/delete',Booking.deleteBooking);


//end API for Booking table


module.exports = router;