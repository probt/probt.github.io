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

    WF.crane.animationState.setAnimation(trackCrane, "1-enter", false, 0);

};

WF.call.enter = function () {

    WF.crane.animationState.setAnimation(trackCrane, "2-idle", false, 0);

};

WF.call.hookDrop = function () {

    WF.crane.animationState.addAnimation(trackCrane, "3-hookDrop", false, 0);

};

WF.call.hookRaiseOne = function () {

    WF.crane.animationState.addAnimation(trackCrane, "4-hookRaise-1", false, 0);

};

WF.call.enterTwo = function () {

    WF.crane.animationState.addAnimation(trackCrane, "5-enter-2", false, 0);

};

WF.call.hookRaiseTwo = function () {

    WF.crane.animationState.addAnimation(trackCrane, "6-hookRaise-2", false, 0);

};