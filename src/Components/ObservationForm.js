


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