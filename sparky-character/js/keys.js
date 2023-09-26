/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Key events for animation triggers
 * @version      0.9.2
 */

console.log ("a = leftIn / s = leftOut / f = rightIn / d = rightOut");

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    console.log(code);
    // if (code === 65) {        //a
    //     WF.call.blink();
    // } else if (code === 83) { //s
    //     WF.call.headLookUp();
    // } else if (code === 70) { //f
    //     WF.call.headLookDown();
    // } else if (code === 68) { //d
    //     WF.call.bodyIdle();
    // } else if (code === 68) { //d
    //     WF.call.tailWag();
    // } else if (code === 68) { //d
    //     WF.call.rings();
    // } 
};
