import React, { Component } from 'react';

export class Item extends Component {
    render() {
        return (
            <a aria-current="page" className= { "makeStyles-item-15 " + (this.props.isActive == "1" ? "active" : "")} href={"/admin/" + this.props.link}>
                <div className={"MuiButtonBase-root MuiListItem-root makeStyles-itemLink-16 MuiListItem-gutters MuiListItem-button " + (this.props.isActive == "1" ? "makeStyles-orange-25 " : "")}
                    tabIndex={0} role="button" aria-disabled="false">
                    <svg className= {"MuiSvgIcon-root makeStyles-itemIcon-17 " + (this.props.isActive == "1" ? "makeStyles-whiteFont-21" : "")  } focusable="false"
                    viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                    </svg>
                    <div className= {"MuiListItemText-root makeStyles-itemText-19 " + (this.props.isActive == "1" ? "makeStyles-whiteFont-21" : "")  }>{this.props.name}</div>
                    <span className="MuiTouchRipple-root" />
                </div>
            </a>
        );
    }
}

export default Item;
