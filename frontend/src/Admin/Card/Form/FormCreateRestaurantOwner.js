import React, {useEffect, useState} from 'react';
import Input from './Input';

function FormCreateRestaurantOwner(props){

    function handleOnChange(e){
        console.log(e.target.value);
    }

    return (
        <div>
            <div className="makeStyles-cardBody-371">
                <div className="MuiGrid-root makeStyles-grid-252 MuiGrid-container">
                    <Input key = 'name' value="" onChange={handleOnChange} type='text' id = 'name' name = "Name" />
                    <Input key = 'describe' value="" onChange={handleOnChange} type='text' id = 'describe' name = "Describe" />
                    <Input key = 'image' value="" onChange={handleOnChange} type='text' id = 'image' name = "Image" />
                    <Input key = 'cost' value="" onChange={handleOnChange} type='text' id = 'cost' name = "Cost" />
                </div>
            </div>
            <div className="makeStyles-cardFooter-554">
                <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                    tabIndex={0} type="button">
                        <span className="MuiButton-label">Create</span>
                    <span className="MuiTouchRipple-root" />
                </button>
            </div>
        </div>
    );
}

export default FormCreateRestaurantOwner;
