const updateDOM = function (text) {
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById('output');
    outputDiv.append(newParagraph);
  };
  
  // My Daily Decision
  // One of the most common things I do it figure out what I can get done before
  // heading to the gym for my workout.
  
  // set global variables for decision making
  // Time in this code is expressed in the following way: 1.5 would be 1 hour and 30 minutes
  const currentTime = 7;
  const gymClassStartTime = 8;
  let availableTime = 0;
  const timeBeforeGym = gymClassStartTime - currentTime;
  const myTurnToDrive = true;
  const unplannedEvent = false;

  
  // determine available time based on if I am driving or getting a ride
  if (myTurnToDrive) {
    availableTime = timeBeforeGym - 0.25;
  } else {
    availableTime = timeBeforeGym - 0.15;
  }
  
  updateDOM(
    '<b>This output is based on the following global variable data:</b>'
  );
  updateDOM(`Current Time -----------> ${currentTime}`);
  updateDOM(`Gym time ---------------> ${gymClassStartTime}`);
  updateDOM(`Time Before Gym --------> ${timeBeforeGym}`);
  updateDOM(`myTurntoDrive ----------> ${myTurnToDrive}`);
  updateDOM(`unplannedEvent ---------> ${unplannedEvent}`);
  updateDOM(`<--- End of global variable data --->`);
  
  // set variable for output message and list of things to do before gym
  // list always includes tea
  let message = '';
  let list = 'Drink Morning Tea, ';
  
  // display this on webpage
  updateDOM('<b>Morning Tasks</b>');
  updateDOM('___________________');
  
  // logic for determining what things I can before the gym
  
  if (unplannedEvent) {
    list = 'Check Time';
    message = 'Unplanned event happen, just get back on track tomorrow';
  } else if (availableTime >= 1.5) {
    list = 'Mediate, Get Morning Sun, Make Green Drink';
    message = 'Love getting up early!';
  } else if (availableTime >= 0.7 && availableTime <= 1.4) {
    list = 'Mediate, Get Morning Sun';
    message = 'That green drink will taste so good after the workout!';
  } else {
    list = 'Mediate, ';
    message = 'Mediation is important!';
  }
  
  // display list and message on the webpage
  
  updateDOM(list);
  updateDOM(message);
  updateDOM('Have a great day!!');