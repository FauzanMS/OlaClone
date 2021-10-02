import React from 'react'
import './GridCard2.css';
export default function GridCard2(props) {
    return (
        <div>
            <div className="card2">
  <img src={props.url} className="card-img-top" alt="..."/>
  <div className="card-body">
      <p className="card-title">{props.title}</p>
    <p className="card-text">{props.details}</p>
  </div>
</div>
        </div>
    )
}
