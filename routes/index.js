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
var DishHandler = require('./dish');
var RestaurantOwnerHandler = require('./restaurantOwner');
var LoginRestaurantHandler = require('./restaurantOwnerLogin');

//end define controller



//create object controller

var User = new UserHandler(MysqlDB, jwt, CryptoJS);
var Login = new LoginHandler(MysqlDB, jwt, CryptoJS);
var Restaurant = new RestaurantHandler(MysqlDB, jwt, CryptoJS);
var Booking = new BookingHandler(MysqlDB, jwt, CryptoJS);
var Dish = new DishHandler(MysqlDB, jwt, CryptoJS);
var RestaurantOwner = new RestaurantOwnerHandler(MysqlDB, jwt, CryptoJS);
var LoginRestaurant = new LoginRestaurantHandler(MysqlDB, jwt, CryptoJS);

//end create object controller



//Global Middleware for normal user
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
router.post('/login-restaurant', LoginRestaurant.postLoginRestaurant);

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
router.get('/pub/restaurant', Restaurant.getRestaurant);
router.get('/pub/restaurant/:id', Restaurant.getRestaurantID);
router.post('/restaurant/new', checkAdmin.checkTokenAdmin, Restaurant.postRestaurant);
router.put('/restaurant/:id', checkAdmin.checkTokenAdmin, Restaurant.updateRestaurant);
router.delete('/restaurant/:id', checkAdmin.checkTokenAdmin, Restaurant.updateRestaurant);
//end API for restaurant table


//API for Booking table
router.get('/booking', checkAdmin.checkTokenAdmin, Booking.getBooking);
router.get('/booking/user', Booking.getBookingUser);
router.post('/booking/new', Booking.postBooking);
router.put('/booking/update', Booking.updateBooking);
router.delete('/booking/delete', Booking.deleteBooking);
//end API for Booking table


// API for dish
var MiddlewareRestaurantAdmin = require('../middleware/middlewareRestaurantOwer');
var checkRestaurantAdmin = new MiddlewareRestaurantAdmin(jwt);
router.get('/pub/dish/:restaurantID', Dish.getDishRestaurantID);
router.get('/pub/dish/:restaurantID/:dishID', Dish.getDishRestaurantIDAndDishID)
router.post('/dish', checkRestaurantAdmin.checkTokenRestaurantAdmin, Dish.postDishRestaurantIDAndDishID);
router.put('/dish/:id', checkRestaurantAdmin.checkTokenRestaurantAdmin, Dish.updateDishRestaurantIDAndDishID);
router.delete('/dish/:id', checkRestaurantAdmin.checkTokenRestaurantAdmin, Dish.deleteDishRestaurantIDAndDishID);

//end API for dish



// API for restaurant owner

router.get('/restaurant-owners', checkAdmin.checkTokenAdmin, RestaurantOwner.getRestaurantOwner);
router.get('/restaurant-owner-seft', checkRestaurantAdmin.checkTokenRestaurantAdmin, RestaurantOwner.getRestaurantOwnerID);
router.post('/restaurant-owners/new', checkAdmin.checkTokenAdmin, RestaurantOwner.postRestaurantOwnerNew);
router.put('/restaurant-owners/:id', checkAdmin.checkTokenAdmin, RestaurantOwner.updateRestaurantOwner);
router.delete('/restaurant-owners/:id', checkAdmin.checkTokenAdmin, RestaurantOwner.deleteRestaurantOwner);

// end API for restaurant owner


router.post('/testUpload', function (req, res, next) {
  console.log(req.files)
  if (req.files === null) {
    return res.status(400).json({
      msg: "No file upload"
    });
  }

  const file = req.files.file;
  const tmpdir = __dirname.substring(0, __dirname.length - 7);
  file.mv(`${tmpdir}/frontend/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file.name,
      filePath: `/uploads/${file.name}`
    });

  })


});




module.exports = router;