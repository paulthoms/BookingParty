import React from 'react';
import Card from '../Card/Card';
import TableDish from '../Card/Table/TableDish';
import variables from '../context/variables';

function DishesPage() {
    return (
        <Card key = 'User' name="Simple Table" describe="Here is a subtitle for this table">
            <TableDish/>
        </Card>
    );
}

export default DishesPage;
