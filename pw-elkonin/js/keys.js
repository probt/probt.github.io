/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2024 Waterford.org
 *
 * @file         Spine: PW Elkonin
 * @version      0.0.1
 */

console.log ("Dino-Ptero:not setup ");
console.log ("Dino-Tric: not setup");
console.log ("Sparky: i = idle / e = exit");

window.onkeydown = function (e) {

    var code = e.keyCode ? e.keyCode : e.which;
    //console.log(code);
    if (code === 73) {        // i
        WF.call.sparkyIdle();
    } else if (code === 69) { //e
        WF.call.sparkyExit();
    }
    
};
