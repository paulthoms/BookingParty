import React from 'react';
import Card from '../../Card/Card';
import FormCreateRestaurant from '../../Card/Form/FormCreateRestaurant';

function CreateRestaurantPage(){
    return (
        <div key = "Create Restaurant" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Create Restaurant" describe="Create Restaurant">
                <FormCreateRestaurant key = "Create Restaurant"/>
            </Card>
        </div>
    );
}

export default CreateRestaurantPage;