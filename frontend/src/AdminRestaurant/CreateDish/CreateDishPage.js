import React from 'react';
import Card from '../Card/Card';
import FormCreateDish from '../Card/Form/FormCreateDish';

function CreateDishPage(){
    return (
        <div key = "Create Dish" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Create Dish" describe="Create Dish">
                <FormCreateDish key = "Create Dish"/>
            </Card>
        </div>
    );
}

export default CreateDishPage;