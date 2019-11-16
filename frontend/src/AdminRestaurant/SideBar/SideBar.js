import React, { Component } from 'react';
import Item from './Item';
import {useAdminResContext} from '../context/useAdminResContext';


function SideBar(props) {

    const {
        NavigationConfig,
        updateTitleContent,
        titleContent
    } = useAdminResContext();

    function handleOnClickItem(title){
        updateTitleContent(title);
    }

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
                    {
                        NavigationConfig.map((item,index)=>{
                            if (item.display !== 'none'){
                                return (
                                    <div key = {index} onClick = {()=>handleOnClickItem(item.title)}  className={`makeStyles-item-15 ${item.title === titleContent &&"makeStyles-orange-25"} `} ><Item title = {item.title}/></div>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
