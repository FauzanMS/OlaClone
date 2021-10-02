import React from 'react';
import GridCard2 from './GridCard2';
import './ThirdCard.css';
import a from './a.jpg';
import a1 from './a1.jpg';
import a2 from './a2.jpg';
import a3 from './a3.jpg';
import a4 from './a4.jpg';
import a5 from './a5.jpg';

export default function ThirdCard() {
    return (
        <>
            <div className="secondPart">
                <h1 className="secondHeading">Why ride with Ola ?</h1>
                <p className="secondBio">The best way to travel to your destination</p>
            </div>
            <div className="secondGrid">
                <GridCard2 url={a}
                    icon="https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
                    title="Cabs for Every Pocket" details="From Sedans and SUVs to Luxury cars for special occasions , we have cabs to suit every pocket"/>

                    <GridCard2 url={a1}
                        icon="https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
                        title="Secure and Safer Rides" details="Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience." />

                    <GridCard2 url={a2}
                        icon="https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
                        title="Ola Select" details="A membership program with Ola that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time" />

                    <GridCard2 url={a3}
                        icon="https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
                        title="In Cab Entertainment" details="Play music, watch videos and a lot more with Ola Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility." />

                    <GridCard2 url={a4}
                        icon="https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
                        title="Share and Express" details="To travel with the lowest fares choose Ola Share. For a faster travel experience we have Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!." />

                    <GridCard2 url={a5}
                        icon="https://e7.pngegg.com/pngimages/546/33/png-clipart-ola-cabs-taxi-github-computer-software-customer-service-taxi-logo-car-rental-thumbnail.png"
                        title="Cashless Rides" details="Now go cashless and travel easy. Simply recharge your Ola money or add your credit/debit card to enjoy hassle free payments." />
        </div>
        </>

            )
}
