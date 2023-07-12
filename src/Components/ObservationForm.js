


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
         </div>
    )
  }

  // html form from week 10 with the radio buttons I want to add to this, if possible
  //                <form>
  //                       <h3 class='header m-2'><span class="border-bottom row border-3 p-1 fs-1">What Did You See?</span></h3>
  //                       <div class='taskForm form-group m-4 fs-4'>
  //                           <div>
  //                               <label class="mb-2 fw-bold" for="newObservation">Name of Animal or Insect:</label>
  //                               <input type="text" class="form-control fs-5" id="newObservation" placeholder="Name of Animal or Insect" />
  //                           </div>
  //                           <div>
  //                               <label class="mt-3 mb-2 fw-bold">Classifcation: </label><br>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="button1" type="radio" name="classoptradio" value="Mammal" checked /> Mammal
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="button2" type="radio" name="classoptradio" value="Reptile" /> Reptile
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="button3" type="radio" name="classoptradio" value="Amphibian" /> Amphibian
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="button4" type="radio" name="classoptradio" value="Bird" /> Bird
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="button5" type="radio" name="classoptradio" value="Bug, Insect or Spider" /> Bug, Insect or Spider
  //                               </label>
  //                          </div>
  //                           <div>
  //                               <label class="mt-2 mb-2 fw-bold" for="newLocation">Location Observed:</label>
  //                               <input type="text" class="form-control fs-5" id="newLocation" placeholder="City, State"/>
  //                           </div>
  //                           <div>
  //                               <label class="mt-3 mb-2 fw-bold">Type of Location: </label><br>
  //                               <label class="radio fs-5">
  //                                   <input class="m-1" id="radioButton1" type="radio" name="locationoptradio" value="Desert" checked /> Desert
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-1" id="radioButton2" type="radio" name="locationoptradio" value="Field or Meadow" /> Field or Meadow
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-1" id="radioButton3" type="radio" name="locationoptradio" value="Forest or Woods" /> Forest or Woods
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-1" id="radioButton4" type="radio" name="locationoptradio" value="Hill or Mountain" /> Hill or Mountain
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="radioButton5" type="radio" name="locationoptradio" value="Pond, Lake, or River" /> Pond, Lake, or River
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="radioButton6" type="radio" name="locationoptradio" value="Ocean" /> Ocean
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-1" id="radioButton7" type="radio" name="locationoptradio" value="Beach" /> Beach
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-1" id="radioButton8" type="radio" name="locationoptradio" value="Sky" /> Sky
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-1" id="radioButton9" type="radio" name="locationoptradio" value="Neighborhood or City" /> Neighborhood or City 
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-1" id="radioButton10" type="radio" name="locationoptradio"  value="State or National Park" /> State or National Park
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-1" id="radioButton11" type="radio" name="locationoptradio" value="Zoological Society" /> Zoological Society
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="radioButton11" type="radio" name="locationoptradio" value="Other" /> Other 
  //                                   <!-- <input type="text" class="form fs-6 fst-italic" id="newLocation" placeholder="Describe Location"/> -->
  //                               </label>
  //                           </div>
  //                           <div>
  //                               <label class="mt-3 mb-2 fw-bold" for="newDate">Observation Date:</label>
  //                               <input class="form-control" id="newDate" type="Date" />
  //                           </div>
  //                           <div>
  //                               <label class="mt-2 mb-2 fw-bold">Time of Day: </label><br>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="daybutton1" type="radio" name="timeoptradio" value="Morning" checked /> Morning
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="daybutton2" type="radio" name="timeoptradio" value="Day" /> Day
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2"id="daybutton3" type="radio" name="timeoptradio" value="Evening" /> Evening
  //                               </label>
  //                               <label class="radio fs-5">
  //                                   <input class="m-2" id="daybutton4" type="radio" name="timeoptradio" value="Night" /> Night
  //                               </label>
  //                          </div>
  //                       </div>
  //                           <div class="">
  //                           <button class='btn btn-sm new-btn border border-3 rounded-pill ms-4 mb-4 p-2.5 fw-bolder text-white fs-5' onclick="addObservation()" id="submitObservation">Add Observation To Your Field Notes</button>
  //                           </div>
  //                       </div>
  //                   </form>
  