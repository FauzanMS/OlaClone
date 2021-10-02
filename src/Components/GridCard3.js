import React from 'react'
import './GridCard3.css';
export default function GridCard3(props) {
    return (
        <div>
            <div className="card3">
  <img src={props.url} className="card-img-top" alt="DCd"/>
  <div className="card-body">
      <p className="card-title">{props.title}</p>
    <p className="card-text">{props.details}</p>
  </div>
</div>
        </div>
    )
}
