import React from 'react';
import RestaurantCard from './RestaurantCard';
import Icon from '@material-ui/core/Icon';
import SelectFilter from "./SelectFilter";


const arrRestaurant = [
    "1", "2", "3", "4", "5", "6", "7", "8"
]

export default function DiscoveryRestaurant() {
    return (
        <div className="home__discovery-restaurant__group" >
            <div className="home__discovery-restaurant__header" >
                <div className="home__discovery-restaurant__icon" >
                    <Icon>
                        dialpad
                    </Icon>
                </div>
                <div className="home__discovery-restaurant__title" >
                    Discovery Restaurant
                </div>
            </div>
            <div className="home__discovery-restaurant" >
                <div className="home__discovery-filter" >
                    <SelectFilter />
                </div>
                <div className="home__discovery-filter__result" >
                    {
                        arrRestaurant.map((item) => {
                            return <RestaurantCard />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
