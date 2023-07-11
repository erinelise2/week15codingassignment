import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const API_URL = 
  "https://64ad6821b470006a5ec5e9e5.mockapi.io/fieldguide"
  const [observations, setObservations] = useState([])

  const [newObservation, setNewObservation] = useState('')
  const [newClassification, setNewClassification] = useState('')
  const [newLocation, setNewLocation] = useState('')
  const [newLocationType, setNewLocationType] = useState('')
  const [newDate, setNewDate] = useState('')
  const [newTimeOfDay, setNewTimeOfDay] = useState('')

  const [updatedObservation, setUpdatedObservation] = useState('')
  const [updatedClassification, setUpdatedClassification] = useState('')
  const [upatedLocation, setUpdatedLocation] = useState('')
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
  }

  function updateObservation(e, observationObject) {
    e.preventDefault()

    let updatedObservationObject = {
      ...observationObject,
      observation: updatedObservation,
      classification: updatedClassification,
      location: upatedLocation,
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
  }

  return (
    <div className="App">
      <form>
        <h3>New Observation Form</h3>
        <label>Observation</label>
        <input onChange={(e) => setNewObservation(e.target.value)}></input><br></br>
        <label>Classification</label>
        <input onChange={(e) => setNewClassification(e.target.value)}></input><br></br>
        <label>Location</label>
        <input onChange={(e) => setNewLocation(e.target.value)}></input><br></br>
        <label>Location Type</label>
        <input onChange={(e) => setNewLocationType(e.target.value)}></input><br></br>
        <label>Date</label>
        <input onChange={(e) => setNewDate(e.target.value)}></input><br></br>
        <label>Time of Day</label>
        <input onChange={(e) => setNewTimeOfDay(e.target.value)}></input><br></br>
        <button onClick={(e) => postNewObservation(e)}>Submit</button>
      </form>
      <br></br>

      {observations.map((observation, index) => (
        <div className="mapContainer" key={index}>
          <div>
            Observation: {observation.observation} <br></br>
            Classification: {observation.classification} <br></br>
            Location: {observation.location} <br></br>
            Location Type: {observation.locationType} <br></br>
            Date: {observation.date} <br></br>
            Time Of Day: {observation.timeofday} <br></br>
            <button onClick={() => deleteObservation(observation.id)}>🗑</button>
          </div>
          <form>
            <label>Edit Observation</label>
            <input
              onChange={(e) => setUpdatedObservation(e.target.value)}
            ></input>
            <br></br>
            <label>Edit Classification</label>
            <input
              onChange={(e) => setUpdatedClassification(e.target.value)}
            ></input>
            <br></br>
            <label>Edit Location</label>
            <input
              onChange={(e) => setUpdatedLocation(e.target.value)}
            ></input>
            <br></br>
            <label>Edit Location Type</label>
            <input
              onChange={(e) => setUpdatedLocationType(e.target.value)}
            ></input>
            <br></br>
            <label>Edit Date</label>
            <input
              onChange={(e) => setUpdatedDate(e.target.value)}
            ></input>
            <br></br>
            <label>Edit Time Of Day</label>
            <input
              onChange={(e) => setUpdatedTimeOfDay(e.target.value)}
            ></input>
            <br></br>
            <button onClick={(e) => updateObservation(e, observation)}>Update</button>
          </form>
        </div>
      ))}
    </div>
  )
}


export default App;
