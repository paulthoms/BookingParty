import React from 'react';
import Card from '../../Normal/component/Card/Card';
import Table from '../../Normal/component/Card/Table/Table';

function UserPage() {
    return (
        <Card key = 'User' name="Simple Table" describe="Here is a subtitle for this table"><Table/></Card>
    );
}

export default UserPage;
