import React, { Component } from 'react';

export class Head extends Component {
    render() {
        let cols = [];
        this.props.cols.forEach(function(val){
            cols.push(<th className="MuiTableCell-root makeStyles-tableCell-3224 makeStyles-tableHeadCell-3223 MuiTableCell-head" scope="col">{val}</th>)
        })
        return (
            <tr className="MuiTableRow-root makeStyles-tableHeadRow-3226 MuiTableRow-head">
                {cols}
            </tr>
        );
    }
}

export default Head;
