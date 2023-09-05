/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Sparky Animation Calls (Character)
 * @version      1.0.1
 */


WF.call = {};

/**
 * Track ref:
 * 0: body idle
 * 1: head idle
 * 2: 
 * 3: 
 * 4: 
 * 5: 
 * 6: 
 * 7: tail
 * 8: ring-1
 * 9: ring-2
 * 10: ring-3
 */

WF.call.ringsStart = function () {

    WF.sparky.animationState.addAnimation(8, "rings/ring-1", true, 0);
    WF.sparky.animationState.addAnimation(9, "rings/ring-2", true, 0.33);
    WF.sparky.animationState.addAnimation(10, "rings/ring-3", true, 0.66);

};

WF.call.ringsStop = function () {

    WF.sparky.animationState.setEmptyAnimation(8, 0);
    WF.sparky.animationState.setEmptyAnimation(9, 0);
    WF.sparky.animationState.setEmptyAnimation(10, 0);

};

WF.call.wagStart = function () {

    WF.sparky.animationState.addAnimation(7, "tail/wag", true, 0);

};

WF.call.wagStop = function () {

    WF.sparky.animationState.setEmptyAnimation(7, 0);

};