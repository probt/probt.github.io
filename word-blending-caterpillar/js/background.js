/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2024 Waterford.org
 *
 * @file         Spine: Word Blending Caterpillar
 * @version      0.0.9
 */


WF.background = new spine.SpinePlayer("word-blending-background-container", {
    jsonUrl: "/word-blending-caterpillar/assets/background.json",
    atlasUrl: "/word-blending-caterpillar/assets/background.atlas",
    //backgroundColor: "#5e5e60ff",
    //fullScreenBackgroundColor: "#00ff00ff",
    animation: "clouds/all-nine-clouds",
    showControls: false,
    //alpha: true,
    // backgroundImage: {
    //   url: "/word-blending-caterpillar/assets/spine-bkg.jpg",
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

// WF.background.animationState.setAnimation(0, "leaves/all-leaves", true, 0);
// WF.background.animationState.setAnimation(1, "clouds/all-nine-clouds", true, 0);