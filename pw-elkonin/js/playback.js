/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2024 Waterford.org
 *
 * @file         Spine: PW Elkonin
 * @version      0.0.1
 */


WF.call = {};

const mixDuration = 1;

// Track ref:
const trackSparkyHead = 0;
const trackSparkyBody = 0;

WF.call.sparkyIdle = function () {

    WF.sparkyHead.animationState.setAnimation(trackSparkyHead, "idle", true, 0);
    WF.sparkyBody.animationState.setAnimation(trackSparkyBody, "idle", true, 0);

};

WF.call.sparkyExit = function () {

    WF.sparkyHead.animationState.addAnimation(trackSparkyHead, "exit", false, 0);
    WF.sparkyBody.animationState.addAnimation(trackSparkyBody, "exit", false, 0);

};