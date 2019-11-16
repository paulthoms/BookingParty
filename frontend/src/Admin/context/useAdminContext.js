import { useContext, useEffect } from "react";
// import HomePage from '../home/HomePage';
// import BookingPage from '../booking/BookingPage';
// import AboutRestaurant from '../about-restaurant/AboutRestaurant';
// import AdminLogin from '../component/Login/Login';

import { AdminContext } from "./context";
// import { getAPIWithoutUser } from '../shared/APICaller';

const useAdminContext = () => {
    const [state, dispatch] = useContext(AdminContext);

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

export { useAdminContext };