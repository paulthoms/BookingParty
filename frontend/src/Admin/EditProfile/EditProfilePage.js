import React from 'react';
import Card from '../Card/Card';
import FormEditProfile from '../Card/Form/FormEditProfile';

function EditProfilePage(){
    
    return (
        <div key = "Edit Profile" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Edit Profile" describe="Edit Profile">
                <FormEditProfile key = "Edit Profile"/>
            </Card>
        </div>
    );
}

export default EditProfilePage;