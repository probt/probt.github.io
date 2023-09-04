/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine Sparky: Animation Playbacks
 * @version      1.0
 */


window.WF = {};

WF.play = {};

WF.play.idle = function () {

    WF.sparky.animationState.setAnimation(0, "idle");

};
