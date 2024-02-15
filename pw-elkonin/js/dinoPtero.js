/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2024 Waterford.org
 *
 * @file         Spine: PW Elkonin Dino Ptero
 * @version      0.0.1
 */


WF.dinoPtero = new spine.SpinePlayer("pw-elkonin-dino-ptero-container", {
    jsonUrl: "/pw-elkonin/assets/dinoPtero.json",
    atlasUrl: "/pw-elkonin/assets/dinoPtero.atlas",
    backgroundColor: "#d3d3d3",
    //fullScreenBackgroundColor: "#00ff00ff",
    animation: "idle",
    showControls: false,
    premultipliedAlpha: false,
    //alpha: true,
    // backgroundImage: {
    //   url: "/pw-elkonin/assets/bg-elkonin.jpg",
    //   x: -960,
    //   y: 0,
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