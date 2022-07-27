/************* 
 * Keys Test *
 *************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Keys';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code
import * as time from 'time';
import {datetime} from 'datetime';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(addCodeRoutineBegin());
flowScheduler.add(addCodeRoutineEachFrame());
flowScheduler.add(addCodeRoutineEnd());
const tr_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(tr_loopLoopBegin(tr_loopLoopScheduler));
flowScheduler.add(tr_loopLoopScheduler);
flowScheduler.add(tr_loopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.2';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var addCodeClock;
var EEGtrialClock;
var Prep;
var Stance;
var Swing;
var Hit;
var Miss;
var End;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "addCode"
  addCodeClock = new util.Clock();
  // Initialize components for Routine "EEGtrial"
  EEGtrialClock = new util.Clock();
  Prep = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Prep',
    text: 'Prep',
    fillColor: 'white',
    borderColor: [(- 1.0), (- 1.0), (- 1.0)],
    color: 'black',
    colorSpace: 'rgb',
    pos: [0, 0.9],
    letterHeight: 0.05,
    size: [1, 0.15]
  });
  Prep.clock = new util.Clock();
  
  Stance = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Stance',
    text: 'Stance',
    fillColor: 'white',
    borderColor: 'black',
    color: 'black',
    colorSpace: 'rgb',
    pos: [0, 0.6],
    letterHeight: 0.05,
    size: [1, 0.15]
  });
  Stance.clock = new util.Clock();
  
  Swing = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Swing',
    text: 'Swing',
    fillColor: 'white',
    borderColor: 'black',
    color: 'black',
    colorSpace: 'rgb',
    pos: [0, 0.3],
    letterHeight: 0.05,
    size: [1, 0.15]
  });
  Swing.clock = new util.Clock();
  
  Hit = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Hit',
    text: 'Hit',
    fillColor: 'green',
    borderColor: 'green',
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.1)],
    letterHeight: 0.05,
    size: [1, 0.15]
  });
  Hit.clock = new util.Clock();
  
  Miss = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Miss',
    text: 'Miss',
    fillColor: 'red',
    borderColor: 'red',
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.4)],
    letterHeight: 0.05,
    size: [1, 0.15]
  });
  Miss.clock = new util.Clock();
  
  End = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'End',
    text: 'End',
    fillColor: 'black',
    borderColor: 'black',
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.7)],
    letterHeight: 0.05,
    size: [1, 0.15]
  });
  End.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var addCodeComponents;
function addCodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'addCode' ---
    t = 0;
    addCodeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    addCodeComponents = [];
    
    for (const thisComponent of addCodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function addCodeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'addCode' ---
    // get current time
    t = addCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of addCodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function addCodeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'addCode' ---
    for (const thisComponent of addCodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "addCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tr_loop;
function tr_loopLoopBegin(tr_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    tr_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 40, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'tr_loop'
    });
    psychoJS.experiment.addLoop(tr_loop); // add the loop to the experiment
    currentLoop = tr_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTr_loop of tr_loop) {
      snapshot = tr_loop.getSnapshot();
      tr_loopLoopScheduler.add(importConditions(snapshot));
      tr_loopLoopScheduler.add(EEGtrialRoutineBegin(snapshot));
      tr_loopLoopScheduler.add(EEGtrialRoutineEachFrame());
      tr_loopLoopScheduler.add(EEGtrialRoutineEnd(snapshot));
      tr_loopLoopScheduler.add(tr_loopLoopEndIteration(tr_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function tr_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(tr_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function tr_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var EEGtrialComponents;
function EEGtrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EEGtrial' ---
    t = 0;
    EEGtrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    EEGtrialComponents = [];
    EEGtrialComponents.push(Prep);
    EEGtrialComponents.push(Stance);
    EEGtrialComponents.push(Swing);
    EEGtrialComponents.push(Hit);
    EEGtrialComponents.push(Miss);
    EEGtrialComponents.push(End);
    
    for (const thisComponent of EEGtrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var endExpNow;
function EEGtrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EEGtrial' ---
    // get current time
    t = EEGtrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Prep* updates
    if (t >= 0 && Prep.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Prep.tStart = t;  // (not accounting for frame time here)
      Prep.frameNStart = frameN;  // exact frame index
      
      Prep.setAutoDraw(true);
    }

    if (Prep.status === PsychoJS.Status.STARTED) {
      // check whether Prep has been pressed
      if (Prep.isClicked) {
        if (!Prep.wasClicked) {
          // store time of first click
          Prep.timesOn.push(Prep.clock.getTime());
          Prep.numClicks += 1;
          // store time clicked until
          Prep.timesOff.push(Prep.clock.getTime());
        } else {
          // update time clicked until;
          Prep.timesOff[Prep.timesOff.length - 1] = Prep.clock.getTime();
        }
        if (!Prep.wasClicked) {
          expInfo["PrepTime"] = core.getAbsTime();
        }
        // if Prep is still clicked next frame, it is not a new click
        Prep.wasClicked = true;
      } else {
        // if Prep is clicked next frame, it is a new click
        Prep.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Prep hasn't started / has finished
      Prep.clock.reset();
      // if Prep is clicked next frame, it is a new click
      Prep.wasClicked = false;
    }
    
    // *Stance* updates
    if (t >= 0 && Stance.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stance.tStart = t;  // (not accounting for frame time here)
      Stance.frameNStart = frameN;  // exact frame index
      
      Stance.setAutoDraw(true);
    }

    if (Stance.status === PsychoJS.Status.STARTED) {
      // check whether Stance has been pressed
      if (Stance.isClicked) {
        if (!Stance.wasClicked) {
          // store time of first click
          Stance.timesOn.push(Stance.clock.getTime());
          Stance.numClicks += 1;
          // store time clicked until
          Stance.timesOff.push(Stance.clock.getTime());
        } else {
          // update time clicked until;
          Stance.timesOff[Stance.timesOff.length - 1] = Stance.clock.getTime();
        }
        if (!Stance.wasClicked) {
          expInfo["StanceTime"] = core.getAbsTime();
        }
        // if Stance is still clicked next frame, it is not a new click
        Stance.wasClicked = true;
      } else {
        // if Stance is clicked next frame, it is a new click
        Stance.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Stance hasn't started / has finished
      Stance.clock.reset();
      // if Stance is clicked next frame, it is a new click
      Stance.wasClicked = false;
    }
    
    // *Swing* updates
    if (t >= 0 && Swing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Swing.tStart = t;  // (not accounting for frame time here)
      Swing.frameNStart = frameN;  // exact frame index
      
      Swing.setAutoDraw(true);
    }

    if (Swing.status === PsychoJS.Status.STARTED) {
      // check whether Swing has been pressed
      if (Swing.isClicked) {
        if (!Swing.wasClicked) {
          // store time of first click
          Swing.timesOn.push(Swing.clock.getTime());
          Swing.numClicks += 1;
          // store time clicked until
          Swing.timesOff.push(Swing.clock.getTime());
        } else {
          // update time clicked until;
          Swing.timesOff[Swing.timesOff.length - 1] = Swing.clock.getTime();
        }
        if (!Swing.wasClicked) {
          expInfo["SwingTime"] = core.getAbsTime();
        }
        // if Swing is still clicked next frame, it is not a new click
        Swing.wasClicked = true;
      } else {
        // if Swing is clicked next frame, it is a new click
        Swing.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Swing hasn't started / has finished
      Swing.clock.reset();
      // if Swing is clicked next frame, it is a new click
      Swing.wasClicked = false;
    }
    
    // *Hit* updates
    if (t >= 0 && Hit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Hit.tStart = t;  // (not accounting for frame time here)
      Hit.frameNStart = frameN;  // exact frame index
      
      Hit.setAutoDraw(true);
    }

    if (Hit.status === PsychoJS.Status.STARTED) {
      // check whether Hit has been pressed
      if (Hit.isClicked) {
        if (!Hit.wasClicked) {
          // store time of first click
          Hit.timesOn.push(Hit.clock.getTime());
          Hit.numClicks += 1;
          // store time clicked until
          Hit.timesOff.push(Hit.clock.getTime());
        } else {
          // update time clicked until;
          Hit.timesOff[Hit.timesOff.length - 1] = Hit.clock.getTime();
        }
        if (!Hit.wasClicked) {
          // end routine when Hit is clicked
          continueRoutine = false;
          expInfo["EvType"] = "Hit";
        }
        // if Hit is still clicked next frame, it is not a new click
        Hit.wasClicked = true;
      } else {
        // if Hit is clicked next frame, it is a new click
        Hit.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Hit hasn't started / has finished
      Hit.clock.reset();
      // if Hit is clicked next frame, it is a new click
      Hit.wasClicked = false;
    }
    
    // *Miss* updates
    if (t >= 0 && Miss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Miss.tStart = t;  // (not accounting for frame time here)
      Miss.frameNStart = frameN;  // exact frame index
      
      Miss.setAutoDraw(true);
    }

    if (Miss.status === PsychoJS.Status.STARTED) {
      // check whether Miss has been pressed
      if (Miss.isClicked) {
        if (!Miss.wasClicked) {
          // store time of first click
          Miss.timesOn.push(Miss.clock.getTime());
          Miss.numClicks += 1;
          // store time clicked until
          Miss.timesOff.push(Miss.clock.getTime());
        } else {
          // update time clicked until;
          Miss.timesOff[Miss.timesOff.length - 1] = Miss.clock.getTime();
        }
        if (!Miss.wasClicked) {
          // end routine when Miss is clicked
          continueRoutine = false;
          expInfo["EvType"] = "Miss";
        }
        // if Miss is still clicked next frame, it is not a new click
        Miss.wasClicked = true;
      } else {
        // if Miss is clicked next frame, it is a new click
        Miss.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Miss hasn't started / has finished
      Miss.clock.reset();
      // if Miss is clicked next frame, it is a new click
      Miss.wasClicked = false;
    }
    
    // *End* updates
    if (t >= 0 && End.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      End.tStart = t;  // (not accounting for frame time here)
      End.frameNStart = frameN;  // exact frame index
      
      End.setAutoDraw(true);
    }

    if (End.status === PsychoJS.Status.STARTED) {
      // check whether End has been pressed
      if (End.isClicked) {
        if (!End.wasClicked) {
          // store time of first click
          End.timesOn.push(End.clock.getTime());
          End.numClicks += 1;
          // store time clicked until
          End.timesOff.push(End.clock.getTime());
        } else {
          // update time clicked until;
          End.timesOff[End.timesOff.length - 1] = End.clock.getTime();
        }
        if (!End.wasClicked) {
          // end routine when End is clicked
          continueRoutine = false;
          endExpNow = true;
        }
        // if End is still clicked next frame, it is not a new click
        End.wasClicked = true;
      } else {
        // if End is clicked next frame, it is a new click
        End.wasClicked = false;
      }
    } else {
      // keep clock at 0 if End hasn't started / has finished
      End.clock.reset();
      // if End is clicked next frame, it is a new click
      End.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EEGtrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EEGtrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EEGtrial' ---
    for (const thisComponent of EEGtrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Prep.numClicks', Prep.numClicks);
    psychoJS.experiment.addData('Prep.timesOn', Prep.timesOn);
    psychoJS.experiment.addData('Prep.timesOff', Prep.timesOff);
    psychoJS.experiment.addData('Stance.numClicks', Stance.numClicks);
    psychoJS.experiment.addData('Stance.timesOn', Stance.timesOn);
    psychoJS.experiment.addData('Stance.timesOff', Stance.timesOff);
    psychoJS.experiment.addData('Swing.numClicks', Swing.numClicks);
    psychoJS.experiment.addData('Swing.timesOn', Swing.timesOn);
    psychoJS.experiment.addData('Swing.timesOff', Swing.timesOff);
    psychoJS.experiment.addData('Hit.numClicks', Hit.numClicks);
    psychoJS.experiment.addData('Hit.timesOn', Hit.timesOn);
    psychoJS.experiment.addData('Hit.timesOff', Hit.timesOff);
    psychoJS.experiment.addData('Miss.numClicks', Miss.numClicks);
    psychoJS.experiment.addData('Miss.timesOn', Miss.timesOn);
    psychoJS.experiment.addData('Miss.timesOff', Miss.timesOff);
    psychoJS.experiment.addData('End.numClicks', End.numClicks);
    psychoJS.experiment.addData('End.timesOn', End.timesOn);
    psychoJS.experiment.addData('End.timesOff', End.timesOff);
    // the Routine "EEGtrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
