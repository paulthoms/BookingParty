
function MiddlewareRestaurantAdmin(jwt) {
    this.checkTokenRestaurantAdmin = function (req, res, next) {
        jwt.verify(req.token, 'secretKey', function (err, authData) {
            if (err) {
                res.sendStatus(403);
            }
            else {
                console.log(authData);
                if (authData.user.role === 2) {
                    req.restaurantOwnerID = authData.user.ID;
                    next();
                }
                else {
                    res.json({
                        "status": "error",
                        "code": "403 owner restaurant"
                    });
                }
            }
        });
    }
}

module.exports = MiddlewareRestaurantAdmin;