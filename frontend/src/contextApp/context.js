import React from "react";
import { useImmer } from "use-immer";
import HomePage from '../Normal/home/HomePage';
import BookingPage from '../Normal/booking/BookingPage';
import AboutRestaurant from '../Normal/about-restaurant/AboutRestaurant';
import AdminLogin from '../Normal/component/Login/Login';

import AdminRestaurant from '../AdminRestaurant/AdminRestaurant';
import Admin from '../Admin/Admin';
import Normal from '../Normal/NormalPage';


const defaultState = {
    NavigationConfig: [
        {
            id: "home_page",
            title: "Home",
            url: "/home",
            component: HomePage,
            layout: "normal"
        },
        {
            id: "booking_page",
            title: "Booking",
            url: "/booking",
            component: BookingPage,
            layout: "normal"
        },
        {
            id: "detail_restaurant",
            url: "/about/restaurant/:slug",
            component: AboutRestaurant,
            layout: "normal"
        },
        {
            id: "adminLogin",
            url: "/admin-login",
            component: AdminLogin,
            layout: "normal"
        },
        {
            id: "logout",
            title: "Logout",
            url: "/home",
            component: HomePage,
            layout: "logout"
        },
        {
            id: "login",
            title: "Login",
            url: "/home",
            component: HomePage,
            layout: "login"
        },
        {
            id: "admin",
            url: "/admin",
            component: Admin,
            layout: "admin"
        },
        {
            id: "adminrestaurant",
            url: "/adminres",
            component: AdminRestaurant,
            layout: "admin"
        },

    ],
    NavBar: [
        {
            id: "home_page",
            title: "Home",
            url: "/home",
        },
        {
            id: "booking",
            title: "Booking",
            url: "/booking",
        },
        {
            id: "login",
            title: "Login",
            url: "/login",
        },
        {
            id: "logout",
            title: "Logout",
            url: "/home",
        },
        {
            id: "profile",
            title: "profile",
            url: "/profile",
        }
    ]
    ,
    isLogin: false,
    allRestaurant: [],
    userRole: localStorage.getItem("user-role")
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useImmer({ ...defaultState });

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
