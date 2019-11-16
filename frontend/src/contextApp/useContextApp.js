import { useContext, useEffect } from "react";

import { AppContext } from "./context";
import { getAPIWithoutUser } from '../Normal/shared/APICaller';

const useAppContext = () => {
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {

        //get allRestaurant
        getAPIWithoutUser("/pub/restaurant", function (res) {
            // console.log(res);
            console.log(localStorage.getItem('user-role'));
            if (res.length) {
                dispatch((draft) => {
                    draft.allRestaurant = res.data.data;
                })
            }
        });

        dispatch((draft) => {
            draft.userRole = localStorage.getItem("user-role");
        });

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

    function updateNavBar(NavBar) {
        dispatch((draft) => {
            draft.NavBar = NavBar;
        })
    }

    return {
        ...state,
        updateNavigationConfig,
        updateIsLogin,
        updateNavBar
    };
};

export { useAppContext };
