const ERR = document.getElementById('err');

/* updateDOM function takes in input (string value) and id (to determine DOM location to update) 
and creates and updates DOM elements*/

function updateDOM(input, id) {
    const divEl = document.querySelector(id);
    const p = document.createElement('p');
    p.textContent = input;
    divEl.appendChild(p);
}

/* trackMPGandCost function takes in miles, gallons and price and calculates MPG and tripCost and 
returns an object */

function trackMPGandCost(miles, gallons, price) {
    const MPG = Math.round(miles / gallons);
    const tripCost = Math.round(gallons * price);
    //updateDOM(`Miles per gallon  is ${MPG} and trip cost is ${tripCost}`, '#output');
    return {
        miles: miles,
        gallons: gallons,
        price: price,
        MPG: MPG,
        tripCost: tripCost,
    };
}

/* calculateAvg function loops over the MY_DATA to determine average MPG and Trip Cost
*/

function calculateAvg(MY_DATA) {
    const numberOfObj = MY_DATA.length;
    let sumMPG = 0;
    let sumTripCost = 0;
    MY_DATA.forEach(obj => {
        sumMPG += obj.MPG;
        sumTripCost += obj.tripCost;
    });
    const avgMPG = Math.round(sumMPG / numberOfObj);
    const avgTripCost = Math.round(sumTripCost / numberOfObj);
    updateDOM(`Average MPG is ${avgMPG}`, '#output-avg');
    updateDOM(`Average Trip Cost is ${avgTripCost}`, '#output-avg');
}

/* isFormValid takes in miles, gallons and price and does simple validation and 
returns boolean or truthy value back to eventlisteners */

function isFormValid(miles, gallons, price) {
    const errMsg = [];
    if (miles === 0 || gallons === 0 || price === 0) {
        errMsg.push('Make sure your input value greater than 0!!, Try Again');
    }
    if (price > 1000) {
        errMsg.push('Really!!!?? I think this is in error...Try again');
    }
    if (errMsg.length > 0) {
        ERR.textContent = errMsg;
    } else {
        return true;
    }
}

export {isFormValid, calculateAvg, trackMPGandCost}