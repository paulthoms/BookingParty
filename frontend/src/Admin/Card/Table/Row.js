import React, {useEffect, useState} from 'react';

function Row (props){
    const [cols,setCols] = useState([]);
    useEffect(()=>{
        var tmp =[];
        props.cols.map((item,index) => {
            tmp.push(<td key = {index} className="MuiTableCell-root makeStyles-tableCell-3224 MuiTableCell-body">{item}</td>)
        })
        setCols(tmp);
    },[]);

    return (
        <tr className="MuiTableRow-root makeStyles-tableBodyRow-3227">
            {cols}
            <td key = 'action' className="MuiTableCell-root makeStyles-tableCell-3224 MuiTableCell-body">
                <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-primary-151 MuiButton-text"
                    tabIndex={0} onClick = {props.onHandleClick} type="button">
                    <span className="MuiButton-label">Delete</span>
                </button>
            </td>
        </tr>
    );
}

export default Row;
