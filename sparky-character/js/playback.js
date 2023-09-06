/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Sparky Animation Calls (Character)
 * @version      1.0.2
 */


WF.call = {};

const mixDuration = 1;

// Track ref:
const trackBody = 0;
const trackHead = 1;
const trackTail = 7;
const trackRing1 = 8;
const trackRing2 = 9;
const trackRing3 = 10;

WF.call.headLookUp = function () {

    WF.sparky.animationState.addAnimation(trackHead, "head/lookUp", false, 0);

};

WF.call.headLookDown = function () {

    WF.sparky.animationState.addAnimation(trackHead, "head/lookDown", false, 0);

};

WF.call.bodyIdle = function () {

    if (WF.sparky.animationState.getCurrent(trackBody) === null) {
        WF.sparky.animationState.addAnimation(trackBody, "idles/baseIdle", true, 0);
    } else {
        WF.sparky.animationState.setEmptyAnimation(trackBody, mixDuration);
    }

};

WF.call.rings = function () {

    if (WF.sparky.animationState.getCurrent(trackRing1) === null) {
        WF.sparky.animationState.addAnimation(trackRing1, "rings/ring-1", true, 0);
        WF.sparky.animationState.addAnimation(trackRing2, "rings/ring-2", true, 0.33);
        WF.sparky.animationState.addAnimation(trackRing3, "rings/ring-3", true, 0.66);
    } else {
        WF.sparky.animationState.setEmptyAnimation(trackRing1, mixDuration);
        WF.sparky.animationState.setEmptyAnimation(trackRing2, mixDuration);
        WF.sparky.animationState.setEmptyAnimation(trackRing3, mixDuration);
    }

};

WF.call.tailWag = function () {

    if (WF.sparky.animationState.getCurrent(trackTail) === null) {
        WF.sparky.animationState.addAnimation(trackTail, "tail/wag", true, 0);
    } else {
        WF.sparky.animationState.setEmptyAnimation(trackTail, mixDuration);
    }

};