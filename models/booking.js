
function BookingDAO(MysqlDB) {

    this.getBookingModel = function (callback) {
        var sql = "select * from Booking";
        MysqlDB.query(sql, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400"
                });
            }
            else {
                callback(results);
            }
        });
    }

    this.getBookingUserModel = function (id, callback) {
        var sql = "SELECT Booking.Time,Booking.Member,Restaurant.Name as Res_name,Restaurant.Address as Res_address,Booking.Status FROM  Booking JOIN Restaurant ON Booking.Restaurant_ID = Restaurant.ID where Booking.Users_ID = ?";
        MysqlDB.query(sql, id, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback(results);
            }
        });
    }

    this.postBookingModel = function (Booking, callback) {
        var sql = "insert into Booking (Time, Member, Users_ID, Restaurant_ID) values (?,?,?,?)";

        MysqlDB.query(sql, [Booking.Time, Booking.Member, Booking.User_ID, Booking.Restaurant_ID], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback({
                    "status":"ok"
                });
            }
        });

    }

    this.updateBookingModel = function (Booking, callback) {
        var sql = "UPDATE Booking SET Time = ?, Member = ?, Users_ID = ?,Restaurant_ID = ? WHERE ID = ?";
        MysqlDB.query(sql, [Booking.Time, Booking.Member, Booking.User_ID, Booking.Restaurant_ID, Booking.ID], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                });
            }
            else {
                callback({
                    "status":"ok"
                });
            }
        });
    }

    this.deleteBookingModel = function (Booking,callback) {
        var sql = "delete from Booking where ID = ?";

        MysqlDB.query(sql,[Booking.ID],function (error,result) {
            if(error){
                callback({
                    "status":"error",
                    "Code":"400"
                });
            }
            else{
                callback({
                    "status":"ok"
                })
            }
        });

    }

}

module.exports = {
    BookingDAO: BookingDAO
}