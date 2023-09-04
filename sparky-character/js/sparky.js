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
    backgroundColor: "#ff00ffff",
    //fullScreenBackgroundColor: "#00ff00ff",
    //animation: "idles/wag",
    showControls: true,
    //alpha: true,
    viewport: {
      debugRender: true,
      x: 0,
      y: 0,
      width: 1440,
      height: 992,
      padLeft: "10%",
      padRight: "10%",
      padTop: "10%",
      padBottom: "10%"
    }
  });