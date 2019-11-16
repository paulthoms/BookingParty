import React from "react";
import { useImmer } from "use-immer";
import DishesPage from "../Dish/DishesPage";
import EditProfilePage from "../EditProfile/EditProfilePage";
import CreateDishPage from "../CreateDish/CreateDishPage";
import EditDishPage from "../EditDish/EditDishPage";
import BookingPage from "../Booking/BookingPage";

const defaultState = {
    NavigationConfig: [
        {
            id: "dish",
            title: "Dish",
            layout: 'sidebar',
            component: DishesPage
        },
        {
            id: "book",
            title: "Booking",
            layout: 'sidebar',
            component: BookingPage
        },
        {
            id: "dish",
            title: "Create Dish",
            layout: 'sidebar',
            component: CreateDishPage
        },
        {
            id: "editdish",
            title: "Edit Dish",
            component: EditDishPage
        },
        {
            id: "editprofile",
            title: "Edit Profile",
            component: EditProfilePage
        }
    ],
    isLogin: false,
    userProfile:{
        name: 'admin',
        image: "123123",
        password: "32324"
    },
    DishVaules:[
        {
            Name: "Dakota Rice",
            Image: "Niger",
            Describe: "Oud-Turnhout",
            Cost: "$36,738"
        }
    ],
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