import axios from "axios";

export function getAPI(strAPI, callback) {
    axios.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded";
    axios.defaults.headers["Authorization"] = "Bearer" + localStorage.getItem('token');

    axios.get(strAPI).then(_res => {
        callback(_res);
    })
        .catch(function (error) {
            console.log(error);
            callback([]);
        });


}

export function login(data, callback) {
    axios.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded";
    axios({
        method: "post",
        url: 'login',
        data: data,
        config: {
            headers: {
                "Content-Type": "application/json"
            }
        }
    }).then(data => {
        callback(data)
    }).catch(function (error) {
        callback({
            status: false,
            msg: "unknow error",
            data: null
        });
    });;
}

export function getAPIWithoutUser(strAPI, callback) {
    axios.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded";

    axios.get(strAPI).then(_res => {
        callback(_res);
    })
        .catch(function (error) {
            console.log(error);
            callback([]);
        });

}