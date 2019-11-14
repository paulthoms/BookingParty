import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import CardTable from '../CardTable/CardTable';


export class Main extends Component {
    render() {
        return (
            <div className="makeStyles-mainPanel-2 ps ps--active-y">
                <Header name="Dashboard"/>
                <CardTable name="Simple Table" describe="Here is a subtitle for this table"/>
            </div>
        );
    }
}

export default Main;
