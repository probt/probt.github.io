/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Sparky Skeleton
 * @version      1.0
 */


WF.sparky = new spine.SpinePlayer("sparky-spine-container", {
    jsonUrl: "/assets/powerWords-sparky-spine-import.json",
    atlasUrl: "/assets/powerWords-sparky-spine-import.atlas",
    // backgroundColor: "#ff00ffff",
    //fullScreenBackgroundColor: "#00ff00ff",
    backgroundImage: {
      url: "assets/opening-bkg.jpg",
      x: 0,
      y: 0,
      width: 1440,
      height: 992
    },
    showControls: false,
    //alpha: true,
    viewport: {
      debugRender: true,
      x: 0,
      y: 0,
      width: 1440,
      height: 992,
      padLeft: "0%",
      padRight: "0%",
      padTop: "0%",
      padBottom: "0%"
    },
    success: function () {
        WF.sparky.animationState.setAnimation(0, "enter/bottomRight", false);
        WF.sparky.animationState.addAnimation(0, "idles/bottomRight", true, 0);
     }
  });