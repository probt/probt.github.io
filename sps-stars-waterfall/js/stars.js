/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2025 Waterford.org
 *
 * @file         Spine: SPS Stars Waterfall
 * @version      0.0.1
 */


WF.stars = new spine.SpinePlayer("sps-stars-container", {
    jsonUrl: "/sps-stars-waterfall/assets/waterfall.json",
    atlasUrl: "/sps-stars-waterfall/assets/waterfall.atlas",
    //backgroundColor: "#5e5e60ff",
    //fullScreenBackgroundColor: "#00ff00ff",
    animation: "fall-front",
    showControls: false,
    //alpha: true,
    backgroundImage: {
      url: "/sps-stars-waterfall/assets/sps-pictures-bkg-garden.jpg",
      x: -960,
      y: 0,
      width: 1920,
      height: 992
    },
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