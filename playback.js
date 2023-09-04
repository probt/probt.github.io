/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Sparky Animation Calls
 * @version      1.0.1
 */


WF.call = {};
WF.trackEntry = {};

WF.call.enterBR = function () {

    WF.sparky.animationState.setAnimation(0, "enter/bottomRight", false);
    WF.sparky.animationState.addAnimation(0, "idles/bottomRight", true, 0);

};

WF.call.idleStart = function (loopBool) {

    if (!loopBool) loopBool = true;
    WF.trackEntry = WF.sparky.animationState.setAnimation(0, "idles/idle", loopBool);

};

WF.call.charge = function (valNum) {

    if (!valNum) valNum = 0;
    WF.trackEntry = WF.sparky.animationState.setAnimation(10, "gauge/charge-" + valNum, false);

};

WF.call.wag = function () {

    WF.trackEntry = WF.sparky.animationState.setAnimation(9, "idles/wag", true);

};
