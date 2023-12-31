import React from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { useState } from 'react';
import FieldGuide from "./Components/FieldGuide";

export default function UpdateObservationForm(props) {
    const [updatedObservation, setUpdatedObservation] = useState('')
    const [updatedClassification, setUpdatedClassification] = useState('')
    const [updatedLocation, setUpdatedLocation] = useState('')
    const [updatedLocationType, setUpdatedLocationType] = useState('')
    const [updatedDate, setUpdatedDate] = useState('')
    const [updatedTimeOfDay, setUpdatedTimeOfDay] = useState('')

function updateObservation(e, observationObject) {
    e.preventDefault()
    fetch(`${API_URL}/${observationObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        observation: updatedObservation,
        classification: updatedClassification,
        location: updatedLocation,
        locationtype: updatedLocationType,
        date: updatedDate,
        timeofday: updatedTimeOfDay,
      }),
    }).then(() => getObservations())
    .catch((error) => {
      console.log(error)
    }
  )}

  return (
    <div className="form-container">
        <Form className="m-5 border">
        <h3 className='header m-2'><span class="border-bottom row border-3 p-1 fs-1">Update Field Guide Observation</span></h3>
            <Label className="fs-4 fw-bold p-2">Edit Observation</Label>
            <Input type="text" className="fs-5" id="updatedObservation" placeholder="Name of Animal or Insect" onChange={(e) => setUpdatedObservation(e.target.value)}
            ></Input>      
            <Label className="fs-4 fw-bold p-2">Edit Classification</Label>
            <Input
              type="text" className="fs-5" id="updatedClassification" placeholder="Ex: Mammal, Reptile, Bird, Insect" onChange={(e) => setUpdatedClassification(e.target.value)}
            ></Input>
            <Label className="fs-4 fw-bold p-2">Edit Location</Label>
            <Input
            type="text" className="fs-5" id="updatedLocation" placeholder="City, State"
              onChange={(e) => setUpdatedLocation(e.target.value)}
            ></Input>
            <Label className="fs-4 fw-bold p-2">Edit Location Type</Label>
            <Input type="text" className="fs-5" id="updatedLocationType" placeholder="Ex: Field, Mountain, Sky, Ocean"
              onChange={(e) => setUpdatedLocationType(e.target.value)}
            ></Input>
            <Label className="fs-4 fw-bold p-2">Edit Date</Label>
            <Input type="date" className="fs-5" id="updatedDate"
              onChange={(e) => setUpdatedDate(e.target.value)}
            ></Input>
            <Label className="fs-4 fw-bold p-2">Edit Time Of Day</Label>
            <Input type="text" className="fs-5" id="updatedTimeOfDay" placeholder="Ex: Morning, Afternoon, Evening, Night"
              onChange={(e) => setUpdatedTimeOfDay(e.target.value)}
            ></Input>
            <Button className='btn btn-sm new-btn border border-1 rounded-pill m-4 p-3 fw-bolder text-white fs-5 secondary' id="updateObservation" onClick={(e) => updateObservation(e, observation)}>Update Observation ✐</Button>
          </Form>
          <div className="text-dark">
              <FieldGuide observations={props.observationData} />
          </div>
    </div>
  )
}
