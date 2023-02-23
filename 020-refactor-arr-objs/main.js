const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

// const MY_MPG = []
// const MY_TRIP_COST = []

const MY_DATA = []

const updateDOM = (input, id) => {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (obj) => {
    const MPG  = Math.round(obj.miles/obj.gallons)
    const tripCost = Math.round(obj.gallons * obj.price)
    updateDOM(`Miles per gallon  is ${MPG} and trip cost is ${tripCost}`, '#output')
    obj.MPG = MPG
    obj.tripCost = tripCost
    // MY_MPG.push(MPG)
    // MY_TRIP_COST.push(tripCost)
    return obj
}

// const calculateSUM = (arr) => {
//     let sum = 0
//     for(value of arr) {
//        sum += value
//     }
//     return sum
// }

const calculateAvg = () => {
    let sumMPG  = 0
    let sumTripCost = 0  
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG
        sumTripCost += obj.tripCost
    })
    //let sumMPG = calculateSUM(MY_MPG)
    //let sumTripCost = calculateSUM(MY_TRIP_COST)
    let avgMPG = Math.round(sumMPG/MY_DATA.length)
    let avgTripCost = Math.round(sumTripCost/MY_DATA.length)
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-avg')
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const errMsg = []
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    if(miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure your input value greater than 0!!, Try Again')
    }
    if(price > 1000) {
        errMsg.push('Really!!!?? I think this is in error...Try again')
    }
    if(errMsg.length > 0) {
        ERR.textContent = errMsg
    } else {
        const newDataObj = {
            miles: miles,
            gallons: gallons,
            price: price
        }
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        const updatedDataObj = trackMPGandCost(newDataObj)
        MY_DATA.push(updatedDataObj)
        calculateAvg() 
       
    }
    FORM.reset()
    
})


