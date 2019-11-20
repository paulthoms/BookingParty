import React, {useEffect, useState} from 'react';
import Input from './Input';
import {useAdminContext} from '../../context/useAdminContext';


function FormEditProfile(){

    const {
        userProfile
    } = useAdminContext();
    function handleOnChange(e){
        console.log(e.target.value);
    }


    return (
        <div>
            <div className="makeStyles-cardBody-371">
                <div className="MuiGrid-root makeStyles-grid-252 MuiGrid-container">
                    <Input key = 'name' value={userProfile.name} onChange={handleOnChange} type='text' id = 'name' name = "Name" />
                    <Input key = 'image' value={userProfile.image} onChange={handleOnChange} type='text' id = 'image' name = "Image" />
                    <Input key = 'password' value={userProfile.password} onChange={handleOnChange} type ="password" id = 'password' name = "Password" />
                </div>
            </div>
            <div className="makeStyles-cardFooter-554">
                <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                    tabIndex={0} type="button">
                        <span className="MuiButton-label">Edit Profile</span>
                    <span className="MuiTouchRipple-root" />
                </button>
            </div>
        </div>
    );
}

export default FormEditProfile;
