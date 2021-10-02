import React from 'react';
import GridCard3 from './GridCard3';
import './FifthCard.css';

export default function FifthCard() {
    return (
        <>
            <div className="fourthGrid">
                <GridCard3 url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYhLXzRS-qhDwa4JiZyfkHEs1SltKfTVlwJA&usqp=CAU"
                    title="24/7 Customer Care" details="A dedicated 24x7 customer
                    support team always at your
                    service to help solve any problem"/>

                    <GridCard3 url="https://image.shutterstock.com/image-vector/shield-check-mark-icon-vector-260nw-1704862045.jpg"
                        icon="https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
                        title="Secure and Safer Rides" details="Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience." />

                    <GridCard3 url="https://static.thenounproject.com/png/1927241-200.png"
                        icon="https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
                        title="Ola Select" details="A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time" />        
        </div>
        </>

            )
}
