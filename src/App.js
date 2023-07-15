import React from "react";
import './App.css';
import {useEffect, useState} from 'react'
import { Button, Form, Input, Label } from "reactstrap";
// import Navigation from "./Components/Navigation";
// import FieldGuide from "./Components/FieldGuide";
// import { useTable } from 'react-table';

function App() {
  const API_URL = 
  "https://64ad6821b470006a5ec5e9e5.mockapi.io/fieldguide/observation"
  const [observations, setObservations] = useState([])

  const [newObservation, setNewObservation] = useState('')
  const [newClassification, setNewClassification] = useState('')
  const [newLocation, setNewLocation] = useState('')
  const [newLocationType, setNewLocationType] = useState('')
  const [newDate, setNewDate] = useState('')
  const [newTimeOfDay, setNewTimeOfDay] = useState('')

  const [updatedObservation, setUpdatedObservation] = useState('')
  const [updatedClassification, setUpdatedClassification] = useState('')
  const [updatedLocation, setUpdatedLocation] = useState('')
  const [updatedLocationType, setUpdatedLocationType] = useState('')
  const [updatedDate, setUpdatedDate] = useState('')
  const [updatedTimeOfDay, setUpdatedTimeOfDay] = useState('')

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

  function updateObservation(e, observationObject) {
    e.preventDefault()
    let updatedObservationObject = {
      ...observationObject,
      observation: updatedObservation,
      classification: updatedClassification,
      location: updatedLocation,
      locationtype: updatedLocationType,
      date: updatedDate,
      timeofday: updatedTimeOfDay,
    }

    fetch(`${API_URL}/${observationObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedObservationObject),
    }).then(() => getObservations())
    .catch((error) => {
      console.log(error)
    }
  )
  }
// return (
{/* <div>
  <Navigation />
  <NewObservationForm clickAdd={postNewObservation} />
  <FieldGuide />
</div>
) */}
  return (    
    <div className="form-container App">
          <Form className="m-5 border">
            <h3 className='header m-2'><span class="border-bottom row border-3 p-1 fs-1">What Did You See?</span></h3>
            <Label className="fs-4 fw-bold p-2" for="newObservation">Name of Animal or Insect:</Label>
              <Input type="text" className="fs-5" id="newObservation" placeholder="Name of Animal or Insect" onChange={(e) => setNewObservation(e.target.value)} required></Input><br></br>
            <Label className="fs-4 fw-bold p-2">Classification: </Label>
            <Input
              type="text" className="fs-5" id="newClassification" placeholder="Ex: Mammal, Reptile, Bird, Insect" onChange={(e) => setNewClassification(e.target.value)}
            ></Input>
            
            {/* <Input onChange={(e) => setNewClassification(e.target.value)}></Input><br></br> */}
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
      <br></br>

      {observations.map((observation, index) => (
        <div className="mapContainer" key={index}>
          <div>
            <table className="container table border p-2 fs-3">
              <td><Button className='btn btn-sm new-btn border border-1 fw-bolder text-white fs-5 secondary' onClick=""> Edit </Button></td>
              <td>{observation.observation}</td>
              <td>{observation.classification}</td>
              <td>{observation.location}</td>
              <td>{observation.locationtype}</td>
              <td>{observation.date}</td>
              <td>{observation.timeofday}</td>
            <Button className='btn btn-sm new-btn border border-1 fw-bolder text-white fs-5 'onClick={() => deleteObservation(observation.id)}>🗑</Button>
            </table>
          </div>
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
        </div>
      ))}
    </div>
  )
}


export default App;