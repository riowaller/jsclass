// My Daily Decision
// One of the most common things I do it figure out what I can get done before
// heading to the gym for my workout.

const updateDOM = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

// determine available time based on if I am driving or getting a ride
function calTimeAvail(myTurnToDrive, timeBeforeGym) {
  if (myTurnToDrive) {
    return timeBeforeGym - 0.25;
  } else {
    return timeBeforeGym - 0.15;
  }
}

function outputDecisionData(obj) {
  updateDOM(
    '<b>This output is based on the following variable data:</b>'
  );
  updateDOM(`Current Time -----------> ${obj.currentTime}`);
  updateDOM(`Gym time ---------------> ${obj.gymClassStartTime}`);
  updateDOM(`Time Before Gym --------> ${obj.timeBeforeGym}`);
  updateDOM(`Time Available ---------> ${obj.availableTime}`); 
  updateDOM(`myTurntoDrive ----------> ${obj.myTurnToDrive}`);
  updateDOM(`unplannedEvent ---------> ${obj.unplannedEvent}`);
  updateDOM(`<--- End of global variable data --->`);
  updateDOM(`<b>Morning Tasks</b>`);
  updateDOM(obj.list);
  updateDOM(obj.message);
  updateDOM(`<--- End of decision output --->`);
  updateDOM(`<------------------------------>`);
  
}

// logic for determining what things I can before the gym
function determineMorningTasks(myTurnToDrive, unplannedEvent, currentTime, gymClassStartTime) {
  const timeBeforeGym = gymClassStartTime - currentTime;
  const availableTime = calTimeAvail(myTurnToDrive, timeBeforeGym);
  let message = '';
  let list = ['Drink Morning Tea'];
  if (unplannedEvent) {
    list.push('Check Time');
    message = 'Unplanned event happen, just get back on track tomorrow';
  } else if (availableTime >= 1.6) {
    list.push('Mediate', 'Get Morning Sun','Make Green Drink');
    message = 'Love getting up early!';
  } else if (availableTime >= 0.7 && availableTime <= 1.4) {
    list.push('Mediate', 'Get Morning Sun')
    message = 'That green drink will taste so good after the workout!';
  } else {
    list.push('Mediate')
    message = 'Mediation is important!';
  }
  const decisionObj = {
    myTurnToDrive: myTurnToDrive,
    unplannedEvent: unplannedEvent,
    currentTime: currentTime,
    gymClassStartTime: gymClassStartTime,
    availableTime: availableTime,
    timeBeforeGym: timeBeforeGym,
    list: list,
    message: message
  }
  outputDecisionData(decisionObj)
}

determineMorningTasks(true, false, 7, 8)
determineMorningTasks(false, false, 7, 8)
determineMorningTasks(false, false, 6.3, 8)
determineMorningTasks(true, true, 6, 8)