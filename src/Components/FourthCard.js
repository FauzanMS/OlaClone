import React from 'react'
import log from './fourthlogo.png';
import './FourthCard.css';
import appstore from './appstore.png';
import playstore from './playstore.png';
import windowstore from './windowstore.png';
export default function FourthCard() {
    return (
        <div className="thirdGrid">
            <div className="leftFourth">
                  <h2>Book an Ola from the App</h2>
                  <p>Download the app for exclusive deals and ease of booking</p>
            <div className="stores">
                <img src={appstore} className="store"></img>
                <img src={windowstore} className="store1"></img>
                <img src={playstore} className="store"></img>
                </div>
            </div>
            <div className="rightFourth">
               <img src={log} className="imgFourth"></img>
            </div>
        </div>
    )
}
