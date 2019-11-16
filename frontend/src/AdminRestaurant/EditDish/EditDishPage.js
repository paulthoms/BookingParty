import React, {useState,useEffect} from 'react';
import Card from '../Card/Card';
import FormEditDish from '../Card/Form/FormEditDish';
import variables from '../context/variables';
import {useAdminResContext} from '../context/useAdminResContext';

function EditDishPage(){
    const {
        DishVaules
    } = useAdminResContext();

    useEffect(()=>{
        console.log(DishVaules);
    },[]);

    return (
        <div key = "Edit Dish" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Edit Dish" describe="Edit Dish">
                <FormEditDish key = "Edit Dish" 
                    name = {DishVaules[0]['Name']}
                    describe = {DishVaules[0]['Describe']}
                    image = {DishVaules[0]['Image']}
                    cost = {DishVaules[0]['Cost']}
                />
            </Card>
        </div>
    );
}

export default EditDishPage;