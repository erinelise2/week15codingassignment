import React from "react";
import { Button, Form, Label, Input } from "reactstrap";
import { useEffect, useState } from 'react';
import FieldGuide from "./FieldGuide";

const API_URL = 
"https://64ad6821b470006a5ec5e9e5.mockapi.io/fieldguide/observation"

export default function NewObservationForm(props) {
    const [observations, setObservations] = useState([])

    const [newObservation, setNewObservation] = useState('')
    const [newClassification, setNewClassification] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [newLocationType, setNewLocationType] = useState('')
    const [newDate, setNewDate] = useState('')
    const [newTimeOfDay, setNewTimeOfDay] = useState('')

    useEffect(() => {
        getObservations()
      }, [])
    
      function getObservations() {
        fetch(API_URL)
          .then((data) => data.json())
          .then((data) => {
            setObservations(data)
            console.log(data)
          })
      }
    
      function deleteObservation (id) {
        fetch(API_URL + `/${id}`, {
          method: 'DELETE',
        }).then(() => getObservations())
      }

    function postNewObservation(e) {
        e.preventDefault()
        fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            observation: newObservation,
            classification: newClassification,
            location: newLocation,
            locationtype: newLocationType,
            date: newDate,
            timeofday: newTimeOfDay,
          }),
        }).then(() => getObservations())
        .catch((error) => {
          console.log(error)
        }
      )
      }

    return (
        <div className="form-container">
        <Form className="m-5 border">
            <h3 className='header m-2'><span class="border-bottom row border-3 p-1 fs-1">What Did You See?</span></h3>
            <Label className="fs-4 fw-bold p-2" for="newObservation">Name of Animal or Insect:</Label>
              <Input type="text" className="fs-5" id="newObservation" placeholder="Name of Animal or Insect" onChange={(e) => setNewObservation(e.target.value)} required></Input><br></br>
            <Label className="fs-4 fw-bold p-2">Classification: </Label>
            <Input
              type="text" className="fs-5" id="newClassification" placeholder="Ex: Mammal, Reptile, Bird, Insect" onChange={(e) => setNewClassification(e.target.value)}
            ></Input>            
            <Label className="fs-4 fw-bold p-2" for="newLocation">Observation Location:</Label>
              <Input type="text" className="fs-5" id="newLocation" placeholder="City, State" requireonChange={(e) => setNewLocation(e.target.value)} required ></Input><br></br>
            <Label className="fs-4 fw-bold p-2">Type of Location: </Label> <br></br>
              <Input type="text" className="fs-5" id="newLocation" placeholder="Ex: Field, Mountain, Sky, Ocean" onChange={(e) => setNewLocationType(e.target.value)}></Input><br></br>
            <Label className="fs-4 fw-bold p-2" for="newDate">Observation Date:</Label>
              <Input className="fs-5" id="newDate" type="Date" required onChange={(e) => setNewDate(e.target.value)}></Input><br></br>
            <Label className="fs-4 fw-bold p-2">Time of Day: </Label> 
              <Input type="text" className="fs-5" id="newTimeOfDay" placeholder="Ex: Morning, Afternoon, Evening, Night" onChange={(e) => setNewTimeOfDay(e.target.value)} required></Input>
            <Button className='btn btn-sm new-btn border border-1 rounded-pill m-4 p-3 fw-bolder text-white fs-5 secondary' id="submitObservation" onClick={(e) => postNewObservation(e)}> Add Observation to Your Field Notes</Button>
          </Form>
          <div className="text-dark">
              <FieldGuide observations={props.observationData} />
          </div>
        </div>
      );
    }
  