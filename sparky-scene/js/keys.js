/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Key events for animation triggers
 * @version      1.0.2
 */

console.log ("a = leftIn / s = leftOut / f = rightIn / d = rightOut");

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 65) {        //a
        WF.call.keyEvents("leftIn");
    } else if (code === 83) { //s
        WF.call.keyEvents("leftOut");
    } else if (code === 70) { //f
        WF.call.keyEvents("rightIn");
    } else if (code === 68) { //d
        WF.call.keyEvents("rightOut");
    }
};

WF.call.setStateData = function () {

    WF.sparky.animationState.data.setMix("exit/midLeftSmall", "setup/midLeftSmall", 0);
    WF.sparky.animationState.data.setMix("exit/midLeftSmall", "setup/bottomRight", 0);
    WF.sparky.animationState.data.setMix("exit/bottomRight", "setup/midLeftSmall", 0);
    WF.sparky.animationState.data.setMix("exit/bottomRight", "setup/bottomRight", 0);

};

WF.call.keyEvents = function (action) {

    if (action === "leftIn") {        //a
        WF.sparky.animationState.setAnimation(0, "setup/midLeftSmall", false);
        WF.sparky.animationState.addAnimation(0, "enter/midLeftSmall", false, 1);
        WF.sparky.animationState.addAnimation(0, "idles/midLeftSmall", true, 0);
        
    } else if (action === "leftOut") { //s
        WF.sparky.animationState.setAnimation(0, "exit/midLeftSmall", false);
        
    } else if (action === "rightIn") { //f
        WF.sparky.animationState.setAnimation(0, "setup/bottomRight", false);
        WF.sparky.animationState.addAnimation(0, "enter/bottomRight", false, 1);
        WF.sparky.animationState.addAnimation(0, "idles/bottomRight", true, 0);
        
    } else if (action === "rightOut") { //d
        WF.sparky.animationState.setAnimation(0, "exit/bottomRight", false);
        
    }

}

WF.call.setStateData();
