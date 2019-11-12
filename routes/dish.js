
var DishDAO = require('../models/dish').DishDAO;

function Dish(MysqlDB, jwt, CryptoJS) {

    var DishModel = new DishDAO(MysqlDB);

    this.getDishRestaurantID = function (req, res, next) {
        var id = req.params.restaurantID;
        DishModel.getDishRestaurantIDModel(id, function (result) {
            res.json(result);
        });
    }

    this.getDishRestaurantIDAndDishID = function (req, res, next) {

        var idRes = req.params.restaurantID;
        var idDish = req.params.dishID;
        DishModel.getDishRestaurantIDAndDishIDModel(idRes, idDish, function (result) {
            res.json(result);
        });
    }

    this.postDishRestaurantIDAndDishID = function (req, res, next) {

        var dish = {
            Name: req.body.Name,
            Image: req.body.Image,
            Description: req.body.Description
        }

        DishModel.postDishRestaurantIDAndDishIDModel(dish, req.user, function (result) {
            res.json(result);
        });

    }

    this.updateDishRestaurantIDAndDishID = function (req, res, next) {
        var dish = {
            Name: req.body.Name,
            Image: req.body.Image,
            Description: req.body.Description,
            ID: req.params.id
        }

        DishModel.updateDishRestaurantIDAndDishIDModel(dish, req.user, function (result) {
            res.json(result);
        })

    }

    this.deleteDishRestaurantIDAndDishID = function (req, res, next) {
        var dish = {
            ID: req.params.id
        }

        DishModel.deleteDishRestaurantIDAndDishIDModel(dish,function(result){
            res.json(result);
        })

    }

}


module.exports = Dish;