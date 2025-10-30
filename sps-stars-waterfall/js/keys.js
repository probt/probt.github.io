/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2025 Waterford.org
 *
 * @file         Spine: SPS Stars Waterfall
 * @version      0.0.1
 */

console.log ("Stars: 1 = fall-front / 2 = fall-back / 3 = both");

window.onkeydown = function (e) {

    //var code = e.keyCode ? e.keyCode : e.which;
    //var code = e;
    console.log(e);

    if (e.key == "1") {

        WF.call.starsFallFront();

    } else if (e.key == "2") {

        WF.call.starsFallBack();
    
    } else if (e.key == "3") {
        
        WF.call.starsFallBoth();
    
    } 

};
