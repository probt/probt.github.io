/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2025 Waterford.org
 *
 * @file         Spine: SPS Stars Waterfall
 * @version      0.0.1
 */


WF.call = {};

const mixDuration = 1;

// Track ref:
const trackStarsFront = 1;
const trackStarsBack = 0;

WF.call.starsFallFront = function () {

    console.log("starsFallFront");
    WF.stars.animationState.addAnimation(trackStarsFront, "fall-front", false, 0);

};

WF.call.starsFallBack = function () {

    console.log("starsFallBack");
    WF.stars.animationState.addAnimation(trackStarsBack, "fall-back", false, 0);

};

WF.call.starsFallBoth = function () {

    console.log("starsFallBoth");
    WF.stars.animationState.setAnimation(trackStarsFront, "fall-front", false, 0);
    WF.stars.animationState.addAnimation(trackStarsBack, "fall-back", false, 0);

};
