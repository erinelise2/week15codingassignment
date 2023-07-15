import React from "react";

export default function FieldGuide(props) {
    return (
      <div className="observation-table">
        <table>
                <tr>
                    <th>Edit</th>
                    <th>Observation</th>
                    <th>Classifcation</th>
                    <th>Location</th>
                    <th>Location Type</th>
                    <th>Date</th>
                    <th>Time Of Day</th>
                    <th>Remove</th>
                </tr>
                {observations.map((observation, key) => {
                    return (
                        <tr key={key}>
                            <td><button>Edit</button></td>
                            <td>{observation.observation}</td>
                            <td>{observation.classification}</td>
                            <td>{observation.location}</td>
                            <td>{observation.locationType}</td>
                            <td>{observation.date}</td>
                            <td>{observation.timeofday}</td>
                            <td><button onClick={() => deleteObservation(observation.id)}>🗑</button></td>
                        </tr>
                    )
                })}
            </table>
        {/* {props.observations.map((observation, index) => (
          <p className="review-form-info text-center mt-2" key={index}>

          </p>
          
        ))} */}
      </div>
    );
  }

