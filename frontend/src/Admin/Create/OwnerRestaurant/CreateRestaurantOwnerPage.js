import React from 'react';
import Card from '../../Card/Card';
import FormCreateRestaurantOwner from '../../Card/Form/FormCreateRestaurantOwner'

function CreateRestaurantOwnerPage(){
    return (
        <div key = "Create Restaurant Owner" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Create Restaurant Owner" describe="Create Restaurant Owner">
                <FormCreateRestaurantOwner key = "Create Restaurant Owner"/>
            </Card>
        </div>
    );
}

export default CreateRestaurantOwnerPage;