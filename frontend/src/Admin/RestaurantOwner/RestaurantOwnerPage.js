import React from 'react';
import Card from '../Card/Card';
import TableRestaurantOwner from '../Card/Table/TableRestaurantOwner';

function RestaurantOwnerPage() {
    return (
        <Card key = "Restaurant Owner" name="Simple Table" describe="Here is a subtitle for this table">
            <TableRestaurantOwner/>
        </Card>
    );
}

export default RestaurantOwnerPage;
