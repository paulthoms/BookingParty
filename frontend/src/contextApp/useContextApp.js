import { useContext, useEffect } from "react";
import HomePage from '../home/HomePage';
import BookingPage from '../booking/BookingPage';
import AboutRestaurant from '../about-restaurant/AboutRestaurant';
import AdminLogin from '../component/Login/Login';

import { AppContext } from "./context";
import { getAPIWithoutUser } from '../shared/APICaller';

const useAppContext = () => {
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {

        //get allRestaurant
        getAPIWithoutUser("/pub/restaurant", function (res) {
            console.log(res);
            if (res.length) {
                dispatch((draft) => {
                    draft.allRestaurant = res.data.data;
                })
            }
        })

    }, [])

    function updateCheckActive(value) {
        dispatch((draft) => {
            draft.checkActive = value;
        })
    }

    function updateIsLogin(value) {
        dispatch((draft) => {
            draft.isLogin = value;
        })
    }

    function updateNavigationConfig(role) {

    }

    return {
        ...state,
        updateNavigationConfig,
        updateIsLogin
    };
};

export { useAppContext };
