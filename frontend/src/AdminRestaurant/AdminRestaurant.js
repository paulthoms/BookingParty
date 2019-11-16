import React, { useEffect } from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';

import { AdminResProvider } from './context/context';

function AdminRestaurant() {


    useEffect(() => {

        if (localStorage.getItem("user-role") != 2) {
            window.location.href = "admin-login";
        }

    }, []);


    return (
        <AdminResProvider>
            <div>
                <SideBar />
                <Content />
            </div>
        </AdminResProvider>
    );
}

export default AdminRestaurant;