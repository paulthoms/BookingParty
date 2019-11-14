import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './admin/SideBar/SideBar';
import Main from './admin/Main/Main';
import './admin/Admin.css';
import './admin/SideBar/sidebar.css';

function Admin() {
    return (
    <Router>
        <Switch>
            <SideBar/>
            <Main/>
            {
                Navigation.map((item, index) => {
                return <Route exact path={item.url} component={item.component} />
                })
            }
        </Switch>
    </Router>
    );
  }