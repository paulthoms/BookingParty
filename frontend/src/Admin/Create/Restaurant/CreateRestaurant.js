import React from 'react';
import Card from '../../../Normal/component/Card/Card';
import Form from '../../../Normal/component/Card/Form/Form';
import variables from '../../context/variables';

function CreateRestaurantPage(){
    return (
        <div key = "Create Restaurant" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Create Restaurant" describe="Create Restaurant"><Form key = "Create Restaurant" submit = "Create" fields = {variables.fields.Dish} /></Card>
        </div>
    );
}

export default CreateRestaurantPage;