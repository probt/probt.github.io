/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine: Sparky Skeleton (Character)
 * @version      1.0
 */


WF.sparky = new spine.SpinePlayer("sparky-spine-container", {
    jsonUrl: "/sparky-character/assets/powerWords-sparky-spine-import.json",
    atlasUrl: "/sparky-character/assets/powerWords-sparky-spine-import.atlas",
    backgroundColor: "#72C3E6FF",
    //fullScreenBackgroundColor: "#00ff00ff",
    animation: "idles/baseIdle",
    showControls: true,
    //alpha: true,
    backgroundImage: {
      url: "/sparky-character/assets/opening-bkg.jpg",
      x: 0,
      y: 0,
      width: 1440,
      height: 992
    },
    viewport: {
      debugRender: true,
      x: -720,
      y: -100,
      width: 1440,
      height: 992,
      padLeft: "10%",
      padRight: "10%",
      padTop: "10%",
      padBottom: "10%"
    }
  });