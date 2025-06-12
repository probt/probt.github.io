/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2025 Waterford.org
 *
 * @file         Spine: Crane Skeleton
 * @version      0.0.1
 */


const backgroundPadding = "10%";
const viewportPadding = "70%";

WF.crane = new spine.SpinePlayer("crane-spine-container", {
    jsonUrl: "/print-concepts-crane/assets/Print_Concepts_Crane.json",
    atlasUrl: "/print-concepts-crane/assets/Print_Concepts_Crane.atlas",
    //backgroundColor: "#5e5e60ff",
    //fullScreenBackgroundColor: "#00ff00ff",
    animation: "1-enter",
    showControls: false,
    alpha: false,
    premultipliedAlpha: false,
    backgroundImage: {
      url: "/print-concepts-crane/assets/spine-bkg.jpg",
      x: -720,
      y: -100,
      width: 1440,
      height: 992,
      padLeft: backgroundPadding,
      padRight: backgroundPadding,
      padTop: backgroundPadding,
      padBottom: backgroundPadding,
    },
    viewport: {
      debugRender: true,
      x: -720,
      y: -100,
      width: 1440,
      height: 992,
      padLeft:viewportPadding,
      padRight: viewportPadding,
      padTop: viewportPadding,
      padBottom: viewportPadding
    }
  //   debug: {
  //     bones: true, 
  //     regions: false,
  //     meshes: false,
  //     bounds: true,
  //     paths: false,
  //     clipping: false,
  //     points: false,
  //     hulls: false
  //  }
  });