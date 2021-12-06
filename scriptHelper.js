// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let missionTarget = document.getElementById('missionTarget');
   // Here is the HTML formatting for our mission target div.
   
   missionTarget.innerHTML =
   `        <div>
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons}</li>
                </ol>
                <img src="${imageUrl}">

            </div> `;
                
   
}

function validateInput(testInput) {
   let numberInput = Number(testInput);
    if(testInput === ""){
        return "Empty";
    }else if(isNaN(numberInput)){
        return "Not a Number";
    }else if(isNaN(numberInput) === false) {

        return "Is a Number";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    //  let faultyItems = document.getElementById('faultyItems');
    let pilotStatus = document.getElementById('pilotStatus')
    let copilotStatus = document.getElementById('copilotStatus')
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus');

    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
     alert("All fields are required!");       
     event.preventDefault();
     faultyItems.style.visibility = 'hidden';
    }else if(validateInput(pilot) === "Is a Number"){
     alert("Please enter text for the pilot's name!")
     event.preventDefault();
     faultyItems.style.visibility = 'hidden';
    }else if((validateInput(copilot)) === "Is a Number"){
     alert("Please enter text for the copilot's name!")
     event.preventDefault();
     faultyItems.style.visibility = 'hidden';
    }else if(validateInput(fuelLevel) === "Not a Number"){
     alert("Please enter a number for the fuel level!")
     event.preventDefault();
     faultyItems.style.visibility = 'hidden';
    }else if(validateInput(cargoLevel) === "Not a Number"){
     alert("Please enter a number for the cargoMass!")
     event.preventDefault();
     faultyItems.style.visibility = 'hidden';
    }else{
        list.style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
        if (fuelLevel < 10000){
            fuelStatus.innerText = 'There is not enough fuel for this journey'
            launchStatus.innerHTML = '<h2>Shuttle not ready for launch</h2>'
            launchStatus.style.color = 'red';
        }else if(cargoLevel > 10000){
            cargoStatus.innerText = "There is too much mass for the shuttle to take off";
            launchStatus.innerHTML = '<h2>Shuttle not ready for launch</h2>'
            launchStatus.style.color = 'red';
        }else if(fuelLevel >= 10000 && cargoLevel <= 10000){
            launchStatus.innerHTML = '<h2>Shuttle is ready for launch</h2>'
            launchStatus.style.color = 'green';
         }
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         return response.json().then(function(json){
            return json;
        });
        

        });

    return planetsReturned;
}

function pickPlanet(planetsReturned) {
    let index = Math.floor(Math.random() * planetsReturned.length)
    return planetsReturned[index];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;