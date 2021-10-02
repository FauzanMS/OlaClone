import React from 'react';
import GridCard from './GridCard';
import './SecondPart.css';
export default function SecondPart() {
    return (
        <>
        <div  className="secondPart">
            <h1 className="secondHeading">A car for every occasion</h1>
            <p className="secondBio">Ola offers city taxis, inter-city cabs, and local cabs at hourly packages</p>
        </div>
        <div className="firstGrid">
            <GridCard url="https://cms-web.olacabs.com/00000000356.jpg"
            icon= "https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
            title="CITY TAXI" details="The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs. 6/km, you can choose from a wide range of options! You can also opt to do your bit for the environment with Ola Share!"/>
            
            <GridCard url="https://cms-web.olacabs.com/00000000357.jpg" 
icon= "https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
            title="OUTSTATION" details="Ride out of town at affordable one-way and round-trip fares with Ola’s intercity travel service. Choose from a range of AC cabs driven by top partners, available in 1 hour or book upto 7 days in advance. We have you covered across India with presence in 90+ cities with over 500 one way routes."/>

            <GridCard url="https://cms-web.olacabs.com/00000000380.jpg"
icon= "https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
            title="RENTALS" details="                                    With Ola Rentals you get a cab at your disposal. So be it a  day long business meeting, a shopping trip with your friends or just a day out in a new city, we have you covered. Packages start at 1 hour and can be extended upto 12 hours!"/>

        </div>
        </>

    )
}
