import React from "react";


export default function ObservationTable(props) {
  return (
    {observations.map((observation, index) => {
      <div className="mapContainer" key={index}>
      <div>
        <button onClick={() => updateObservation(observation.id)}>Edit </button>
        Observation: {observation.observation} <br></br>
        Classification: {observation.classification} <br></br>
        Location: {observation.location} <br></br>
        Location Type: {observation.locationType} <br></br>
        Date: {observation.date} <br></br>
        Time Of Day: {observation.timeofday} <br></br>
        <button onClick={() => deleteObservation(observation.id)}>🗑</button>
      </div>
    }
  )
}

  //   return (
  //     <div className="observation-table">
  //       {props.observations.map((observation, index) => (
  //         <p className="review-form-info text-center mt-2" key={index}>
  //       </p>
  //       ))}
  //     </div>
  //   );
  // }

  
  
// From older CRUD and field app app

//   $.get(fieldNotes_URL).then((data) =>
//   data.map((observation) => {
//     $('tbody').append(
//       $(`
//     <tr>
//       <td><button id="edit" onclick="updateObservation(${observation.id})">✐</button></td>
//       <td>${observation.observationName}</td>
//       <td>${observation.classification}</td>
//       <td>${observation.location}</td>
//       <td>${observation.locationType}</td> 
//       <td>${observation.date}</td>
//       <td>${observation.timeOfDay}</td>
//       <td>
//         <button onclick="deleteObservation(${observation.id})"}>🗑</button>
//       </td>
//     </tr>
//     `)
//     )
//   })
// )