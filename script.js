// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo, myFetch } = require("./scriptHelper.js");



window.addEventListener("load", function() {

    let list = document.getElementById('faultyItems');

    let form = document.querySelector("form");
    form.setAttribute('onsubmit', 'return false');
    form.addEventListener("submit", function(event){
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
       
    })

   
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
 
});