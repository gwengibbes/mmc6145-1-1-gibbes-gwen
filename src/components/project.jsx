import * as React from "react";
// import './project.css'

export default function Project(props) {
  return (
    <div className="project">
      <img src={props.image}/>
      <h2>{props.name}</h2>
    </div>
  )
}