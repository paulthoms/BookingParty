import React, { Component } from 'react';
import Head from './Head';
import Row from './Row';

function TableDish(props) {
    return (
        <div className="makeStyles-cardBody-399">
            <div className="makeStyles-tableResponsive-3225">
                <table className="MuiTable-root makeStyles-table-3222">
                    <thead className="MuiTableHead-root makeStyles-primaryTableHeader-3216">
                        <Head cols = {["Name","Country","City","Salary"]} />
                    </thead>
                    <tbody className="MuiTableBody-root">
                        <Row cols = {["Dakota Rice",	"Niger",	"Oud-Turnhout",	"$36,738"]}  type = "edit"/>
                        <Row cols = {["Minerva Hooper",	"Curaçao",	"Sinaai-Waas",	"$23,789"]} type = "edit"/>
                        <Row cols = {["Sage Rodriguez",	"Netherlands",	"Baileux",	"$56,142"]} type = "edit"/>
                        <Row cols = {["Philip Chaney",	"Korea, South",	"Overland Park",	"$38,735"]} type = "edit"/>
                        <Row cols = {["Doris Greene",	"Malawi",	"Feldkirchen in Kärnten",	"$63,542"]} type = "edit"/> 
                        <Row cols = {["Mason Porter",	"Chile",	"Gloucester",	"$78,615"]} type = "edit"/>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableDish;
