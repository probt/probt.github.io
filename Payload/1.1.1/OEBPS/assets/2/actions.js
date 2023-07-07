pubcoder.projectID = pubcoder.projectID || "6FAC2C4529A04E0F9DB979421097B9EA";
pubcoder.project.id = pubcoder.project.id || "6FAC2C4529A04E0F9DB979421097B9EA";
pubcoder.project.title = pubcoder.project.title || "Lorenzo\'s Llama";
pubcoder.page.id = pubcoder.page.id || 11;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
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
var obj665_onTap_activeActionGroupIndex = -1;
var obj665_onTap_runningActionsCount = 0;
var obj665_onTap_loopCount = 0;
var obj709_onTap_activeActionGroupIndex = -1;
var obj709_onTap_runningActionsCount = 0;
var obj709_onTap_loopCount = 0;
var obj1132_onLoad_activeActionGroupIndex = -1;
var obj1132_onLoad_runningActionsCount = 0;
var obj1132_onLoad_loopCount = 0;
var obj1026_onLoad_activeActionGroupIndex = -1;
var obj1026_onLoad_runningActionsCount = 0;
var obj1026_onLoad_loopCount = 0;
var obj660_onTap_activeActionGroupIndex = -1;
var obj660_onTap_runningActionsCount = 0;
var obj660_onTap_loopCount = 0;
var obj647_onTap_activeActionGroupIndex = -1;
var obj647_onTap_runningActionsCount = 0;
var obj647_onTap_loopCount = 0;
var obj651_onTap_activeActionGroupIndex = -1;
var obj651_onTap_runningActionsCount = 0;
var obj651_onTap_loopCount = 0;
var obj590_onTap_activeActionGroupIndex = -1;
var obj590_onTap_runningActionsCount = 0;
var obj590_onTap_loopCount = 0;
var obj585_onTap_activeActionGroupIndex = -1;
var obj585_onTap_runningActionsCount = 0;
var obj585_onTap_loopCount = 0;
var obj595_onTap_activeActionGroupIndex = -1;
var obj595_onTap_runningActionsCount = 0;
var obj595_onTap_loopCount = 0;
var obj598_onTap_activeActionGroupIndex = -1;
var obj598_onTap_runningActionsCount = 0;
var obj598_onTap_loopCount = 0;
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
		
obj665_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj665_onTap_activeActionGroupIndex = -1;
		$("#obj665").trigger("obj665_onTap_ended");
		
		return;
	}
	window.obj665_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj660 
(function(){
	window.obj665_onTap_runningActionsCount = obj665_onTap_runningActionsCount + 1;

	var element = "#obj660";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
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
			window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj647 
(function(){
	window.obj665_onTap_runningActionsCount = obj665_onTap_runningActionsCount + 1;

	var element = "#obj647";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
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
			window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj645 
(function(){
	window.obj665_onTap_runningActionsCount = obj665_onTap_runningActionsCount + 1;

	var element = "#obj645";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
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
			window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj636 
(function(){
	window.obj665_onTap_runningActionsCount = obj665_onTap_runningActionsCount + 1;

	var element = "#obj636";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
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
			window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj642 
(function(){
	window.obj665_onTap_runningActionsCount = obj665_onTap_runningActionsCount + 1;

	var element = "#obj642";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
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
			window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();











//	action: playAudio
//	target: obj719 
playAudio_696();
function playAudio_696() {
	window.obj665_onTap_runningActionsCount = obj665_onTap_runningActionsCount + 1;
	var myAudio = $("#obj719")[0];
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
		    window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
}
	}
}


//	action: Run JavaScript
runjs_667();
function runjs_667() {
	window.obj665_onTap_runningActionsCount = obj665_onTap_runningActionsCount + 1;

	
	setTimeout(function() {
		window.obj665_onTap_runningActionsCount = window.obj665_onTap_runningActionsCount - 1;
if (window.obj665_onTap_runningActionsCount == 0) {
	obj665_onTap_actionGroup1();
}
	}, 1);
}






};
obj665_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj665_onTap_activeActionGroupIndex = -1;
		$("#obj665").trigger("obj665_onTap_ended");
		
		return;
	}
	window.obj665_onTap_activeActionGroupIndex = 1;
	





















};
obj709_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj709_onTap_activeActionGroupIndex = -1;
		$("#obj709").trigger("obj709_onTap_ended");
		
		return;
	}
	window.obj709_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj660 
(function(){
	window.obj709_onTap_runningActionsCount = obj709_onTap_runningActionsCount + 1;

	var element = "#obj660";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
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
			window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj651 
(function(){
	window.obj709_onTap_runningActionsCount = obj709_onTap_runningActionsCount + 1;

	var element = "#obj651";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
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
			window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj653 
(function(){
	window.obj709_onTap_runningActionsCount = obj709_onTap_runningActionsCount + 1;

	var element = "#obj653";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
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
			window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj655 
(function(){
	window.obj709_onTap_runningActionsCount = obj709_onTap_runningActionsCount + 1;

	var element = "#obj655";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
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
			window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();
//	action: show 
//	target: obj649 
(function(){
	window.obj709_onTap_runningActionsCount = obj709_onTap_runningActionsCount + 1;

	var element = "#obj649";
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
	
		var animationType = "fadeIn";
		var animationDurationMs = 500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
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
			window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();











//	action: playAudio
//	target: obj718 
playAudio_717();
function playAudio_717() {
	window.obj709_onTap_runningActionsCount = obj709_onTap_runningActionsCount + 1;
	var myAudio = $("#obj718")[0];
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
		    window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
}
	}
}


//	action: Run JavaScript
runjs_711();
function runjs_711() {
	window.obj709_onTap_runningActionsCount = obj709_onTap_runningActionsCount + 1;

	
	setTimeout(function() {
		window.obj709_onTap_runningActionsCount = window.obj709_onTap_runningActionsCount - 1;
if (window.obj709_onTap_runningActionsCount == 0) {
	obj709_onTap_actionGroup1();
}
	}, 1);
}






};
obj709_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj709_onTap_activeActionGroupIndex = -1;
		$("#obj709").trigger("obj709_onTap_ended");
		
		return;
	}
	window.obj709_onTap_activeActionGroupIndex = 1;
	





















};
obj1132_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1132_onLoad_activeActionGroupIndex = -1;
		$("#obj1132").trigger("obj1132_onLoad_ended");
		
		return;
	}
	window.obj1132_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1132 
rotate_1135();
function rotate_1135() {
	window.obj1132_onLoad_runningActionsCount = obj1132_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1132";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1132';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '5';
	var rotationSpeed = 0.5;
	var rotationEasing = 'ease-in';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1135_completed(); }
	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1135_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1135_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1135_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1135_completed() {
	setTimeout(function() {
		window.obj1132_onLoad_runningActionsCount = window.obj1132_onLoad_runningActionsCount - 1;
if (window.obj1132_onLoad_runningActionsCount == 0) {
	obj1132_onLoad_actionGroup1();
}
	}, 1);
}














};
obj1132_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1132_onLoad_activeActionGroupIndex = -1;
		$("#obj1132").trigger("obj1132_onLoad_ended");
		
		return;
	}
	window.obj1132_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj1132 
rotate_1137();
function rotate_1137() {
	window.obj1132_onLoad_runningActionsCount = obj1132_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1132";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1132';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-5';
	var rotationSpeed = 0.5;
	var rotationEasing = 'ease-out';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1137_completed(); }
	//TweenMax.to(targetObjectId, 0.5, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1137_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1137_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1137_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1137_completed() {
	setTimeout(function() {
		window.obj1132_onLoad_runningActionsCount = window.obj1132_onLoad_runningActionsCount - 1;
if (window.obj1132_onLoad_runningActionsCount == 0) {
	obj1132_onLoad_actionGroup2();
}
	}, 1);
}














};
obj1132_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1132_onLoad_activeActionGroupIndex = -1;
		$("#obj1132").trigger("obj1132_onLoad_ended");
		
		return;
	}
	window.obj1132_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1132_onLoad();
function loop_obj1132_onLoad() {
	var loopCount = 0;
	window.obj1132_onLoad_loopCount = window.obj1132_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1132_onLoad_loopCount > loopCount) {
		window.obj1132_onLoad_loopCount = 0
		obj1132_onLoad_actionGroup3();
	} else {
		obj1132_onLoad_actionGroup0();
	}
}













};
obj1132_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1132_onLoad_activeActionGroupIndex = -1;
		$("#obj1132").trigger("obj1132_onLoad_ended");
		
		return;
	}
	window.obj1132_onLoad_activeActionGroupIndex = 3;
	





















};
obj1026_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1026_onLoad_activeActionGroupIndex = -1;
		$("#obj1026").trigger("obj1026_onLoad_ended");
		
		return;
	}
	window.obj1026_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1026 
scale_1029();
function scale_1029() {
	window.obj1026_onLoad_runningActionsCount = obj1026_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1026";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1026';
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
		scale_1029_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1029_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1029_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1029_completed() {
	setTimeout(function() {
		window.obj1026_onLoad_runningActionsCount = window.obj1026_onLoad_runningActionsCount - 1;
if (window.obj1026_onLoad_runningActionsCount == 0) {
	obj1026_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1026_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1026_onLoad_activeActionGroupIndex = -1;
		$("#obj1026").trigger("obj1026_onLoad_ended");
		
		return;
	}
	window.obj1026_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1026 
scale_1030();
function scale_1030() {
	window.obj1026_onLoad_runningActionsCount = obj1026_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1026";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1026';
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
		scale_1030_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1030_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1030_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1030_completed() {
	setTimeout(function() {
		window.obj1026_onLoad_runningActionsCount = window.obj1026_onLoad_runningActionsCount - 1;
if (window.obj1026_onLoad_runningActionsCount == 0) {
	obj1026_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1026_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1026_onLoad_activeActionGroupIndex = -1;
		$("#obj1026").trigger("obj1026_onLoad_ended");
		
		return;
	}
	window.obj1026_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1026_onLoad();
function loop_obj1026_onLoad() {
	var loopCount = 0;
	window.obj1026_onLoad_loopCount = window.obj1026_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1026_onLoad_loopCount > loopCount) {
		window.obj1026_onLoad_loopCount = 0
		obj1026_onLoad_actionGroup3();
	} else {
		obj1026_onLoad_actionGroup0();
	}
}













};
obj1026_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1026_onLoad_activeActionGroupIndex = -1;
		$("#obj1026").trigger("obj1026_onLoad_ended");
		
		return;
	}
	window.obj1026_onLoad_activeActionGroupIndex = 3;
	





















};
obj660_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj660_onTap_activeActionGroupIndex = -1;
		$("#obj660").trigger("obj660_onTap_ended");
		
		return;
	}
	window.obj660_onTap_activeActionGroupIndex = 0;
	








//	action: wait
wait_662();
function wait_662() {
	window.obj660_onTap_runningActionsCount = obj660_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj660_onTap_runningActionsCount = window.obj660_onTap_runningActionsCount - 1;
if (window.obj660_onTap_runningActionsCount == 0) {
	obj660_onTap_actionGroup1();
}
	}, 100);
}












};
obj660_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj660_onTap_activeActionGroupIndex = -1;
		$("#obj660").trigger("obj660_onTap_ended");
		
		return;
	}
	window.obj660_onTap_activeActionGroupIndex = 1;
	





















};
obj647_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj647_onTap_activeActionGroupIndex = -1;
		$("#obj647").trigger("obj647_onTap_ended");
		
		return;
	}
	window.obj647_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj647 
hide_697();
function hide_697() {
	var element = "#obj647";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj647_onTap_runningActionsCount = obj647_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup1();
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
		setTimeout(hide_697(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj645 
hide_705();
function hide_705() {
	var element = "#obj645";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj647_onTap_runningActionsCount = obj647_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup1();
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
		setTimeout(hide_705(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj636 
hide_706();
function hide_706() {
	var element = "#obj636";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj647_onTap_runningActionsCount = obj647_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup1();
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
		setTimeout(hide_706(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj642 
hide_707();
function hide_707() {
	var element = "#obj642";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj647_onTap_runningActionsCount = obj647_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup1();
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
		setTimeout(hide_707(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}












//	action: stopMovie 
//	target: obj719 
stopAudio_1032();
function stopAudio_1032() {
	window.obj647_onTap_runningActionsCount = obj647_onTap_runningActionsCount + 1;
	var myAudio = $("#obj719")[0];
	myAudio.pause();
	window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup1();
}
}







};
obj647_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj647_onTap_activeActionGroupIndex = -1;
		$("#obj647").trigger("obj647_onTap_ended");
		
		return;
	}
	window.obj647_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj660 
hide_708();
function hide_708() {
	var element = "#obj660";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj647_onTap_runningActionsCount = obj647_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup2();
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
		setTimeout(hide_708(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj647_onTap_runningActionsCount = window.obj647_onTap_runningActionsCount - 1;
if (window.obj647_onTap_runningActionsCount == 0) {
	obj647_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj647_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj647_onTap_activeActionGroupIndex = -1;
		$("#obj647").trigger("obj647_onTap_ended");
		
		return;
	}
	window.obj647_onTap_activeActionGroupIndex = 2;
	





















};
obj651_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj651_onTap_activeActionGroupIndex = -1;
		$("#obj651").trigger("obj651_onTap_ended");
		
		return;
	}
	window.obj651_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj651 
hide_721();
function hide_721() {
	var element = "#obj651";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj651_onTap_runningActionsCount = obj651_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
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
		setTimeout(hide_721(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj653 
hide_722();
function hide_722() {
	var element = "#obj653";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj651_onTap_runningActionsCount = obj651_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
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
		setTimeout(hide_722(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj655 
hide_723();
function hide_723() {
	var element = "#obj655";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj651_onTap_runningActionsCount = obj651_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
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
		setTimeout(hide_723(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj649 
hide_724();
function hide_724() {
	var element = "#obj649";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj651_onTap_runningActionsCount = obj651_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
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
		setTimeout(hide_724(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj660 
hide_725();
function hide_725() {
	var element = "#obj660";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj651_onTap_runningActionsCount = obj651_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
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
		setTimeout(hide_725(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}












//	action: stopMovie 
//	target: obj718 
stopAudio_1033();
function stopAudio_1033() {
	window.obj651_onTap_runningActionsCount = obj651_onTap_runningActionsCount + 1;
	var myAudio = $("#obj718")[0];
	myAudio.pause();
	window.obj651_onTap_runningActionsCount = window.obj651_onTap_runningActionsCount - 1;
if (window.obj651_onTap_runningActionsCount == 0) {
	obj651_onTap_actionGroup1();
}
}







};
obj651_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj651_onTap_activeActionGroupIndex = -1;
		$("#obj651").trigger("obj651_onTap_ended");
		
		return;
	}
	window.obj651_onTap_activeActionGroupIndex = 1;
	





















};
obj590_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_onTap_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_onTap_ended");
		
		return;
	}
	window.obj590_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_592();
function runjs_592() {
	window.obj590_onTap_runningActionsCount = obj590_onTap_runningActionsCount + 1;

	XPUB.toggleSoundtrack();
	setTimeout(function() {
		window.obj590_onTap_runningActionsCount = window.obj590_onTap_runningActionsCount - 1;
if (window.obj590_onTap_runningActionsCount == 0) {
	obj590_onTap_actionGroup1();
}
	}, 1);
}






};
obj590_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_onTap_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_onTap_ended");
		
		return;
	}
	window.obj590_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj590 
hide_593();
function hide_593() {
	var element = "#obj590";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj590_onTap_runningActionsCount = obj590_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 100;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj590_onTap_runningActionsCount = window.obj590_onTap_runningActionsCount - 1;
if (window.obj590_onTap_runningActionsCount == 0) {
	obj590_onTap_actionGroup2();
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
		setTimeout(hide_593(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj590_onTap_runningActionsCount = window.obj590_onTap_runningActionsCount - 1;
if (window.obj590_onTap_runningActionsCount == 0) {
	obj590_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj590_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_onTap_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_onTap_ended");
		
		return;
	}
	window.obj590_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj585 
(function(){
	window.obj590_onTap_runningActionsCount = obj590_onTap_runningActionsCount + 1;

	var element = "#obj585";
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
				window.obj590_onTap_runningActionsCount = window.obj590_onTap_runningActionsCount - 1;
if (window.obj590_onTap_runningActionsCount == 0) {
	obj590_onTap_actionGroup3();
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
			window.obj590_onTap_runningActionsCount = window.obj590_onTap_runningActionsCount - 1;
if (window.obj590_onTap_runningActionsCount == 0) {
	obj590_onTap_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();



















};
obj590_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_onTap_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_onTap_ended");
		
		return;
	}
	window.obj590_onTap_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj689 
playAudio_692();
function playAudio_692() {
	window.obj590_onTap_runningActionsCount = obj590_onTap_runningActionsCount + 1;
	var myAudio = $("#obj689")[0];
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
		    window.obj590_onTap_runningActionsCount = window.obj590_onTap_runningActionsCount - 1;
if (window.obj590_onTap_runningActionsCount == 0) {
	obj590_onTap_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj590_onTap_runningActionsCount = window.obj590_onTap_runningActionsCount - 1;
if (window.obj590_onTap_runningActionsCount == 0) {
	obj590_onTap_actionGroup4();
}
	}
}








};
obj590_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj590_onTap_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_onTap_ended");
		
		return;
	}
	window.obj590_onTap_activeActionGroupIndex = 4;
	





















};
obj585_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj585_onTap_activeActionGroupIndex = -1;
		$("#obj585").trigger("obj585_onTap_ended");
		
		return;
	}
	window.obj585_onTap_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_587();
function runjs_587() {
	window.obj585_onTap_runningActionsCount = obj585_onTap_runningActionsCount + 1;

	XPUB.toggleSoundtrack();
	setTimeout(function() {
		window.obj585_onTap_runningActionsCount = window.obj585_onTap_runningActionsCount - 1;
if (window.obj585_onTap_runningActionsCount == 0) {
	obj585_onTap_actionGroup1();
}
	}, 1);
}






};
obj585_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj585_onTap_activeActionGroupIndex = -1;
		$("#obj585").trigger("obj585_onTap_ended");
		
		return;
	}
	window.obj585_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj585 
hide_588();
function hide_588() {
	var element = "#obj585";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj585_onTap_runningActionsCount = obj585_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 100;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj585_onTap_runningActionsCount = window.obj585_onTap_runningActionsCount - 1;
if (window.obj585_onTap_runningActionsCount == 0) {
	obj585_onTap_actionGroup2();
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
		setTimeout(hide_588(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj585_onTap_runningActionsCount = window.obj585_onTap_runningActionsCount - 1;
if (window.obj585_onTap_runningActionsCount == 0) {
	obj585_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj585_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj585_onTap_activeActionGroupIndex = -1;
		$("#obj585").trigger("obj585_onTap_ended");
		
		return;
	}
	window.obj585_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj590 
(function(){
	window.obj585_onTap_runningActionsCount = obj585_onTap_runningActionsCount + 1;

	var element = "#obj590";
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
				window.obj585_onTap_runningActionsCount = window.obj585_onTap_runningActionsCount - 1;
if (window.obj585_onTap_runningActionsCount == 0) {
	obj585_onTap_actionGroup3();
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
			window.obj585_onTap_runningActionsCount = window.obj585_onTap_runningActionsCount - 1;
if (window.obj585_onTap_runningActionsCount == 0) {
	obj585_onTap_actionGroup3();
}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
	})();



















};
obj585_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj585_onTap_activeActionGroupIndex = -1;
		$("#obj585").trigger("obj585_onTap_ended");
		
		return;
	}
	window.obj585_onTap_activeActionGroupIndex = 3;
	













//	action: stopMovie 
//	target: obj689 
stopAudio_1130();
function stopAudio_1130() {
	window.obj585_onTap_runningActionsCount = obj585_onTap_runningActionsCount + 1;
	var myAudio = $("#obj689")[0];
	myAudio.pause();
	window.obj585_onTap_runningActionsCount = window.obj585_onTap_runningActionsCount - 1;
if (window.obj585_onTap_runningActionsCount == 0) {
	obj585_onTap_actionGroup4();
}
}







};
obj585_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj585_onTap_activeActionGroupIndex = -1;
		$("#obj585").trigger("obj585_onTap_ended");
		
		return;
	}
	window.obj585_onTap_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj689 
playAudio_691();
function playAudio_691() {
	window.obj585_onTap_runningActionsCount = obj585_onTap_runningActionsCount + 1;
	var myAudio = $("#obj689")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
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
		    window.obj585_onTap_runningActionsCount = window.obj585_onTap_runningActionsCount - 1;
if (window.obj585_onTap_runningActionsCount == 0) {
	obj585_onTap_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj585_onTap_runningActionsCount = window.obj585_onTap_runningActionsCount - 1;
if (window.obj585_onTap_runningActionsCount == 0) {
	obj585_onTap_actionGroup5();
}
	}
}








};
obj585_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj585_onTap_activeActionGroupIndex = -1;
		$("#obj585").trigger("obj585_onTap_ended");
		
		return;
	}
	window.obj585_onTap_activeActionGroupIndex = 5;
	





















};
obj595_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj595_onTap_activeActionGroupIndex = -1;
		$("#obj595").trigger("obj595_onTap_ended");
		
		return;
	}
	window.obj595_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_597();
function goToPage_597() {
	window.obj595_onTap_runningActionsCount = obj595_onTap_runningActionsCount + 1;
	$("#anchor29")[0].click();
	window.obj595_onTap_runningActionsCount = window.obj595_onTap_runningActionsCount - 1;
if (window.obj595_onTap_runningActionsCount == 0) {
	obj595_onTap_actionGroup1();
}
}




















};
obj595_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj595_onTap_activeActionGroupIndex = -1;
		$("#obj595").trigger("obj595_onTap_ended");
		
		return;
	}
	window.obj595_onTap_activeActionGroupIndex = 1;
	





















};
obj598_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj598_onTap_activeActionGroupIndex = -1;
		$("#obj598").trigger("obj598_onTap_ended");
		
		return;
	}
	window.obj598_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_600();
function goToPage_600() {
	window.obj598_onTap_runningActionsCount = obj598_onTap_runningActionsCount + 1;
	$("#anchor30")[0].click();
	window.obj598_onTap_runningActionsCount = window.obj598_onTap_runningActionsCount - 1;
if (window.obj598_onTap_runningActionsCount == 0) {
	obj598_onTap_actionGroup1();
}
}




















};
obj598_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj598_onTap_activeActionGroupIndex = -1;
		$("#obj598").trigger("obj598_onTap_ended");
		
		return;
	}
	window.obj598_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



















/*
 *
 *   obj665: Event Touch Down
 *
 */
$("#obj665").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj665_onTap_activeActionGroupIndex != -1) return;
var obj665_onTap_runningActionsCount = 0;
var obj665_onTap_loopCount = 0;
obj665_onTap_actionGroup0();
});








/*
 *
 *   obj709: Event Touch Down
 *
 */
$("#obj709").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj709_onTap_activeActionGroupIndex != -1) return;
var obj709_onTap_runningActionsCount = 0;
var obj709_onTap_loopCount = 0;
obj709_onTap_actionGroup0();
});










/*
 *
 *   obj1132: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1132_onLoad_activeActionGroupIndex != -1) return;
var obj1132_onLoad_runningActionsCount = 0;
var obj1132_onLoad_loopCount = 0;
obj1132_onLoad_actionGroup0();
});








/*
 *
 *   obj1026: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1026_onLoad_activeActionGroupIndex != -1) return;
var obj1026_onLoad_runningActionsCount = 0;
var obj1026_onLoad_loopCount = 0;
obj1026_onLoad_actionGroup0();
});






/*
 *
 *   obj660: Event Touch Down
 *
 */
$("#obj660").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj660_onTap_activeActionGroupIndex != -1) return;
var obj660_onTap_runningActionsCount = 0;
var obj660_onTap_loopCount = 0;
obj660_onTap_actionGroup0();
});








/*
 *
 *   obj647: Event Touch Down
 *
 */
$("#obj647").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj647_onTap_activeActionGroupIndex != -1) return;
var obj647_onTap_runningActionsCount = 0;
var obj647_onTap_loopCount = 0;
obj647_onTap_actionGroup0();
});
































/*
 *
 *   obj651: Event Touch Down
 *
 */
$("#obj651").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj651_onTap_activeActionGroupIndex != -1) return;
var obj651_onTap_runningActionsCount = 0;
var obj651_onTap_loopCount = 0;
obj651_onTap_actionGroup0();
});
























































/*
 *
 *   obj590: Event Touch Down
 *
 */
$("#obj590").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj590_onTap_activeActionGroupIndex != -1) return;
var obj590_onTap_runningActionsCount = 0;
var obj590_onTap_loopCount = 0;
obj590_onTap_actionGroup0();
});








/*
 *
 *   obj585: Event Touch Down
 *
 */
$("#obj585").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj585_onTap_activeActionGroupIndex != -1) return;
var obj585_onTap_runningActionsCount = 0;
var obj585_onTap_loopCount = 0;
obj585_onTap_actionGroup0();
});








/*
 *
 *   obj595: Event Touch Down
 *
 */
$("#obj595").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj595_onTap_activeActionGroupIndex != -1) return;
var obj595_onTap_runningActionsCount = 0;
var obj595_onTap_loopCount = 0;
obj595_onTap_actionGroup0();
});








/*
 *
 *   obj598: Event Touch Down
 *
 */
$("#obj598").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj598_onTap_activeActionGroupIndex != -1) return;
var obj598_onTap_runningActionsCount = 0;
var obj598_onTap_loopCount = 0;
obj598_onTap_actionGroup0();
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
	
$("#obj12").trigger('SCEventShow');
$("#obj14").trigger('SCEventShow');
$("#obj665").trigger('SCEventShow');
$("#obj709").trigger('SCEventShow');
$("#obj1132").trigger('SCEventShow');
$("#obj1026").trigger('SCEventShow');
$("#obj718").trigger('SCEventShow');
$("#obj719").trigger('SCEventShow');
$("#obj728").trigger('SCEventShow');
$("#obj590").trigger('SCEventShow');
$("#obj595").trigger('SCEventShow');
$("#obj598").trigger('SCEventShow');
$("#obj689").trigger('SCEventShow');
	
});