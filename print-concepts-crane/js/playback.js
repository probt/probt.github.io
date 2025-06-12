/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2025 Waterford.org
 *
 * @file         Spine: Crane Animation Calls
 * @version      0.0.1
 */


WF.call = {};

const mixDuration = 1;

// Track ref:
const trackIdle = 0;
const trackEnter = 1;
const trackCrane = 2;


WF.call.idle = function () {

    if (WF.crane.animationState.getCurrent(trackIdle) === null) {
        WF.crane.animationState.setAnimation(trackIdle, "2-idle", true, 0);
    } else {
        WF.crane.animationState.setEmptyAnimation(trackIdle, mixDuration);
    }

};

WF.call.enter = function () {

    if (WF.crane.animationState.getCurrent(trackEnter) === null) {
        WF.crane.animationState.setAnimation(trackEnter, "1-enter", true, 0);
    } else {
        WF.crane.animationState.setEmptyAnimation(trackEnter, mixDuration);
    }

};

WF.call.hookDrop = function () {

    WF.crane.animationState.addAnimation(trackCrane, "3-hookDrop", false, 0);

};

WF.call.hookRaiseOne = function () {

    WF.crane.animationState.addAnimation(trackCrane, "4-hookRaise-1", false, 0);

};

WF.call.enterTwo = function () {

    if (WF.crane.animationState.getCurrent(trackEnter) === null) {
        WF.crane.animationState.setAnimation(trackEnter, "5-enter-2", true, 0);
    } else {
        WF.crane.animationState.setEmptyAnimation(trackEnter, mixDuration);
    }

};

WF.call.hookRaiseTwo = function () {

    WF.crane.animationState.addAnimation(trackCrane, "6-hookRaise-2", false, 0);

};