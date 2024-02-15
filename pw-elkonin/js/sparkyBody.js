/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2024 Waterford.org
 *
 * @file         Spine: PW Elkonin Sparky Body
 * @version      0.0.1
 */


WF.sparkyBody = new spine.SpinePlayer("pw-elkonin-sparky-body-container", {
    jsonUrl: "/pw-elkonin/assets/sparkyBody.json",
    atlasUrl: "/pw-elkonin/assets/sparkyBody.atlas",
    //backgroundColor: "#5e5e60ff",
    //fullScreenBackgroundColor: "#00ff00ff",
    animation: "idle",
    showControls: false,
    alpha: true,
    // backgroundImage: {
    //   url: "/pw-elkonin/assets/spine-bkg.jpg",
    //   x: -720,
    //   y: -100,
    //   width: 1440,
    //   height: 992
    // },
    viewport: {
      debugRender: true,
      x: -960,
      y: 0,
      width: 1920,
      height: 992,
      // padLeft: "12.5%",
      // padRight: "12.5%",
      // padTop: "0%",
      // padBottom: "0%"
    }
  });