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

     WF.trackEntry = WF.sparky.animationState.setAnimation(0, "bottomRight", false);

};

WF.call.idleStart = function (loopBool) {

    if (!loopBool) loopBool = true;
    WF.trackEntry = WF.sparky.animationState.setAnimation(0, "idle", loopBool);

};

WF.call.charge = function (valNum) {

    if (!valNum) valNum = 0;
    WF.trackEntry = WF.sparky.animationState.setAnimation(10, "charge-" + valNum, false);

};

WF.call.wag = function () {

    WF.trackEntry = WF.sparky.animationState.setAnimation(9, "wag", true);

};
