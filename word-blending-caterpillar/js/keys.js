/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2024 Waterford.org
 *
 * @file         Spine: Word Blending Caterpillar
 * @version      0.0.9
 */

console.log ("Caterpillar: e = enter / up = arch in / down = arch out / c = celeberate / x = exit / i = toggle idle / s = swap skin");
console.log ("Background: 1 = toggle leaves / 2 = toggle clouds");

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    //console.log(code);
    if (code === 69) {        // e
        WF.call.caterpillerEnter();
    } else if (code === 38) { // up
        WF.call.caterpillerArchIn();
    } else if (code === 40) { // down
        WF.call.caterpillerArchOut();
    } else if (code === 67) { // c
        WF.call.caterpillerCelebrate();
    } else if (code === 88) { // x
        WF.call.caterpillerExit();
    } else if (code === 73) { // i
        WF.call.caterpillerToggleIdle();
    } else if (code === 83) { // s
        WF.call.caterpillerSwapSkin();

    } else if (code === 49) { // 1
        WF.call.backgroundToggleLeaves();
    } else if (code === 50) { // 2
        WF.call.backgroundToggleClouds();
    
    } 
};
