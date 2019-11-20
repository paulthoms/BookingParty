import React, { Component } from 'react';
import Head from './Head';
import Row from './Row';

function TableRestaurant(props) {
    function deleteRestautrant(e){
        console.log("Delete Restaurant");
    }
    return (
        <div className="makeStyles-cardBody-399">
            <div className="makeStyles-tableResponsive-3225">
                <table className="MuiTable-root makeStyles-table-3222">
                    <thead className="MuiTableHead-root makeStyles-primaryTableHeader-3216">
                        <Head cols = {["Name","Country","City","Salary"]} />
                    </thead>
                    <tbody className="MuiTableBody-root">
                        <Row cols = {["Dakota Rice",	"Niger",	"Oud-Turnhout",	"$36,738"]} onHandleClick = {deleteRestautrant} />
                        <Row cols = {["Minerva Hooper",	"Curaçao",	"Sinaai-Waas",	"$23,789"]} onHandleClick = {deleteRestautrant} />
                        <Row cols = {["Sage Rodriguez",	"Netherlands",	"Baileux",	"$56,142"]} onHandleClick = {deleteRestautrant} />
                        <Row cols = {["Philip Chaney",	"Korea, South",	"Overland Park",	"$38,735"]} onHandleClick = {deleteRestautrant} />
                        <Row cols = {["Doris Greene",	"Malawi",	"Feldkirchen in Kärnten",	"$63,542"]} onHandleClick = {deleteRestautrant} /> 
                        <Row cols = {["Mason Porter",	"Chile",	"Gloucester",	"$78,615"]} onHandleClick = {deleteRestautrant} />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableRestaurant;
