/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Sparky Animation Calls
 * @version      1.0
 */


WF.call = {};
WF.trackEntry = {};

WF.call.idleStart = function () {

    WF.sparky.animationState.setAnimation(0, "idle", true);
    return WF.trackEntry;

};
