import React from 'react';
import Card from '../../../Normal/component/Card/Card';
import Form from '../../../Normal/component/Card/Form/Form';
import variables from '../../context/variables';

function CreateRestaurantOwnerPage(){
    return (
        <div key = "Create Restaurant Owner" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Create Restaurant Owner" describe="Create Restaurant Owner"><Form key = "Create Restaurant Owner" submit = "Create" fields = {variables.fields.OwnerRestaurant} /></Card>
        </div>
    );
}

export default CreateRestaurantOwnerPage;