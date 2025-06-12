/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2025 Waterford.org
 *
 * @file         Spine: Crane Skeleton
 * @version      0.0.1
 */


WF.crane = new spine.SpinePlayer("crane-spine-container", {
    jsonUrl: "/print-concepts-crane/assets/Print_Concepts_Crane.json",
    atlasUrl: "/print-concepts-crane/assets/Print_Concepts_Crane.atlas",
    backgroundColor: "#5e5e60ff",
    //fullScreenBackgroundColor: "#00ff00ff",
    animation: "2-idle",
    showControls: true,
    //alpha: true,
    backgroundImage: {
      url: "/print-concepts-crane/assets/spine-bkg.jpg",
      x: -720,
      y: -100,
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