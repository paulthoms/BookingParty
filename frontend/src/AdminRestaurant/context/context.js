import React from "react";
import { useImmer } from "use-immer";
import DishesPage from "../Dish/DishesPage";
import EditProfilePage from "../EditProfile/EditProfilePage";
import CreateDish from "../CreateDish/CreateDish";
import BookingPage from "../Booking/BookingPage";


const defaultState = {
    NavigationConfig: [
        {
            id: "dish",
            title: "Dish",
            component: DishesPage
        },
        {
            id: "book",
            title: "Booking",
            component: BookingPage
        },
        {
            id: "dish",
            title: "Create Dish",
            component: CreateDish
        },
        {
            id: "editprofile",
            title: "Edit Profile",
            display: 'none',
            component: EditProfilePage
        }
    ],
    isLogin: false,
    titleContent: "Dish"
};

const AdminResContext = React.createContext();

const AdminResProvider = ({ children }) => {
    const [state, dispatch] = useImmer({ ...defaultState });

    return (
        <AdminResContext.Provider value={[state, dispatch]}>
            {children}
        </AdminResContext.Provider>
    );
};

export { AdminResProvider, AdminResContext };