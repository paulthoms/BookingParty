import React, { Component } from 'react';

export class Row extends Component {
    render() {
        let cols = [];
        this.props.cols.forEach(function(val){
            cols.push(<td className="MuiTableCell-root makeStyles-tableCell-3224 MuiTableCell-body">{val}</td>)
        })
        return (
            <tr className="MuiTableRow-root makeStyles-tableBodyRow-3227">
                {cols}
            </tr>
        );
    }
}

export default Row;
