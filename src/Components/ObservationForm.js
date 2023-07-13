import React from "react";
import './App.css';
import {useEffect, useState} from 'react'
import { Button, Form, Input } from "reactstrap";

export default function postNewObservation(e) {
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

    return (
        <div className="App">
          <Form className="m-5 border">
            <h3 className='header m-2'><span class="border-bottom row border-3 p-1 fs-1">What Did You See?</span></h3>
            <label className="fs-4 fw-bold p-2" for="newObservation">Name of Animal or Insect:</label>
              <Input type="text" className="form-control fs-5" id="newObservation" placeholder="Name of Animal or Insect" onChange={(e) => setNewObservation(e.target.value)} required></Input><br></br>
            <label className="fs-4 fw-bold p-2">Classification: </label>
            <label className="radio me-2 fs-5"><br></br>
              <Input className="me-2" id="button1" type="radio" name="classoptradio" value="Mammal" onChange={(e) => setNewClassification(e.target.value)} checked /> Mammal
            </label>
            <label className="radio me-2 fs-5">
              <Input className="me-2" id="button2" type="radio" name="classoptradio" value="Reptile" onChange={(e) => setNewClassification(e.target.value)}/> Reptile
            </label>
            <label className="radio me-2 fs-5">
              <Input className="me-2" id="button3" type="radio" name="classoptradio" value="Amphibian" onChange={(e) => setNewClassification(e.target.value)}/> Amphibian
            </label>
            <label className="radio me-2 fs-5">
              <Input className="me-2" id="button4" type="radio" name="classoptradio" value="Bird" onChange={(e) => setNewClassification(e.target.value)}/> Bird
            </label>
            <label className="radio me-2 fs-5">
              <Input className="me-2" id="button5" type="radio" name="classoptradio" value="Bug, Insect or Spider" onChange={(e) => setNewClassification(e.target.value)}/> Bug, Insect or Spider
            </label><br></br><br></br>
            {/* <input onChange={(e) => setNewClassification(e.target.value)}></input><br></br> */}
            <label className="fs-4 fw-bold p-2" for="newLocation">Observation Location:</label>
              <Input type="text" className="form-control fs-5" id="newLocation" placeholder="City, State" requireonChange={(e) => setNewLocation(e.target.value)} required ></Input><br></br>
            <label class="fs-4 fw-bold p-2">Type of Location: </label> <br></br>
              <Input type="text" className="form-control fs-5" id="newLocation" placeholder="Ex: Field, Mountain, Sky, Ocean" onChange={(e) => setNewLocationType(e.target.value)}></Input><br></br>
            <label className="fs-4 fw-bold p-2" for="newDate">Observation Date:</label>
              <Input className="form-control" id="newDate" type="Date" required onChange={(e) => setNewDate(e.target.value)}></Input><br></br>
            <label className="fs-4 fw-bold p-2">Time of Day: </label> 
              <Input type="text" class="form-control fs-5" id="newTimeOfDay" placeholder="Ex: Morning, Afternoon, Evening, Night" onChange={(e) => setNewTimeOfDay(e.target.value)} required></Input>
            <Button className='btn btn-sm new-btn border border-3 rounded-pill m-4 p-3 fw-bolder text-white fs-5 secondary' id="submitObservation" onClick={(e) => postNewObservation(e)}> Add Observation to Your Field Notes</Button>
          </Form>
          <br></br>    
         </div>
    )
  }

  
  