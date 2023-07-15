import React from "react";
import { Button } from "reactstrap";

export default function FieldGuide(props) {
  return (
    <div className="field-guide">
      {props.observations.map((observation, index) => (
        <table className="container table border p-2 fs-3">
        <td><Button className='btn btn-sm new-btn border border-1 fw-bolder text-white fs-5 secondary' onClick=""> Edit </Button></td>
        <td>{observation.observation}</td>
        <td>{observation.classification}</td>
        <td>{observation.location}</td>
        <td>{observation.locationtype}</td>
        <td>{observation.date}</td>
        <td>{observation.timeofday}</td>
        <td><Button className='btn btn-sm new-btn border border-1 fw-bolder text-white fs-5'>🗑</Button></td>
      </table>
      ))}
    </div>
  )
}