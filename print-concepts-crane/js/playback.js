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
const trackCrane = 0;


WF.call.idle = function () {

    WF.crane.animationState.setAnimation(trackCrane, "enter", false, 0);

};

WF.call.enter = function () {

    WF.crane.animationState.setAnimation(trackCrane, "idle", false, 0);

};

WF.call.hookDrop = function () {

    WF.crane.animationState.addAnimation(trackCrane, "hookDrop", false, 0);

};

WF.call.hookRaiseOne = function () {

    WF.crane.animationState.addAnimation(trackCrane, "hookRaise-1", false, 0);

};

WF.call.enterTwo = function () {

    WF.crane.animationState.addAnimation(trackCrane, "enter-2", false, 0);

};

WF.call.hookRaiseTwo = function () {

    WF.crane.animationState.addAnimation(trackCrane, "hookRaise-2", false, 0);

};