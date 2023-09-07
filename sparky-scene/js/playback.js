/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Sparky Animation Calls (Scene)
 * @version      1.0.1
 */


WF.call = {};

WF.call.enterBR = function () {

    WF.sparky.animationState.setAnimation(0, "setup/bottomRight", false);
    WF.sparky.animationState.addAnimation(0, "enter/bottomRight", false, 1);
    WF.sparky.animationState.addAnimation(0, "idles/bottomRight", true, 0);

};

WF.call.enterML = function () {

    WF.sparky.animationState.setAnimation(0, "setup/midLeftSmall", false);
    WF.sparky.animationState.addAnimation(0, "enter/midLeftSmall", false, 1);
    WF.sparky.animationState.addAnimation(0, "idles/midLeftSmall", true, 0);

};

WF.call.exitBR = function () {

    WF.sparky.animationState.setAnimation(0, "exit/bottomRight", false);

};

WF.call.exitML = function () {

    WF.sparky.animationState.setAnimation(0, "exit/midLeftSmall", false);

};

WF.call.idleStart = function (loopBool) {

    if (!loopBool) loopBool = true;
    WF.sparky.animationState.setAnimation(0, "idles/idle", loopBool);

};

WF.call.charge = function (valNum) {

    if (!valNum) valNum = 0;
    WF.sparky.animationState.setAnimation(10, "gauge/charge-" + valNum, false);

};

WF.call.wag = function () {

    WF.sparky.animationState.setAnimation(9, "idles/wag", true);

};
