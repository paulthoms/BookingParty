
function RestaurantOwnerDAO(MysqlDB) {

    this.getRestaurantOwnerModel = function (callback) {
        var sql = "SELECT * FROM RestaurantOwner";
        MysqlDB.query(sql, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                })
            }
        })
    }

    this.getRestaurantOwnerIDModel = function (id, callback) {
        var sql = "SELECT * FROM RestaurantOwner where ID = ?";
        MysqlDB.query(sql, id, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                })
            }
        })
    }

    this.postRestaurantOwnerNewModel = function (user, callback) {

        var sql = "insert into RestaurantOwner (Name,Password) values (?,?)";
        MysqlDB.query(sql, [user.Name, user.Password], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        });

    }

    this.updateRestaurantOwnerModel = function (user, callback) {
        var sql = "UPDATE RestaurantOwner SET Name = ?, Password = ? WHERE ID = ?";

        MysqlDB.query(sql, [user.Name, user.Password, user.ID], function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        });

    }

    this.deleteRestaurantOwnerModel = function (user, callback) {
        var sql = "delete from RestaurantOwner where ID = ?";
        MysqlDB.query(sql, user.ID, function (error, results) {
            if (error) {
                callback({
                    "status": "error",
                    "code": "400",
                    "error": error
                })
            }
            else {
                callback({
                    "status": "ok",
                    "data": results
                });
            }
        })
    }

}

module.exports = {
    RestaurantOwnerDAO: RestaurantOwnerDAO
}