import React from 'react'

export default function AboutRestaurant(props) {

    var id = props.match.params.slug;

    return (
        <div className="about-restaurant" >
            <div className="about-restaurant__banner" >
                
            </div>
            <div className="about-restaurant__group" >
                <div className="about-restaurant__left" >

                </div>
                <div className="about-restaurant__right" >

                </div>
            </div>
            <div className = "about-restaurant__map" >
                
            </div>
        </div>
    )
}
