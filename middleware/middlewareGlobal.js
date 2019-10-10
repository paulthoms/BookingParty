
var jwt = require('jsonwebtoken');

var pathURL = [
    "login",
    "register",
    "checkmail",
    "pub/restaurant"
];

function AllowPath(path) {
    for (let i in pathURL) {
        if (path.includes(pathURL[i])) {
            return true;
        }
    }
    return false;
}

function MiddlewareGlobal(jwt) {
    //verify token 
    this.verifyToken = function (req, res, next) {
        //Get auth header value
        if (AllowPath(req.path)) {
            next();
        }
        else {
            const bearerHeader = req.headers['authorization'];
            if (typeof bearerHeader !== undefined) {
                //split at the space

                const bearer = bearerHeader.split(' ');

                const bearerToken = bearer[1];

                req.token = bearerToken;
                jwt.verify(bearerToken, 'secretKey', function (err, authData) {
                    if (err) {
                        res.sendStatus(403);
                    }
                    else {
                        // console.log(authData);
                        req.user = authData;
                        next();
                    }
                });

            }
            else {
                // send 403
                res.sendStatus(403);
            }
        }


    }

    //check token for user




}


module.exports = MiddlewareGlobal;