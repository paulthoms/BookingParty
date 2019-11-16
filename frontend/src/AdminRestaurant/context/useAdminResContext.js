import { useContext, useEffect } from "react";
// import HomePage from '../home/HomePage';
// import BookingPage from '../booking/BookingPage';
// import AboutRestaurant from '../about-restaurant/AboutRestaurant';
// import AdminLogin from '../component/Login/Login';

import { AdminResContext } from "./context";
// import { getAPIWithoutUser } from '../shared/APICaller';

const useAdminResContext = () => {
    const [state, dispatch] = useContext(AdminResContext);

    useEffect(() => {

    }, [])

    function updateIsLogin(value) {
        dispatch((draft) => {
            draft.isLogin = value;
        })
    }

    function updateNavigationConfig(role) {

    }

    function updateTitleContent(title){
        dispatch((draft)=>{
            draft.titleContent = title;
        })
    }

    return {
        ...state,
        updateNavigationConfig,
        updateIsLogin,
        updateTitleContent
    };
};

export { useAdminResContext };