import React, { useEffect } from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';

import { AdminProvider } from './context/context';

function Admin() {

    useEffect(() => {

        if (localStorage.getItem("user-role") != 0) {
            window.location.href = "admin-login";
        }
        console.log(localStorage.getItem("user-role"));


    }, []);

    return (
        <AdminProvider>
            <div>
                <SideBar />
                <Content />
            </div>
        </AdminProvider>
    );
}

export default Admin;