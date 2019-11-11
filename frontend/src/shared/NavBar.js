import React from 'react';
import Filter from './Filter';
import Navigation from '../routes';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <>
            <div className="navbar" >
                <div className="navbar__logo" >
                    {/* logo */}
                </div>
                <div className="narbar__navigation-group" >
                    {
                        Navigation.map((item, index) => {
                            return (
                                <div className="navbar__navigation-link" >
                                    <Link to={item.url} >{item.title}</Link>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <Filter />
        </>
    )
}
