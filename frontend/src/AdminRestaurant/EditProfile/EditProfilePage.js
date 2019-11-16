import React from 'react';
import Card from '../../Normal/component/Card/Card';
import FormEditProfile from '../Card/Form/FormEditProfile';
import variables from '../context/variables';

function EditProfilePage(){
    
    return (
        <div key = "Edit Profile" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Edit Profile" describe="Edit Profile">
                <FormEditProfile key = "Create Dish" />
            </Card>
        </div>
    );
}

export default EditProfilePage;