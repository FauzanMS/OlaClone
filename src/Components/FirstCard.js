import React, { Component } from 'react'
import './FirstCard.css';
import first from './first.PNG';
export default class FirstCard extends Component {
    render() {
        return (
            <>
           <div className="first">
               <div className="banner"><h1 className="heading">Book a Taxi at your destination !</h1>
               <h5 className="heading1">Choose from a range of categories and prices</h5>
            </div>
            <div className="box">
                <div className="buttons"><button className="bt bt-active" >CITY TAXI</button>
                <button className="bt" >OUTSTATION</button>
                <button className="bt" >RENTALS</button>
                </div>
                <h5 className="firstboxhead">Your everyday travel partner</h5>
                <h7>AC Cabs for point to point travel</h7>
                <form>
                    <div className="labelInput">
                        <label>PICKUP</label>
                    <input className="inputer" type="text" placeholder="Current location"></input></div>

                    <div className="labelInput">
                        <label>DROP</label>
                    <input className="inputer" type="text" placeholder="Enter the drop for ride estimate"></input></div>
                    <div className="labelInput">
                        <label>WHEN</label>
                    <input className="inputer" type="text" placeholder="NOW"></input></div>
                    <button className="submitBt" type="submit">Search Cabs</button>
                </form>
            </div>
</div>
            </>
        )
    }
}
