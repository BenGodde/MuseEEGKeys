#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.2.2),
    on Juli 27, 2022, at 08:54
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# Run 'Before Experiment' code from code
import time
from datetime import datetime



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.2.2'
expName = 'Keys'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\bgodde\\OneDrive - Jacobs University\\Documents\\Psychopy\\Keys.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1280, 800], fullscr=True, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = False
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "addCode" ---

# --- Initialize components for Routine "EEGtrial" ---
Prep = visual.ButtonStim(win, 
    text='Prep', font='Arvo',
    pos=(0, 0.9),units='norm',
    letterHeight=0.05,
    size=[1,0.15], borderWidth=0.0,
    fillColor='white', borderColor=[-1.0000, -1.0000, -1.0000],
    color='black', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='Prep'
)
Prep.buttonClock = core.Clock()
Stance = visual.ButtonStim(win, 
    text='Stance', font='Arvo',
    pos=(0, 0.6),units='norm',
    letterHeight=0.05,
    size=[1,0.15], borderWidth=0.0,
    fillColor='white', borderColor='black',
    color='black', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='Stance'
)
Stance.buttonClock = core.Clock()
Swing = visual.ButtonStim(win, 
    text='Swing', font='Arvo',
    pos=(0,0.3),units='norm',
    letterHeight=0.05,
    size=[1,0.15], borderWidth=0.0,
    fillColor='white', borderColor='black',
    color='black', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='Swing'
)
Swing.buttonClock = core.Clock()
Hit = visual.ButtonStim(win, 
    text='Hit', font='Arvo',
    pos=(0, -0.1),units='norm',
    letterHeight=0.05,
    size=[1,0.15], borderWidth=0.0,
    fillColor='green', borderColor='green',
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='Hit'
)
Hit.buttonClock = core.Clock()
Miss = visual.ButtonStim(win, 
    text='Miss', font='Arvo',
    pos=(0, -0.4),units='norm',
    letterHeight=0.05,
    size=[1,0.15], borderWidth=0.0,
    fillColor='red', borderColor='red',
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='Miss'
)
Miss.buttonClock = core.Clock()
End = visual.ButtonStim(win, 
    text='End', font='Arvo',
    pos=(0,-0.7),units='norm',
    letterHeight=0.05,
    size=[1,0.15], borderWidth=0.0,
    fillColor='black', borderColor='black',
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='End'
)
End.buttonClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "addCode" ---
continueRoutine = True
routineForceEnded = False
# update component parameters for each repeat
# keep track of which components have finished
addCodeComponents = []
for thisComponent in addCodeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "addCode" ---
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in addCodeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "addCode" ---
for thisComponent in addCodeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "addCode" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
tr_loop = data.TrialHandler(nReps=40.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='tr_loop')
thisExp.addLoop(tr_loop)  # add the loop to the experiment
thisTr_loop = tr_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTr_loop.rgb)
if thisTr_loop != None:
    for paramName in thisTr_loop:
        exec('{} = thisTr_loop[paramName]'.format(paramName))

for thisTr_loop in tr_loop:
    currentLoop = tr_loop
    # abbreviate parameter names if possible (e.g. rgb = thisTr_loop.rgb)
    if thisTr_loop != None:
        for paramName in thisTr_loop:
            exec('{} = thisTr_loop[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "EEGtrial" ---
    continueRoutine = True
    routineForceEnded = False
    # update component parameters for each repeat
    # keep track of which components have finished
    EEGtrialComponents = [Prep, Stance, Swing, Hit, Miss, End]
    for thisComponent in EEGtrialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "EEGtrial" ---
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Prep* updates
        if Prep.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Prep.frameNStart = frameN  # exact frame index
            Prep.tStart = t  # local t and not account for scr refresh
            Prep.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Prep, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Prep.started')
            Prep.setAutoDraw(True)
        if Prep.status == STARTED:
            # check whether Prep has been pressed
            if Prep.isClicked:
                if not Prep.wasClicked:
                    Prep.timesOn.append(globalClock.getTime()) # store time of first click
                    Prep.timesOff.append(globalClock.getTime()) # store time clicked until
                else:
                    Prep.timesOff[-1] = globalClock.getTime() # update time clicked until
                if not Prep.wasClicked:
                    expInfo['PrepTime']=core.getAbsTime()
                Prep.wasClicked = True  # if Prep is still clicked next frame, it is not a new click
            else:
                Prep.wasClicked = False  # if Prep is clicked next frame, it is a new click
        else:
            Prep.wasClicked = False  # if Prep is clicked next frame, it is a new click
        
        # *Stance* updates
        if Stance.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Stance.frameNStart = frameN  # exact frame index
            Stance.tStart = t  # local t and not account for scr refresh
            Stance.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Stance, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Stance.started')
            Stance.setAutoDraw(True)
        if Stance.status == STARTED:
            # check whether Stance has been pressed
            if Stance.isClicked:
                if not Stance.wasClicked:
                    Stance.timesOn.append(globalClock.getTime()) # store time of first click
                    Stance.timesOff.append(globalClock.getTime()) # store time clicked until
                else:
                    Stance.timesOff[-1] = globalClock.getTime() # update time clicked until
                if not Stance.wasClicked:
                    expInfo['StanceTime']=core.getAbsTime()
                Stance.wasClicked = True  # if Stance is still clicked next frame, it is not a new click
            else:
                Stance.wasClicked = False  # if Stance is clicked next frame, it is a new click
        else:
            Stance.wasClicked = False  # if Stance is clicked next frame, it is a new click
        
        # *Swing* updates
        if Swing.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Swing.frameNStart = frameN  # exact frame index
            Swing.tStart = t  # local t and not account for scr refresh
            Swing.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Swing, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Swing.started')
            Swing.setAutoDraw(True)
        if Swing.status == STARTED:
            # check whether Swing has been pressed
            if Swing.isClicked:
                if not Swing.wasClicked:
                    Swing.timesOn.append(globalClock.getTime()) # store time of first click
                    Swing.timesOff.append(globalClock.getTime()) # store time clicked until
                else:
                    Swing.timesOff[-1] = globalClock.getTime() # update time clicked until
                if not Swing.wasClicked:
                    expInfo['SwingTime']=core.getAbsTime()
                Swing.wasClicked = True  # if Swing is still clicked next frame, it is not a new click
            else:
                Swing.wasClicked = False  # if Swing is clicked next frame, it is a new click
        else:
            Swing.wasClicked = False  # if Swing is clicked next frame, it is a new click
        
        # *Hit* updates
        if Hit.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Hit.frameNStart = frameN  # exact frame index
            Hit.tStart = t  # local t and not account for scr refresh
            Hit.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Hit, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Hit.started')
            Hit.setAutoDraw(True)
        if Hit.status == STARTED:
            # check whether Hit has been pressed
            if Hit.isClicked:
                if not Hit.wasClicked:
                    Hit.timesOn.append(globalClock.getTime()) # store time of first click
                    Hit.timesOff.append(globalClock.getTime()) # store time clicked until
                else:
                    Hit.timesOff[-1] = globalClock.getTime() # update time clicked until
                if not Hit.wasClicked:
                    continueRoutine = False  # end routine when Hit is clicked
                    expInfo['EvType']='Hit'
                Hit.wasClicked = True  # if Hit is still clicked next frame, it is not a new click
            else:
                Hit.wasClicked = False  # if Hit is clicked next frame, it is a new click
        else:
            Hit.wasClicked = False  # if Hit is clicked next frame, it is a new click
        
        # *Miss* updates
        if Miss.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Miss.frameNStart = frameN  # exact frame index
            Miss.tStart = t  # local t and not account for scr refresh
            Miss.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Miss, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Miss.started')
            Miss.setAutoDraw(True)
        if Miss.status == STARTED:
            # check whether Miss has been pressed
            if Miss.isClicked:
                if not Miss.wasClicked:
                    Miss.timesOn.append(globalClock.getTime()) # store time of first click
                    Miss.timesOff.append(globalClock.getTime()) # store time clicked until
                else:
                    Miss.timesOff[-1] = globalClock.getTime() # update time clicked until
                if not Miss.wasClicked:
                    continueRoutine = False  # end routine when Miss is clicked
                    expInfo['EvType']='Miss'
                Miss.wasClicked = True  # if Miss is still clicked next frame, it is not a new click
            else:
                Miss.wasClicked = False  # if Miss is clicked next frame, it is a new click
        else:
            Miss.wasClicked = False  # if Miss is clicked next frame, it is a new click
        
        # *End* updates
        if End.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            End.frameNStart = frameN  # exact frame index
            End.tStart = t  # local t and not account for scr refresh
            End.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(End, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'End.started')
            End.setAutoDraw(True)
        if End.status == STARTED:
            # check whether End has been pressed
            if End.isClicked:
                if not End.wasClicked:
                    End.timesOn.append(globalClock.getTime()) # store time of first click
                    End.timesOff.append(globalClock.getTime()) # store time clicked until
                else:
                    End.timesOff[-1] = globalClock.getTime() # update time clicked until
                if not End.wasClicked:
                    continueRoutine = False  # end routine when End is clicked
                    endExpNow = True
                End.wasClicked = True  # if End is still clicked next frame, it is not a new click
            else:
                End.wasClicked = False  # if End is clicked next frame, it is a new click
        else:
            End.wasClicked = False  # if End is clicked next frame, it is a new click
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in EEGtrialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "EEGtrial" ---
    for thisComponent in EEGtrialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    tr_loop.addData('Prep.numClicks', Prep.numClicks)
    if Prep.numClicks:
       tr_loop.addData('Prep.timesOn', Prep.timesOn)
       tr_loop.addData('Prep.timesOff', Prep.timesOff)
    else:
       tr_loop.addData('Prep.timesOn', "")
       tr_loop.addData('Prep.timesOff', "")
    tr_loop.addData('Stance.numClicks', Stance.numClicks)
    if Stance.numClicks:
       tr_loop.addData('Stance.timesOn', Stance.timesOn)
       tr_loop.addData('Stance.timesOff', Stance.timesOff)
    else:
       tr_loop.addData('Stance.timesOn', "")
       tr_loop.addData('Stance.timesOff', "")
    tr_loop.addData('Swing.numClicks', Swing.numClicks)
    if Swing.numClicks:
       tr_loop.addData('Swing.timesOn', Swing.timesOn)
       tr_loop.addData('Swing.timesOff', Swing.timesOff)
    else:
       tr_loop.addData('Swing.timesOn', "")
       tr_loop.addData('Swing.timesOff', "")
    tr_loop.addData('Hit.numClicks', Hit.numClicks)
    if Hit.numClicks:
       tr_loop.addData('Hit.timesOn', Hit.timesOn)
       tr_loop.addData('Hit.timesOff', Hit.timesOff)
    else:
       tr_loop.addData('Hit.timesOn', "")
       tr_loop.addData('Hit.timesOff', "")
    tr_loop.addData('Miss.numClicks', Miss.numClicks)
    if Miss.numClicks:
       tr_loop.addData('Miss.timesOn', Miss.timesOn)
       tr_loop.addData('Miss.timesOff', Miss.timesOff)
    else:
       tr_loop.addData('Miss.timesOn', "")
       tr_loop.addData('Miss.timesOff', "")
    tr_loop.addData('End.numClicks', End.numClicks)
    if End.numClicks:
       tr_loop.addData('End.timesOn', End.timesOn)
       tr_loop.addData('End.timesOff', End.timesOff)
    else:
       tr_loop.addData('End.timesOn', "")
       tr_loop.addData('End.timesOff', "")
    # the Routine "EEGtrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 40.0 repeats of 'tr_loop'

# get names of stimulus parameters
if tr_loop.trialList in ([], [None], None):
    params = []
else:
    params = tr_loop.trialList[0].keys()
# save data for this loop
tr_loop.saveAsExcel(filename + '.xlsx', sheetName='tr_loop',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])
tr_loop.saveAsText(filename + 'tr_loop.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
