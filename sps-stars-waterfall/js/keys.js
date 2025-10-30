/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2025 Waterford.org
 *
 * @file         Spine: SPS Stars Waterfall
 * @version      0.0.1
 */

console.log ("Caterpillar: 1 = fall-front / 2 = fall-back / 3 = both");

window.onkeydown = function (e) {

    //var code = e.keyCode ? e.keyCode : e.which;
    var code = e.keycode;
    console.log(code);

    if (code.keycode === 49) { // 1

        WF.call.starsFallFront();

    } else if (code.keycode === 50) { // 2

        WF.call.starsFallBack();
    
    } else if (code.keycode === 51) { // 3
        
        WF.call.starsFallBoth();
    
    } 

};
