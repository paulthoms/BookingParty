import React from 'react';
import Card from '../Card/Card';
import TableUser from '../Card/Table/TableUser';

function UserPage() {
    return (
        <Card key = 'User' name="Simple Table" describe="Here is a subtitle for this table">
            <TableUser/>
        </Card>
    );
}

export default UserPage;
