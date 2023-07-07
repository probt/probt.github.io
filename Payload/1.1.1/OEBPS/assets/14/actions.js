pubcoder.projectID = pubcoder.projectID || "6FAC2C4529A04E0F9DB979421097B9EA";
pubcoder.project.id = pubcoder.project.id || "6FAC2C4529A04E0F9DB979421097B9EA";
pubcoder.project.title = pubcoder.project.title || "Lorenzo\'s Llama";
pubcoder.page.id = pubcoder.page.id || 58;
pubcoder.page.title = pubcoder.page.title || "14";
pubcoder.page.number = pubcoder.page.number || 14;
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
var obj1120_onLoad_activeActionGroupIndex = -1;
var obj1120_onLoad_runningActionsCount = 0;
var obj1120_onLoad_loopCount = 0;
var obj610_onTap_activeActionGroupIndex = -1;
var obj610_onTap_runningActionsCount = 0;
var obj610_onTap_loopCount = 0;
var obj605_onTap_activeActionGroupIndex = -1;
var obj605_onTap_runningActionsCount = 0;
var obj605_onTap_loopCount = 0;
var obj602_onTap_activeActionGroupIndex = -1;
var obj602_onTap_runningActionsCount = 0;
var obj602_onTap_loopCount = 0;
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
		
obj1120_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1120_onLoad_activeActionGroupIndex = -1;
		$("#obj1120").trigger("obj1120_onLoad_ended");
		
		return;
	}
	window.obj1120_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1120 
rotate_1123();
function rotate_1123() {
	window.obj1120_onLoad_runningActionsCount = obj1120_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1120";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1120';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '5';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1123_completed(); }
	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1123_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1123_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1123_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1123_completed() {
	setTimeout(function() {
		window.obj1120_onLoad_runningActionsCount = window.obj1120_onLoad_runningActionsCount - 1;
if (window.obj1120_onLoad_runningActionsCount == 0) {
	obj1120_onLoad_actionGroup1();
}
	}, 1);
}


//	action: scale
//	target: obj1120 
scale_1124();
function scale_1124() {
	window.obj1120_onLoad_runningActionsCount = obj1120_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1120";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1120';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
	var effectDuration = '0.7';
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
		scale_1124_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1124_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1124_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1124_completed() {
	setTimeout(function() {
		window.obj1120_onLoad_runningActionsCount = window.obj1120_onLoad_runningActionsCount - 1;
if (window.obj1120_onLoad_runningActionsCount == 0) {
	obj1120_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1120_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1120_onLoad_activeActionGroupIndex = -1;
		$("#obj1120").trigger("obj1120_onLoad_ended");
		
		return;
	}
	window.obj1120_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj1120 
rotate_1125();
function rotate_1125() {
	window.obj1120_onLoad_runningActionsCount = obj1120_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1120";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1120';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-5';
	var rotationSpeed = 1.5;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1125_completed(); }
	//TweenMax.to(targetObjectId, 1.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1125_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1125_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1125_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1125_completed() {
	setTimeout(function() {
		window.obj1120_onLoad_runningActionsCount = window.obj1120_onLoad_runningActionsCount - 1;
if (window.obj1120_onLoad_runningActionsCount == 0) {
	obj1120_onLoad_actionGroup2();
}
	}, 1);
}


//	action: scale
//	target: obj1120 
scale_1126();
function scale_1126() {
	window.obj1120_onLoad_runningActionsCount = obj1120_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1120";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1120';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1.3';
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
		scale_1126_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1126_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1126_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1126_completed() {
	setTimeout(function() {
		window.obj1120_onLoad_runningActionsCount = window.obj1120_onLoad_runningActionsCount - 1;
if (window.obj1120_onLoad_runningActionsCount == 0) {
	obj1120_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1120_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1120_onLoad_activeActionGroupIndex = -1;
		$("#obj1120").trigger("obj1120_onLoad_ended");
		
		return;
	}
	window.obj1120_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1120_onLoad();
function loop_obj1120_onLoad() {
	var loopCount = 0;
	window.obj1120_onLoad_loopCount = window.obj1120_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1120_onLoad_loopCount > loopCount) {
		window.obj1120_onLoad_loopCount = 0
		obj1120_onLoad_actionGroup3();
	} else {
		obj1120_onLoad_actionGroup0();
	}
}













};
obj1120_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1120_onLoad_activeActionGroupIndex = -1;
		$("#obj1120").trigger("obj1120_onLoad_ended");
		
		return;
	}
	window.obj1120_onLoad_activeActionGroupIndex = 3;
	





















};
obj610_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj610_onTap_activeActionGroupIndex = -1;
		$("#obj610").trigger("obj610_onTap_ended");
		
		return;
	}
	window.obj610_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_612();
function runjs_612() {
	window.obj610_onTap_runningActionsCount = obj610_onTap_runningActionsCount + 1;

	XPUB.toggleSoundtrack();
	setTimeout(function() {
		window.obj610_onTap_runningActionsCount = window.obj610_onTap_runningActionsCount - 1;
if (window.obj610_onTap_runningActionsCount == 0) {
	obj610_onTap_actionGroup1();
}
	}, 1);
}






};
obj610_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj610_onTap_activeActionGroupIndex = -1;
		$("#obj610").trigger("obj610_onTap_ended");
		
		return;
	}
	window.obj610_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj610 
hide_613();
function hide_613() {
	var element = "#obj610";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj610_onTap_runningActionsCount = obj610_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 100;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj610_onTap_runningActionsCount = window.obj610_onTap_runningActionsCount - 1;
if (window.obj610_onTap_runningActionsCount == 0) {
	obj610_onTap_actionGroup2();
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
		setTimeout(hide_613(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj610_onTap_runningActionsCount = window.obj610_onTap_runningActionsCount - 1;
if (window.obj610_onTap_runningActionsCount == 0) {
	obj610_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj610_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj610_onTap_activeActionGroupIndex = -1;
		$("#obj610").trigger("obj610_onTap_ended");
		
		return;
	}
	window.obj610_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj605 
(function(){
	window.obj610_onTap_runningActionsCount = obj610_onTap_runningActionsCount + 1;

	var element = "#obj605";
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
				window.obj610_onTap_runningActionsCount = window.obj610_onTap_runningActionsCount - 1;
if (window.obj610_onTap_runningActionsCount == 0) {
	obj610_onTap_actionGroup3();
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
			window.obj610_onTap_runningActionsCount = window.obj610_onTap_runningActionsCount - 1;
if (window.obj610_onTap_runningActionsCount == 0) {
	obj610_onTap_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();



















};
obj610_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj610_onTap_activeActionGroupIndex = -1;
		$("#obj610").trigger("obj610_onTap_ended");
		
		return;
	}
	window.obj610_onTap_activeActionGroupIndex = 3;
	





















};
obj605_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj605_onTap_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_onTap_ended");
		
		return;
	}
	window.obj605_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_607();
function runjs_607() {
	window.obj605_onTap_runningActionsCount = obj605_onTap_runningActionsCount + 1;

	XPUB.toggleSoundtrack();
	setTimeout(function() {
		window.obj605_onTap_runningActionsCount = window.obj605_onTap_runningActionsCount - 1;
if (window.obj605_onTap_runningActionsCount == 0) {
	obj605_onTap_actionGroup1();
}
	}, 1);
}






};
obj605_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj605_onTap_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_onTap_ended");
		
		return;
	}
	window.obj605_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj605 
hide_608();
function hide_608() {
	var element = "#obj605";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj605_onTap_runningActionsCount = obj605_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 100;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj605_onTap_runningActionsCount = window.obj605_onTap_runningActionsCount - 1;
if (window.obj605_onTap_runningActionsCount == 0) {
	obj605_onTap_actionGroup2();
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
		setTimeout(hide_608(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj605_onTap_runningActionsCount = window.obj605_onTap_runningActionsCount - 1;
if (window.obj605_onTap_runningActionsCount == 0) {
	obj605_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj605_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj605_onTap_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_onTap_ended");
		
		return;
	}
	window.obj605_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj610 
(function(){
	window.obj605_onTap_runningActionsCount = obj605_onTap_runningActionsCount + 1;

	var element = "#obj610";
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
				window.obj605_onTap_runningActionsCount = window.obj605_onTap_runningActionsCount - 1;
if (window.obj605_onTap_runningActionsCount == 0) {
	obj605_onTap_actionGroup3();
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
			window.obj605_onTap_runningActionsCount = window.obj605_onTap_runningActionsCount - 1;
if (window.obj605_onTap_runningActionsCount == 0) {
	obj605_onTap_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();



















};
obj605_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj605_onTap_activeActionGroupIndex = -1;
		$("#obj605").trigger("obj605_onTap_ended");
		
		return;
	}
	window.obj605_onTap_activeActionGroupIndex = 3;
	





















};
obj602_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj602_onTap_activeActionGroupIndex = -1;
		$("#obj602").trigger("obj602_onTap_ended");
		
		return;
	}
	window.obj602_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_604();
function goToPage_604() {
	window.obj602_onTap_runningActionsCount = obj602_onTap_runningActionsCount + 1;
	$("#anchor69")[0].click();
	window.obj602_onTap_runningActionsCount = window.obj602_onTap_runningActionsCount - 1;
if (window.obj602_onTap_runningActionsCount == 0) {
	obj602_onTap_actionGroup1();
}
}




















};
obj602_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj602_onTap_activeActionGroupIndex = -1;
		$("#obj602").trigger("obj602_onTap_ended");
		
		return;
	}
	window.obj602_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





















/*
 *
 *   obj1120: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1120_onLoad_activeActionGroupIndex != -1) return;
var obj1120_onLoad_runningActionsCount = 0;
var obj1120_onLoad_loopCount = 0;
obj1120_onLoad_actionGroup0();
});






/*
 *
 *   obj610: Event Touch Down
 *
 */
$("#obj610").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj610_onTap_activeActionGroupIndex != -1) return;
var obj610_onTap_runningActionsCount = 0;
var obj610_onTap_loopCount = 0;
obj610_onTap_actionGroup0();
});








/*
 *
 *   obj605: Event Touch Down
 *
 */
$("#obj605").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj605_onTap_activeActionGroupIndex != -1) return;
var obj605_onTap_runningActionsCount = 0;
var obj605_onTap_loopCount = 0;
obj605_onTap_actionGroup0();
});








/*
 *
 *   obj602: Event Touch Down
 *
 */
$("#obj602").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj602_onTap_activeActionGroupIndex != -1) return;
var obj602_onTap_runningActionsCount = 0;
var obj602_onTap_loopCount = 0;
obj602_onTap_actionGroup0();
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
	
$("#obj59").trigger('SCEventShow');
$("#obj61").trigger('SCEventShow');
$("#obj1120").trigger('SCEventShow');
$("#obj610").trigger('SCEventShow');
$("#obj602").trigger('SCEventShow');
	
});