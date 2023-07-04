'use strict '

console.log('search through the eventListener here')

// search through the localStorage with both location and destination

// use the same form location for both the destination search and location

const rideContainerForm = document.getElementById("rideContainerForm")

const render = document.getElementById("rideContainer")


const journeys = JSON.parse(localStorage.getItem("allForms"))
console.log(journeys[0].findName)


rideContainerForm.addEventListener("submit", function compare(event){
    console.log("do i even work")

    // const journeys = JSON.parse(localStorage.getItem("allForms"))
    // console.log(journeys)

    // const searchedLocation = event.target.destination.value
    // console.log(searchedLocation)

    // if (serchedLocation === journeys.destination.lower )

    // const ul = document.createElement("ul")
    // render.appendChild(ul)

    // for(i=0; i< ){}

    // const li = documnet.createElement("li")
    // li

})


    // if (serchedLocation = )
