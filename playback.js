/**
 * @author       Paul Roberts <paulroberts@waterford.org>
 * @copyright    2023 Waterford.org
 *
 * @file         Spine Sparky: Animation Playbacks
 * @version      1.0
 */


/**
 * TicTacToe: Title: Build spine asset and animation functions.
 * @param {boolean} transitionIn                    Flag to transition in.
 * @param {boolean} transitionInDelay               Transition in delay.
 */
mg.SCENE.TicTacToe.titleBuild = function (transitionIn, transitionInDelay) {

    var _this = this;

    // Spine title
    this.spineObject_titleTicTacToe = this.add.spine(0, 0, '-spine-tictactoe-main-title').setDepth(this.depthConfigTicTacToe.TITLE_GRAPHIC);
    // this.spineObject_titleTicTacToe.drawDebug = true;
    // this.spineObject_titleTicTacToe.timeScale = 1;

    // Custom params tracking
    this.spineObject_titleTicTacToe.customParams = {
        animationNames:        mg.SPINE.getAnimationNames(this.spineObject_titleTicTacToe),
        buttons:               [],
        debug:                 true,
        debugCameraIgnoreName: undefined
    };
    this.spineObject_titleTicTacToe.setName('spineObject_titleTicTacToe');

    // Spine mixes/log
    // this.spineObject_titleTicTacToe.stateData.defaultMix = 0.2;
    // this.spineObject_titleTicTacToe.drawDebug = true;
    // console.log('this.spineObject_titleTicTacToe', this.spineObject_titleTicTacToe);

    // Set spine size based on LAYOUT_SIZER
    mg.SPINE.getSize(this.spineObject_titleTicTacToe);

    // Position spine object
    mg.POS.setSize(this.spineObject_titleTicTacToe, { w: undefined, h: 960 });
    mg.POS.setPosition(this.spineObject_titleTicTacToe, 720, 480, 0.5, 0.5, 'center', 'center');
    // console.log('this.spineObject_titleTicTacToe', this.spineObject_titleTicTacToe);

    // Camera controller (Will auto add spine buttons)
    this.camerasAddObjects(this.spineObject_titleTicTacToe, 'mainCamera');

    // Spine events
    this.spineObject_titleTicTacToe.state.addListener({

        event: function (entry, event) {

            _this.titleTicTacToeEvents(false, entry, event);

        },
        complete: function (entry) {

            _this.titleTicTacToeEvents(true, entry, undefined);

        }

    }, this);

    // Optional transition in
    if (transitionIn) {

        if (!transitionInDelay || transitionInDelay === 0) transitionInDelay = 0;

        // Title animation
        this.titleTicTacToeSetAnimation(0, 'titlePopIn', false, transitionInDelay);

        // Camera effect
        this.time.delayedCall(transitionInDelay, function () {

            _this.backgroundCamera.zoomTo(1, 2000, 'Quad.easeOut', true);
            _this.backgroundCamera.once(Phaser.Cameras.Scene2D.Events.ZOOM_COMPLETE, function (camera) {

                // Anything?

            }, _this);

        }, [], this);

    }

};


/**
 * TicTacToe: Title: Set Animation, with considerations for other actions on animation START. Updated with possible setEmptyAnimation option.
 * @param {number}  trackIndex                          Track number to run animation on.
 * @param {string}  animationName                       Animation name/key to play. If undefined, an emptyAnimation is set for the trackIndex, with the delay being the empty mix amount.
 * @param {boolean} [loopFlag]                          Flag to loop animation.
 * @param {number}  [delay]                             Delay time (ms). Also used as emptyAnimation mix amount if animationName is undefined.
 */
mg.SCENE.TicTacToe.titleTicTacToeSetAnimation = function (trackIndex, animationName, loopFlag, delay) {

    // Default no looping
    if (loopFlag === undefined) {

        loopFlag = false;

    }

    // Default no delay
    if (delay === undefined) {

        delay = 0;

    }

    //  0: "titlePopIn"
    //  1: "rectsWave"
    //  2: "titleReduceUp"
    //  3: "titleSlideOut"

    //  4: "raysTransitionIn"
    //  5: "raySpin1"
    //  6: "raySpin2"
    //  7: "raysTransitionOut"

    var _this = this;

    if (animationName !== undefined && delay && delay > 0) {

        this.time.delayedCall(delay, function () {

            _this.titleTicTacToeSetAnimation(trackIndex, animationName, loopFlag);

        }, [], this);

    } else {

        if (animationName === undefined) {

            if (!delay) {

                delay = 100;

            }

            this.spineObject_titleTicTacToe.state.setEmptyAnimation(trackIndex, delay);

        } else {

            this.spineObject_titleTicTacToe.setAnimation(trackIndex, animationName, loopFlag);

            // Actions to occur on animation START
            if (animationName === 'titlePopIn') {

                // Audio: SFX
                mg.AUDIO.SFX.play(mg.DATA.audio.sfx.tictactoe.titleScreen.titlePopIn);

            } else if (animationName === 'rectsWave') {

                //

            } else if (animationName === 'titleReduceUp') {

                //

            } else if (animationName === 'titleSlideOut') {

                this.titleTicTacToeSetAnimation(2, 'raysTransitionOut', false);

            } else if (animationName === 'raysTransitionIn') {

                this.titleTicTacToeSetAnimation(3, 'raySpin1', true);
                this.titleTicTacToeSetAnimation(4, 'raySpin2', true);

            } else if (animationName === 'raySpin1') {

                //

            } else if (animationName === 'raySpin2') {

                //

            } else if (animationName === 'raysTransitionOut') {

                //

            }

        }

    }

};


/**
 * TicTacToe: Title : Event listener function.
 * @param {boolean} isComplete             Flag for on animation complete spine event.
 * @param {object}  entry                  Spine entry.
 * @param {object}  event                  Spine event.
 */
mg.SCENE.TicTacToe.titleTicTacToeEvents = function (isComplete, entry, event) {

    // console.log('isComplete', isComplete);
    // console.log('entry', entry);
    // console.log('event', event);

    // onComplete (END) actions
    if (isComplete && entry.animation !== null) {

        if (entry.animation.name === 'titlePopIn') {

            // this.playConfigButtonsMatchingAnimation(0, 'playStartIn', false);
            // this.playConfigButtonsMatchingAnimation(1, 'setupStartIn', false, 250);

            this.titleTicTacToeSetAnimation(1, 'rectsWave', false);

            // Audio: VO
            mg.AUDIO.VO.play(mg.DATA.audio.vo.tictactoe.launchScreen.title);

            // Audio timeout: Pick Mode
            this.timeoutPromptPickMode_init();

        } else if (entry.animation.name === 'rectsWave') {

            this.titleTicTacToeSetAnimation(2, 'raysTransitionIn', false);

            this.titleTicTacToeSetAnimation(0, 'titleReduceUp', false); // Was track 5?

        } else if (entry.animation.name === 'titleReduceUp') {

            // Audio: SFX
            mg.AUDIO.SFX.play(mg.DATA.audio.sfx.tictactoe.titleScreen.titleSparkle);

            this.gameOptionsPlayerMode_transitionIn();

        } else if (entry.animation.name === 'titleSlideOut') {

            this.titleDestroy();

        } else if (entry.animation.name === 'raysTransitionIn') {

            //

        } else if (entry.animation.name === 'raySpin1') {

            //

        } else if (entry.animation.name === 'raySpin2') {

            //

        } else if (entry.animation.name === 'raysTransitionOut') {

            //

        }

    }

};


/**
 * TicTacToe: Title: Destroy.
 */
mg.SCENE.TicTacToe.titleDestroy = function () {

    this.spineObject_titleTicTacToe.destroy();
    this.spineObject_titleTicTacToe = null;

};
