'use strict'

console.log('loads of eventLIsteners will go on here')

//create an instance from each submit
// push all instances into an array and
// save each instance in a local storage

// const name = document.getElementById("name")
// const jlocation = document.getElementById("location")
// const destination = document.getElementById("destination")
// const date = document.getElementById("date")
// const vehicle = document.getElementById("vehicle")
// const telephone = document.getElementById("telephone")
// const submit = document.getElementById("submit")

const containerForms = document.getElementById("containerForms");

let allForm = [];


function Find(findName,findLocation,findDestination,findDate,findVehicle,findTelephone){
    this.findName = findName,
    this.findLocation = findLocation,
    this.findDestination = findDestination,
    this.findDate = findDate,
    this.findvehicle = findVehicle,
    this.findTelephone = findTelephone,
    allForm.push(this)
};


containerForms.addEventListener("submit",function store(event){
    console.log('Oh I work')
    event.preventDefault();

    getForms()

    const storeName = event.target.name.value
    const storeLocation = event.target.location.value
    const storeDestination = event.target.destination.value
    const storeDate = event.target.date.value
    const storeVehicle = event.target.vehicle.value
    const storeTelephone = event.target.telephone.value

    const storedForm = new Find(storeName,storeLocation,storeDestination,storeDate,storeVehicle,storeTelephone)

    console.log(storedForm);

    console.log(allForm)


    setForms()

     
    containerForms.reset();
});


function getForms(){
    const retrieve = JSON.parse(localStorage.getItem("allForms"));
    if(retrieve){
        allForm = retrieve
    }
    
    console.log(retrieve)

}

function setForms(){

    localStorage.setItem("allForms",JSON.stringify(allForm))
}