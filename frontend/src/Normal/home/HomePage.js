import React from 'react';
import Slide from './Slide';
import BestRestaurant from './BestRestaurant';
import DiscoveryRestaurant from './DiscoveryRestaurant';

export default function HomePage() {
    return (
        <div className="home__main">
            <Slide />
            <BestRestaurant />
            <DiscoveryRestaurant />
        </div>
    )
}
