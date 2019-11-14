import React, { Component } from 'react';
import './CardTable.css';
import Table from './Table/Table';

export class CardTable extends Component {
    render() {
        return (
            <div className="MuiGrid-root makeStyles-grid-361 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12">
                <div className="makeStyles-card-362">
                    <div className="makeStyles-cardHeader-366 makeStyles-primaryCardHeader-374">
                        <h4 className="makeStyles-cardTitleWhite-3214">{this.props.name}</h4>
                        <p className="makeStyles-cardCategoryWhite-3213">{this.props.describe}</p>
                    </div>
                    <div className="makeStyles-cardBody-399">
                        <div className="makeStyles-tableResponsive-3225">
                            <Table/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardTable;
