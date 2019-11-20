import React from 'react';
import Card from '../Card/Card';
import TableRestaurant from '../Card/Table/TableRestaurant';

function RestaurantPage() {
    return (
        <Card key = "Restaurant" name="Simple Table" describe="Here is a subtitle for this table">
            <TableRestaurant/>
        </Card>
    );
}

export default RestaurantPage;
