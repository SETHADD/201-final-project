'use strict '

console.log('search through the eventListener here')

// search through the localStorage with both location and destination

// use the same form location for both the destination search and location

const rideContainerForm = document.getElementById("rideContainerForm")

const render = document.getElementById("rideContainer")


const journeys = JSON.parse(localStorage.getItem("allForms"))

console.log(journeys[0].findName)
console.log(journeys[0])




rideContainerForm.addEventListener("submit", function compare(event){
    event.preventDefault();
    console.log("do i even work")

    const journeys = JSON.parse(localStorage.getItem("allForms"))
    console.log(journeys)

    const searchedLocation = event.target.destination.value.toLowerCase()
    console.log(searchedLocation)

actualRender(searchedLocation)


rideContainerForm.reset()

})


function actualRender(searchedLocation){
    render.innerHTML= ""
    const ul = document.createElement("ul")
    render.appendChild(ul)

    let tripsFound = false
    for(let i=0; i< journeys.length; i++ ){
        if (searchedLocation === journeys[i].findDestination || searchedLocation === journeys[i].findLocation ){

            const li = document.createElement("li")
            li.textContent =  `NAME: ${journeys[i].findName}  DESTINATION: ${journeys[i].findDestination}   CURRENT-LOCATION: ${journeys[i].findLocation}  VEHICLE-TYPE: ${journeys[i].findVehicle}  TRAVEL-DATE: ${journeys[i].findDate}  TEL-NUMBER:`
            ul.appendChild(li)

            const a = document.createElement("a")
            a.setAttribute("href",`tel:${journeys[i].findTelephone}`)
            a.setAttribute("target","_blank")
            a.textContent = journeys[i].findTelephone
            li.appendChild(a)

            tripsFound = true
        } 

    }   
    if(!tripsFound){
        alert(`Sorry! we have no trips to ${searchedLocation}`)
    }


}

