import React from "react";
import { useImmer } from "use-immer";
import HomePage from '../home/HomePage';
import BookingPage from '../booking/BookingPage';
import AboutRestaurant from '../about-restaurant/AboutRestaurant';
import AdminLogin from '../component/Login/Login';


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
        }

    ],
    isLogin: false,
    allRestaurant: []
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
