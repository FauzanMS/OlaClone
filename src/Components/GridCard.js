import React from 'react'
import './GridCard.css';
export default function gridCard(props) {
    return (
        <div>
            <div className="card">
  <img src={props.url} className="card-img-top" alt="gf"/>
  <div className="card-body">
<img className="cardBut" src={props.icon} alt="dv" ></img>
      <p className="card-title">{props.title}</p>
    <p className="card-text">{props.details}</p>
  </div>
</div>
        </div>
    )
}




                                