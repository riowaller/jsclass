const FORM = document.getElementById('form-input')
const ERR = document.getElementById('err')
const AVG_OUTPUT = document.getElementById('output-avg')

const MY_DATA = []

const updateDOM = (input, id) => {
    const divEl = document.querySelector(id)
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const trackMPGandCost = (miles, gallons, price) => {
    const MPG  = Math.round(miles/gallons)
    const tripCost = Math.round(gallons * price)
    updateDOM(`Miles per gallon  is ${MPG} and trip cost is ${tripCost}`, '#output')
    return {
        MPG: MPG, 
        tripCost: tripCost,
        miles: miles,
        gallons: gallons,
        price: price
    }
    
}

const calculateAvg = () => {
    const numberOfObj = MY_DATA.length
    let sumMPG  = 0
    let sumTripCost = 0  
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG
        sumTripCost += obj.tripCost
    })
    const avgMPG = Math.round(sumMPG/numberOfObj)
    const avgTripCost = Math.round(sumTripCost/numberOfObj)
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg')
    updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-avg')
}

const isFormValid = (miles, gallons, price) => {
    const errMsg = []
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure your input value greater than 0!!, Try Again')
    }
    if (price > 1000) {
        errMsg.push('Really!!!?? I think this is in error...Try again')
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg
        return false
    } else {
        return true
    }
}


FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const miles = parseInt(e.target.miles.value)
    const gallons = parseInt(e.target.gallons.value)
    const price = parseInt(e.target.price.value)
    const isValid = isFormValid(miles, gallons, price)
    if(isValid) {
        ERR.textContent = ''
        AVG_OUTPUT.textContent = ''
        const dataObj = trackMPGandCost(miles, gallons, price)
        MY_DATA.push(dataObj)
        calculateAvg()
    }
    FORM.reset()  
})
