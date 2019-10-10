

var RestaurantDAO = require('../models/restaurant').RestaurantDAO;


function Restaurant(MysqlDB,jwt,CryptoJS) {
    var RestaurantModel = new RestaurantDAO(MysqlDB);

    this.getRestaurant = function(req,res,next) {
        RestaurantModel.getRestaurantModel(function(result){
            res.json(result);
        });
    }

    this.getRestaurantID = function(req,res,next) {
        var id = req.params.id;
        RestaurantModel.getRestaurantIDModel(id,function(result){
            res.json(result);
        });
    }

    this.postRestaurant = function(req,res,next) {
        var restaurant = {
            Name: req.body.Name,
            Type: req.body.Type,
            Address: req.body.Address,
            Image: req.body.Image
        };

        RestaurantModel.postRestaurantModel(restaurant,function(result) {
            res.json(result);
        });

    }

    this.updateRestaurant = function(req,res,next) {
        var restaurant = {
            Name: req.body.Name,
            Type: req.body.Type,
            Address: req.body.Address,
            Image: req.body.Image
        };

        var id = req.params.id;
        console.log(id);

        RestaurantModel.updateRestaurantModel(id,restaurant,function(result) {
            res.json(result);
        })

    }

    this.deleteRestaurant = function(req,res,next) {
        var id = req.params.id;

        RestaurantModel.deleteRestaurantModel(id,function(result) {
            res.json(result);
        });

    }

}

module.exports = Restaurant;