/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2024 Waterford.org
 *
 * @file         Spine: Word Blending Caterpillar
 * @version      0.0.9
 */


WF.call = {};

const mixDuration = 1;

// Track ref:
const trackCaterpillar = 0;

// Caterpillar position ref (0 = straight, 1 = arch)
var caterpillarState = 0

WF.call.caterpillerEnter = function () {

    WF.caterpillar.animationState.setAnimation(trackCaterpillar, "moves/new-enter-5s", false, 0);
    WF.caterpillar.animationState.addAnimation(trackCaterpillar, "moves/new-idle", true, 0);
    caterpillarState = 0;

};

WF.call.caterpillerArchIn = function () {

    WF.caterpillar.animationState.setAnimation(trackCaterpillar, "arches/arch-slide-in", false, 0);
    WF.caterpillar.animationState.addAnimation(trackCaterpillar, "arches/arch-slide-idle", true, 0);
    caterpillarState = 1;

};

WF.call.caterpillerArchOut = function () {

    WF.caterpillar.animationState.setAnimation(trackCaterpillar, "arches/arch-slide-out", false, 0);
    WF.caterpillar.animationState.addAnimation(trackCaterpillar, "moves/new-idle", true, 0);
    caterpillarState = 0;

};

WF.call.caterpillerCelebrate = function () {

    WF.caterpillar.animationState.setAnimation(trackCaterpillar, "moves/new-jump-celebrate", false, 0);
    WF.caterpillar.animationState.addAnimation(trackCaterpillar, "moves/new-idle", true, 0);

};

WF.call.caterpillerExit = function () {

    WF.caterpillar.animationState.setAnimation(trackCaterpillar, "moves/new-exit-3s", false, 0);

};

WF.call.caterpillerToggleIdle = function () {

    if (WF.caterpillar.animationState.getCurrent(trackCaterpillar) === null) {
        var idleAnimationName;
        if ( caterpillarState === 0 ) {
            idleAnimationName = "moves/new-idle";
        } else {
            idleAnimationName = "arches/arch-slide-idle";
        }
        WF.caterpillar.animationState.addAnimation(trackCaterpillar, idleAnimationName, true, 0);
    } else {
        WF.caterpillar.animationState.setEmptyAnimation(trackCaterpillar, mixDuration);
    }

};

WF.call.backgroundToggleLeaves = function () {

    if (WF.background.animationState.getCurrent(0) === null) {
        WF.background.animationState.addAnimation(0, "leaves/all-leaves", true, 0);
    } else {
        WF.background.animationState.setEmptyAnimation(0, mixDuration);
    }

};

WF.call.backgroundToggleClouds = function () {

    if (WF.background.animationState.getCurrent(1) === null) {
        WF.background.animationState.addAnimation(1, "clouds/all-nine-clouds", true, 0);
    } else {
        WF.background.animationState.setEmptyAnimation(1, mixDuration);
    }

};