//scroll to plugin
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=document.documentElement,e=window,i=function(i,r){var s="x"===r?"Width":"Height",n="scroll"+s,o="client"+s,a=document.body;return i===e||i===t||i===a?Math.max(t[n],a[n])-(e["inner"+s]||t[o]||a[o]):i[n]-i["offset"+s]},r=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.7.5",init:function(t,r,s){return this._wdw=t===e,this._target=t,this._tween=s,"object"!=typeof r&&(r={y:r}),this.vars=r,this._autoKill=r.autoKill!==!1,this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=r.x?(this._addTween(this,"x",this.x,"max"===r.x?i(t,"x"):r.x,"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=r.y?(this._addTween(this,"y",this.y,"max"===r.y?i(t,"y"):r.y,"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(t){this._super.setRatio.call(this,t);var r=this._wdw||!this.skipX?this.getX():this.xPrev,s=this._wdw||!this.skipY?this.getY():this.yPrev,n=s-this.yPrev,o=r-this.xPrev;this._autoKill&&(!this.skipX&&(o>7||-7>o)&&i(this._target,"x")>r&&(this.skipX=!0),!this.skipY&&(n>7||-7>n)&&i(this._target,"y")>s&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?e.scrollTo(this.skipX?r:this.x,this.skipY?s:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),s=r.prototype;r.max=i,s.getX=function(){return this._wdw?null!=e.pageXOffset?e.pageXOffset:null!=t.scrollLeft?t.scrollLeft:document.body.scrollLeft:this._target.scrollLeft},s.getY=function(){return this._wdw?null!=e.pageYOffset?e.pageYOffset:null!=t.scrollTop?t.scrollTop:document.body.scrollTop:this._target.scrollTop},s._kill=function(t){return t.scrollTo_x&&(this.skipX=!0),t.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();



//flexslider

(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=true;e.data(t,"flexslider",r);v={init:function(){r.animating=false;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0,10);if(isNaN(r.currentSlide))r.currentSlide=0;r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;if(r.vars.animation==="slide")r.vars.animation="swing";r.prop=l?"top":"marginLeft";r.args={};r.manualPause=false;r.stopped=false;r.started=false;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t){if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return true}}return false}();if(r.vars.controlsContainer!=="")r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer);if(r.vars.manualControls!=="")r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls);if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");if(r.vars.controlNav)v.controlNav.setup();if(r.vars.directionNav)v.directionNav.setup();if(r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)){e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):false;r.flexAnimate(n,r.vars.pauseOnAction)}})}if(r.vars.mousewheel){r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)})}if(r.vars.pausePlay)v.pausePlay.setup();if(r.vars.slideshow&&r.vars.pauseInvisible)v.pauseInvisible.init();if(r.vars.slideshow){if(r.vars.pauseOnHover){r.hover(function(){if(!r.manualPlay&&!r.manualPause)r.pause()},function(){if(!r.manualPause&&!r.manualPlay&&!r.stopped)r.play()})}if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden()){r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}}if(d)v.asNav.setup();if(o&&r.vars.touch)v.touch();if(!p||p&&r.vars.smoothHeight)e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=true;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s){r.slides.on(u,function(t){t.preventDefault();var n=e(this),s=n.index();var o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide")){r.flexAnimate(r.getTarget("prev"),true)}else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,false,true,true)}})}else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();if(e.currentTarget._gesture)e.currentTarget._gesture.addPointer(e.pointerId)},false);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,false,true,true)}})})}}},controlNav:{setup:function(){if(!r.manualControls){v.controlNav.setupPaging()}else{v.controlNav.setupManual()}},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1){for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&true===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");if(""!=l&&undefined!=l)s+='<span class="'+i+'caption">'+l+"</span>"}r.controlNavScaffold.append("<li>"+s+"</li>");n++}}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}if(a===""){a=t.type}v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}if(a===""){a=t.type}v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){if(r.pagingCount>1&&t==="add"){r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>"))}else if(r.pagingCount===1){r.controlNavScaffold.find("li").remove()}else{r.controlNav.eq(n).closest("li").remove()}v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}if(a===""){a=t.type}v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";if(r.pagingCount===1){r.directionNav.addClass(e).attr("tabindex","-1")}else if(!r.vars.animationLoop){if(r.animatingTo===0){r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1")}else if(r.animatingTo===r.last){r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1")}else{r.directionNav.removeClass(e).removeAttr("tabindex")}}else{r.directionNav.removeClass(e).removeAttr("tabindex")}}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){if(e(this).hasClass(i+"pause")){r.manualPause=true;r.manualPlay=false;r.pause()}else{r.manualPause=false;r.manualPlay=true;r.play()}}if(a===""){a=t.type}v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f,d,v,m=false,g=0,y=0,b=0;if(!s){d=function(t){g=t.touches[0].pageX;y=t.touches[0].pageY;u=l?e-y:e-g;m=l?Math.abs(u)<Math.abs(g-n):Math.abs(u)<Math.abs(y-n);var s=500;if(!m||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){if(!r.vars.animationLoop){u=u/(r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1)}r.setProps(i+u,"setTouch")}}};v=function(s){t.removeEventListener("touchmove",d,false);if(r.animatingTo===r.currentSlide&&!m&&!(u===null)){var f=c?-u:u,l=f>0?r.getTarget("next"):r.getTarget("prev");if(r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(f)>50||Math.abs(f)>o/2)){r.flexAnimate(l,r.vars.pauseOnAction)}else{if(!p)r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,true)}}t.removeEventListener("touchend",v,false);e=null;n=null;u=null;i=null};f=function(s){if(r.animating){s.preventDefault()}else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);g=s.touches[0].pageX;y=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?y:g;n=l?g:y;t.addEventListener("touchmove",d,false);t.addEventListener("touchend",v,false)}};t.addEventListener("touchstart",f,false)}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,false);t._slider=r;t.addEventListener("MSGestureChange",E,false);t.addEventListener("MSGestureEnd",S,false);function w(e){e.stopPropagation();if(r.animating){e.preventDefault()}else{r.pause();t._gesture.addPointer(e.pointerId);b=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n){return}var r=-e.translationX,s=-e.translationY;b=b+(l?s:r);u=b;m=l?Math.abs(b)<Math.abs(-r):Math.abs(b)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!m||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){if(!n.vars.animationLoop){u=b/(n.currentSlide===0&&b<0||n.currentSlide===n.last&&b>0?Math.abs(b)/o+2:1)}n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r){return}if(r.animatingTo===r.currentSlide&&!m&&!(u===null)){var s=c?-u:u,f=s>0?r.getTarget("next"):r.getTarget("prev");if(r.canAdvance(f)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)){r.flexAnimate(f,r.vars.pauseOnAction)}else{if(!p)r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,true)}}e=null;n=null;u=null;i=null;b=0}}},resize:function(){if(!r.animating&&r.is(":visible")){if(!h)r.doMath();if(p){v.smoothHeight()}else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{if(r.vars.smoothHeight)v.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,false,true);break;case"play":if(!n.playing&&!n.asNav){n.play()}break;case"pause":n.pause();break}},uniqueID:function(t){t.find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")});return t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++){if(e[t]+"Hidden"in document)v.pauseInvisible.visProp=e[t]+"Hidden"}if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){if(v.pauseInvisible.isHidden()){if(r.startTimeout)clearTimeout(r.startTimeout);else r.pause()}else{if(r.started)r.play();else r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()}})}},isHidden:function(){return document[v.pauseInvisible.visProp]||false}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){if(!r.vars.animationLoop&&t!==r.currentSlide){r.direction=t>r.currentSlide?"next":"prev"}if(d&&r.pagingCount===1)r.direction=r.currentItem<t?"next":"prev";if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,true,false,true,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1!==r.currentSlide&&t!==0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}else{r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return false}}r.animating=true;r.animatingTo=t;if(n)r.pause();r.vars.before(r);if(r.syncExists&&!a)v.sync("animate");if(r.vars.controlNav)v.controlNav.active();if(!h)r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;if(r.vars.directionNav)v.directionNav.update();if(t===r.last){r.vars.end(r);if(!r.vars.animationLoop)r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else if(r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"){y=c?(r.count+r.cloneOffset)*m:0}else if(r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"){y=c?0:(r.count+1)*m}else{y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m}r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=false;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else{r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}}else{if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}}if(r.vars.smoothHeight)v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){if(!p&&!h){if(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop){r.setProps(e,"jumpEnd")}else if(r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop){r.setProps(e,"jumpStart")}}r.animating=false;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){if(!r.animating&&m)r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=false;if(r.vars.pausePlay)v.pausePlay.update("play");if(r.syncExists)v.sync("pause")};r.play=function(){if(r.playing)clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=true;if(r.vars.pausePlay)v.pausePlay.update("pause");if(r.syncExists)v.sync("play")};r.stop=function(){r.pause();r.stopped=true};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?true:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?true:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?false:e===r.currentSlide&&!d?false:r.vars.animationLoop?true:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?false:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?false:true};r.getTarget=function(e){r.direction=e;if(e==="next"){return r.currentSlide===r.last?0:r.currentSlide+1}else{return r.currentSlide===0?r.last:r.currentSlide-1}};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h){return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n}else{switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n);r.container.css("transition-duration",n)}r.args[r.prop]=i;if(r.transitions||n===undefined)r.container.css(r.args);r.container.css("transform",i)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;if(t!=="init")r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"));v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});if(r.vars.smoothHeight)v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});if(t==="init"){if(!o){r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing)}else{r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2})}}if(r.vars.smoothHeight)v.smoothHeight()}if(!h)r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide");r.vars.init(r)};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){if(e<r.currentSlide){r.currentSlide+=1}else if(e<=r.currentSlide&&e!==0){r.currentSlide-=1}r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls){if(t==="add"&&!h||r.pagingCount>r.controlNav.length){v.controlNav.update("add")}else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}}if(r.vars.directionNav)v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;if(l&&c){n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i)}else{n!==undefined?r.slides.eq(n).before(i):r.container.append(i)}r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;if(isNaN(t)){e(t,r.slides).remove()}else{l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove()}r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=false}).focus(function(e){focused=true});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:false,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};e.fn.flexslider=function(t){if(t===undefined)t={};if(typeof t==="object"){return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===true||i.length===0){i.fadeIn(400);if(t.start)t.start(n)}else if(n.data("flexslider")===undefined){new e.flexslider(this,t)}})}else{var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),true);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),true);break;default:if(typeof t==="number")n.flexAnimate(t,true)}}}})(jQuery)
                                                            

                                                            
/*!
 * Smooth Scroll - v1.4.10 - 2013-03-02
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
!function(l){function t(l){return l.replace(/(:|\.)/g,"\\$1")}var e="1.4.10",o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},r=function(t){var e=[],o=!1,r=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=l(this);t[r]()>0?e.push(this):(t[r](1),o=t[r]()>0,o&&e.push(this),t[r](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};l.fn.extend({scrollable:function(l){var t=r.call(this,{dir:l});return this.pushStack(t)},firstScrollable:function(l){var t=r.call(this,{el:"first",dir:l});return this.pushStack(t)},smoothScroll:function(e){e=e||{};var o=l.extend({},l.fn.smoothScroll.defaults,e),r=l.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,s=l(this),c=o.exclude,i=o.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===n.hostname||!n.hostname,m=o.scrollTarget||(l.smoothScroll.filterPath(n.pathname)||r)===r,p=t(n.hash);if(o.scrollTarget||d&&m&&p){for(;h&&c.length>a;)s.is(t(c[a++]))&&(h=!1);for(;h&&i.length>f;)s.closest(i[f++]).length&&(h=!1)}else h=!1;h&&(e.preventDefault(),l.extend(u,o,{scrollTarget:o.scrollTarget||p,link:n}),l.smoothScroll(u))}),this}}),l.smoothScroll=function(t,e){var o,r,n,s,c=0,i="offset",a="scrollTop",f={},h={};"number"==typeof t?(o=l.fn.smoothScroll.defaults,n=t):(o=l.extend({},l.fn.smoothScroll.defaults,t||{}),o.scrollElement&&(i="position","static"==o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),o=l.extend({link:null},o),a="left"==o.direction?"scrollLeft":a,o.scrollElement?(r=o.scrollElement,c=r[a]()):r=l("html, body").firstScrollable(),o.beforeScroll.call(r,o),n="number"==typeof t?t:e||l(o.scrollTarget)[i]()&&l(o.scrollTarget)[i]()[o.direction]||0,f[a]=n+c+o.offset,s=o.speed,"auto"===s&&(s=f[a]||r.scrollTop(),s/=o.autoCoefficent),h={duration:s,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(h.step=o.step),r.length?r.stop().animate(f,h):o.afterScroll.call(o.link,o)},l.smoothScroll.version=e,l.smoothScroll.filterPath=function(l){return l.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},l.fn.smoothScroll.defaults=o}(jQuery);


//paralax

function mr_parallax(){function a(a){for(var b=0;b<a.length;b++)if("undefined"!=typeof document.body.style[a[b]])return a[b];return null}function b(){var a=0;return a=E?jQuery(".viu").find("nav:first").outerHeight(!0):jQuery(document).find("nav:first").outerHeight(!0)}function c(a,b,c,d){var e=a-1;return e/=d,a/=d,e--,a--,c*(a*a*a*a*a+1)+b-(c*(e*e*e*e*e+1)+b)}function d(){if(p){for(var a=j.length,b=f();a--;)e(j[a],b);p=!1}q&&(w+=-t*c(s,0,z,B),(w>A||-A>w)&&(C.scrollBy(0,w),w=0),s++,s>B&&(s=0,q=!1,r=!0,t=0,u=0,v=0,w=0)),k(d)}function e(a,b){if(E){if(b+n>a.elemTop&&b<a.elemBottom)if(a.isFirstSection){var c="translate3d(0, "+b/2+"px, 0)";a.imageHolder.style[m]=c}else{var c="translate3d(0, "+(b-a.elemTop-o)/2+"px, 0)";a.imageHolder.style[m]=c}}else if(b+n>a.elemTop&&b<a.elemBottom)if(a.isFirstSection){var c="translate3d(0, "+b/2+"px, 0)";a.imageHolder.style[m]=c}else{var c="translate3d(0, "+(b+n-a.elemTop)/2+"px, 0)";a.imageHolder.style[m]=c}}function f(){return C!=window?C.scrollTop:0==document.documentElement.scrollTop?document.body.scrollTop:document.documentElement.scrollTop}function g(){p=!0}function h(a){a.preventDefault&&a.preventDefault(),t=a.notRealWheel?-a.deltaY/4:1==a.deltaMode?-a.deltaY/3:100===Math.abs(a.deltaY)?-a.deltaY/120:-a.deltaY/40,t=-x>t?-x:t,t=t>x?x:t,q=!0,s=y}function i(a){var b={};return a&&"[object Function]"===b.toString.call(a)}var j,k=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,l=["transform","msTransform","webkitTransform","mozTransform","oTransform"],m=a(l),n=Math.max(document.documentElement.clientHeight,window.innerHeight||0),o=0,p=!1,q=!1,r=!0,s=0,t=0,u=0,v=0,w=0,x=2,y=4,z=300,A=1,B=30,w=0,C=window,D=this,E=void 0==window.mr_variant?!1:!0;jQuery(document).ready(function(){D.documentReady()}),jQuery(window).load(function(){D.windowLoad()}),this.documentReady=function(a){"use strict";return n=Math.max(document.documentElement.clientHeight,window.innerHeight||0),/Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)?jQuery(".parallax").removeClass("parallax"):k&&(D.profileParallaxElements(),D.setupParallax()),i(a)?void a():void 0},this.windowLoad=function(){n=Math.max(document.documentElement.clientHeight,window.innerHeight||0),o=b(),window.mr_parallax.profileParallaxElements()},this.setupParallax=function(){E=void 0==window.mr_variant?!1:!0,E&&(C=jQuery(".viu").get(0),void 0!=C&&(C.scrollBy=function(a,b){this.scrollTop+=b})),void 0!=C&&(C.addEventListener("scroll",g,!1),window.addWheelListener(C,h,!1),window.addEventListener("resize",function(){n=Math.max(document.documentElement.clientHeight,window.innerHeight||0),o=b(),D.profileParallaxElements()},!1),d())},this.profileParallaxElements=function(){j=[],o=b(),selector=".parallax > .background-image-holder, .parallax ul.slides > li > .background-image-holder",E&&(selector=".viu .parallax > .background-image-holder, .viu .parallax ul.slides > li > .background-image-holder"),jQuery(selector).each(function(a,b){var c=jQuery(this).closest(".parallax"),d=E?c.position().top:c.offset().top;j.push({section:c.get(0),outerHeight:c.outerHeight(),elemTop:d,elemBottom:d+c.outerHeight(),isFirstSection:c.is(":first-of-type")?!0:!1,imageHolder:jQuery(this).get(0)}),E?E&&(c.is(":first-of-type")?D.mr_setTranslate3DTransform(jQuery(this).get(0),0==f()?0:f()/2):D.mr_setTranslate3DTransform(jQuery(this).get(0),(f()-d-o)/2)):c.is(":first-of-type")?D.mr_setTranslate3DTransform(jQuery(this).get(0),0==f()?0:f()/2):D.mr_setTranslate3DTransform(jQuery(this).get(0),(f()+n-d-o)/2)})},this.mr_setTranslate3DTransform=function(a,b){a.style[m]="translate3d(0, "+b+"px, 0)"}}window.mr_parallax=new mr_parallax,function(a,b){function c(b,c,g,h){b[d](f+c,"wheel"==e?g:function(b){!b&&(b=a.event);var c={originalEvent:b,target:b.target||b.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==b.type?0:1,deltaX:0,deltaZ:0,notRealWheel:1,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1}};return"mousewheel"==e?(c.deltaY=-1/40*b.wheelDelta,b.wheelDeltaX&&(c.deltaX=-1/40*b.wheelDeltaX)):c.deltaY=b.detail/3,g(c)},h||!1)}var d,e,f="";a.addEventListener?d="addEventListener":(d="attachEvent",f="on"),e="onwheel"in b.createElement("div")?"wheel":void 0!==b.onmousewheel?"mousewheel":"DOMMouseScroll",a.addWheelListener=function(a,b,d){c(a,e,b,d),"DOMMouseScroll"==e&&c(a,"MozMousePixelScroll",b,d)}}(window,document);


//video 

var coverVid=function(a,b,c){function d(a,b){var c=null;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}}function e(){var d=a.parentNode.offsetHeight,e=a.parentNode.offsetWidth,f=b,g=c,h=d/g,i=e/f;i>h?(a.style.height="auto",a.style.width=e+"px"):(a.style.height=d+"px",a.style.width="auto")}document.addEventListener("DOMContentLoaded",e),window.addEventListener("resize",d(e,50)),a.style.position="absolute",a.style.top="50%",a.style.left="50%",a.style["-webkit-transform"]="translate(-50%, -50%)",a.style["-ms-transform"]="translate(-50%, -50%)",a.style.transform="translate(-50%, -50%)",a.parentNode.style.overflow="hidden";var f=a.getAttribute("poster");a.removeAttribute("poster"),a.parentNode.style.backgroundImage="url("+f+")",a.parentNode.style.backgroundSize="cover",a.parentNode.style.backgroundPosition="center center";var g="undefined"!=typeof a.canPlayType?!0:!1,h=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(h=!0),(!g||h)&&a&&a.parentNode&&a.parentNode.removeChild(a)};window.jQuery&&jQuery.fn.extend({coverVid:function(){return coverVid(this[0],arguments[0],arguments[1]),this}});