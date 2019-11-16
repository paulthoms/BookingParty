import React from 'react';
import {useAdminResContext} from '../../context/useAdminResContext';

function DishAction(props){
    const {
        updateTitleContent,
    } = useAdminResContext();

    return(
        <div>
            <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
            tabIndex={0} onClick = {() => updateTitleContent('Edit Dish')} type="button">
                <span className="MuiButton-label">Edit</span>
            </button>
            <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
            tabIndex={0} type="button">
                <span className="MuiButton-label">Delete</span>
            </button>
        </div>
    );
}

export default DishAction;
