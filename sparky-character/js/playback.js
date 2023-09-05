/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Sparky Animation Calls (Character)
 * @version      1.0.1
 */


WF.call = {};

WF.call.ringsStart = function () {

    WF.sparky.animationState.addAnimation(8, "rings/ring-1", true, 0);
    WF.sparky.animationState.addAnimation(9, "rings/ring-2", true, 0.33);
    WF.sparky.animationState.addAnimation(10, "rings/ring-3", true, 0.66);

};
