import React, { Component } from 'react';
import Item from './Item';

export class SideBar extends Component {
    render() {
        return (
            <div id="sidebar">
                <div className="makeStyles-logo-8">
                    <a href="/" className="makeStyles-logoLink-9">
                        <div className="makeStyles-logoImage-11">
                            <img src={process.env.PUBLIC_URL + "/download.png"}alt="logo" className="makeStyles-img-12"/>
                        </div>
                        Booking Party
                    </a>
                </div>
                <div className="makeStyles-sidebarWrapper-27">
                    <ul className="MuiList-root makeStyles-list-14 MuiList-padding">
                        <Item isActive = "1" link="dashboard" name = "Dashboard"/>
                        <Item isActive = "0" link="user" name = "User Profile"/>
                        <Item isActive = "0" link="table" name = "Table List"/>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
