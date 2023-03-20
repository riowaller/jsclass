const FORM = document.getElementById('form-input');

const updateDOM = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};


function calTimeAvailable(myTurnToDrive, timeBeforeGym) {
  if (myTurnToDrive) {
    return timeBeforeGym - 0.25;
  } else {
    return timeBeforeGym - 0.15;
  }
}

function outputDecision(obj) {
  updateDOM(
    "<b>This output is based on the following global variable data:</b>"
  );
  updateDOM(`Current Time -----------> ${obj.currentTime}`);
  updateDOM(`Gym time ---------------> ${obj.gymClassStartTime}`);
  updateDOM(`Time Before Gym --------> ${obj.timeBeforeGym}`);
  updateDOM(`myTurntoDrive ----------> ${obj.myTurnToDrive}`);
  updateDOM(`unplannedEvent ---------> ${obj.unplannedEvent}`);
  updateDOM(`<--- End of global variable data --->`);
  updateDOM("<b>Morning Tasks</b>");
  updateDOM("___________________");
  updateDOM(obj.list);
  updateDOM(obj.message);
}

function determineMorningTasks(
  unplannedEvent,
  myTurnToDrive,
  gymClassStartTime,
  currentTime
) {
  const list = ["Drink Morning Tea"];
  let message = "";
  const timeBeforeGym = gymClassStartTime - currentTime;
  const availableTime = calTimeAvailable(myTurnToDrive, timeBeforeGym);
  if (unplannedEvent) {
    list.push("Check Time");
    message = "Unplanned event happen, just get back on track tomorrow";
  } else if (availableTime >= 1.5) {
    list.push("Mediate", "Get Morning Sun", "Make Green Drink");
    message = "Love getting up early!";
  } else if (availableTime >= 0.7 && availableTime <= 1.4) {
    list.push("Mediate", "Get Morning Sun");
    message = "That green drink will taste so good after the workout!";
  } else {
    list.push("Mediate");
    message = "Mediation is important!";
  }
  const decisionObj = {
    unplannedEvent: unplannedEvent,
    myTurnToDrive: myTurnToDrive,
    gymClassStartTime: gymClassStartTime,
    availableTime: availableTime,
    timeBeforeGym: timeBeforeGym,
    currentTime: currentTime,
    list: list,
    message: message,
  };
  //outputDecision(decisionObj);
}
// display list and message on the webpage

determineMorningTasks(false, true, 8, 7);
determineMorningTasks(true, false, 8, 6.5);
determineMorningTasks(false, false, 9, 7.5);


FORM.addEventListener('submit', function(e) {
  e.preventDefault()
  const currentTime = FORM.elements.currentTime.value;
  const gymClassStartTime = FORM.elements.gymTime.value;
  const myTurnToDrive = FORM.elements.myTurnToDrive.checked;
  const unplannedEvent = FORM.elements.unplannedEvent.checked;
  const day = FORM.elements.day.value;
  const inputObj  = {
    currentTime: currentTime,
    gymClassStartTime: gymClassStartTime,
    myTurnToDrive: myTurnToDrive,
    unplannedEvent: unplannedEvent,
    day: day
  }
  console.log(inputObj)
})