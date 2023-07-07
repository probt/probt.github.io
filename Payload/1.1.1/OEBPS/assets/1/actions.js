pubcoder.projectID = pubcoder.projectID || "6FAC2C4529A04E0F9DB979421097B9EA";
pubcoder.project.id = pubcoder.project.id || "6FAC2C4529A04E0F9DB979421097B9EA";
pubcoder.project.title = pubcoder.project.title || "Lorenzo\'s Llama";
pubcoder.page.id = pubcoder.page.id || 4;
pubcoder.page.title = pubcoder.page.title || "1";
pubcoder.page.number = pubcoder.page.number || 1;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj5_onTap_activeActionGroupIndex = -1;
var obj5_onTap_runningActionsCount = 0;
var obj5_onTap_loopCount = 0;
var obj753_onLoad_activeActionGroupIndex = -1;
var obj753_onLoad_runningActionsCount = 0;
var obj753_onLoad_loopCount = 0;
var obj1138_onLoad_activeActionGroupIndex = -1;
var obj1138_onLoad_runningActionsCount = 0;
var obj1138_onLoad_loopCount = 0;
var obj555_onTap_activeActionGroupIndex = -1;
var obj555_onTap_runningActionsCount = 0;
var obj555_onTap_loopCount = 0;
var obj558_onTap_activeActionGroupIndex = -1;
var obj558_onTap_runningActionsCount = 0;
var obj558_onTap_loopCount = 0;
var obj576_onTap_activeActionGroupIndex = -1;
var obj576_onTap_runningActionsCount = 0;
var obj576_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj5_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5_onTap_activeActionGroupIndex = -1;
		$("#obj5").trigger("obj5_onTap_ended");
		
		return;
	}
	window.obj5_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj753 
playAudio_760();
function playAudio_760() {
	window.obj5_onTap_runningActionsCount = obj5_onTap_runningActionsCount + 1;
	var myAudio = $("#obj753")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj5_onTap_runningActionsCount = window.obj5_onTap_runningActionsCount - 1;
if (window.obj5_onTap_runningActionsCount == 0) {
	obj5_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5_onTap_runningActionsCount = window.obj5_onTap_runningActionsCount - 1;
if (window.obj5_onTap_runningActionsCount == 0) {
	obj5_onTap_actionGroup1();
}
	}
}








};
obj5_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5_onTap_activeActionGroupIndex = -1;
		$("#obj5").trigger("obj5_onTap_ended");
		
		return;
	}
	window.obj5_onTap_activeActionGroupIndex = 1;
	





















};
obj753_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj753_onLoad_activeActionGroupIndex = -1;
		$("#obj753").trigger("obj753_onLoad_ended");
		
		return;
	}
	window.obj753_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj753 
playAudio_755();
function playAudio_755() {
	window.obj753_onLoad_runningActionsCount = obj753_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj753")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj753_onLoad_runningActionsCount = window.obj753_onLoad_runningActionsCount - 1;
if (window.obj753_onLoad_runningActionsCount == 0) {
	obj753_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj753_onLoad_runningActionsCount = window.obj753_onLoad_runningActionsCount - 1;
if (window.obj753_onLoad_runningActionsCount == 0) {
	obj753_onLoad_actionGroup1();
}
	}
}








};
obj753_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj753_onLoad_activeActionGroupIndex = -1;
		$("#obj753").trigger("obj753_onLoad_ended");
		
		return;
	}
	window.obj753_onLoad_activeActionGroupIndex = 1;
	





















};
obj1138_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1138_onLoad_activeActionGroupIndex = -1;
		$("#obj1138").trigger("obj1138_onLoad_ended");
		
		return;
	}
	window.obj1138_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1138 
scale_1141();
function scale_1141() {
	window.obj1138_onLoad_runningActionsCount = obj1138_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1138";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1138';
	var transformOriginX = '0%';
	var transformOriginY = '100%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
	var effectDuration = '1';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_1141_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1141_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1141_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1141_completed() {
	setTimeout(function() {
		window.obj1138_onLoad_runningActionsCount = window.obj1138_onLoad_runningActionsCount - 1;
if (window.obj1138_onLoad_runningActionsCount == 0) {
	obj1138_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1138_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1138_onLoad_activeActionGroupIndex = -1;
		$("#obj1138").trigger("obj1138_onLoad_ended");
		
		return;
	}
	window.obj1138_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1138 
scale_1142();
function scale_1142() {
	window.obj1138_onLoad_runningActionsCount = obj1138_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1138";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1138';
	var transformOriginX = '0%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.5';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_1142_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1142_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1142_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1142_completed() {
	setTimeout(function() {
		window.obj1138_onLoad_runningActionsCount = window.obj1138_onLoad_runningActionsCount - 1;
if (window.obj1138_onLoad_runningActionsCount == 0) {
	obj1138_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1138_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1138_onLoad_activeActionGroupIndex = -1;
		$("#obj1138").trigger("obj1138_onLoad_ended");
		
		return;
	}
	window.obj1138_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1138_onLoad();
function loop_obj1138_onLoad() {
	var loopCount = 0;
	window.obj1138_onLoad_loopCount = window.obj1138_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1138_onLoad_loopCount > loopCount) {
		window.obj1138_onLoad_loopCount = 0
		obj1138_onLoad_actionGroup3();
	} else {
		obj1138_onLoad_actionGroup0();
	}
}













};
obj1138_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1138_onLoad_activeActionGroupIndex = -1;
		$("#obj1138").trigger("obj1138_onLoad_ended");
		
		return;
	}
	window.obj1138_onLoad_activeActionGroupIndex = 3;
	





















};
obj555_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj555_onTap_activeActionGroupIndex = -1;
		$("#obj555").trigger("obj555_onTap_ended");
		
		return;
	}
	window.obj555_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj555 
hide_561();
function hide_561() {
	var element = "#obj555";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj555_onTap_runningActionsCount = obj555_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 100;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj555_onTap_runningActionsCount = window.obj555_onTap_runningActionsCount - 1;
if (window.obj555_onTap_runningActionsCount == 0) {
	obj555_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_561(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj555_onTap_runningActionsCount = window.obj555_onTap_runningActionsCount - 1;
if (window.obj555_onTap_runningActionsCount == 0) {
	obj555_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj558 
(function(){
	window.obj555_onTap_runningActionsCount = obj555_onTap_runningActionsCount + 1;

	var element = "#obj558";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 100;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj555_onTap_runningActionsCount = window.obj555_onTap_runningActionsCount - 1;
if (window.obj555_onTap_runningActionsCount == 0) {
	obj555_onTap_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj555_onTap_runningActionsCount = window.obj555_onTap_runningActionsCount - 1;
if (window.obj555_onTap_runningActionsCount == 0) {
	obj555_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();





//	action: playAudioFile
playAudioFile_747();
function playAudioFile_747() {
	window.obj555_onTap_runningActionsCount = obj555_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile747")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile747");
			$("#obj_audio_playSoundFile747").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj555_onTap_runningActionsCount = window.obj555_onTap_runningActionsCount - 1;
if (window.obj555_onTap_runningActionsCount == 0) {
	obj555_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj555_onTap_runningActionsCount = window.obj555_onTap_runningActionsCount - 1;
if (window.obj555_onTap_runningActionsCount == 0) {
	obj555_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj555_onTap_runningActionsCount = window.obj555_onTap_runningActionsCount - 1;
if (window.obj555_onTap_runningActionsCount == 0) {
	obj555_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj555_onTap_runningActionsCount = window.obj555_onTap_runningActionsCount - 1;
if (window.obj555_onTap_runningActionsCount == 0) {
	obj555_onTap_actionGroup1();
}
		}
	}
	
	
	
}












//	action: Run JavaScript
runjs_557();
function runjs_557() {
	window.obj555_onTap_runningActionsCount = obj555_onTap_runningActionsCount + 1;

	XPUB.toggleSoundtrack();
	setTimeout(function() {
		window.obj555_onTap_runningActionsCount = window.obj555_onTap_runningActionsCount - 1;
if (window.obj555_onTap_runningActionsCount == 0) {
	obj555_onTap_actionGroup1();
}
	}, 1);
}






};
obj555_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj555_onTap_activeActionGroupIndex = -1;
		$("#obj555").trigger("obj555_onTap_ended");
		
		return;
	}
	window.obj555_onTap_activeActionGroupIndex = 1;
	





















};
obj558_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj558_onTap_activeActionGroupIndex = -1;
		$("#obj558").trigger("obj558_onTap_ended");
		
		return;
	}
	window.obj558_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj558 
hide_563();
function hide_563() {
	var element = "#obj558";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj558_onTap_runningActionsCount = obj558_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 100;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj558_onTap_runningActionsCount = window.obj558_onTap_runningActionsCount - 1;
if (window.obj558_onTap_runningActionsCount == 0) {
	obj558_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_563(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj558_onTap_runningActionsCount = window.obj558_onTap_runningActionsCount - 1;
if (window.obj558_onTap_runningActionsCount == 0) {
	obj558_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj555 
(function(){
	window.obj558_onTap_runningActionsCount = obj558_onTap_runningActionsCount + 1;

	var element = "#obj555";
	if ($(element).hasClass("SCImage")) {
		try {
			const img = $(element + " img")[0];
			img.decode()
				.then(function() { showObject(); })
				.catch(function(encodingError) {
					console.error(encodingError);
					showObject();
				});
		} catch (err) {
			showObject();
		}
	} else {
		showObject();
	}
	
	function showObject() {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 100;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj558_onTap_runningActionsCount = window.obj558_onTap_runningActionsCount - 1;
if (window.obj558_onTap_runningActionsCount == 0) {
	obj558_onTap_actionGroup1();
}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			window.obj558_onTap_runningActionsCount = window.obj558_onTap_runningActionsCount - 1;
if (window.obj558_onTap_runningActionsCount == 0) {
	obj558_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();





//	action: playAudioFile
playAudioFile_746();
function playAudioFile_746() {
	window.obj558_onTap_runningActionsCount = obj558_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile746")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	var useReader = typeof(window.XPUB.readerPrefersToHandleAudio) !== "undefined" ?
		window.XPUB.readerPrefersToHandleAudio : (/iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()));
	if (useReader) {
		if (waitForCompletion) {
			XPUB.playAudio(myAudio.src, playFromBeginning, "obj_audio_playSoundFile746");
			$("#obj_audio_playSoundFile746").one('ended', function() {
				// this.removeEventListener('ended',arguments.callee,false);
				window.obj558_onTap_runningActionsCount = window.obj558_onTap_runningActionsCount - 1;
if (window.obj558_onTap_runningActionsCount == 0) {
	obj558_onTap_actionGroup1();
}
			});
		} else {
			XPUB.playAudio(myAudio.src, playFromBeginning, null);
			window.obj558_onTap_runningActionsCount = window.obj558_onTap_runningActionsCount - 1;
if (window.obj558_onTap_runningActionsCount == 0) {
	obj558_onTap_actionGroup1();
}
		}
		
	} else {
		if (playFromBeginning) {
			try {
				myAudio.currentTime = 0;
			} catch (err) {
				console.log(err);
				myAudio.src = myAudio.src;
			}
		}
		myAudio.play();
		if (waitForCompletion) {
			myAudio.addEventListener('ended', function() {
				this.removeEventListener('ended',arguments.callee,false);
				window.obj558_onTap_runningActionsCount = window.obj558_onTap_runningActionsCount - 1;
if (window.obj558_onTap_runningActionsCount == 0) {
	obj558_onTap_actionGroup1();
}
			}, false);
		} else {
			window.obj558_onTap_runningActionsCount = window.obj558_onTap_runningActionsCount - 1;
if (window.obj558_onTap_runningActionsCount == 0) {
	obj558_onTap_actionGroup1();
}
		}
	}
	
	
	
}












//	action: Run JavaScript
runjs_560();
function runjs_560() {
	window.obj558_onTap_runningActionsCount = obj558_onTap_runningActionsCount + 1;

	XPUB.toggleSoundtrack();
	setTimeout(function() {
		window.obj558_onTap_runningActionsCount = window.obj558_onTap_runningActionsCount - 1;
if (window.obj558_onTap_runningActionsCount == 0) {
	obj558_onTap_actionGroup1();
}
	}, 1);
}






};
obj558_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj558_onTap_activeActionGroupIndex = -1;
		$("#obj558").trigger("obj558_onTap_ended");
		
		return;
	}
	window.obj558_onTap_activeActionGroupIndex = 1;
	





















};
obj576_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj576_onTap_activeActionGroupIndex = -1;
		$("#obj576").trigger("obj576_onTap_ended");
		
		return;
	}
	window.obj576_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_583();
function goToPage_583() {
	window.obj576_onTap_runningActionsCount = obj576_onTap_runningActionsCount + 1;
	$("#anchor21")[0].click();
	window.obj576_onTap_runningActionsCount = window.obj576_onTap_runningActionsCount - 1;
if (window.obj576_onTap_runningActionsCount == 0) {
	obj576_onTap_actionGroup1();
}
}




















};
obj576_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj576_onTap_activeActionGroupIndex = -1;
		$("#obj576").trigger("obj576_onTap_ended");
		
		return;
	}
	window.obj576_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



/*
 *
 *   obj5: Event Touch Down
 *
 */
$("#obj5").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5_onTap_activeActionGroupIndex != -1) return;
var obj5_onTap_runningActionsCount = 0;
var obj5_onTap_loopCount = 0;
obj5_onTap_actionGroup0();
});


































/*
 *
 *   obj753: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj753_onLoad_activeActionGroupIndex != -1) return;
var obj753_onLoad_runningActionsCount = 0;
var obj753_onLoad_loopCount = 0;
obj753_onLoad_actionGroup0();
});








/*
 *
 *   obj1138: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1138_onLoad_activeActionGroupIndex != -1) return;
var obj1138_onLoad_runningActionsCount = 0;
var obj1138_onLoad_loopCount = 0;
obj1138_onLoad_actionGroup0();
});






/*
 *
 *   obj555: Event Touch Down
 *
 */
$("#obj555").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj555_onTap_activeActionGroupIndex != -1) return;
var obj555_onTap_runningActionsCount = 0;
var obj555_onTap_loopCount = 0;
obj555_onTap_actionGroup0();
});








/*
 *
 *   obj558: Event Touch Down
 *
 */
$("#obj558").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj558_onTap_activeActionGroupIndex != -1) return;
var obj558_onTap_runningActionsCount = 0;
var obj558_onTap_loopCount = 0;
obj558_onTap_actionGroup0();
});








/*
 *
 *   obj576: Event Touch Down
 *
 */
$("#obj576").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj576_onTap_activeActionGroupIndex != -1) return;
var obj576_onTap_runningActionsCount = 0;
var obj576_onTap_loopCount = 0;
obj576_onTap_actionGroup0();
});





















		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(PubCoder.Events.PagePlay, function() {
	$(window).trigger(PubCoder.Events.PageReady);
	
$("#obj5").trigger('SCEventShow');
$("#obj7").trigger('SCEventShow');
$("#obj8").trigger('SCEventShow');
$("#obj9").trigger('SCEventShow');
$("#obj753").trigger('SCEventShow');
$("#obj1138").trigger('SCEventShow');
$("#obj555").trigger('SCEventShow');
$("#obj576").trigger('SCEventShow');
$("#obj740").trigger('SCEventShow');
$("#obj741").trigger('SCEventShow');
	
});