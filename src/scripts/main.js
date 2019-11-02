console.log("we good")


//*Car Stuff

// const allCars = [
//     {
//         model: "Mustang",
//         color: "Midnight Blue",
//         year: 1976,
//         length: 120,
//         width: 62,
//         height: 47
//     },
//     {
//         model: "Xterra",
//         color: "Forest Green",
//         year: 2011,
//         length: 144,
//         width: 71,
//         height: 55
//     },
//     {
//         model: "Thunderbird",
//         color: "Red",
//         year: 2005,
//         length: 115,
//         width: 58,
//         height: 42
//     },
//     {
//         model: "Suburban",
//         color: "Grey",
//         year: 2015,
//         length: 149,
//         width: 73,
//         height: 58
//     }
// ]

// outputElement = document.querySelector("#app")

// outputElement.innerHTML += "<h1>Car List</h1>"

// allCars.forEach(car => {
//     outputElement.innerHTML += "<hr/>"

//     for (const entry of Object.entries(car)) {
//         outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
//     }
// })


//*Doctor Stuff

// const outputElement = document.querySelector("#doctor")

// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"

// const doctorBillObject = {
//     officeName: "Jim's Doctor Stuff",
//     streetAddress: "100 Street St.",
//     doctorName: "Jim Doctor",
//     patientName: "Jeff Patient",
//     visitDate: "2019-11-4",
//     amountBilled: 2.50,
//     dueDate: "2019-12-1"
// }

// console.log(doctorBillObject[dateVisited], doctorBillObject[owed], doctorBillObject[patient])

// outputElement.innerHTML += `<h1>Properties</h1>`

// for (const key of Object.keys(doctorBillObject)) {
//     outputElement.innerHTML += `<span>${key}</span>`
// }

// outputElement.innerHTML += `<h1>Bill Info</h1>`

// for (const value of Object.values(doctorBillObject)) {
//     outputElement.innerHTML += `<div>${value}</div>`
// }

const outputElement = document.querySelector("#food")

const favFood = {
    name: "Fish 'n Chips",
    size: "Large",
    weight: 2.5,
    ethnicity: "England",
    vegetarian: false
}

for (const entry of Object.entries(favFood)) {
    outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
}