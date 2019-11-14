import React, { Component } from 'react';
import Head from './Head';
import Row from './Row';

export class Table extends Component {
    render() {
        return (
            <table className="MuiTable-root makeStyles-table-3222">
                <thead className="MuiTableHead-root makeStyles-primaryTableHeader-3216">
                    <Head cols = {["Name","Country","City","Salary"]} />
                </thead>
                <tbody className="MuiTableBody-root">
                    <Row cols = {["Dakota Rice",	"Niger",	"Oud-Turnhout",	"$36,738"]} />
                    <Row cols = {["Minerva Hooper",	"Curaçao",	"Sinaai-Waas",	"$23,789"]} />
                    <Row cols = {["Sage Rodriguez",	"Netherlands",	"Baileux",	"$56,142"]} />
                    <Row cols = {["Philip Chaney",	"Korea, South",	"Overland Park",	"$38,735"]} />
                    <Row cols = {["Doris Greene",	"Malawi",	"Feldkirchen in Kärnten",	"$63,542"]} />
                    <Row cols = {["Mason Porter",	"Chile",	"Gloucester",	"$78,615"]} />
                </tbody>
            </table>
        );
    }
}

export default Table;
