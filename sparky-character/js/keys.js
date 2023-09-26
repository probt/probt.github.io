/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Key events for animation triggers
 * @version      1.0.0
 */

console.log ("up = lookUp / down = lookDown / b = blink / i = idleToggle / w = wagToggle / r = ringsToggle");

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    //console.log(code);
    if (code === 66) {        //b
        WF.call.blink();
    } else if (code === 38) { //up
        WF.call.headLookUp();
    } else if (code === 40) { //down
        WF.call.headLookDown();
    } else if (code === 73) { //i
        WF.call.bodyIdle();
    } else if (code === 87) { //w
        WF.call.tailWag();
    } else if (code === 82) { //r
        WF.call.rings();
    } 
};
