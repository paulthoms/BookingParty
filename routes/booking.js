

var BookingDAO = require('../models/booking').BookingDAO;

function Booking(MysqlDB, jwt, CryptoJS) {

    var BookingModel = new BookingDAO(MysqlDB);

    this.getBooking = function (req, res, next) {
        BookingModel.getBookingModel(function (result) {
            res.json(result);
        });
    }

    this.getBookingUser = function (req, res, next) {
        BookingModel.getBookingUserModel(req.user.user.ID, function (result) {
            res.json(result);
        });
    }

    this.postBooking = function (req, res, next) {
        // console.log(req.user.user.ID);
        var Booking = {
            Time: req.body.Time,
            Member: req.body.Member,
            User_ID: req.user.user.ID,
            Restaurant_ID: req.body.Restaurant_ID
        }
        BookingModel.postBookingModel(Booking, function (result) {
            res.json(result);
        });
    }

    this.updateBooking = function (req, res, next) {
        console.log(req.user);
        var Booking = {
            Time: req.body.Time,
            Member: req.body.Member,
            User_ID: req.user.user.ID,
            Restaurant_ID: req.body.Restaurant_ID,
            ID: req.body.ID
        }

        BookingModel.updateBookingModel(Booking,function (result) {
            res.json(result);
        })
    }

    this.deleteBooking = function (req,res,next) {
        var Booking = {
            User_ID: req.user.user.ID,
            Restaurant_ID: req.body.Restaurant_ID,
            ID: req.body.ID
        }

        BookingModel.deleteBookingModel(Booking,function (result) {
            res.json(result);
        });

    }


}

module.exports = Booking;