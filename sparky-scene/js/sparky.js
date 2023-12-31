/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Sparky Skeleton (Scene)
 * @version      1.0
 */


WF.sparky = new spine.SpinePlayer("sparky-spine-container", {
    jsonUrl: "/sparky-scene/assets/powerWords-sparky-spine-import.json",
    atlasUrl: "/sparky-scene/assets/powerWords-sparky-spine-import.atlas",
    // backgroundColor: "#ff00ffff",
    //fullScreenBackgroundColor: "#00ff00ff",
    backgroundImage: {
      url: "/sparky-scene/assets/opening-bkg.jpg",
      x: 0,
      y: 0,
      width: 1440,
      height: 992
    },
    animation: "idles/wag",
    showControls: true,
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
    }
  });