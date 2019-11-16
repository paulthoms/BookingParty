import React from 'react';
import Card from '../../Normal/component/Card/Card';
import Table from '../../Normal/component/Card/Table/Table';
import variables from '../context/variables';

function DishesPage() {
    return (
        <Card key = 'User' name="Simple Table" describe="Here is a subtitle for this table">
            <Table type= {variables.type.Dish} />
        </Card>
    );
}

export default DishesPage;
