import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import Filter from './Filter';
import Navigation from '../routes';
import { Link } from 'react-router-dom';
import Login from '../LoginUser/Login';

import { useAppContext } from "../contextApp/useContextApp";
const jwt = require('jsonwebtoken');

export default function NavBar() {

    const {
        NavigationConfig,
        isLogin,
        updateIsLogin
    } = useAppContext();
    // const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        jwt.verify(localStorage.getItem('token'), 'secretKey', function (err, authData) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(authData.exp, (new Date()).getTime())
                if (authData.exp * 1000 > (new Date()).getTime()) {
                    updateIsLogin(true)
                }
                else {
                    updateIsLogin(false);
                }
            }
        });
    }, []);

    function handleLogout() {
        localStorage.clear();
        updateIsLogin(false);
    }

    return (
        <>
            <div className="navbar" >
                <div className="navbar__logo" >
                    {/* logo */}
                </div>
                <div className="narbar__navigation-group" >
                    {
                        isLogin ?
                            NavigationConfig.filter((item) => { return item.id !== "login" }).map((item, index) => {
                                if (item.id !== "logout") {
                                    return (
                                        <Link to={item.url} >
                                            <div key={index} className="navbar__navigation-link" >
                                                {item.title}
                                            </div>
                                        </Link>
                                    );
                                }
                                else if (item.id === "logout") {
                                    return (
                                        <Link to={item.url} >
                                            <div onClick={handleLogout} key={index} className="navbar__navigation-link" >
                                                {item.title}
                                            </div>
                                        </Link>
                                    );
                                }
                            })
                            :
                            NavigationConfig.filter((item) => { return item.id !== "logout" }).map((item, index) => {
                                if (item.id !== "login") {
                                    return (
                                        <Link to={item.url} >
                                            <div key={index} className="navbar__navigation-link" >
                                                {item.title}
                                            </div>
                                        </Link>
                                    );
                                }
                                else {
                                    return (
                                        <Button>
                                            <Login />
                                        </Button>
                                    );
                                }
                            })
                    }
                </div>
            </div>
            <Filter />
        </>
    )
}
