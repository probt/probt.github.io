/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2025 Waterford.org
 *
 * @file         Spine: Key events for crane animation triggers
 * @version      0.0.1
 */

console.log("anims list-edit");

console.table({
    e:"enter",
    i:"idle",
    down:"hookDrop",
    n:"enter-2",
    1:"hookRaise-1",
    2:"hookRaise-2"
});

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    //console.log(code);
    if (code === 69) {        // e
        WF.call.enter();
    } else if (code === 73) { // i
        WF.call.idle();
    } else if (code === 40) { // down
        WF.call.hookDrop();
    } else if (code === 78) { // n
        WF.call.enterTwo();
    } else if (code === 49) { // 1
        WF.call.hookRaiseOne();
    } else if (code === 50) { // 2
        WF.call.hookRaiseTwo();
    } 
};
