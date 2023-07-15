

const [updatedObservation, setUpdatedObservation] = useState('')
const [updatedClassification, setUpdatedClassification] = useState('')
const [upatedLocation, setUpdatedLocation] = useState('')
const [updatedLocationType, setUpdatedLocationType] = useState('')
const [updatedDate, setUpdatedDate] = useState('')
const [updatedTimeOfDay, setUpdatedTimeOfDay] = useState('')

export default function updateObservation(e, observationObject) {
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
    .catch((error) => {
      console.log(error)
    }
  )
  }