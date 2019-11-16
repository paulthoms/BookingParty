import React from 'react';
import RestaurantCard from './RestaurantCard';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';


const arrRestaurant = [
    "1", "2", "3", "4", "5", "6", "7", "8"
]

export default function BestRestaurant() {
    return (
        <div className="home__best-restaurant__group" >
            <div className="home__best-restaurant__header" >
                <div className="home__best-restaurant__icon" >
                    <Icon>
                        star
                    </Icon>
                </div>
                <div className="home__best-restaurant__title" >
                    Best Restaurant
                </div>
            </div>
            <div className="home__best-restaurant" >
                {
                    arrRestaurant.map((item, index) => {
                        return (
                            <Link to={`/about/restaurant/${index}`} >
                                <RestaurantCard />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
