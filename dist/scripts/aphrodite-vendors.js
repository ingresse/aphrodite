function uiUploader(e){"use strict";function t(e){for(var t=0;t<e.length;t++)l.files.push(e[t])}function n(){return l.files}function i(e){l.options=e;for(var t=0;t<l.files.length&&l.activeUploads!=l.options.concurrency;t++)l.files[t].active||s(l.files[t],l.options.url)}function r(e){l.files.splice(l.files.indexOf(e),1)}function a(){l.files.splice(0,l.files.length)}function o(e){var t=["n/a","bytes","KiB","MiB","GiB","TB","PB","EiB","ZiB","YiB"],n=+Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,n)).toFixed(n?1:0)+" "+t[isNaN(e)?0:n+1]}function s(e,t){var n,r,a,s="",u="file";if(l.activeUploads+=1,e.active=!0,n=new window.XMLHttpRequest,r=new window.FormData,n.open("POST",t),n.upload.onloadstart=function(){},n.upload.onprogress=function(t){t.lengthComputable&&(e.loaded=t.loaded,e.humanSize=o(t.loaded),l.options.onProgress(e))},n.onload=function(){l.activeUploads-=1,i(l.options),l.options.onCompleted(e,n.responseText)},n.onerror=function(){},s)for(a in s)s.hasOwnProperty(a)&&r.append(a,s[a]);return r.append(u,e,e.name),n.send(r),n}var l=this;return l.files=[],l.options={},l.activeUploads=0,e.info("uiUploader loaded"),{addFiles:t,getFiles:n,files:l.files,startUpload:i,removeFile:r,removeAll:a}}!function(e,t){"use strict";function n(e,t,n){if(!e)throw Z("areq",t||"?",n||"required");return e}function i(e,t){return e||t?e?t?(H(e)&&(e=e.join(" ")),H(t)&&(t=t.join(" ")),e+" "+t):e:t:""}function r(e){var t={};return e&&(e.to||e.from)&&(t.to=e.to,t.from=e.from),t}function a(e,t,n){var i="";return e=H(e)?e:e&&I(e)&&e.length?e.split(/\s+/):[],R(e,function(e,r){e&&0<e.length&&(i+=0<r?" ":"",i+=n?t+e:e+t)}),i}function o(e){if(e instanceof j)switch(e.length){case 0:return e;case 1:if(1===e[0].nodeType)return e;break;default:return j(s(e))}if(1===e.nodeType)return j(e)}function s(e){if(!e[0])return e;for(var t=0;t<e.length;t++){var n=e[t];if(1===n.nodeType)return n}}function l(e,t,n){R(t,function(t){e.addClass(t,n)})}function u(e,t,n){R(t,function(t){e.removeClass(t,n)})}function c(e){return function(t,n){n.addClass&&(l(e,t,n.addClass),n.addClass=null),n.removeClass&&(u(e,t,n.removeClass),n.removeClass=null)}}function d(e){if(e=e||{},!e.$$prepared){var t=e.domOperation||U;e.domOperation=function(){e.$$domOperationFired=!0,t(),t=U},e.$$prepared=!0}return e}function f(e,t){h(e,t),m(e,t)}function h(e,t){t.from&&(e.css(t.from),t.from=null)}function m(e,t){t.to&&(e.css(t.to),t.to=null)}function g(e,t,n){var i=t.options||{};n=n.options||{};var r=(i.addClass||"")+" "+(n.addClass||""),a=(i.removeClass||"")+" "+(n.removeClass||"");return e=p(e.attr("class"),r,a),n.preparationClasses&&(i.preparationClasses=S(n.preparationClasses,i.preparationClasses),delete n.preparationClasses),r=i.domOperation!==U?i.domOperation:null,P(i,n),r&&(i.domOperation=r),i.addClass=e.addClass?e.addClass:null,i.removeClass=e.removeClass?e.removeClass:null,t.addClass=i.addClass,t.removeClass=i.removeClass,i}function p(e,t,n){function i(e){I(e)&&(e=e.split(" "));var t={};return R(e,function(e){e.length&&(t[e]=!0)}),t}var r={};e=i(e),t=i(t),R(t,function(e,t){r[t]=1}),n=i(n),R(n,function(e,t){r[t]=1===r[t]?null:-1});var a={addClass:"",removeClass:""};return R(r,function(t,n){var i,r;1===t?(i="addClass",r=!e[n]||e[n+"-remove"]):-1===t&&(i="removeClass",r=e[n]||e[n+"-add"]),r&&(a[i].length&&(a[i]+=" "),a[i]+=n)}),a}function v(e){return e instanceof j?e[0]:e}function y(e,t,n){var i="";t&&(i=a(t,"ng-",!0)),n.addClass&&(i=S(i,a(n.addClass,"-add"))),n.removeClass&&(i=S(i,a(n.removeClass,"-remove"))),i.length&&(n.preparationClasses=i,e.addClass(i))}function _(e,t){var n=t?"-"+t+"s":"";return D(e,[q,n]),[q,n]}function w(e,t){var n=t?"paused":"",i=Y+"PlayState";return D(e,[i,n]),[i,n]}function D(e,t){e.style[t[0]]=t[1]}function S(e,t){return e?t?e+" "+t:e:t}function b(e,t,n){var i=Object.create(null),r=e.getComputedStyle(t)||{};return R(n,function(e,t){var n=r[e];if(n){var a=n.charAt(0);("-"===a||"+"===a||0<=a)&&(n=$(n)),0===n&&(n=null),i[t]=n}}),i}function $(e){var t=0;return e=e.split(/\s*,\s*/),R(e,function(e){"s"===e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),e=parseFloat(e)||0,t=t?Math.max(e,t):e}),t}function C(e){return 0===e||null!=e}function k(e,t){var n=O,i=e+"s";return t?n+="Duration":i+=" linear all",[n,i]}function M(){var e=Object.create(null);return{flush:function(){e=Object.create(null)},count:function(t){return(t=e[t])?t.total:0},get:function(t){return(t=e[t])&&t.value},put:function(t,n){e[t]?e[t].total++:e[t]={total:1,value:n}}}}function T(e,t,n){R(n,function(n){e[n]=F(e[n])?e[n]:t.style.getPropertyValue(n)})}var O,x,Y,A;void 0===e.ontransitionend&&void 0!==e.onwebkittransitionend?(O="WebkitTransition",x="webkitTransitionEnd transitionend"):(O="transition",x="transitionend"),void 0===e.onanimationend&&void 0!==e.onwebkitanimationend?(Y="WebkitAnimation",A="webkitAnimationEnd animationend"):(Y="animation",A="animationend");var E,P,R,H,F,N,L,V,I,W,j,U,B=Y+"Delay",G=Y+"Duration",q=O+"Delay",z=O+"Duration",Z=t.$$minErr("ng"),K={transitionDuration:z,transitionDelay:q,transitionProperty:O+"Property",animationDuration:G,animationDelay:B,animationIterationCount:Y+"IterationCount"},J={transitionDuration:z,transitionDelay:q,animationDuration:G,animationDelay:B};t.module("ngAnimate",[],function(){U=t.noop,E=t.copy,P=t.extend,j=t.element,R=t.forEach,H=t.isArray,I=t.isString,V=t.isObject,W=t.isUndefined,F=t.isDefined,L=t.isFunction,N=t.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(e,t){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(t,n,i,r,a){var o,s;t.$watchCollection(i.ngAnimateSwap||i["for"],function(i){o&&e.leave(o),s&&(s.$destroy(),s=null),(i||0===i)&&(s=t.$new(),a(s,function(t){o=t,e.enter(t,null,n)}))})}}}]).directive("ngAnimateChildren",["$interpolate",function(e){return{link:function(t,n,i){function r(e){n.data("$$ngAnimateChildren","on"===e||"true"===e)}var a=i.ngAnimateChildren;I(a)&&0===a.length?n.data("$$ngAnimateChildren",!0):(r(e(a)(t)),i.$observe("ngAnimateChildren",r))}}}]).factory("$$rAFScheduler",["$$rAF",function(e){function t(e){i=i.concat(e),n()}function n(){if(i.length){for(var t=i.shift(),a=0;a<t.length;a++)t[a]();r||e(function(){r||n()})}}var i,r;return i=t.queue=[],t.waitUntilQuiet=function(t){r&&r(),r=e(function(){r=null,t(),n()})},t}]).provider("$$animateQueue",["$animateProvider",function(t){function i(e){if(!e)return null;e=e.split(" ");var t=Object.create(null);return R(e,function(e){t[e]=!0}),t}function r(e,t){if(e&&t){var n=i(t);return e.split(" ").some(function(e){return n[e]})}}function a(e,t,n,i){return u[e].some(function(e){return e(t,n,i)})}function l(e,t){var n=0<(e.addClass||"").length,i=0<(e.removeClass||"").length;return t?n&&i:n||i}var u=this.rules={skip:[],cancel:[],join:[]};u.join.push(function(e,t,n){return!t.structural&&l(t)}),u.skip.push(function(e,t,n){return!t.structural&&!l(t)}),u.skip.push(function(e,t,n){return"leave"===n.event&&t.structural}),u.skip.push(function(e,t,n){return n.structural&&2===n.state&&!t.structural}),u.cancel.push(function(e,t,n){return n.structural&&t.structural}),u.cancel.push(function(e,t,n){return 2===n.state&&t.structural}),u.cancel.push(function(e,t,n){if(n.structural)return!1;e=t.addClass,t=t.removeClass;var i=n.addClass;return n=n.removeClass,!(W(e)&&W(t)||W(i)&&W(n))&&(r(e,n)||r(t,i))}),this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(i,r,u,h,m,p,_,w,D,S){function b(){var e=!1;return function(t){e?t():r.$$postDigest(function(){e=!0,t()})}}function $(e,t,n){var i=v(t),r=v(e),a=[];return(e=G[n])&&R(e,function(e){K.call(e.node,i)?a.push(e.callback):"leave"===n&&K.call(e.node,r)&&a.push(e.callback)}),a}function C(e,t,n){var i=s(t);return e.filter(function(e){return!(e.node===i&&(!n||e.callback===n))})}function k(e,t,n){function s(t,n,r,a){S(function(){var t=$(m,e,n);t.length?i(function(){R(t,function(t){t(e,r,a)}),"close"!==r||e[0].parentNode||J.off(e)}):"close"!==r||e[0].parentNode||J.off(e)}),t.progress(n,r,a)}function u(t){var n=e,i=w;i.preparationClasses&&(n.removeClass(i.preparationClasses),i.preparationClasses=null),i.activeClasses&&(n.removeClass(i.activeClasses),i.activeClasses=null),Z(e,w),f(e,w),w.domOperation(),D.complete(!t)}var c,m,w=E(n);(e=o(e))&&(c=v(e),m=e.parent());var w=d(w),D=new _,S=b();if(H(w.addClass)&&(w.addClass=w.addClass.join(" ")),w.addClass&&!I(w.addClass)&&(w.addClass=null),H(w.removeClass)&&(w.removeClass=w.removeClass.join(" ")),w.removeClass&&!I(w.removeClass)&&(w.removeClass=null),w.from&&!V(w.from)&&(w.from=null),w.to&&!V(w.to)&&(w.to=null),!c)return u(),D;if(n=[c.className,w.addClass,w.removeClass].join(" "),!z(n))return u(),D;var C=0<=["enter","move","leave"].indexOf(t),k=h[0].hidden,O=!U||k||L.get(c);n=!O&&A.get(c)||{};var P=!!n.state;if(O||P&&1===n.state||(O=!x(e,m,t)),O)return k&&s(D,t,"start"),u(),k&&s(D,t,"close"),D;if(C&&M(e),k={structural:C,element:e,event:t,addClass:w.addClass,removeClass:w.removeClass,close:u,options:w,runner:D},P){if(a("skip",e,k,n))return 2===n.state?(u(),D):(g(e,n,k),n.runner);if(a("cancel",e,k,n))if(2===n.state)n.runner.end();else{if(!n.structural)return g(e,n,k),n.runner;n.close()}else if(a("join",e,k,n)){if(2!==n.state)return y(e,C?t:null,w),t=k.event=n.event,w=g(e,n,k),n.runner;g(e,k,{})}}else g(e,k,{});if((P=k.structural)||(P="animate"===k.event&&0<Object.keys(k.options.to||{}).length||l(k)),!P)return u(),T(e),D;var F=(n.counter||0)+1;return k.counter=F,Y(e,1,k),r.$$postDigest(function(){var n=A.get(c),i=!n,n=n||{},r=0<(e.parent()||[]).length&&("animate"===n.event||n.structural||l(n));i||n.counter!==F||!r?(i&&(Z(e,w),f(e,w)),(i||C&&n.event!==t)&&(w.domOperation(),D.end()),r||T(e)):(t=!n.structural&&l(n,!0)?"setClass":n.event,Y(e,2),n=p(e,t,n.options),D.setHost(n),s(D,t,"start",{}),n.done(function(n){u(!n),(n=A.get(c))&&n.counter===F&&T(v(e)),s(D,t,"close",{})}))}),D}function M(e){e=v(e).querySelectorAll("[data-ng-animate]"),R(e,function(e){var t=parseInt(e.getAttribute("data-ng-animate"),10),n=A.get(e);if(n)switch(t){case 2:n.runner.end();case 1:A.remove(e)}})}function T(e){e=v(e),e.removeAttribute("data-ng-animate"),A.remove(e)}function O(e,t){return v(e)===v(t)}function x(e,t,n){n=j(h[0].body);var i,r=O(e,n)||"HTML"===e[0].nodeName,a=O(e,u),o=!1,s=L.get(v(e));for((e=j.data(e[0],"$ngAnimatePin"))&&(t=e),t=v(t);t&&(a||(a=O(t,u)),1===t.nodeType);){if(e=A.get(t)||{},!o){var l=L.get(t);if(!0===l&&!1!==s){s=!0;break}!1===l&&(s=!1),o=e.structural}if((W(i)||!0===i)&&(e=j.data(t,"$$ngAnimateChildren"),F(e)&&(i=e)),o&&!1===i)break;if(r||(r=O(t,n)),r&&a)break;t=a||!(e=j.data(t,"$ngAnimatePin"))?t.parentNode:v(e)}return(!o||i)&&!0!==s&&a&&r}function Y(e,t,n){n=n||{},n.state=t,e=v(e),e.setAttribute("data-ng-animate",t),n=(t=A.get(e))?P(t,n):n,A.put(e,n)}var A=new m,L=new m,U=null,B=r.$watch(function(){return 0===w.totalPendingRequests},function(e){e&&(B(),r.$$postDigest(function(){r.$$postDigest(function(){null===U&&(U=!0)})}))}),G=Object.create(null),q=t.classNameFilter(),z=q?function(e){return q.test(e)}:function(){return!0},Z=c(D),K=e.Node.prototype.contains||function(e){return this===e||!!(16&this.compareDocumentPosition(e))},J={on:function(e,t,n){var i=s(t);G[e]=G[e]||[],G[e].push({node:i,callback:n}),j(t).on("$destroy",function(){A.get(i)||J.off(e,t,n)})},off:function(e,t,n){if(1!==arguments.length||I(arguments[0])){var i=G[e];i&&(G[e]=1===arguments.length?null:C(i,t,n))}else for(i in t=arguments[0],G)G[i]=C(G[i],t)},pin:function(e,t){n(N(e),"element","not an element"),n(N(t),"parentElement","not an element"),e.data("$ngAnimatePin",t)},push:function(e,t,n,i){return n=n||{},n.domOperation=i,k(e,t,n)},enabled:function(e,t){var n=arguments.length;if(0===n)t=!!U;else if(N(e)){var i=v(e);1===n?t=!L.get(i):L.put(i,!t)}else t=U=!!e;return t}};return J}]}]).provider("$$animation",["$animateProvider",function(e){var t=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(e,n,r,a,o,s){function l(e){function t(e){if(e.processed)return e;e.processed=!0;var n=e.domNode,a=n.parentNode;r.put(n,e);for(var o;a;){if(o=r.get(a)){o.processed||(o=t(o));break}a=a.parentNode}return(o||i).children.push(e),e}var n,i={children:[]},r=new o;for(n=0;n<e.length;n++){var a=e[n];r.put(a.domNode,e[n]={domNode:a.domNode,fn:a.fn,children:[]})}for(n=0;n<e.length;n++)t(e[n]);return function(e){var t,n=[],i=[];for(t=0;t<e.children.length;t++)i.push(e.children[t]);e=i.length;var r=0,a=[];for(t=0;t<i.length;t++){var o=i[t];0>=e&&(e=r,r=0,n.push(a),a=[]),a.push(o.fn),o.children.forEach(function(e){r++,i.push(e)}),e--}return a.length&&n.push(a),n}(i)}var u=[],h=c(e);return function(o,c,m){function g(e){e=e.hasAttribute("ng-animate-ref")?[e]:e.querySelectorAll("[ng-animate-ref]");var t=[];return R(e,function(e){var n=e.getAttribute("ng-animate-ref");n&&n.length&&t.push(e)}),t}function p(e){var t=[],n={};R(e,function(e,i){var r=v(e.element),a=0<=["enter","move"].indexOf(e.event),r=e.structural?g(r):[];if(r.length){var o=a?"to":"from";R(r,function(e){var t=e.getAttribute("ng-animate-ref");n[t]=n[t]||{},n[t][o]={animationID:i,element:j(e)}})}else t.push(e)});var i={},r={};return R(n,function(n,a){var o=n.from,s=n.to;if(o&&s){var l=e[o.animationID],u=e[s.animationID],c=o.animationID.toString();if(!r[c]){var d=r[c]={structural:!0,beforeStart:function(){l.beforeStart(),u.beforeStart()},close:function(){l.close(),u.close()},classes:y(l.classes,u.classes),from:l,to:u,anchors:[]};d.classes.length?t.push(d):(t.push(l),t.push(u))}r[c].anchors.push({out:o.element,"in":s.element})}else o=o?o.animationID:s.animationID,s=o.toString(),i[s]||(i[s]=!0,t.push(e[o]))}),t}function y(e,t){e=e.split(" "),t=t.split(" ");for(var n=[],i=0;i<e.length;i++){var r=e[i];if("ng-"!==r.substring(0,3))for(var a=0;a<t.length;a++)if(r===t[a]){n.push(r);break}}return n.join(" ")}function _(e){for(var n=t.length-1;0<=n;n--){var i=r.get(t[n])(e);if(i)return i}}function w(e,t){function n(e){(e=e.data("$$animationRunner"))&&e.setHost(t)}e.from&&e.to?(n(e.from.element),n(e.to.element)):n(e.element)}function D(){var e=o.data("$$animationRunner");!e||"leave"===c&&m.$$domOperationFired||e.end()}function S(t){o.off("$destroy",D),o.removeData("$$animationRunner"),h(o,m),f(o,m),m.domOperation(),k&&e.removeClass(o,k),o.removeClass("ng-animate"),$.complete(!t)}m=d(m);var b=0<=["enter","move","leave"].indexOf(c),$=new a({end:function(){S()},cancel:function(){S(!0)}});if(!t.length)return S(),$;o.data("$$animationRunner",$);var C=i(o.attr("class"),i(m.addClass,m.removeClass)),k=m.tempClasses;k&&(C+=" "+k,m.tempClasses=null);var M;return b&&(M="ng-"+c+"-prepare",e.addClass(o,M)),u.push({element:o,classes:C,event:c,structural:b,options:m,beforeStart:function(){o.addClass("ng-animate"),k&&e.addClass(o,k),M&&(e.removeClass(o,M),M=null)},close:S}),o.on("$destroy",D),1<u.length?$:(n.$$postDigest(function(){var e=[];R(u,function(t){t.element.data("$$animationRunner")?e.push(t):t.close()}),u.length=0;var t=p(e),n=[];R(t,function(e){n.push({domNode:v(e.from?e.from.element:e.element),fn:function(){e.beforeStart();var t,n=e.close;if((e.anchors?e.from.element||e.to.element:e.element).data("$$animationRunner")){var i=_(e);i&&(t=i.start)}t?(t=t(),t.done(function(e){n(!e)}),w(e,t)):n()}})}),s(l(n))}),$)}}]}]).provider("$animateCss",["$animateProvider",function(e){var t=M(),n=M();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(e,i,o,s,l,u,g,p){function y(e,t){var n=e.parentNode;return(n.$$ngAnimateParentKey||(n.$$ngAnimateParentKey=++F))+"-"+e.getAttribute("class")+"-"+t}function S(r,o,s,l){var u;return 0<t.count(s)&&(u=n.get(s),u||(o=a(o,"-stagger"),i.addClass(r,o),u=b(e,r,l),u.animationDuration=Math.max(u.animationDuration,0),u.transitionDuration=Math.max(u.transitionDuration,0),i.removeClass(r,o),n.put(s,u))),u||{}}function $(e){N.push(e),g.waitUntilQuiet(function(){t.flush(),n.flush();for(var e=l(),i=0;i<N.length;i++)N[i](e);N.length=0})}function M(n,i,r){return i=t.get(r),i||(i=b(e,n,K),"infinite"===i.animationIterationCount&&(i.animationIterationCount=1)),t.put(r,i),n=i,r=n.animationDelay,i=n.transitionDelay,n.maxDelay=r&&i?Math.max(r,i):r||i,n.maxDuration=Math.max(n.animationDuration*n.animationIterationCount,n.transitionDuration),n}var P=c(i),F=0,N=[];return function(e,n){function l(){g()}function c(){g(!0)}function g(t){if(!(j||Z&&z)){j=!0,z=!1,V.$$skipPreparationClasses||i.removeClass(e,de),i.removeClass(e,he),w(W,!1),_(W,!1),R(re,function(e){W.style[e[0]]=""}),P(e,V),f(e,V),Object.keys(I).length&&R(I,function(e,t){e?W.style.setProperty(t,e):W.style.removeProperty(t)}),V.onDone&&V.onDone(),se&&se.length&&e.off(se.join(" "),N);var n=e.data("$$animateCss");n&&(s.cancel(n[0].timer),e.removeData("$$animateCss")),K&&K.complete(!t)}}function b(e){_e.blockTransition&&_(W,e),_e.blockKeyframeAnimation&&w(W,!!e)}function F(){return K=new o({end:l,cancel:c}),$(U),g(),{$$willAnimate:!1,start:function(){return K},end:l}}function N(e){e.stopPropagation();var t=e.originalEvent||e;e=t.$manualTimeStamp||Date.now(),t=parseFloat(t.elapsedTime.toFixed(3)),Math.max(e-ie,0)>=ee&&t>=te&&(Z=!0,g())}function L(){function t(){if(!j){if(b(!1),R(re,function(e){W.style[e[0]]=e[1]}),P(e,V),i.addClass(e,he),_e.recalculateTimingStyles){if(fe=W.className+" "+de,me=y(W,fe),ve=M(W,fe,me),ye=ve.maxDelay,X=Math.max(ye,0),te=ve.maxDuration,0===te)return void g();_e.hasTransitions=0<ve.transitionDuration,_e.hasAnimations=0<ve.animationDuration}if(_e.applyAnimationDelay&&(ye="boolean"!=typeof V.delay&&C(V.delay)?parseFloat(V.delay):ye,X=Math.max(ye,0),ve.animationDelay=ye,we=[B,ye+"s"],re.push(we),W.style[we[0]]=we[1]),ee=1e3*X,ne=1e3*te,V.easing){var t,r=V.easing;_e.hasTransitions&&(t=O+"TimingFunction",re.push([t,r]),W.style[t]=r),_e.hasAnimations&&(t=Y+"TimingFunction",re.push([t,r]),W.style[t]=r)}ve.transitionDuration&&se.push(x),ve.animationDuration&&se.push(A),ie=Date.now();var a=ee+1.5*ne;t=ie+a;var r=e.data("$$animateCss")||[],o=!0;if(r.length){var l=r[0];(o=t>l.expectedEndTime)?s.cancel(l.timer):r.push(g)}o&&(a=s(n,a,!1),r[0]={timer:a,expectedEndTime:t},r.push(g),e.data("$$animateCss",r)),se.length&&e.on(se.join(" "),N),V.to&&(V.cleanupStyles&&T(I,W,Object.keys(V.to)),m(e,V))}}function n(){var t=e.data("$$animateCss");if(t){for(var n=1;n<t.length;n++)t[n]();e.removeData("$$animateCss")}}if(!j)if(W.parentNode){var r=function(e){if(Z)z&&e&&(z=!1,g());else if(z=!e,ve.animationDuration)if(e=w(W,z),z)re.push(e);else{var t=re,n=t.indexOf(e);0<=e&&t.splice(n,1)}},a=0<pe&&(ve.transitionDuration&&0===ge.transitionDuration||ve.animationDuration&&0===ge.animationDuration)&&Math.max(ge.animationDelay,ge.transitionDelay);a?s(t,Math.floor(a*pe*1e3),!1):t(),Q.resume=function(){r(!0)},Q.pause=function(){r(!1)}}else g()}var V=n||{};V.$$prepared||(V=d(E(V)));var I={},W=v(e);if(!W||!W.parentNode||!p.enabled())return F();var j,z,Z,K,Q,X,ee,te,ne,ie,re=[],ae=e.attr("class"),oe=r(V),se=[];if(0===V.duration||!u.animations&&!u.transitions)return F();var le=V.event&&H(V.event)?V.event.join(" "):V.event,ue="",ce="";le&&V.structural?ue=a(le,"ng-",!0):le&&(ue=le),V.addClass&&(ce+=a(V.addClass,"-add")),V.removeClass&&(ce.length&&(ce+=" "),ce+=a(V.removeClass,"-remove")),V.applyClassesEarly&&ce.length&&P(e,V);var de=[ue,ce].join(" ").trim(),fe=ae+" "+de,he=a(de,"-active"),ae=oe.to&&0<Object.keys(oe.to).length;if(!(0<(V.keyframeStyle||"").length||ae||de))return F();var me,ge;0<V.stagger?(oe=parseFloat(V.stagger),ge={transitionDelay:oe,animationDelay:oe,transitionDuration:0,animationDuration:0}):(me=y(W,fe),ge=S(W,de,me,J)),V.$$skipPreparationClasses||i.addClass(e,de),V.transitionStyle&&(oe=[O,V.transitionStyle],D(W,oe),re.push(oe)),0<=V.duration&&(oe=0<W.style[O].length,oe=k(V.duration,oe),D(W,oe),re.push(oe)),V.keyframeStyle&&(oe=[Y,V.keyframeStyle],D(W,oe),re.push(oe));var pe=ge?0<=V.staggerIndex?V.staggerIndex:t.count(me):0;(le=0===pe)&&!V.skipBlocking&&_(W,9999);var ve=M(W,fe,me),ye=ve.maxDelay;X=Math.max(ye,0),te=ve.maxDuration;var _e={};if(_e.hasTransitions=0<ve.transitionDuration,_e.hasAnimations=0<ve.animationDuration,_e.hasTransitionAll=_e.hasTransitions&&"all"===ve.transitionProperty,_e.applyTransitionDuration=ae&&(_e.hasTransitions&&!_e.hasTransitionAll||_e.hasAnimations&&!_e.hasTransitions),_e.applyAnimationDuration=V.duration&&_e.hasAnimations,_e.applyTransitionDelay=C(V.delay)&&(_e.applyTransitionDuration||_e.hasTransitions),_e.applyAnimationDelay=C(V.delay)&&_e.hasAnimations,_e.recalculateTimingStyles=0<ce.length,(_e.applyTransitionDuration||_e.applyAnimationDuration)&&(te=V.duration?parseFloat(V.duration):te,_e.applyTransitionDuration&&(_e.hasTransitions=!0,ve.transitionDuration=te,oe=0<W.style[O+"Property"].length,re.push(k(te,oe))),_e.applyAnimationDuration&&(_e.hasAnimations=!0,ve.animationDuration=te,re.push([G,te+"s"]))),0===te&&!_e.recalculateTimingStyles)return F();if(null!=V.delay){var we;"boolean"!=typeof V.delay&&(we=parseFloat(V.delay),X=Math.max(we,0)),_e.applyTransitionDelay&&re.push([q,we+"s"]),_e.applyAnimationDelay&&re.push([B,we+"s"])}return null==V.duration&&0<ve.transitionDuration&&(_e.recalculateTimingStyles=_e.recalculateTimingStyles||le),ee=1e3*X,ne=1e3*te,V.skipBlocking||(_e.blockTransition=0<ve.transitionDuration,_e.blockKeyframeAnimation=0<ve.animationDuration&&0<ge.animationDelay&&0===ge.animationDuration),V.from&&(V.cleanupStyles&&T(I,W,Object.keys(V.from)),h(e,V)),_e.blockTransition||_e.blockKeyframeAnimation?b(te):V.skipBlocking||_(W,!1),{$$willAnimate:!0,end:l,start:function(){if(!j)return Q={end:l,cancel:c,resume:null,pause:null},K=new o(Q),$(L),K}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(e){e.drivers.push("$$animateCssDriver"),this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(e,t,n,i,r,a,o){function s(e){return e.replace(/\bng-\S+\b/g,"")}function l(e,t){return I(e)&&(e=e.split(" ")),I(t)&&(t=t.split(" ")),e.filter(function(e){return-1===t.indexOf(e)}).join(" ")}function u(t,i,r){function a(e){var t={},n=v(e).getBoundingClientRect();return R(["width","height","top","left"],function(e){var i=n[e];switch(e){case"top":i+=f.scrollTop;break;case"left":i+=f.scrollLeft}t[e]=Math.floor(i)+"px"}),t}function o(){var t=s(r.attr("class")||""),n=l(t,d),t=l(d,t),n=e(c,{to:a(r),addClass:"ng-anchor-in "+n,removeClass:"ng-anchor-out "+t,delay:!0});return n.$$willAnimate?n:null}function u(){c.remove(),i.removeClass("ng-animate-shim"),r.removeClass("ng-animate-shim")}var c=j(v(i).cloneNode(!0)),d=s(c.attr("class")||"");i.addClass("ng-animate-shim"),r.addClass("ng-animate-shim"),c.addClass("ng-anchor"),h.append(c);var m;if(t=function(){var t=e(c,{addClass:"ng-anchor-out",delay:!0,from:a(i)});return t.$$willAnimate?t:null}(),!t&&(m=o(),!m))return u();var g=t||m;return{start:function(){function e(){i&&i.end()}var t,i=g.start();return i.done(function(){return i=null,!m&&(m=o())?(i=m.start(),i.done(function(){i=null,u(),t.complete()}),i):(u(),void t.complete())}),t=new n({end:e,cancel:e})}}}function c(e,t,i,r){var a=d(e,U),o=d(t,U),s=[];if(R(r,function(e){(e=u(i,e.out,e["in"]))&&s.push(e)}),a||o||0!==s.length)return{start:function(){function e(){R(t,function(e){e.end()})}var t=[];a&&t.push(a.start()),o&&t.push(o.start()),R(s,function(e){t.push(e.start())});var i=new n({end:e,cancel:e});return n.all(t,function(e){i.complete(e)}),i}}}function d(t){var n=t.element,i=t.options||{};return t.structural&&(i.event=t.event,i.structural=!0,i.applyClassesEarly=!0,"leave"===t.event&&(i.onDone=i.domOperation)),i.preparationClasses&&(i.event=S(i.event,i.preparationClasses)),t=e(n,i),t.$$willAnimate?t:null}if(!r.animations&&!r.transitions)return U;var f=o[0].body;t=v(i);var h=j(t.parentNode&&11===t.parentNode.nodeType||f.contains(t)?t:f);return function(e){return e.from&&e.to?c(e.from,e.to,e.classes,e.anchors):d(e)}}]}]).provider("$$animateJs",["$animateProvider",function(e){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(t,n,i){function r(n){n=H(n)?n:n.split(" ");for(var i=[],r={},a=0;a<n.length;a++){var o=n[a],s=e.$$registeredAnimations[o];s&&!r[o]&&(i.push(t.get(s)),r[o]=!0)}return i}var a=c(i);return function(e,t,i,o){function s(){o.domOperation(),a(e,o)}function l(e,t,i,r,a){switch(i){case"animate":t=[t,r.from,r.to,a];break;case"setClass":t=[t,p,v,a];break;case"addClass":t=[t,p,a];break;case"removeClass":t=[t,v,a];break;default:t=[t,a]}if(t.push(r),e=e.apply(e,t))if(L(e.start)&&(e=e.start()),e instanceof n)e.done(a);else if(L(e))return e;return U}function u(e,t,i,r,a){var o=[];return R(r,function(r){var s=r[a];s&&o.push(function(){var r,a,o=!1,u=function(e){o||(o=!0,(a||U)(e),r.complete(!e))};return r=new n({end:function(){u()},cancel:function(){u(!0)}}),a=l(s,e,t,i,function(e){u(!1===e)}),r})}),o}function c(e,t,i,r,a){var o=u(e,t,i,r,a);if(0===o.length){var s,l;"beforeSetClass"===a?(s=u(e,"removeClass",i,r,"beforeRemoveClass"),l=u(e,"addClass",i,r,"beforeAddClass")):"setClass"===a&&(s=u(e,"removeClass",i,r,"removeClass"),l=u(e,"addClass",i,r,"addClass")),s&&(o=o.concat(s)),l&&(o=o.concat(l))}if(0!==o.length)return function(e){var t=[];return o.length&&R(o,function(e){t.push(e())}),t.length?n.all(t,e):e(),function(e){R(t,function(t){e?t.cancel():t.end()})}}}var h=!1;3===arguments.length&&V(i)&&(o=i,i=null),o=d(o),i||(i=e.attr("class")||"",o.addClass&&(i+=" "+o.addClass),o.removeClass&&(i+=" "+o.removeClass));var m,g,p=o.addClass,v=o.removeClass,y=r(i);if(y.length){var _,w;"leave"===t?(w="leave",_="afterLeave"):(w="before"+t.charAt(0).toUpperCase()+t.substr(1),_=t),"enter"!==t&&"move"!==t&&(m=c(e,t,o,y,w)),g=c(e,t,o,y,_)}if(m||g){var D;return{$$willAnimate:!0,end:function(){return D?D.end():(h=!0,s(),f(e,o),D=new n,D.complete(!0)),D},start:function(){function t(t){h=!0,s(),f(e,o),D.complete(t)}if(D)return D;D=new n;var i,r=[];return m&&r.push(function(e){i=m(e)}),r.length?r.push(function(e){s(),e(!0)}):s(),g&&r.push(function(e){i=g(e)}),D.setHost({end:function(){h||((i||U)(void 0),t(void 0))},cancel:function(){h||((i||U)(!0),t(!0))}}),n.chain(r,t),D}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(e){e.drivers.push("$$animateJsDriver"),this.$get=["$$animateJs","$$AnimateRunner",function(e,t){function n(t){return e(t.element,t.event,t.classes,t.options)}return function(e){if(!e.from||!e.to)return n(e);var i=n(e.from),r=n(e.to);return i||r?{start:function(){function e(){return function(){R(n,function(e){e.end()})}}var n=[];i&&n.push(i.start()),r&&n.push(r.start()),t.all(n,function(e){a.complete(e)});var a=new t({end:e(),cancel:e()});return a}}:void 0}}]}])}(window,window.angular);var duScrollDefaultEasing=function(e){"use strict";return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},duScroll=angular.module("duScroll",["duScroll.scrollspy","duScroll.smoothScroll","duScroll.scrollContainer","duScroll.spyContext","duScroll.scrollHelpers"]).value("duScrollDuration",350).value("duScrollSpyWait",100).value("duScrollSpyRefreshInterval",0).value("duScrollGreedy",!1).value("duScrollOffset",0).value("duScrollEasing",duScrollDefaultEasing).value("duScrollCancelOnEvents","scroll mousedown mousewheel touchmove keydown").value("duScrollBottomSpy",!1).value("duScrollActiveClass","active");"undefined"!=typeof module&&module&&module.exports&&(module.exports=duScroll),angular.module("duScroll.scrollHelpers",["duScroll.requestAnimation"]).run(["$window","$q","cancelAnimation","requestAnimation","duScrollEasing","duScrollDuration","duScrollOffset","duScrollCancelOnEvents",function(e,t,n,i,r,a,o,s){"use strict";var l={},u=function(e){return"undefined"!=typeof HTMLDocument&&e instanceof HTMLDocument||e.nodeType&&e.nodeType===e.DOCUMENT_NODE},c=function(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement||e.nodeType&&e.nodeType===e.ELEMENT_NODE},d=function(e){return c(e)||u(e)?e:e[0]};l.duScrollTo=function(t,n,i,r){var a;if(angular.isElement(t)?a=this.duScrollToElement:angular.isDefined(i)&&(a=this.duScrollToAnimated),a)return a.apply(this,arguments);var o=d(this);return u(o)?e.scrollTo(t,n):(o.scrollLeft=t,void(o.scrollTop=n))};var f,h;l.duScrollToAnimated=function(e,a,o,l){o&&!l&&(l=r);var u=this.duScrollLeft(),c=this.duScrollTop(),d=Math.round(e-u),m=Math.round(a-c),g=null,p=0,v=this,y=function(e){(!e||p&&e.which>0)&&(s&&v.unbind(s,y),n(f),h.reject(),f=null)};if(f&&y(),h=t.defer(),0===o||!d&&!m)return 0===o&&v.duScrollTo(e,a),h.resolve(),h.promise;var _=function(e){null===g&&(g=e),p=e-g;var t=p>=o?1:l(p/o);v.scrollTo(u+Math.ceil(d*t),c+Math.ceil(m*t)),t<1?f=i(_):(s&&v.unbind(s,y),f=null,h.resolve())};return v.duScrollTo(u,c),s&&v.bind(s,y),f=i(_),h.promise},l.duScrollToElement=function(e,t,n,i){var r=d(this);angular.isNumber(t)&&!isNaN(t)||(t=o);var a=this.duScrollTop()+d(e).getBoundingClientRect().top-t;return c(r)&&(a-=r.getBoundingClientRect().top),this.duScrollTo(0,a,n,i)},l.duScrollLeft=function(t,n,i){if(angular.isNumber(t))return this.duScrollTo(t,this.duScrollTop(),n,i);var r=d(this);return u(r)?e.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft:r.scrollLeft},l.duScrollTop=function(t,n,i){if(angular.isNumber(t))return this.duScrollTo(this.duScrollLeft(),t,n,i);var r=d(this);return u(r)?e.scrollY||document.documentElement.scrollTop||document.body.scrollTop:r.scrollTop},l.duScrollToElementAnimated=function(e,t,n,i){return this.duScrollToElement(e,t,n||a,i)},l.duScrollTopAnimated=function(e,t,n){return this.duScrollTop(e,t||a,n)},l.duScrollLeftAnimated=function(e,t,n){return this.duScrollLeft(e,t||a,n)},angular.forEach(l,function(e,t){angular.element.prototype[t]=e;var n=t.replace(/^duScroll/,"scroll");angular.isUndefined(angular.element.prototype[n])&&(angular.element.prototype[n]=e)})}]),angular.module("duScroll.polyfill",[]).factory("polyfill",["$window",function(e){"use strict";var t=["webkit","moz","o","ms"];return function(n,i){if(e[n])return e[n];for(var r,a=n.substr(0,1).toUpperCase()+n.substr(1),o=0;o<t.length;o++)if(r=t[o]+a,e[r])return e[r];return i}}]),angular.module("duScroll.requestAnimation",["duScroll.polyfill"]).factory("requestAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=0,i=function(e,i){var r=(new Date).getTime(),a=Math.max(0,16-(r-n)),o=t(function(){e(r+a)},a);return n=r+a,o};return e("requestAnimationFrame",i)}]).factory("cancelAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=function(e){t.cancel(e)};return e("cancelAnimationFrame",n)}]),angular.module("duScroll.spyAPI",["duScroll.scrollContainerAPI"]).factory("spyAPI",["$rootScope","$timeout","$interval","$window","$document","scrollContainerAPI","duScrollGreedy","duScrollSpyWait","duScrollSpyRefreshInterval","duScrollBottomSpy","duScrollActiveClass",function(e,t,n,i,r,a,o,s,l,u,c){"use strict";var d=function(n){var a=!1,l=!1,d=function(){l=!1;var t,a=n.container,s=a[0],d=0;if("undefined"!=typeof HTMLElement&&s instanceof HTMLElement||s.nodeType&&s.nodeType===s.ELEMENT_NODE)d=s.getBoundingClientRect().top,t=Math.round(s.scrollTop+s.clientHeight)>=s.scrollHeight;else{var f=r[0].body.scrollHeight||r[0].documentElement.scrollHeight;t=Math.round(i.pageYOffset+i.innerHeight)>=f}var h,m,g,p,v,y,_=u&&t?"bottom":"top";for(p=n.spies,m=n.currentlyActive,g=void 0,h=0;h<p.length;h++)v=p[h],y=v.getTargetPosition(),y&&v.$element&&(u&&t||y.top+v.offset-d<20&&(o||y.top*-1+d)<y.height)&&(!g||g[_]<y[_])&&(g={spy:v},g[_]=y[_]);g&&(g=g.spy),m===g||o&&!g||(m&&m.$element&&(m.$element.removeClass(c),e.$broadcast("duScrollspy:becameInactive",m.$element,angular.element(m.getTargetElement()))),g&&(g.$element.addClass(c),e.$broadcast("duScrollspy:becameActive",g.$element,angular.element(g.getTargetElement()))),n.currentlyActive=g)};return s?function(){a?l=!0:(d(),a=t(function(){a=!1,l&&d()},s,!1))}:d},f={},h=function(e){var t=e.$id,n={spies:[]};return n.handler=d(n),f[t]=n,e.$on("$destroy",function(){m(e)}),t},m=function(e){var t=e.$id,i=f[t],r=i.container;i.intervalPromise&&n.cancel(i.intervalPromise),
r&&r.off("scroll",i.handler),delete f[t]},g=h(e),p=function(e){return f[e.$id]?f[e.$id]:e.$parent?p(e.$parent):f[g]},v=function(e){var t,n,i=e.$scope;if(i)return p(i);for(n in f)if(t=f[n],t.spies.indexOf(e)!==-1)return t},y=function(e){for(;e.parentNode;)if(e=e.parentNode,e===document)return!0;return!1},_=function(e){var t=v(e);t&&(t.spies.push(e),t.container&&y(t.container)||(t.container&&t.container.off("scroll",t.handler),t.container=a.getContainer(e.$scope),l&&!t.intervalPromise&&(t.intervalPromise=n(t.handler,l,0,!1)),t.container.on("scroll",t.handler).triggerHandler("scroll")))},w=function(t){var n=v(t);t===n.currentlyActive&&(e.$broadcast("duScrollspy:becameInactive",n.currentlyActive.$element),n.currentlyActive=null);var i=n.spies.indexOf(t);i!==-1&&n.spies.splice(i,1),t.$element=null};return{addSpy:_,removeSpy:w,createContext:h,destroyContext:m,getContextForScope:p}}]),angular.module("duScroll.scrollContainerAPI",[]).factory("scrollContainerAPI",["$document",function(e){"use strict";var t={},n=function(e,n){var i=e.$id;return t[i]=n,i},i=function(e){return t[e.$id]?e.$id:e.$parent?i(e.$parent):void 0},r=function(n){var r=i(n);return r?t[r]:e},a=function(e){var n=i(e);n&&delete t[n]};return{getContainerId:i,getContainer:r,setContainer:n,removeContainer:a}}]),angular.module("duScroll.smoothScroll",["duScroll.scrollHelpers","duScroll.scrollContainerAPI"]).directive("duSmoothScroll",["duScrollDuration","duScrollOffset","scrollContainerAPI",function(e,t,n){"use strict";return{link:function(i,r,a){r.on("click",function(r){if(a.href&&a.href.indexOf("#")!==-1||""!==a.duSmoothScroll){var o=a.href?a.href.replace(/.*(?=#[^\s]+$)/,"").substring(1):a.duSmoothScroll,s=document.getElementById(o)||document.getElementsByName(o)[0];if(s&&s.getBoundingClientRect){r.stopPropagation&&r.stopPropagation(),r.preventDefault&&r.preventDefault();var l=a.offset?parseInt(a.offset,10):t,u=a.duration?parseInt(a.duration,10):e,c=n.getContainer(i);c.duScrollToElement(angular.element(s),isNaN(l)?0:l,isNaN(u)?0:u)}}})}}}]),angular.module("duScroll.spyContext",["duScroll.spyAPI"]).directive("duSpyContext",["spyAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,i){return{pre:function(t,n,i,r){e.createContext(t)}}}}}]),angular.module("duScroll.scrollContainer",["duScroll.scrollContainerAPI"]).directive("duScrollContainer",["scrollContainerAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,i){return{pre:function(t,n,i,r){i.$observe("duScrollContainer",function(i){angular.isString(i)&&(i=document.getElementById(i)),i=angular.isElement(i)?angular.element(i):n,e.setContainer(t,i),t.$on("$destroy",function(){e.removeContainer(t)})})}}}}}]),angular.module("duScroll.scrollspy",["duScroll.spyAPI"]).directive("duScrollspy",["spyAPI","duScrollOffset","$timeout","$rootScope",function(e,t,n,i){"use strict";var r=function(e,t,n,i){angular.isElement(e)?this.target=e:angular.isString(e)&&(this.targetId=e),this.$scope=t,this.$element=n,this.offset=i};return r.prototype.getTargetElement=function(){return!this.target&&this.targetId&&(this.target=document.getElementById(this.targetId)||document.getElementsByName(this.targetId)[0]),this.target},r.prototype.getTargetPosition=function(){var e=this.getTargetElement();if(e)return e.getBoundingClientRect()},r.prototype.flushTargetCache=function(){this.targetId&&(this.target=void 0)},{link:function(a,o,s){var l,u=s.ngHref||s.href;if(u&&u.indexOf("#")!==-1?l=u.replace(/.*(?=#[^\s]+$)/,"").substring(1):s.duScrollspy?l=s.duScrollspy:s.duSmoothScroll&&(l=s.duSmoothScroll),l){var c=n(function(){var n=new r(l,a,o,(-(s.offset?parseInt(s.offset,10):t)));e.addSpy(n),a.$on("$locationChangeSuccess",n.flushTargetCache.bind(n));var u=i.$on("$stateChangeSuccess",n.flushTargetCache.bind(n));a.$on("$destroy",function(){e.removeSpy(n),u()})},0,!1);a.$on("$destroy",function(){n.cancel(c)})}}}}]),function(){"use strict";function e(e,t,n){return{restrict:"A",link:function(i,r,a){n(function(){function o(e){var o,s,c,d,f,h;if(!angular.element(r).hasClass("ng-hide")&&e&&e.target){for(s=e.target;s;s=s.parentNode){if(s===r[0])return;if(d=s.id,f=s.className,h=u.length,f&&void 0!==f.baseVal&&(f=f.baseVal),f||d)for(o=0;o<h;o++)if(c=new RegExp("\\b"+u[o]+"\\b"),void 0!==d&&d===u[o]||f&&c.test(f))return}n(function(){(l=t(a.clickOutside))(i,{event:e})})}}function s(){return"ontouchstart"in window||navigator.maxTouchPoints}var l,u=void 0!==a.outsideIfNot?a.outsideIfNot.split(/[ ,]+/):[];s()&&e.on("touchstart",o),e.on("click",o),i.$on("$destroy",function(){s()&&e.off("touchstart",o),e.off("click",o)})})}}}angular.module("angular-click-outside",[]).directive("clickOutside",["$document","$parse","$timeout",e])}(),angular.module("ui.alias",[]).config(["$compileProvider","uiAliasConfig",function(e,t){"use strict";t=t||{},angular.forEach(t,function(t,n){angular.isString(t)&&(t={replace:!0,template:t}),e.directive(n,function(){return t})})}]),angular.module("ui.event",[]).directive("uiEvent",["$parse",function(e){"use strict";return function(t,n,i){var r=t.$eval(i.uiEvent);angular.forEach(r,function(i,r){var a=e(i);n.bind(r,function(e){var n=Array.prototype.slice.call(arguments);n=n.splice(1),a(t,{$event:e,$params:n}),t.$$phase||t.$apply()})})}}]),angular.module("ui.format",[]).filter("format",function(){"use strict";return function(e,t){var n=e;if(angular.isString(n)&&void 0!==t)if(angular.isArray(t)||angular.isObject(t)||(t=[t]),angular.isArray(t)){var i=t.length,r=function(e,n){return n=parseInt(n,10),n>=0&&n<i?t[n]:e};n=n.replace(/\$([0-9]+)/g,r)}else angular.forEach(t,function(e,t){n=n.split(":"+t).join(e)});return n}}),angular.module("ui.highlight",[]).filter("highlight",function(){"use strict";return function(e,t,n){return e&&(t||angular.isNumber(t))?(e=e.toString(),t=t.toString(),n?e.split(t).join('<span class="ui-match">'+t+"</span>"):e.replace(new RegExp(t,"gi"),'<span class="ui-match">$&</span>')):e}}),angular.module("ui.include",[]).directive("uiInclude",["$http","$templateCache","$anchorScroll","$compile",function(e,t,n,i){"use strict";return{restrict:"ECA",terminal:!0,compile:function(r,a){var o=a.uiInclude||a.src,s=a.fragment||"",l=a.onload||"",u=a.autoscroll;return function(r,a){function c(){var c=++f,m=r.$eval(o),g=r.$eval(s);m?e.get(m,{cache:t}).success(function(e){if(c===f){d&&d.$destroy(),d=r.$new();var t;t=g?angular.element("<div/>").html(e).find(g):angular.element("<div/>").html(e).contents(),a.html(t),i(t)(d),!angular.isDefined(u)||u&&!r.$eval(u)||n(),d.$emit("$includeContentLoaded"),r.$eval(l)}}).error(function(){c===f&&h()}):h()}var d,f=0,h=function(){d&&(d.$destroy(),d=null),a.html("")};r.$watch(s,c),r.$watch(o,c)}}}}]),angular.module("ui.indeterminate",[]).directive("uiIndeterminate",[function(){"use strict";return{compile:function(e,t){return t.type&&"checkbox"===t.type.toLowerCase()?function(e,t,n){e.$watch(n.uiIndeterminate,function(e){t[0].indeterminate=!!e})}:angular.noop}}}]),angular.module("ui.inflector",[]).filter("inflector",function(){"use strict";function e(e){return e=e.replace(/([A-Z])|([\-|\_])/g,function(e,t){return" "+(t||"")}),e.replace(/\s\s+/g," ").trim().toLowerCase().split(" ")}function t(e){var t=[];return angular.forEach(e,function(e){t.push(e.charAt(0).toUpperCase()+e.substr(1))}),t}var n={humanize:function(n){return t(e(n)).join(" ")},underscore:function(t){return e(t).join("_")},variable:function(n){return n=e(n),n=n[0]+t(n.slice(1)).join("")}};return function(e,t){return t!==!1&&angular.isString(e)?(t=t||"humanize",n[t](e)):e}}),angular.module("ui.jq",[]).value("uiJqConfig",{}).directive("uiJq",["uiJqConfig","$timeout",function(e,t){"use strict";return{restrict:"A",compile:function(n,i){if(!angular.isFunction(n[i.uiJq]))throw new Error('ui-jq: The "'+i.uiJq+'" function does not exist');var r=e&&e[i.uiJq];return function(e,n,i){function a(){var t=[];return i.uiOptions?(t=e.$eval("["+i.uiOptions+"]"),angular.isObject(r)&&angular.isObject(t[0])&&(t[0]=angular.extend({},r,t[0]))):r&&(t=[r]),t}function o(){t(function(){n[i.uiJq].apply(n,a())},0,!1)}i.ngModel&&n.is("select,input,textarea")&&n.bind("change",function(){n.trigger("input")}),i.uiRefresh&&e.$watch(i.uiRefresh,function(){o()}),o()}}}}]),angular.module("ui.keypress",[]).factory("keypressHelper",["$parse",function(e){"use strict";var t={8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete"},n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return function(i,r,a,o){var s,l=[];s=r.$eval(o["ui"+n(i)]),angular.forEach(s,function(t,n){var i,r;r=e(t),angular.forEach(n.split(" "),function(e){i={expression:r,keys:{}},angular.forEach(e.split("-"),function(e){i.keys[e]=!0}),l.push(i)})}),a.bind(i,function(e){var n=!(!e.metaKey||e.ctrlKey),a=!!e.altKey,o=!!e.ctrlKey,s=!!e.shiftKey,u=e.keyCode;"keypress"===i&&!s&&u>=97&&u<=122&&(u-=32),angular.forEach(l,function(i){var l=i.keys[t[u]]||i.keys[u.toString()],c=!!i.keys.meta,d=!!i.keys.alt,f=!!i.keys.ctrl,h=!!i.keys.shift;l&&c===n&&d===a&&f===o&&h===s&&r.$apply(function(){i.expression(r,{$event:e})})})})}}]),angular.module("ui.keypress").directive("uiKeydown",["keypressHelper",function(e){"use strict";return{link:function(t,n,i){e("keydown",t,n,i)}}}]),angular.module("ui.keypress").directive("uiKeypress",["keypressHelper",function(e){"use strict";return{link:function(t,n,i){e("keypress",t,n,i)}}}]),angular.module("ui.keypress").directive("uiKeyup",["keypressHelper",function(e){"use strict";return{link:function(t,n,i){e("keyup",t,n,i)}}}]),angular.module("ui.mask",[]).value("uiMaskConfig",{maskDefinitions:{9:/\d/,A:/[a-zA-Z]/,"*":/[a-zA-Z0-9]/},clearOnBlur:!0}).directive("uiMask",["uiMaskConfig","$parse",function(e,t){"use strict";return{priority:100,require:"ngModel",restrict:"A",compile:function(){var n=e;return function(e,i,r,a){function o(e){return angular.isDefined(e)?(_(e),V?(d(),f(),!0):c()):c()}function s(e){angular.isDefined(e)&&(x=e,V&&b())}function l(e){return V?(E=g(e||""),R=m(E),a.$setValidity("mask",R),R&&E.length?p(E):void 0):e}function u(e){return V?(E=g(e||""),R=m(E),a.$viewValue=E.length?p(E):"",a.$setValidity("mask",R),""===E&&r.required&&a.$setValidity("required",!a.$error.required),R?E:void 0):e}function c(){return V=!1,h(),angular.isDefined(W)?i.attr("placeholder",W):i.removeAttr("placeholder"),angular.isDefined(j)?i.attr("maxlength",j):i.removeAttr("maxlength"),i.val(a.$modelValue),a.$viewValue=a.$modelValue,!1}function d(){E=F=g(a.$viewValue||""),P=H=p(E),R=m(E);var e=R&&E.length?P:"";r.maxlength&&i.attr("maxlength",2*T[T.length-1]),i.attr("placeholder",x),i.val(e),a.$viewValue=e}function f(){I||(i.bind("blur",w),i.bind("mousedown mouseup",D),i.bind("input keyup click focus",b),I=!0)}function h(){I&&(i.unbind("blur",w),i.unbind("mousedown",D),i.unbind("mouseup",D),i.unbind("input",b),i.unbind("keyup",b),i.unbind("click",b),i.unbind("focus",b),I=!1)}function m(e){return!e.length||e.length>=A}function g(e){var t="",n=O.slice();return e=e.toString(),angular.forEach(Y,function(t){e=e.replace(t,"")}),angular.forEach(e.split(""),function(e){n.length&&n[0].test(e)&&(t+=e,n.shift())}),t}function p(e){var t="",n=T.slice();return angular.forEach(x.split(""),function(i,r){e.length&&r===n[0]?(t+=e.charAt(0)||"_",e=e.substr(1),n.shift()):t+=i}),t}function v(e){var t=r.placeholder;return"undefined"!=typeof t&&t[e]?t[e]:"_"}function y(){return x.replace(/[_]+/g,"_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g,"$1$2_$3").split("_")}function _(e){var t=0;if(T=[],O=[],x="","string"==typeof e){A=0;var n=!1,i=0,r=e.split("");angular.forEach(r,function(e,r){U.maskDefinitions[e]?(T.push(t),x+=v(r-i),O.push(U.maskDefinitions[e]),t++,n||A++):"?"===e?(n=!0,i++):(x+=e,t++)})}T.push(T.slice().pop()+1),Y=y(),V=T.length>1}function w(){U.clearOnBlur&&(N=0,L=0,R&&0!==E.length||(P="",i.val(""),e.$apply(function(){a.$setViewValue("")})))}function D(e){"mousedown"===e.type?i.bind("mouseout",S):i.unbind("mouseout",S)}function S(){L=M(this),i.unbind("mouseout",S)}function b(t){t=t||{};var n=t.which,r=t.type;if(16!==n&&91!==n){var o,s=i.val(),l=H,u=g(s),c=F,d=!1,f=C(this)||0,h=N||0,m=f-h,v=T[0],y=T[u.length]||T.slice().shift(),_=L||0,w=M(this)>0,D=_>0,S=s.length>l.length||_&&s.length>l.length-_,b=s.length<l.length||_&&s.length===l.length-_,O=n>=37&&n<=40&&t.shiftKey,x=37===n,Y=8===n||"keyup"!==r&&b&&m===-1,A=46===n||"keyup"!==r&&b&&0===m&&!D,E=(x||Y||"click"===r)&&f>v;if(L=M(this),!O&&(!w||"click"!==r&&"keyup"!==r)){if("input"===r&&b&&!D&&u===c){for(;Y&&f>v&&!$(f);)f--;for(;A&&f<y&&T.indexOf(f)===-1;)f++;var P=T.indexOf(f);u=u.substring(0,P)+u.substring(P+1),d=!0}for(o=p(u),H=o,F=u,i.val(o),d&&e.$apply(function(){a.$setViewValue(u)}),S&&f<=v&&(f=v+1),E&&f--,f=f>y?y:f<v?v:f;!$(f)&&f>v&&f<y;)f+=E?-1:1;(E&&f<y||S&&!$(h))&&f++,N=f,k(this,f)}}}function $(e){return T.indexOf(e)>-1}function C(e){if(!e)return 0;if(void 0!==e.selectionStart)return e.selectionStart;if(document.selection){e.focus();var t=document.selection.createRange();return t.moveStart("character",e.value?-e.value.length:0),t.text.length}return 0}function k(e,t){if(!e)return 0;if(0!==e.offsetWidth&&0!==e.offsetHeight)if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){var n=e.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",t),n.select()}}function M(e){return e?void 0!==e.selectionStart?e.selectionEnd-e.selectionStart:document.selection?document.selection.createRange().text.length:0:0}var T,O,x,Y,A,E,P,R,H,F,N,L,V=!1,I=!1,W=r.placeholder,j=r.maxlength,U={};r.uiOptions?(U=e.$eval("["+r.uiOptions+"]"),angular.isObject(U[0])&&(U=function(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(void 0===t[n]?t[n]=angular.copy(e[n]):angular.extend(t[n],e[n]));return t}(n,U[0]))):U=n,r.$observe("uiMask",o),r.$observe("placeholder",s);var B=!1;r.$observe("modelViewValue",function(e){"true"===e&&(B=!0)}),e.$watch(r.ngModel,function(n){if(B&&n){var i=t(r.ngModel);i.assign(e,a.$viewValue)}}),a.$formatters.push(l),a.$parsers.push(u),i.bind("mousedown mouseup",D),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null===this)throw new TypeError;var t=Object(this),n=t.length>>>0;if(0===n)return-1;var i=0;if(arguments.length>1&&(i=Number(arguments[1]),i!==i?i=0:0!==i&&i!==1/0&&i!==-(1/0)&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=n)return-1;for(var r=i>=0?i:Math.max(n-Math.abs(i),0);r<n;r++)if(r in t&&t[r]===e)return r;return-1})}}}}]),angular.module("ui.reset",[]).value("uiResetConfig",null).directive("uiReset",["uiResetConfig",function(e){"use strict";var t=null;return void 0!==e&&(t=e),{require:"ngModel",link:function(e,n,i,r){var a;a=angular.element('<a class="ui-reset" />'),n.wrap('<span class="ui-resetwrap" />').after(a),a.bind("click",function(n){n.preventDefault(),e.$apply(function(){i.uiReset?r.$setViewValue(e.$eval(i.uiReset)):r.$setViewValue(t),r.$render()})})}}}]),angular.module("ui.route",[]).directive("uiRoute",["$location","$parse",function(e,t){"use strict";return{restrict:"AC",scope:!0,compile:function(n,i){var r;if(i.uiRoute)r="uiRoute";else if(i.ngHref)r="ngHref";else{if(!i.href)throw new Error("uiRoute missing a route or href property on "+n[0]);r="href"}return function(n,i,a){function o(t){var i=t.indexOf("#");i>-1&&(t=t.substr(i+1)),(u=function(){l(n,e.path().indexOf(t)>-1)})()}function s(t){var i=t.indexOf("#");i>-1&&(t=t.substr(i+1)),(u=function(){var i=new RegExp("^"+t+"$",["i"]);l(n,i.test(e.path()))})()}var l=t(a.ngModel||a.routeModel||"$uiRoute").assign,u=angular.noop;switch(r){case"uiRoute":a.uiRoute?s(a.uiRoute):a.$observe("uiRoute",s);break;case"ngHref":a.ngHref?o(a.ngHref):a.$observe("ngHref",o);break;case"href":o(a.href)}n.$on("$routeChangeSuccess",function(){u()}),n.$on("$stateChangeSuccess",function(){u()})}}}}]),angular.module("ui.scroll.jqlite",["ui.scroll"]).service("jqLiteExtras",["$log","$window",function(e,t){"use strict";return{registerFor:function(e){var n,i,r,a,o,s,l;return i=angular.element.prototype.css,e.prototype.css=function(e,t){var n,r;if(r=this,n=r[0],n&&3!==n.nodeType&&8!==n.nodeType&&n.style)return i.call(r,e,t)},s=function(e){return e&&e.document&&e.location&&e.alert&&e.setInterval},l=function(e,t,n){var i,r,a,o,l;return i=e[0],l={top:["scrollTop","pageYOffset","scrollLeft"],left:["scrollLeft","pageXOffset","scrollTop"]}[t],r=l[0],o=l[1],a=l[2],s(i)?angular.isDefined(n)?i.scrollTo(e[a].call(e),n):o in i?i[o]:i.document.documentElement[r]:angular.isDefined(n)?i[r]=n:i[r]},t.getComputedStyle?(a=function(e){return t.getComputedStyle(e,null)},n=function(e,t){return parseFloat(t)}):(a=function(e){return e.currentStyle},n=function(e,t){var n,i,r,a,o,s,l;return n=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,a=new RegExp("^("+n+")(?!px)[a-z%]+$","i"),a.test(t)?(l=e.style,i=l.left,o=e.runtimeStyle,s=o&&o.left,o&&(o.left=l.left),l.left=t,r=l.pixelLeft,l.left=i,s&&(o.left=s),r):parseFloat(t)}),r=function(e,t){var i,r,o,l,u,c,d,f,h,m,g,p,v;return s(e)?(i=document.documentElement[{height:"clientHeight",width:"clientWidth"}[t]],{base:i,padding:0,border:0,margin:0}):(v={width:[e.offsetWidth,"Left","Right"],height:[e.offsetHeight,"Top","Bottom"]}[t],i=v[0],d=v[1],f=v[2],c=a(e),g=n(e,c["padding"+d])||0,p=n(e,c["padding"+f])||0,r=n(e,c["border"+d+"Width"])||0,o=n(e,c["border"+f+"Width"])||0,l=c["margin"+d],u=c["margin"+f],h=n(e,l)||0,m=n(e,u)||0,{base:i,padding:g+p,border:r+o,margin:h+m})},o=function(e,t,n){var i,o,s;return o=r(e,t),o.base>0?{base:o.base-o.padding-o.border,outer:o.base,outerfull:o.base+o.margin}[n]:(i=a(e),s=i[t],(s<0||null===s)&&(s=e.style[t]||0),s=parseFloat(s)||0,{base:s-o.padding-o.border,outer:s,outerfull:s+o.padding+o.border+o.margin}[n])},angular.forEach({before:function(e){var t,n,i,r,a,o,s;if(a=this,n=a[0],r=a.parent(),t=r.contents(),t[0]===n)return r.prepend(e);for(i=o=1,s=t.length-1;1<=s?o<=s:o>=s;i=1<=s?++o:--o)if(t[i]===n)return void angular.element(t[i-1]).after(e);throw new Error("invalid DOM structure "+n.outerHTML)},height:function(e){var t;return t=this,angular.isDefined(e)?(angular.isNumber(e)&&(e+="px"),i.call(t,"height",e)):o(this[0],"height","base")},outerHeight:function(e){return o(this[0],"height",e?"outerfull":"outer")},offset:function(e){var t,n,i,r,a,o;if(a=this,arguments.length){if(void 0===e)return a;throw new Error("offset setter method is not implemented")}if(t={top:0,left:0},r=a[0],n=r&&r.ownerDocument)return i=n.documentElement,null!=r.getBoundingClientRect&&(t=r.getBoundingClientRect()),o=n.defaultView||n.parentWindow,{top:t.top+(o.pageYOffset||i.scrollTop)-(i.clientTop||0),left:t.left+(o.pageXOffset||i.scrollLeft)-(i.clientLeft||0)}},scrollTop:function(e){return l(this,"top",e)},scrollLeft:function(e){return l(this,"left",e)}},function(t,n){if(!e.prototype[n])return e.prototype[n]=t})}}}]).run(["$log","$window","jqLiteExtras",function(e,t,n){"use strict";if(!t.jQuery)return n.registerFor(angular.element)}]),angular.module("ui.scroll",[]).directive("uiScrollViewport",["$log",function(){"use strict";return{controller:["$scope","$element",function(e,t){return this.viewport=t,this}]}}]).directive("uiScroll",["$log","$injector","$rootScope","$timeout",function(e,t,n,i){"use strict";return{require:["?^uiScrollViewport"],transclude:"element",priority:1e3,terminal:!0,compile:function(r,a,o){return function(r,a,s,l){var u,c,d,f,h,m,g,p,v,y,_,w,D,S,b,$,C,k,M,T,O,x,Y,A,E,P,R,H,F,N,L,V,I,W,j,U,B,G,q,z,Z,K,J,Q,X,ee,te,ne,ie;if(V=e.debug||e.log,I=s.uiScroll.match(/^\s*(\w+)\s+in\s+([\w\.]+)\s*$/),!I)throw new Error("Expected uiScroll in form of '_item_ in _datasource_' but got '"+s.uiScroll+"'");if(N=I[1],b=I[2],P=function(e,t){var n;if(e)return n=t.match(/^([\w]+)\.(.+)$/),n&&3===n.length?P(e[n[1]],n[2]):e[t]},Z=function(e,t,n,i){var r;if(e&&t&&((r=t.match(/^([\w]+)\.(.+)$/))||t.indexOf(".")===-1))return r&&3===r.length?(angular.isObject(e[r[1]])||i||(e[r[1]]={}),Z(e[r[1]],r[2],n,i)):angular.isObject(e[t])||i?e[t]=n:e[t]=n},S=P(r,b),F=function(){return angular.isObject(S)&&"function"==typeof S.get},!F()&&(S=t.get(b),!F()))throw new Error(""+b+" is not a valid datasource");return y=Math.max(3,+s.bufferSize||10),v=function(){return te.outerHeight()*Math.max(.1,+s.padding||.1)},z=function(e){var t;return null!=(t=e[0].scrollHeight)?t:e[0].document.documentElement.scrollHeight},_=null,o(r.$new(),function(e){var t,n,i,o,s,u;if(o=e[0].localName,"dl"===o)throw new Error("ui-scroll directive does not support <"+e[0].localName+"> as a repeating tag: "+e[0].outerHTML);return"li"!==o&&"tr"!==o&&(o="div"),u=l[0]&&l[0].viewport?l[0].viewport:angular.element(window),u.css({"overflow-y":"auto",display:"block"}),i=function(e){var t,n,i;switch(e){case"tr":return i=angular.element("<table><tr><td><div></div></td></tr></table>"),t=i.find("div"),n=i.find("tr"),n.paddingHeight=function(){return t.height.apply(t,arguments)},n;default:return n=angular.element("<"+e+"></"+e+">"),n.paddingHeight=n.height,n}},n=function(e,t,n){return t[{top:"before",bottom:"after"}[n]](e),{paddingHeight:function(){return e.paddingHeight.apply(e,arguments)},insert:function(t){return e[{top:"after",bottom:"before"}[n]](t)}}},s=n(i(o),a,"top"),t=n(i(o),a,"bottom"),r.$on("$destroy",e.remove),_={viewport:u,topPadding:s.paddingHeight,bottomPadding:t.paddingHeight,append:t.insert,prepend:s.insert,bottomDataPos:function(){return z(u)-t.paddingHeight()},topDataPos:function(){return s.paddingHeight()}}}),te=_.viewport,ne=te.scope()||n,X=function(e){if(u.topVisible=e.scope[N],u.topVisibleElement=e.element,u.topVisibleScope=e.scope,s.topVisible&&Z(ne,s.topVisible,u.topVisible),s.topVisibleElement&&Z(ne,s.topVisibleElement,u.topVisibleElement),s.topVisibleScope&&Z(ne,s.topVisibleScope,u.topVisibleScope),"function"==typeof S.topVisible)return S.topVisible(e)},L=function(e){if(u.isLoading=e,s.isLoading&&Z(r,s.isLoading,e),"function"==typeof S.loading)return S.loading(e)},q=0,E=1,W=1,p=[],j=[],O=!1,m=!1,B=function(e,t){var n,i;for(n=i=e;e<=t?i<t:i>t;n=e<=t?++i:--i)p[n].scope.$destroy(),p[n].element.remove();return p.splice(e,t-e)},U=function(){return q++,E=1,W=1,B(0,p.length),_.topPadding(0),_.bottomPadding(0),j=[],O=!1,m=!1,d(q)},g=function(){return te.scrollTop()+te.outerHeight()},ee=function(){return te.scrollTop()},K=function(){return!O&&_.bottomDataPos()<g()+v()},w=function(){var e,t,n,i,r,a,o,s,l,u;for(e=0,o=0,t=l=u=p.length-1;u<=0?l<=0:l>=0;t=u<=0?++l:--l)if(n=p[t],r=n.element.offset().top,a=s!==r,s=r,a&&(i=n.element.outerHeight(!0)),_.bottomDataPos()-e-i>g()+v())a&&(e+=i),o++,O=!1;else{if(a)break;o++}if(o>0)return _.bottomPadding(_.bottomPadding()+e),B(p.length-o,p.length),W-=o},J=function(){return!m&&_.topDataPos()>ee()-v()},D=function(){var e,t,n,i,r,a,o,s,l;for(o=0,r=0,s=0,l=p.length;s<l;s++)if(e=p[s],n=e.element.offset().top,i=a!==n,a=n,i&&(t=e.element.outerHeight(!0)),_.topDataPos()+o+t<ee()-v())i&&(o+=t),r++,m=!1;else{if(i)break;r++}if(r>0)return _.topPadding(_.topPadding()+o),B(0,r),E+=r},T=function(e,t){if(u.isLoading||L(!0),1===j.push(t))return Y(e)},R=function(e){return e.displayTemp=e.css("display"),e.css("display","none")},Q=function(e){if(e.hasOwnProperty("displayTemp"))return e.css("display",e.displayTemp)},H=function(e,t){var n,i,a;return n=r.$new(),n[N]=t,i=e>E,n.$index=e,i&&n.$index--,a={scope:n},o(n,function(t){return a.element=t,i?e===W?(R(t),_.append(t),p.push(a)):(p[e-E].element.after(t),p.splice(e-E+1,0,a)):(R(t),_.prepend(t),p.unshift(a))}),{appended:i,wrapper:a}},f=function(e,t){var n;return e?_.bottomPadding(Math.max(0,_.bottomPadding()-t.element.outerHeight(!0))):(n=_.topPadding()-t.element.outerHeight(!0),n>=0?_.topPadding(n):te.scrollTop(te.scrollTop()+t.element.outerHeight(!0)))},$=function(e,t){var n,i,r,a,o,s,l,u,c;if(K()?T(e,!0):J()&&T(e,!1),t&&t(e),0===j.length){for(s=0,c=[],l=0,u=p.length;l<u;l++){if(n=p[l],r=n.element.offset().top,a=o!==r,o=r,a&&(i=n.element.outerHeight(!0)),!(a&&_.topDataPos()+s+i<ee())){a&&X(n);break}c.push(s+=i)}return c}},d=function(e,t,n){return t&&t.length?i(function(){var i,r,a,o,s,l,u,c,d;for(s=[],l=0,c=t.length;l<c;l++)a=t[l],i=a.wrapper.element,Q(i),r=i.offset().top,o!==r&&(s.push(a),o=r);for(u=0,d=s.length;u<d;u++)a=s[u],f(a.appended,a.wrapper);return $(e,n)}):$(e,n)},A=function(e,t){return d(e,t,function(){return j.shift(),0===j.length?L(!1):Y(e)})},Y=function(e){var t;return t=j[0],t?p.length&&!K()?A(e):S.get(W,y,function(t){var n,i,a,o;if(!(e&&e!==q||r.$$destroyed)){if(i=[],t.length<y&&(O=!0,_.bottomPadding(0)),t.length>0)for(D(),a=0,o=t.length;a<o;a++)n=t[a],i.push(H(++W,n));return A(e,i)}}):p.length&&!J()?A(e):S.get(E-y,y,function(t){var n,i,a,o;if(!(e&&e!==q||r.$$destroyed)){if(i=[],t.length<y&&(m=!0,_.topPadding(0)),t.length>0)for(p.length&&w(),n=a=o=t.length-1;o<=0?a<=0:a>=0;n=o<=0?++a:--a)i.unshift(H(--E,t[n]));return A(e,i)}})},G=function(){if(!n.$$phase&&!u.isLoading)return d(),r.$apply()},ie=function(e){var t,n;if(t=te[0].scrollTop,n=te[0].scrollHeight-te[0].clientHeight,0===t&&!m||t===n&&!O)return e.preventDefault()},te.bind("resize",G),te.bind("scroll",G),te.bind("mousewheel",ie),r.$watch(S.revision,U),x=S.scope?S.scope.$new():r.$new(),r.$on("$destroy",function(){var e,t,n;for(t=0,n=p.length;t<n;t++)e=p[t],e.scope.$destroy(),e.element.remove();return te.unbind("resize",G),te.unbind("scroll",G),te.unbind("mousewheel",ie)}),u={},u.isLoading=!1,h=function(e,t){var n,i,r,a,o,s,l,u,c,d,f,h;if(i=[],angular.isArray(t))if(t.length){if(1===t.length&&t[0]===e.scope[N])return i;for(a=e.scope.$index,s=a>E?a-E:1,n=l=0,d=t.length;l<d;n=++l)o=t[n],i.push(H(a+n,o));for(B(s,s+1),n=u=0,f=p.length;u<f;n=++u)r=p[n],r.scope.$index=E+n}else for(B(e.scope.$index-E,e.scope.$index-E+1),W--,n=c=0,h=p.length;c<h;n=++c)r=p[n],r.scope.$index=E+n;return i},u.applyUpdates=function(e,t){var n,i,r,a,o,s;if(n=[],q++,angular.isFunction(e))for(o=p.slice(0),r=0,a=o.length;r<a;r++)i=o[r],n.concat(n,h(i,e(i.scope[N],i.scope,i.element)));else{if(e%1!==0)throw new Error("applyUpdates - "+e+" is not a valid index or outside of range");0<=(s=e-E-1)&&s<p.length&&(n=h(p[e-E],t))}return d(q,n)},s.adapter&&(c=P(r,s.adapter),c||(Z(r,s.adapter,{}),c=P(r,s.adapter)),angular.extend(c,u),u=c),M=function(e,t){var n,i,r,a,o;if(angular.isFunction(e))for(i=function(t){return e(t.scope)},r=0,a=p.length;r<a;r++)n=p[r],i(n);else 0<=(o=e-E-1)&&o<p.length&&(p[e-E-1].scope[N]=t);return null},C=function(e){var t,n,i,r,a,o,s,l,u,c,f,h;if(angular.isFunction(e)){for(i=[],o=0,u=p.length;o<u;o++)n=p[o],i.unshift(n);for(a=function(n){if(e(n.scope))return B(i.length-1-t,i.length-t),W--},t=s=0,c=i.length;s<c;t=++s)r=i[t],a(r)}else 0<=(h=e-E-1)&&h<p.length&&(B(e-E-1,e-E),W--);for(t=l=0,f=p.length;l<f;t=++l)n=p[t],n.scope.$index=E+t;return d()},k=function(e,t){var n,i,r,a,o;if(i=[],angular.isFunction(e))throw new Error("not implemented - Insert with locator function");for(0<=(o=e-E-1)&&o<p.length&&(i.push(H(e,t)),W++),n=r=0,a=p.length;r<a;n=++r)t=p[n],t.scope.$index=E+n;return d(null,i)},x.$on("insert.item",function(e,t,n){return k(t,n)}),x.$on("update.items",function(e,t,n){return M(t,n)}),x.$on("delete.items",function(e,t){return C(t)})}}}}]),angular.module("ui.scrollfix",[]).directive("uiScrollfix",["$window",function(e){"use strict";function t(){if(angular.isDefined(e.pageYOffset))return e.pageYOffset;var t=document.compatMode&&"BackCompat"!==document.compatMode?document.documentElement:document.body;return t.scrollTop}return{require:"^?uiScrollfixTarget",link:function(n,i,r,a){function o(){var e=l?r.uiScrollfix:i[0].offsetTop+u,n=a?c[0].scrollTop:t();!i.hasClass("ui-scrollfix")&&n>e?(i.addClass("ui-scrollfix"),s=e):i.hasClass("ui-scrollfix")&&n<s&&i.removeClass("ui-scrollfix")}var s,l=!0,u=0,c=a&&a.$element||angular.element(e);r.uiScrollfix?"string"==typeof r.uiScrollfix&&("-"===r.uiScrollfix.charAt(0)?(l=!1,u=-parseFloat(r.uiScrollfix.substr(1))):"+"===r.uiScrollfix.charAt(0)&&(l=!1,u=parseFloat(r.uiScrollfix.substr(1)))):l=!1,s=l?r.uiScrollfix:i[0].offsetTop+u,c.on("scroll",o),n.$on("$destroy",function(){c.off("scroll",o)})}}}]).directive("uiScrollfixTarget",[function(){"use strict";return{controller:["$element",function(e){this.$element=e}]}}]),angular.module("ui.showhide",[]).directive("uiShow",[function(){"use strict";return function(e,t,n){e.$watch(n.uiShow,function(e){e?t.addClass("ui-show"):t.removeClass("ui-show")})}}]).directive("uiHide",[function(){"use strict";return function(e,t,n){e.$watch(n.uiHide,function(e){e?t.addClass("ui-hide"):t.removeClass("ui-hide")})}}]).directive("uiToggle",[function(){"use strict";return function(e,t,n){e.$watch(n.uiToggle,function(e){e?t.removeClass("ui-hide").addClass("ui-show"):t.removeClass("ui-show").addClass("ui-hide")})}}]),angular.module("ui.unique",[]).filter("unique",["$parse",function(e){"use strict";return function(t,n){if(n===!1)return t;if((n||angular.isUndefined(n))&&angular.isArray(t)){var i=[],r=angular.isString(n)?e(n):function(e){return e},a=function(e){return angular.isObject(e)?r(e):e};angular.forEach(t,function(e){for(var t=!1,n=0;n<i.length;n++)if(angular.equals(a(i[n]),a(e))){t=!0;break}t||i.push(e)}),t=i}return t}}]),angular.module("ui.uploader",[]).service("uiUploader",uiUploader),uiUploader.$inject=["$log"],angular.module("ui.validate",[]).directive("uiValidate",function(){"use strict";return{restrict:"A",require:"ngModel",link:function(e,t,n,i){function r(t){return angular.isString(t)?void e.$watch(t,function(){angular.forEach(o,function(e){e(i.$modelValue)})}):angular.isArray(t)?void angular.forEach(t,function(t){e.$watch(t,function(){angular.forEach(o,function(e){e(i.$modelValue)})})}):void(angular.isObject(t)&&angular.forEach(t,function(t,n){angular.isString(t)&&e.$watch(t,function(){o[n](i.$modelValue)}),angular.isArray(t)&&angular.forEach(t,function(t){e.$watch(t,function(){o[n](i.$modelValue)})})}))}var a,o={},s=e.$eval(n.uiValidate);s&&(angular.isString(s)&&(s={validator:s}),angular.forEach(s,function(t,n){a=function(r){var a=e.$eval(t,{$value:r});return angular.isObject(a)&&angular.isFunction(a.then)?(a.then(function(){i.$setValidity(n,!0)},function(){i.$setValidity(n,!1)}),r):a?(i.$setValidity(n,!0),r):(i.$setValidity(n,!1),r)},o[n]=a,i.$formatters.push(a),i.$parsers.push(a)}),n.uiValidateWatch&&r(e.$eval(n.uiValidateWatch)))}}}),angular.module("ui.utils",["ui.event","ui.format","ui.highlight","ui.include","ui.indeterminate","ui.inflector","ui.jq","ui.keypress","ui.mask","ui.reset","ui.route","ui.scrollfix","ui.scroll","ui.scroll.jqlite","ui.showhide","ui.unique","ui.validate"]),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";function e(){return Yi.apply(null,arguments)}function t(e){Yi=e}function n(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function i(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function r(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}function a(e){return void 0===e}function o(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function s(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function l(e,t){var n,i=[];for(n=0;n<e.length;++n)i.push(t(e[n],n));return i}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){for(var n in t)u(t,n)&&(e[n]=t[n]);return u(t,"toString")&&(e.toString=t.toString),u(t,"valueOf")&&(e.valueOf=t.valueOf),e}function d(e,t,n,i){return Ct(e,t,n,i,!0).utc()}function f(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function h(e){return null==e._pf&&(e._pf=f()),e._pf}function m(e){if(null==e._isValid){var t=h(e),n=Ai.call(t.parsedDateParts,function(e){return null!=e}),i=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);
if(e._strict&&(i=i&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function g(e){var t=d(NaN);return null!=e?c(h(t),e):h(t).userInvalidated=!0,t}function p(e,t){var n,i,r;if(a(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),a(t._i)||(e._i=t._i),a(t._f)||(e._f=t._f),a(t._l)||(e._l=t._l),a(t._strict)||(e._strict=t._strict),a(t._tzm)||(e._tzm=t._tzm),a(t._isUTC)||(e._isUTC=t._isUTC),a(t._offset)||(e._offset=t._offset),a(t._pf)||(e._pf=h(t)),a(t._locale)||(e._locale=t._locale),Ei.length>0)for(n=0;n<Ei.length;n++)i=Ei[n],r=t[i],a(r)||(e[i]=r);return e}function v(t){p(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Pi===!1&&(Pi=!0,e.updateOffset(this),Pi=!1)}function y(e){return e instanceof v||null!=e&&null!=e._isAMomentObject}function _(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function w(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=_(t)),n}function D(e,t,n){var i,r=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),o=0;for(i=0;i<r;i++)(n&&e[i]!==t[i]||!n&&w(e[i])!==w(t[i]))&&o++;return o+a}function S(t){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function b(t,n){var i=!0;return c(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,t),i){for(var r,a=[],o=0;o<arguments.length;o++){if(r="","object"==typeof arguments[o]){r+="\n["+o+"] ";for(var s in arguments[0])r+=s+": "+arguments[0][s]+", ";r=r.slice(0,-2)}else r=arguments[o];a.push(r)}S(t+"\nArguments: "+Array.prototype.slice.call(a).join("")+"\n"+(new Error).stack),i=!1}return n.apply(this,arguments)},n)}function $(t,n){null!=e.deprecationHandler&&e.deprecationHandler(t,n),Ri[t]||(S(n),Ri[t]=!0)}function C(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function k(e){var t,n;for(n in e)t=e[n],C(t)?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function M(e,t){var n,r=c({},e);for(n in t)u(t,n)&&(i(e[n])&&i(t[n])?(r[n]={},c(r[n],e[n]),c(r[n],t[n])):null!=t[n]?r[n]=t[n]:delete r[n]);for(n in e)u(e,n)&&!u(t,n)&&i(e[n])&&(r[n]=c({},r[n]));return r}function T(e){null!=e&&this.set(e)}function O(e,t,n){var i=this._calendar[e]||this._calendar.sameElse;return C(i)?i.call(t,n):i}function x(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function Y(){return this._invalidDate}function A(e){return this._ordinal.replace("%d",e)}function E(e,t,n,i){var r=this._relativeTime[n];return C(r)?r(e,t,n,i):r.replace(/%d/i,e)}function P(e,t){var n=this._relativeTime[e>0?"future":"past"];return C(n)?n(t):n.replace(/%s/i,t)}function R(e,t){var n=e.toLowerCase();ji[n]=ji[n+"s"]=ji[t]=e}function H(e){return"string"==typeof e?ji[e]||ji[e.toLowerCase()]:void 0}function F(e){var t,n,i={};for(n in e)u(e,n)&&(t=H(n),t&&(i[t]=e[n]));return i}function N(e,t){Ui[e]=t}function L(e){var t=[];for(var n in e)t.push({unit:n,priority:Ui[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}function V(e,t,n){var i=""+Math.abs(e),r=t-i.length,a=e>=0;return(a?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+i}function I(e,t,n,i){var r=i;"string"==typeof i&&(r=function(){return this[i]()}),e&&(zi[e]=r),t&&(zi[t[0]]=function(){return V(r.apply(this,arguments),t[1],t[2])}),n&&(zi[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),e)})}function W(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function j(e){var t,n,i=e.match(Bi);for(t=0,n=i.length;t<n;t++)zi[i[t]]?i[t]=zi[i[t]]:i[t]=W(i[t]);return function(t){var r,a="";for(r=0;r<n;r++)a+=C(i[r])?i[r].call(t,e):i[r];return a}}function U(e,t){return e.isValid()?(t=B(t,e.localeData()),qi[t]=qi[t]||j(t),qi[t](e)):e.localeData().invalidDate()}function B(e,t){function n(e){return t.longDateFormat(e)||e}var i=5;for(Gi.lastIndex=0;i>=0&&Gi.test(e);)e=e.replace(Gi,n),Gi.lastIndex=0,i-=1;return e}function G(e,t,n){fr[e]=C(t)?t:function(e,i){return e&&n?n:t}}function q(e,t){return u(fr,e)?fr[e](t._strict,t._locale):new RegExp(z(e))}function z(e){return Z(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,i,r){return t||n||i||r}))}function Z(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function K(e,t){var n,i=t;for("string"==typeof e&&(e=[e]),o(t)&&(i=function(e,n){n[t]=w(e)}),n=0;n<e.length;n++)hr[e[n]]=i}function J(e,t){K(e,function(e,n,i,r){i._w=i._w||{},t(e,i._w,i,r)})}function Q(e,t,n){null!=t&&u(hr,e)&&hr[e](t,n._a,n,e)}function X(e){return ee(e)?366:365}function ee(e){return e%4===0&&e%100!==0||e%400===0}function te(){return ee(this.year())}function ne(t,n){return function(i){return null!=i?(re(this,t,i),e.updateOffset(this,n),this):ie(this,t)}}function ie(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function re(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ee(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),le(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function ae(e){return e=H(e),C(this[e])?this[e]():this}function oe(e,t){if("object"==typeof e){e=F(e);for(var n=L(e),i=0;i<n.length;i++)this[n[i].unit](e[n[i].unit])}else if(e=H(e),C(this[e]))return this[e](t);return this}function se(e,t){return(e%t+t)%t}function le(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=se(t,12);return e+=(t-n)/12,1===n?ee(e)?29:28:31-n%7%2}function ue(e,t){return e?n(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Cr).test(t)?"format":"standalone"][e.month()]:n(this._months)?this._months:this._months.standalone}function ce(e,t){return e?n(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Cr.test(t)?"format":"standalone"][e.month()]:n(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function de(e,t,n){var i,r,a,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)a=d([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(a,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(a,"").toLocaleLowerCase();return n?"MMM"===t?(r=br.call(this._shortMonthsParse,o),r!==-1?r:null):(r=br.call(this._longMonthsParse,o),r!==-1?r:null):"MMM"===t?(r=br.call(this._shortMonthsParse,o),r!==-1?r:(r=br.call(this._longMonthsParse,o),r!==-1?r:null)):(r=br.call(this._longMonthsParse,o),r!==-1?r:(r=br.call(this._shortMonthsParse,o),r!==-1?r:null))}function fe(e,t,n){var i,r,a;if(this._monthsParseExact)return de.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(r=d([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(a="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[i]=new RegExp(a.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[i].test(e))return i;if(n&&"MMM"===t&&this._shortMonthsParse[i].test(e))return i;if(!n&&this._monthsParse[i].test(e))return i}}function he(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=w(t);else if(t=e.localeData().monthsParse(t),!o(t))return e;return n=Math.min(e.date(),le(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function me(t){return null!=t?(he(this,t),e.updateOffset(this,!0),this):ie(this,"Month")}function ge(){return le(this.year(),this.month())}function pe(e){return this._monthsParseExact?(u(this,"_monthsRegex")||ye.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(u(this,"_monthsShortRegex")||(this._monthsShortRegex=Tr),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ve(e){return this._monthsParseExact?(u(this,"_monthsRegex")||ye.call(this),e?this._monthsStrictRegex:this._monthsRegex):(u(this,"_monthsRegex")||(this._monthsRegex=Or),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function ye(){function e(e,t){return t.length-e.length}var t,n,i=[],r=[],a=[];for(t=0;t<12;t++)n=d([2e3,t]),i.push(this.monthsShort(n,"")),r.push(this.months(n,"")),a.push(this.months(n,"")),a.push(this.monthsShort(n,""));for(i.sort(e),r.sort(e),a.sort(e),t=0;t<12;t++)i[t]=Z(i[t]),r[t]=Z(r[t]);for(t=0;t<24;t++)a[t]=Z(a[t]);this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function _e(e,t,n,i,r,a,o){var s;return e<100&&e>=0?(s=new Date(e+400,t,n,i,r,a,o),isFinite(s.getFullYear())&&s.setFullYear(e)):s=new Date(e,t,n,i,r,a,o),s}function we(e){var t;if(e<100&&e>=0){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function De(e,t,n){var i=7+t-n,r=(7+we(e,0,i).getUTCDay()-t)%7;return-r+i-1}function Se(e,t,n,i,r){var a,o,s=(7+n-i)%7,l=De(e,i,r),u=1+7*(t-1)+s+l;return u<=0?(a=e-1,o=X(a)+u):u>X(e)?(a=e+1,o=u-X(e)):(a=e,o=u),{year:a,dayOfYear:o}}function be(e,t,n){var i,r,a=De(e.year(),t,n),o=Math.floor((e.dayOfYear()-a-1)/7)+1;return o<1?(r=e.year()-1,i=o+$e(r,t,n)):o>$e(e.year(),t,n)?(i=o-$e(e.year(),t,n),r=e.year()+1):(r=e.year(),i=o),{week:i,year:r}}function $e(e,t,n){var i=De(e,t,n),r=De(e+1,t,n);return(X(e)-i+r)/7}function Ce(e){return be(e,this._week.dow,this._week.doy).week}function ke(){return this._week.dow}function Me(){return this._week.doy}function Te(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Oe(e){var t=be(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function xe(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function Ye(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Ae(e,t){return e.slice(t,7).concat(e.slice(0,t))}function Ee(e,t){var i=n(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Ae(i,this._week.dow):e?i[e.day()]:i}function Pe(e){return e===!0?Ae(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Re(e){return e===!0?Ae(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function He(e,t,n){var i,r,a,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)a=d([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(a,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(a,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(a,"").toLocaleLowerCase();return n?"dddd"===t?(r=br.call(this._weekdaysParse,o),r!==-1?r:null):"ddd"===t?(r=br.call(this._shortWeekdaysParse,o),r!==-1?r:null):(r=br.call(this._minWeekdaysParse,o),r!==-1?r:null):"dddd"===t?(r=br.call(this._weekdaysParse,o),r!==-1?r:(r=br.call(this._shortWeekdaysParse,o),r!==-1?r:(r=br.call(this._minWeekdaysParse,o),r!==-1?r:null))):"ddd"===t?(r=br.call(this._shortWeekdaysParse,o),r!==-1?r:(r=br.call(this._weekdaysParse,o),r!==-1?r:(r=br.call(this._minWeekdaysParse,o),r!==-1?r:null))):(r=br.call(this._minWeekdaysParse,o),r!==-1?r:(r=br.call(this._weekdaysParse,o),r!==-1?r:(r=br.call(this._shortWeekdaysParse,o),r!==-1?r:null)))}function Fe(e,t,n){var i,r,a;if(this._weekdaysParseExact)return He.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(r=d([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(a="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[i]=new RegExp(a.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[i].test(e))return i;if(n&&"ddd"===t&&this._shortWeekdaysParse[i].test(e))return i;if(n&&"dd"===t&&this._minWeekdaysParse[i].test(e))return i;if(!n&&this._weekdaysParse[i].test(e))return i}}function Ne(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=xe(e,this.localeData()),this.add(e-t,"d")):t}function Le(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function Ve(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=Ye(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function Ie(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Ue.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(u(this,"_weekdaysRegex")||(this._weekdaysRegex=Pr),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function We(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Ue.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(u(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Rr),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function je(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Ue.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(u(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Hr),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ue(){function e(e,t){return t.length-e.length}var t,n,i,r,a,o=[],s=[],l=[],u=[];for(t=0;t<7;t++)n=d([2e3,1]).day(t),i=this.weekdaysMin(n,""),r=this.weekdaysShort(n,""),a=this.weekdays(n,""),o.push(i),s.push(r),l.push(a),u.push(i),u.push(r),u.push(a);for(o.sort(e),s.sort(e),l.sort(e),u.sort(e),t=0;t<7;t++)s[t]=Z(s[t]),l[t]=Z(l[t]),u[t]=Z(u[t]);this._weekdaysRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Be(){return this.hours()%12||12}function Ge(){return this.hours()||24}function qe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function ze(e,t){return t._meridiemParse}function Ze(e){return"p"===(e+"").toLowerCase().charAt(0)}function Ke(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}function Je(e){return e?e.toLowerCase().replace("_","-"):e}function Qe(e){for(var t,n,i,r,a=0;a<e.length;){for(r=Je(e[a]).split("-"),t=r.length,n=Je(e[a+1]),n=n?n.split("-"):null;t>0;){if(i=Xe(r.slice(0,t).join("-")))return i;if(n&&n.length>=t&&D(r,n,!0)>=t-1)break;t--}a++}return Fr}function Xe(e){var t=null;if(!Ir[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=Fr._abbr;var n=require;n("./locale/"+e),et(t)}catch(i){}return Ir[e]}function et(e,t){var n;return e&&(n=a(t)?it(e):tt(e,t),n?Fr=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Fr._abbr}function tt(e,t){if(null!==t){var n,i=Vr;if(t.abbr=e,null!=Ir[e])$("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=Ir[e]._config;else if(null!=t.parentLocale)if(null!=Ir[t.parentLocale])i=Ir[t.parentLocale]._config;else{if(n=Xe(t.parentLocale),null==n)return Wr[t.parentLocale]||(Wr[t.parentLocale]=[]),Wr[t.parentLocale].push({name:e,config:t}),null;i=n._config}return Ir[e]=new T(M(i,t)),Wr[e]&&Wr[e].forEach(function(e){tt(e.name,e.config)}),et(e),Ir[e]}return delete Ir[e],null}function nt(e,t){if(null!=t){var n,i,r=Vr;i=Xe(e),null!=i&&(r=i._config),t=M(r,t),n=new T(t),n.parentLocale=Ir[e],Ir[e]=n,et(e)}else null!=Ir[e]&&(null!=Ir[e].parentLocale?Ir[e]=Ir[e].parentLocale:null!=Ir[e]&&delete Ir[e]);return Ir[e]}function it(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Fr;if(!n(e)){if(t=Xe(e))return t;e=[e]}return Qe(e)}function rt(){return Hi(Ir)}function at(e){var t,n=e._a;return n&&h(e).overflow===-2&&(t=n[gr]<0||n[gr]>11?gr:n[pr]<1||n[pr]>le(n[mr],n[gr])?pr:n[vr]<0||n[vr]>24||24===n[vr]&&(0!==n[yr]||0!==n[_r]||0!==n[wr])?vr:n[yr]<0||n[yr]>59?yr:n[_r]<0||n[_r]>59?_r:n[wr]<0||n[wr]>999?wr:-1,h(e)._overflowDayOfYear&&(t<mr||t>pr)&&(t=pr),h(e)._overflowWeeks&&t===-1&&(t=Dr),h(e)._overflowWeekday&&t===-1&&(t=Sr),h(e).overflow=t),e}function ot(e,t,n){return null!=e?e:null!=t?t:n}function st(t){var n=new Date(e.now());return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function lt(e){var t,n,i,r,a,o=[];if(!e._d){for(i=st(e),e._w&&null==e._a[pr]&&null==e._a[gr]&&ut(e),null!=e._dayOfYear&&(a=ot(e._a[mr],i[mr]),(e._dayOfYear>X(a)||0===e._dayOfYear)&&(h(e)._overflowDayOfYear=!0),n=we(a,0,e._dayOfYear),e._a[gr]=n.getUTCMonth(),e._a[pr]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=i[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[vr]&&0===e._a[yr]&&0===e._a[_r]&&0===e._a[wr]&&(e._nextDay=!0,e._a[vr]=0),e._d=(e._useUTC?we:_e).apply(null,o),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[vr]=24),e._w&&"undefined"!=typeof e._w.d&&e._w.d!==r&&(h(e).weekdayMismatch=!0)}}function ut(e){var t,n,i,r,a,o,s,l;if(t=e._w,null!=t.GG||null!=t.W||null!=t.E)a=1,o=4,n=ot(t.GG,e._a[mr],be(kt(),1,4).year),i=ot(t.W,1),r=ot(t.E,1),(r<1||r>7)&&(l=!0);else{a=e._locale._week.dow,o=e._locale._week.doy;var u=be(kt(),a,o);n=ot(t.gg,e._a[mr],u.year),i=ot(t.w,u.week),null!=t.d?(r=t.d,(r<0||r>6)&&(l=!0)):null!=t.e?(r=t.e+a,(t.e<0||t.e>6)&&(l=!0)):r=a}i<1||i>$e(n,a,o)?h(e)._overflowWeeks=!0:null!=l?h(e)._overflowWeekday=!0:(s=Se(n,i,r,a,o),e._a[mr]=s.year,e._dayOfYear=s.dayOfYear)}function ct(e){var t,n,i,r,a,o,s=e._i,l=jr.exec(s)||Ur.exec(s);if(l){for(h(e).iso=!0,t=0,n=Gr.length;t<n;t++)if(Gr[t][1].exec(l[1])){r=Gr[t][0],i=Gr[t][2]!==!1;break}if(null==r)return void(e._isValid=!1);if(l[3]){for(t=0,n=qr.length;t<n;t++)if(qr[t][1].exec(l[3])){a=(l[2]||" ")+qr[t][0];break}if(null==a)return void(e._isValid=!1)}if(!i&&null!=a)return void(e._isValid=!1);if(l[4]){if(!Br.exec(l[4]))return void(e._isValid=!1);o="Z"}e._f=r+(a||"")+(o||""),yt(e)}else e._isValid=!1}function dt(e,t,n,i,r,a){var o=[ft(e),Mr.indexOf(t),parseInt(n,10),parseInt(i,10),parseInt(r,10)];return a&&o.push(parseInt(a,10)),o}function ft(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function ht(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function mt(e,t,n){if(e){var i=Ar.indexOf(e),r=new Date(t[0],t[1],t[2]).getDay();if(i!==r)return h(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function gt(e,t,n){if(e)return Kr[e];if(t)return 0;var i=parseInt(n,10),r=i%100,a=(i-r)/100;return 60*a+r}function pt(e){var t=Zr.exec(ht(e._i));if(t){var n=dt(t[4],t[3],t[2],t[5],t[6],t[7]);if(!mt(t[1],n,e))return;e._a=n,e._tzm=gt(t[8],t[9],t[10]),e._d=we.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),h(e).rfc2822=!0}else e._isValid=!1}function vt(t){var n=zr.exec(t._i);return null!==n?void(t._d=new Date((+n[1]))):(ct(t),void(t._isValid===!1&&(delete t._isValid,pt(t),t._isValid===!1&&(delete t._isValid,e.createFromInputFallback(t)))))}function yt(t){if(t._f===e.ISO_8601)return void ct(t);if(t._f===e.RFC_2822)return void pt(t);t._a=[],h(t).empty=!0;var n,i,r,a,o,s=""+t._i,l=s.length,u=0;for(r=B(t._f,t._locale).match(Bi)||[],n=0;n<r.length;n++)a=r[n],i=(s.match(q(a,t))||[])[0],i&&(o=s.substr(0,s.indexOf(i)),o.length>0&&h(t).unusedInput.push(o),s=s.slice(s.indexOf(i)+i.length),u+=i.length),zi[a]?(i?h(t).empty=!1:h(t).unusedTokens.push(a),Q(a,i,t)):t._strict&&!i&&h(t).unusedTokens.push(a);h(t).charsLeftOver=l-u,s.length>0&&h(t).unusedInput.push(s),t._a[vr]<=12&&h(t).bigHour===!0&&t._a[vr]>0&&(h(t).bigHour=void 0),h(t).parsedDateParts=t._a.slice(0),h(t).meridiem=t._meridiem,t._a[vr]=_t(t._locale,t._a[vr],t._meridiem),lt(t),at(t)}function _t(e,t,n){var i;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(i=e.isPM(n),i&&t<12&&(t+=12),i||12!==t||(t=0),t):t}function wt(e){var t,n,i,r,a;if(0===e._f.length)return h(e).invalidFormat=!0,void(e._d=new Date(NaN));for(r=0;r<e._f.length;r++)a=0,t=p({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[r],yt(t),m(t)&&(a+=h(t).charsLeftOver,a+=10*h(t).unusedTokens.length,h(t).score=a,(null==i||a<i)&&(i=a,n=t));c(e,n||t)}function Dt(e){if(!e._d){var t=F(e._i);e._a=l([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),lt(e)}}function St(e){var t=new v(at(bt(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function bt(e){var t=e._i,i=e._f;return e._locale=e._locale||it(e._l),null===t||void 0===i&&""===t?g({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),y(t)?new v(at(t)):(s(t)?e._d=t:n(i)?wt(e):i?yt(e):$t(e),m(e)||(e._d=null),e))}function $t(t){var r=t._i;a(r)?t._d=new Date(e.now()):s(r)?t._d=new Date(r.valueOf()):"string"==typeof r?vt(t):n(r)?(t._a=l(r.slice(0),function(e){return parseInt(e,10)}),lt(t)):i(r)?Dt(t):o(r)?t._d=new Date(r):e.createFromInputFallback(t)}function Ct(e,t,a,o,s){var l={};return a!==!0&&a!==!1||(o=a,a=void 0),(i(e)&&r(e)||n(e)&&0===e.length)&&(e=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=s,l._l=a,l._i=e,l._f=t,l._strict=o,St(l)}function kt(e,t,n,i){return Ct(e,t,n,i,!1)}function Mt(e,t){var i,r;if(1===t.length&&n(t[0])&&(t=t[0]),!t.length)return kt();for(i=t[0],r=1;r<t.length;++r)t[r].isValid()&&!t[r][e](i)||(i=t[r]);return i}function Tt(){var e=[].slice.call(arguments,0);return Mt("isBefore",e)}function Ot(){var e=[].slice.call(arguments,0);return Mt("isAfter",e)}function xt(e){for(var t in e)if(br.call(ea,t)===-1||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,i=0;i<ea.length;++i)if(e[ea[i]]){if(n)return!1;parseFloat(e[ea[i]])!==w(e[ea[i]])&&(n=!0)}return!0}function Yt(){return this._isValid}function At(){return Jt(NaN)}function Et(e){var t=F(e),n=t.year||0,i=t.quarter||0,r=t.month||0,a=t.week||t.isoWeek||0,o=t.day||0,s=t.hour||0,l=t.minute||0,u=t.second||0,c=t.millisecond||0;this._isValid=xt(t),this._milliseconds=+c+1e3*u+6e4*l+1e3*s*60*60,this._days=+o+7*a,this._months=+r+3*i+12*n,this._data={},this._locale=it(),this._bubble()}function Pt(e){return e instanceof Et}function Rt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Ht(e,t){I(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+V(~~(e/60),2)+t+V(~~e%60,2)})}function Ft(e,t){var n=(t||"").match(e);if(null===n)return null;var i=n[n.length-1]||[],r=(i+"").match(ta)||["-",0,0],a=+(60*r[1])+w(r[2]);return 0===a?0:"+"===r[0]?a:-a}function Nt(t,n){var i,r;return n._isUTC?(i=n.clone(),r=(y(t)||s(t)?t.valueOf():kt(t).valueOf())-i.valueOf(),i._d.setTime(i._d.valueOf()+r),e.updateOffset(i,!1),i):kt(t).local()}function Lt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(t,n,i){var r,a=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"==typeof t){if(t=Ft(ur,t),null===t)return this}else Math.abs(t)<16&&!i&&(t=60*t);return!this._isUTC&&n&&(r=Lt(this)),this._offset=t,this._isUTC=!0,null!=r&&this.add(r,"m"),a!==t&&(!n||this._changeInProgress?nn(this,Jt(t-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?a:Lt(this)}function It(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Wt(e){return this.utcOffset(0,e)}function jt(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Lt(this),"m")),this}function Ut(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ft(lr,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Bt(e){return!!this.isValid()&&(e=e?kt(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function Gt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function qt(){if(!a(this._isDSTShifted))return this._isDSTShifted;var e={};if(p(e,this),e=bt(e),e._a){var t=e._isUTC?d(e._a):kt(e._a);this._isDSTShifted=this.isValid()&&D(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function zt(){return!!this.isValid()&&!this._isUTC}function Zt(){return!!this.isValid()&&this._isUTC}function Kt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Jt(e,t){var n,i,r,a=e,s=null;return Pt(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:o(e)?(a={},t?a[t]=e:a.milliseconds=e):(s=na.exec(e))?(n="-"===s[1]?-1:1,a={y:0,d:w(s[pr])*n,h:w(s[vr])*n,m:w(s[yr])*n,s:w(s[_r])*n,ms:w(Rt(1e3*s[wr]))*n}):(s=ia.exec(e))?(n="-"===s[1]?-1:1,a={y:Qt(s[2],n),M:Qt(s[3],n),w:Qt(s[4],n),d:Qt(s[5],n),h:Qt(s[6],n),m:Qt(s[7],n),s:Qt(s[8],n)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(r=en(kt(a.from),kt(a.to)),a={},a.ms=r.milliseconds,a.M=r.months),i=new Et(a),Pt(e)&&u(e,"_locale")&&(i._locale=e._locale),i}function Qt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Xt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function en(e,t){var n;return e.isValid()&&t.isValid()?(t=Nt(t,e),e.isBefore(t)?n=Xt(e,t):(n=Xt(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function tn(e,t){return function(n,i){var r,a;return null===i||isNaN(+i)||($(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=n,n=i,i=a),n="string"==typeof n?+n:n,r=Jt(n,i),nn(this,r,e),this}}function nn(t,n,i,r){var a=n._milliseconds,o=Rt(n._days),s=Rt(n._months);t.isValid()&&(r=null==r||r,s&&he(t,ie(t,"Month")+s*i),o&&re(t,"Date",ie(t,"Date")+o*i),a&&t._d.setTime(t._d.valueOf()+a*i),r&&e.updateOffset(t,o||s))}function rn(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function an(t,n){var i=t||kt(),r=Nt(i,this).startOf("day"),a=e.calendarFormat(this,r)||"sameElse",o=n&&(C(n[a])?n[a].call(this,i):n[a]);return this.format(o||this.localeData().calendar(a,this,kt(i)))}function on(){return new v(this)}function sn(e,t){var n=y(e)?e:kt(e);return!(!this.isValid()||!n.isValid())&&(t=H(t)||"millisecond","millisecond"===t?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function ln(e,t){var n=y(e)?e:kt(e);return!(!this.isValid()||!n.isValid())&&(t=H(t)||"millisecond","millisecond"===t?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function un(e,t,n,i){var r=y(e)?e:kt(e),a=y(t)?t:kt(t);return!!(this.isValid()&&r.isValid()&&a.isValid())&&(i=i||"()",("("===i[0]?this.isAfter(r,n):!this.isBefore(r,n))&&(")"===i[1]?this.isBefore(a,n):!this.isAfter(a,n)))}function cn(e,t){var n,i=y(e)?e:kt(e);return!(!this.isValid()||!i.isValid())&&(t=H(t)||"millisecond","millisecond"===t?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function dn(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function fn(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function hn(e,t,n){var i,r,a;if(!this.isValid())return NaN;if(i=Nt(e,this),!i.isValid())return NaN;switch(r=6e4*(i.utcOffset()-this.utcOffset()),t=H(t)){case"year":a=mn(this,i)/12;break;case"month":a=mn(this,i);break;case"quarter":a=mn(this,i)/3;break;case"second":a=(this-i)/1e3;break;case"minute":a=(this-i)/6e4;break;case"hour":a=(this-i)/36e5;break;case"day":a=(this-i-r)/864e5;break;case"week":a=(this-i-r)/6048e5;break;default:a=this-i}return n?a:_(a)}function mn(e,t){var n,i,r=12*(t.year()-e.year())+(t.month()-e.month()),a=e.clone().add(r,"months");return t-a<0?(n=e.clone().add(r-1,"months"),i=(t-a)/(a-n)):(n=e.clone().add(r+1,"months"),i=(t-a)/(n-a)),-(r+i)||0}function gn(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function pn(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?U(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):C(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",U(n,"Z")):U(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function vn(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",a=t+'[")]';return this.format(n+i+r+a)}function yn(t){t||(t=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var n=U(this,t);return this.localeData().postformat(n)}function _n(e,t){return this.isValid()&&(y(e)&&e.isValid()||kt(e).isValid())?Jt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function wn(e){return this.from(kt(),e)}function Dn(e,t){return this.isValid()&&(y(e)&&e.isValid()||kt(e).isValid())?Jt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Sn(e){return this.to(kt(),e)}function bn(e){var t;return void 0===e?this._locale._abbr:(t=it(e),null!=t&&(this._locale=t),this)}function $n(){return this._locale}function Cn(e,t){return(e%t+t)%t}function kn(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-ca:new Date(e,t,n).valueOf()}function Mn(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-ca:Date.UTC(e,t,n)}function Tn(t){var n;if(t=H(t),void 0===t||"millisecond"===t||!this.isValid())return this;var i=this._isUTC?Mn:kn;switch(t){case"year":n=i(this.year(),0,1);break;case"quarter":n=i(this.year(),this.month()-this.month()%3,1);break;case"month":n=i(this.year(),this.month(),1);break;case"week":n=i(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":n=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":n=i(this.year(),this.month(),this.date());break;case"hour":n=this._d.valueOf(),n-=Cn(n+(this._isUTC?0:this.utcOffset()*la),ua);break;case"minute":n=this._d.valueOf(),n-=Cn(n,la);break;case"second":n=this._d.valueOf(),n-=Cn(n,sa)}return this._d.setTime(n),e.updateOffset(this,!0),this}function On(t){var n;if(t=H(t),void 0===t||"millisecond"===t||!this.isValid())return this;var i=this._isUTC?Mn:kn;switch(t){case"year":n=i(this.year()+1,0,1)-1;break;case"quarter":n=i(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":n=i(this.year(),this.month()+1,1)-1;break;case"week":n=i(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":n=i(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":n=i(this.year(),this.month(),this.date()+1)-1;break;case"hour":n=this._d.valueOf(),n+=ua-Cn(n+(this._isUTC?0:this.utcOffset()*la),ua)-1;break;case"minute":n=this._d.valueOf(),
n+=la-Cn(n,la)-1;break;case"second":n=this._d.valueOf(),n+=sa-Cn(n,sa)-1}return this._d.setTime(n),e.updateOffset(this,!0),this}function xn(){return this._d.valueOf()-6e4*(this._offset||0)}function Yn(){return Math.floor(this.valueOf()/1e3)}function An(){return new Date(this.valueOf())}function En(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Pn(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Rn(){return this.isValid()?this.toISOString():null}function Hn(){return m(this)}function Fn(){return c({},h(this))}function Nn(){return h(this).overflow}function Ln(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Vn(e,t){I(0,[e,e.length],0,t)}function In(e){return Bn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Wn(e){return Bn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function jn(){return $e(this.year(),1,4)}function Un(){var e=this.localeData()._week;return $e(this.year(),e.dow,e.doy)}function Bn(e,t,n,i,r){var a;return null==e?be(this,i,r).year:(a=$e(e,i,r),t>a&&(t=a),Gn.call(this,e,t,n,i,r))}function Gn(e,t,n,i,r){var a=Se(e,t,n,i,r),o=we(a.year,0,a.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function qn(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function zn(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}function Zn(e,t){t[wr]=w(1e3*("0."+e))}function Kn(){return this._isUTC?"UTC":""}function Jn(){return this._isUTC?"Coordinated Universal Time":""}function Qn(e){return kt(1e3*e)}function Xn(){return kt.apply(null,arguments).parseZone()}function ei(e){return e}function ti(e,t,n,i){var r=it(),a=d().set(i,t);return r[n](a,e)}function ni(e,t,n){if(o(e)&&(t=e,e=void 0),e=e||"",null!=t)return ti(e,t,n,"month");var i,r=[];for(i=0;i<12;i++)r[i]=ti(e,i,n,"month");return r}function ii(e,t,n,i){"boolean"==typeof e?(o(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,o(t)&&(n=t,t=void 0),t=t||"");var r=it(),a=e?r._week.dow:0;if(null!=n)return ti(t,(n+a)%7,i,"day");var s,l=[];for(s=0;s<7;s++)l[s]=ti(t,(s+a)%7,i,"day");return l}function ri(e,t){return ni(e,t,"months")}function ai(e,t){return ni(e,t,"monthsShort")}function oi(e,t,n){return ii(e,t,n,"weekdays")}function si(e,t,n){return ii(e,t,n,"weekdaysShort")}function li(e,t,n){return ii(e,t,n,"weekdaysMin")}function ui(){var e=this._data;return this._milliseconds=ya(this._milliseconds),this._days=ya(this._days),this._months=ya(this._months),e.milliseconds=ya(e.milliseconds),e.seconds=ya(e.seconds),e.minutes=ya(e.minutes),e.hours=ya(e.hours),e.months=ya(e.months),e.years=ya(e.years),this}function ci(e,t,n,i){var r=Jt(t,n);return e._milliseconds+=i*r._milliseconds,e._days+=i*r._days,e._months+=i*r._months,e._bubble()}function di(e,t){return ci(this,e,t,1)}function fi(e,t){return ci(this,e,t,-1)}function hi(e){return e<0?Math.floor(e):Math.ceil(e)}function mi(){var e,t,n,i,r,a=this._milliseconds,o=this._days,s=this._months,l=this._data;return a>=0&&o>=0&&s>=0||a<=0&&o<=0&&s<=0||(a+=864e5*hi(pi(s)+o),o=0,s=0),l.milliseconds=a%1e3,e=_(a/1e3),l.seconds=e%60,t=_(e/60),l.minutes=t%60,n=_(t/60),l.hours=n%24,o+=_(n/24),r=_(gi(o)),s+=r,o-=hi(pi(r)),i=_(s/12),s%=12,l.days=o,l.months=s,l.years=i,this}function gi(e){return 4800*e/146097}function pi(e){return 146097*e/4800}function vi(e){if(!this.isValid())return NaN;var t,n,i=this._milliseconds;if(e=H(e),"month"===e||"quarter"===e||"year"===e)switch(t=this._days+i/864e5,n=this._months+gi(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(pi(this._months)),e){case"week":return t/7+i/6048e5;case"day":return t+i/864e5;case"hour":return 24*t+i/36e5;case"minute":return 1440*t+i/6e4;case"second":return 86400*t+i/1e3;case"millisecond":return Math.floor(864e5*t)+i;default:throw new Error("Unknown unit "+e)}}function yi(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12):NaN}function _i(e){return function(){return this.as(e)}}function wi(){return Jt(this)}function Di(e){return e=H(e),this.isValid()?this[e+"s"]():NaN}function Si(e){return function(){return this.isValid()?this._data[e]:NaN}}function bi(){return _(this.days()/7)}function $i(e,t,n,i,r){return r.relativeTime(t||1,!!n,e,i)}function Ci(e,t,n){var i=Jt(e).abs(),r=Ra(i.as("s")),a=Ra(i.as("m")),o=Ra(i.as("h")),s=Ra(i.as("d")),l=Ra(i.as("M")),u=Ra(i.as("y")),c=r<=Ha.ss&&["s",r]||r<Ha.s&&["ss",r]||a<=1&&["m"]||a<Ha.m&&["mm",a]||o<=1&&["h"]||o<Ha.h&&["hh",o]||s<=1&&["d"]||s<Ha.d&&["dd",s]||l<=1&&["M"]||l<Ha.M&&["MM",l]||u<=1&&["y"]||["yy",u];return c[2]=t,c[3]=+e>0,c[4]=n,$i.apply(null,c)}function ki(e){return void 0===e?Ra:"function"==typeof e&&(Ra=e,!0)}function Mi(e,t){return void 0!==Ha[e]&&(void 0===t?Ha[e]:(Ha[e]=t,"s"===e&&(Ha.ss=t-1),!0))}function Ti(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=Ci(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)}function Oi(e){return(e>0)-(e<0)||+e}function xi(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,i=Fa(this._milliseconds)/1e3,r=Fa(this._days),a=Fa(this._months);e=_(i/60),t=_(e/60),i%=60,e%=60,n=_(a/12),a%=12;var o=n,s=a,l=r,u=t,c=e,d=i?i.toFixed(3).replace(/\.?0+$/,""):"",f=this.asSeconds();if(!f)return"P0D";var h=f<0?"-":"",m=Oi(this._months)!==Oi(f)?"-":"",g=Oi(this._days)!==Oi(f)?"-":"",p=Oi(this._milliseconds)!==Oi(f)?"-":"";return h+"P"+(o?m+o+"Y":"")+(s?m+s+"M":"")+(l?g+l+"D":"")+(u||c||d?"T":"")+(u?p+u+"H":"")+(c?p+c+"M":"")+(d?p+d+"S":"")}var Yi,Ai;Ai=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,i=0;i<n;i++)if(i in t&&e.call(this,t[i],i,t))return!0;return!1};var Ei=e.momentProperties=[],Pi=!1,Ri={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var Hi;Hi=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)u(e,t)&&n.push(t);return n};var Fi={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ni={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Li="Invalid date",Vi="%d",Ii=/\d{1,2}/,Wi={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ji={},Ui={},Bi=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Gi=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,qi={},zi={},Zi=/\d/,Ki=/\d\d/,Ji=/\d{3}/,Qi=/\d{4}/,Xi=/[+-]?\d{6}/,er=/\d\d?/,tr=/\d\d\d\d?/,nr=/\d\d\d\d\d\d?/,ir=/\d{1,3}/,rr=/\d{1,4}/,ar=/[+-]?\d{1,6}/,or=/\d+/,sr=/[+-]?\d+/,lr=/Z|[+-]\d\d:?\d\d/gi,ur=/Z|[+-]\d\d(?::?\d\d)?/gi,cr=/[+-]?\d+(\.\d{1,3})?/,dr=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,fr={},hr={},mr=0,gr=1,pr=2,vr=3,yr=4,_r=5,wr=6,Dr=7,Sr=8;I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),R("year","y"),N("year",1),G("Y",sr),G("YY",er,Ki),G("YYYY",rr,Qi),G("YYYYY",ar,Xi),G("YYYYYY",ar,Xi),K(["YYYYY","YYYYYY"],mr),K("YYYY",function(t,n){n[mr]=2===t.length?e.parseTwoDigitYear(t):w(t)}),K("YY",function(t,n){n[mr]=e.parseTwoDigitYear(t)}),K("Y",function(e,t){t[mr]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return w(e)+(w(e)>68?1900:2e3)};var br,$r=ne("FullYear",!0);br=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),R("month","M"),N("month",8),G("M",er),G("MM",er,Ki),G("MMM",function(e,t){return t.monthsShortRegex(e)}),G("MMMM",function(e,t){return t.monthsRegex(e)}),K(["M","MM"],function(e,t){t[gr]=w(e)-1}),K(["MMM","MMMM"],function(e,t,n,i){var r=n._locale.monthsParse(e,i,n._strict);null!=r?t[gr]=r:h(n).invalidMonth=e});var Cr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,kr="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Mr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Tr=dr,Or=dr;I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),R("week","w"),R("isoWeek","W"),N("week",5),N("isoWeek",5),G("w",er),G("ww",er,Ki),G("W",er),G("WW",er,Ki),J(["w","ww","W","WW"],function(e,t,n,i){t[i.substr(0,1)]=w(e)});var xr={dow:0,doy:6};I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),R("day","d"),R("weekday","e"),R("isoWeekday","E"),N("day",11),N("weekday",11),N("isoWeekday",11),G("d",er),G("e",er),G("E",er),G("dd",function(e,t){return t.weekdaysMinRegex(e)}),G("ddd",function(e,t){return t.weekdaysShortRegex(e)}),G("dddd",function(e,t){return t.weekdaysRegex(e)}),J(["dd","ddd","dddd"],function(e,t,n,i){var r=n._locale.weekdaysParse(e,i,n._strict);null!=r?t.d=r:h(n).invalidWeekday=e}),J(["d","e","E"],function(e,t,n,i){t[i]=w(e)});var Yr="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ar="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Er="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Pr=dr,Rr=dr,Hr=dr;I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Be),I("k",["kk",2],0,Ge),I("hmm",0,0,function(){return""+Be.apply(this)+V(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Be.apply(this)+V(this.minutes(),2)+V(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+V(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+V(this.minutes(),2)+V(this.seconds(),2)}),qe("a",!0),qe("A",!1),R("hour","h"),N("hour",13),G("a",ze),G("A",ze),G("H",er),G("h",er),G("k",er),G("HH",er,Ki),G("hh",er,Ki),G("kk",er,Ki),G("hmm",tr),G("hmmss",nr),G("Hmm",tr),G("Hmmss",nr),K(["H","HH"],vr),K(["k","kk"],function(e,t,n){var i=w(e);t[vr]=24===i?0:i}),K(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),K(["h","hh"],function(e,t,n){t[vr]=w(e),h(n).bigHour=!0}),K("hmm",function(e,t,n){var i=e.length-2;t[vr]=w(e.substr(0,i)),t[yr]=w(e.substr(i)),h(n).bigHour=!0}),K("hmmss",function(e,t,n){var i=e.length-4,r=e.length-2;t[vr]=w(e.substr(0,i)),t[yr]=w(e.substr(i,2)),t[_r]=w(e.substr(r)),h(n).bigHour=!0}),K("Hmm",function(e,t,n){var i=e.length-2;t[vr]=w(e.substr(0,i)),t[yr]=w(e.substr(i))}),K("Hmmss",function(e,t,n){var i=e.length-4,r=e.length-2;t[vr]=w(e.substr(0,i)),t[yr]=w(e.substr(i,2)),t[_r]=w(e.substr(r))});var Fr,Nr=/[ap]\.?m?\.?/i,Lr=ne("Hours",!0),Vr={calendar:Fi,longDateFormat:Ni,invalidDate:Li,ordinal:Vi,dayOfMonthOrdinalParse:Ii,relativeTime:Wi,months:kr,monthsShort:Mr,week:xr,weekdays:Yr,weekdaysMin:Er,weekdaysShort:Ar,meridiemParse:Nr},Ir={},Wr={},jr=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ur=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Br=/Z|[+-]\d\d(?::?\d\d)?/,Gr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],qr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],zr=/^\/?Date\((\-?\d+)/i,Zr=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Kr={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};e.createFromInputFallback=b("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){},e.RFC_2822=function(){};var Jr=b("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=kt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:g()}),Qr=b("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=kt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:g()}),Xr=function(){return Date.now?Date.now():+new Date},ea=["year","quarter","month","week","day","hour","minute","second","millisecond"];Ht("Z",":"),Ht("ZZ",""),G("Z",ur),G("ZZ",ur),K(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ft(ur,e)});var ta=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var na=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,ia=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;Jt.fn=Et.prototype,Jt.invalid=At;var ra=tn(1,"add"),aa=tn(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var oa=b("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)}),sa=1e3,la=60*sa,ua=60*la,ca=3506328*ua;I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Vn("gggg","weekYear"),Vn("ggggg","weekYear"),Vn("GGGG","isoWeekYear"),Vn("GGGGG","isoWeekYear"),R("weekYear","gg"),R("isoWeekYear","GG"),N("weekYear",1),N("isoWeekYear",1),G("G",sr),G("g",sr),G("GG",er,Ki),G("gg",er,Ki),G("GGGG",rr,Qi),G("gggg",rr,Qi),G("GGGGG",ar,Xi),G("ggggg",ar,Xi),J(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,i){t[i.substr(0,2)]=w(e)}),J(["gg","GG"],function(t,n,i,r){n[r]=e.parseTwoDigitYear(t)}),I("Q",0,"Qo","quarter"),R("quarter","Q"),N("quarter",7),G("Q",Zi),K("Q",function(e,t){t[gr]=3*(w(e)-1)}),I("D",["DD",2],"Do","date"),R("date","D"),N("date",9),G("D",er),G("DD",er,Ki),G("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),K(["D","DD"],pr),K("Do",function(e,t){t[pr]=w(e.match(er)[0])});var da=ne("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),R("dayOfYear","DDD"),N("dayOfYear",4),G("DDD",ir),G("DDDD",Ji),K(["DDD","DDDD"],function(e,t,n){n._dayOfYear=w(e)}),I("m",["mm",2],0,"minute"),R("minute","m"),N("minute",14),G("m",er),G("mm",er,Ki),K(["m","mm"],yr);var fa=ne("Minutes",!1);I("s",["ss",2],0,"second"),R("second","s"),N("second",15),G("s",er),G("ss",er,Ki),K(["s","ss"],_r);var ha=ne("Seconds",!1);I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),R("millisecond","ms"),N("millisecond",16),G("S",ir,Zi),G("SS",ir,Ki),G("SSS",ir,Ji);var ma;for(ma="SSSS";ma.length<=9;ma+="S")G(ma,or);for(ma="S";ma.length<=9;ma+="S")K(ma,Zn);var ga=ne("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var pa=v.prototype;pa.add=ra,pa.calendar=an,pa.clone=on,pa.diff=hn,pa.endOf=On,pa.format=yn,pa.from=_n,pa.fromNow=wn,pa.to=Dn,pa.toNow=Sn,pa.get=ae,pa.invalidAt=Nn,pa.isAfter=sn,pa.isBefore=ln,pa.isBetween=un,pa.isSame=cn,pa.isSameOrAfter=dn,pa.isSameOrBefore=fn,pa.isValid=Hn,pa.lang=oa,pa.locale=bn,pa.localeData=$n,pa.max=Qr,pa.min=Jr,pa.parsingFlags=Fn,pa.set=oe,pa.startOf=Tn,pa.subtract=aa,pa.toArray=En,pa.toObject=Pn,pa.toDate=An,pa.toISOString=pn,pa.inspect=vn,pa.toJSON=Rn,pa.toString=gn,pa.unix=Yn,pa.valueOf=xn,pa.creationData=Ln,pa.year=$r,pa.isLeapYear=te,pa.weekYear=In,pa.isoWeekYear=Wn,pa.quarter=pa.quarters=qn,pa.month=me,pa.daysInMonth=ge,pa.week=pa.weeks=Te,pa.isoWeek=pa.isoWeeks=Oe,pa.weeksInYear=Un,pa.isoWeeksInYear=jn,pa.date=da,pa.day=pa.days=Ne,pa.weekday=Le,pa.isoWeekday=Ve,pa.dayOfYear=zn,pa.hour=pa.hours=Lr,pa.minute=pa.minutes=fa,pa.second=pa.seconds=ha,pa.millisecond=pa.milliseconds=ga,pa.utcOffset=Vt,pa.utc=Wt,pa.local=jt,pa.parseZone=Ut,pa.hasAlignedHourOffset=Bt,pa.isDST=Gt,pa.isLocal=zt,pa.isUtcOffset=Zt,pa.isUtc=Kt,pa.isUTC=Kt,pa.zoneAbbr=Kn,pa.zoneName=Jn,pa.dates=b("dates accessor is deprecated. Use date instead.",da),pa.months=b("months accessor is deprecated. Use month instead",me),pa.years=b("years accessor is deprecated. Use year instead",$r),pa.zone=b("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",It),pa.isDSTShifted=b("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",qt);var va=T.prototype;va.calendar=O,va.longDateFormat=x,va.invalidDate=Y,va.ordinal=A,va.preparse=ei,va.postformat=ei,va.relativeTime=E,va.pastFuture=P,va.set=k,va.months=ue,va.monthsShort=ce,va.monthsParse=fe,va.monthsRegex=ve,va.monthsShortRegex=pe,va.week=Ce,va.firstDayOfYear=Me,va.firstDayOfWeek=ke,va.weekdays=Ee,va.weekdaysMin=Re,va.weekdaysShort=Pe,va.weekdaysParse=Fe,va.weekdaysRegex=Ie,va.weekdaysShortRegex=We,va.weekdaysMinRegex=je,va.isPM=Ze,va.meridiem=Ke,et("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===w(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),e.lang=b("moment.lang is deprecated. Use moment.locale instead.",et),e.langData=b("moment.langData is deprecated. Use moment.localeData instead.",it);var ya=Math.abs,_a=_i("ms"),wa=_i("s"),Da=_i("m"),Sa=_i("h"),ba=_i("d"),$a=_i("w"),Ca=_i("M"),ka=_i("Q"),Ma=_i("y"),Ta=Si("milliseconds"),Oa=Si("seconds"),xa=Si("minutes"),Ya=Si("hours"),Aa=Si("days"),Ea=Si("months"),Pa=Si("years"),Ra=Math.round,Ha={ss:44,s:45,m:45,h:22,d:26,M:11},Fa=Math.abs,Na=Et.prototype;return Na.isValid=Yt,Na.abs=ui,Na.add=di,Na.subtract=fi,Na.as=vi,Na.asMilliseconds=_a,Na.asSeconds=wa,Na.asMinutes=Da,Na.asHours=Sa,Na.asDays=ba,Na.asWeeks=$a,Na.asMonths=Ca,Na.asQuarters=ka,Na.asYears=Ma,Na.valueOf=yi,Na._bubble=mi,Na.clone=wi,Na.get=Di,Na.milliseconds=Ta,Na.seconds=Oa,Na.minutes=xa,Na.hours=Ya,Na.days=Aa,Na.weeks=bi,Na.months=Ea,Na.years=Pa,Na.humanize=Ti,Na.toISOString=xi,Na.toString=xi,Na.toJSON=xi,Na.locale=bn,Na.localeData=$n,Na.toIsoString=b("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",xi),Na.lang=oa,I("X",0,0,"unix"),I("x",0,0,"valueOf"),G("x",sr),G("X",cr),K("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),K("x",function(e,t,n){n._d=new Date(w(e))}),e.version="2.24.0",t(kt),e.fn=pa,e.min=Tt,e.max=Ot,e.now=Xr,e.utc=d,e.unix=Qn,e.months=ri,e.isDate=s,e.locale=et,e.invalid=g,e.duration=Jt,e.isMoment=y,e.weekdays=oi,e.parseZone=Xn,e.localeData=it,e.isDuration=Pt,e.monthsShort=ai,e.weekdaysMin=li,e.defineLocale=tt,e.updateLocale=nt,e.locales=rt,e.weekdaysShort=si,e.normalizeUnits=H,e.relativeTimeRounding=ki,e.relativeTimeThreshold=Mi,e.calendarFormat=rn,e.prototype=pa,e.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},e}),!function(e,t){"undefined"!=typeof module&&module.exports?(t("undefined"==typeof angular?require("angular"):angular),module.exports="ngDialog"):"function"==typeof define&&define.amd?define(["angular"],t):t(e.angular)}(this,function(e){"use strict";var t=e.module("ngDialog",[]),n=e.element,i=e.isDefined,r=(document.body||document.documentElement).style,a=i(r.animation)||i(r.WebkitAnimation)||i(r.MozAnimation)||i(r.MsAnimation)||i(r.OAnimation),o="animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",s="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",l="ngdialog-disabled-animation",u={html:!1,body:!1},c={},d=[],f=[],h=!1,m=!1,g=[],p="legacy",v="1.0.0+";return t.provider("ngDialog",function(){var t=this.defaults={className:"ngdialog-theme-default",appendClassName:"",disableAnimation:!1,plain:!1,showClose:!0,closeByDocument:!0,closeByEscape:!0,closeByNavigation:!1,appendTo:!1,preCloseCallback:!1,onOpenCallback:!1,overlay:!0,cache:!0,trapFocus:!0,preserveFocus:!0,ariaAuto:!0,ariaRole:null,ariaLabelledById:null,ariaLabelledBySelector:null,ariaDescribedById:null,ariaDescribedBySelector:null,bodyClassName:"ngdialog-open",width:null,height:null};this.setForceHtmlReload=function(e){u.html=e||!1},this.setForceBodyReload=function(e){u.body=e||!1},this.setDefaults=function(n){e.extend(t,n)},this.setOpenOnePerName=function(e){m=e||!1};var i,r=0,y=0,_={};this.$get=["$document","$templateCache","$compile","$q","$http","$rootScope","$timeout","$window","$controller","$injector",function(w,D,S,b,$,C,k,M,T,O){var x=[],Y={onDocumentKeydown:function(e){27===e.keyCode&&A.close("$escape")},activate:function(e){var t=e.data("$ngDialogOptions");t.trapFocus&&(e.on("keydown",Y.onTrapFocusKeydown),x.body.on("keydown",Y.onTrapFocusKeydown))},deactivate:function(e){e.off("keydown",Y.onTrapFocusKeydown),x.body.off("keydown",Y.onTrapFocusKeydown)},deactivateAll:function(t){e.forEach(t,function(t){var n=e.element(t);Y.deactivate(n)})},setBodyPadding:function(e){var t=parseInt(x.body.css("padding-right")||0,10);x.body.css("padding-right",t+e+"px"),x.body.data("ng-dialog-original-padding",t),C.$broadcast("ngDialog.setPadding",e)},resetBodyPadding:function(){var e=x.body.data("ng-dialog-original-padding");e?x.body.css("padding-right",e+"px"):x.body.css("padding-right",""),C.$broadcast("ngDialog.setPadding",0)},performCloseDialog:function(e,t){var n=e.data("$ngDialogOptions"),r=e.attr("id"),s=c[r];if(Y.deactivate(e),s){if("undefined"!=typeof M.Hammer){var l=s.hammerTime;l.off("tap",i),l.destroy&&l.destroy(),delete s.hammerTime}else e.unbind("click");1===y&&x.body.unbind("keydown",Y.onDocumentKeydown),e.hasClass("ngdialog-closing")||(y-=1);var u=e.data("$ngDialogPreviousFocus");u&&u.focus&&u.focus(),C.$broadcast("ngDialog.closing",e,t),y=y<0?0:y,a&&!n.disableAnimation?(s.$destroy(),e.unbind(o).bind(o,function(){Y.closeDialogElement(e,t)}).addClass("ngdialog-closing")):(s.$destroy(),Y.closeDialogElement(e,t)),_[r]&&(_[r].resolve({id:r,value:t,$dialog:e,remainingDialogs:y}),delete _[r]),c[r]&&delete c[r],d.splice(d.indexOf(r),1),d.length||(x.body.unbind("keydown",Y.onDocumentKeydown),h=!1),0==y&&(i=void 0)}},closeDialogElement:function(e,t){var n=e.data("$ngDialogOptions");e.remove(),f.splice(f.indexOf(n.bodyClassName),1),f.indexOf(n.bodyClassName)===-1&&(x.html.removeClass(n.bodyClassName),x.body.removeClass(n.bodyClassName)),0===y&&Y.resetBodyPadding(),C.$broadcast("ngDialog.closed",e,t)},closeDialog:function(t,n){var i=t.data("$ngDialogPreCloseCallback");if(i&&e.isFunction(i)){var r=i.call(t,n);if(e.isObject(r))r.closePromise?r.closePromise.then(function(){Y.performCloseDialog(t,n)},function(){return!1}):r.then(function(){Y.performCloseDialog(t,n)},function(){return!1});else{if(r===!1)return!1;Y.performCloseDialog(t,n)}}else Y.performCloseDialog(t,n)},onTrapFocusKeydown:function(t){var n,i=e.element(t.currentTarget);if(i.hasClass("ngdialog"))n=i;else if(n=Y.getActiveDialog(),null===n)return;var r=9===t.keyCode,a=t.shiftKey===!0;r&&Y.handleTab(n,t,a)},handleTab:function(e,t,n){var i=Y.getFocusableElements(e);if(0===i.length)return void(document.activeElement&&document.activeElement.blur&&document.activeElement.blur());var r=document.activeElement,a=Array.prototype.indexOf.call(i,r),o=a===-1,s=0===a,l=a===i.length-1,u=!1;n?(o||s)&&(i[i.length-1].focus(),u=!0):(o||l)&&(i[0].focus(),u=!0),u&&(t.preventDefault(),t.stopPropagation())},autoFocus:function(e){var t=e[0],i=t.querySelector("*[autofocus]");if(null===i||(i.focus(),document.activeElement!==i)){var r=Y.getFocusableElements(e);if(r.length>0)return void r[0].focus();var a=Y.filterVisibleElements(t.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"));if(a.length>0){var o=a[0];n(o).attr("tabindex","-1").css("outline","0"),o.focus()}}},getFocusableElements:function(e){var t=e[0],n=t.querySelectorAll(s),i=Y.filterTabbableElements(n);return Y.filterVisibleElements(i)},filterTabbableElements:function(e){for(var t=[],i=0;i<e.length;i++){var r=e[i];"-1"!==n(r).attr("tabindex")&&t.push(r)}return t},filterVisibleElements:function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];(i.offsetWidth>0||i.offsetHeight>0)&&t.push(i)}return t},getActiveDialog:function(){var e=document.querySelectorAll(".ngdialog");return 0===e.length?null:n(e[e.length-1])},applyAriaAttributes:function(e,t){if(t.ariaAuto){if(!t.ariaRole){var n=Y.getFocusableElements(e).length>0?"dialog":"alertdialog";t.ariaRole=n}t.ariaLabelledBySelector||(t.ariaLabelledBySelector="h1,h2,h3,h4,h5,h6"),t.ariaDescribedBySelector||(t.ariaDescribedBySelector="article,section,p")}t.ariaRole&&e.attr("role",t.ariaRole),Y.applyAriaAttribute(e,"aria-labelledby",t.ariaLabelledById,t.ariaLabelledBySelector),Y.applyAriaAttribute(e,"aria-describedby",t.ariaDescribedById,t.ariaDescribedBySelector)},applyAriaAttribute:function(e,t,i,r){if(i)return void e.attr(t,i);if(r){var a=e.attr("id"),o=e[0].querySelector(r);if(!o)return;var s=a+"-"+t;return n(o).attr("id",s),e.attr(t,s),s}},detectUIRouter:function(){return O.has("$transitions")?v:!!O.has("$state")&&p},getRouterLocationEventName:function(){return Y.detectUIRouter()?"$stateChangeStart":"$locationChangeStart"}},A={__PRIVATE__:Y,open:function(a){function o(t,n){var n=n||{};return n.headers=n.headers||{},e.extend(n.headers,{Accept:"text/html"}),C.$broadcast("ngDialog.templateLoading",t),$.get(t,n).then(function(e){return C.$broadcast("ngDialog.templateLoaded",t),e.data||""})}function s(t){return t?e.isString(t)&&p.plain?t:"boolean"!=typeof p.cache||p.cache?o(t,{cache:D}):o(t,{cache:!1}):"Empty template"}var u=null;if(a=a||{},!(m&&a.name&&(u=a.name.toLowerCase().replace(/\s/g,"-")+"-dialog",this.isOpen(u)))){var p=e.copy(t),v=++r;u=u||"ngdialog"+v,d.push(u),"undefined"!=typeof p.data&&("undefined"==typeof a.data&&(a.data={}),a.data=e.merge(e.copy(p.data),a.data)),e.extend(p,a);var w;_[u]=w=b.defer();var E;c[u]=E=e.isObject(p.scope)?p.scope.$new():C.$new();var P,R,H,F=e.extend({},p.resolve);return e.forEach(F,function(t,n){F[n]=e.isString(t)?O.get(t):O.invoke(t,null,null,n)}),b.all({template:s(p.template||p.templateUrl),locals:b.all(F)}).then(function(t){var r=t.template,a=t.locals;p.showClose&&(r+='<button aria-label="Dismiss" class="ngdialog-close"></button>');var o=p.overlay?"":" ngdialog-no-overlay";if(P=n('<div id="'+u+'" class="ngdialog'+o+'"></div>'),P.html(p.overlay?'<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">'+r+"</div>":'<div class="ngdialog-content" role="document">'+r+"</div>"),P.data("$ngDialogOptions",p),E.ngDialogId=u,p.data&&e.isString(p.data)){var s=p.data.replace(/^\s*/,"")[0];E.ngDialogData="{"===s||"["===s?e.fromJson(p.data):new String(p.data),E.ngDialogData.ngDialogId=u}else p.data&&e.isObject(p.data)&&(E.ngDialogData=p.data,E.ngDialogData.ngDialogId=u);if(p.className&&P.addClass(p.className),p.appendClassName&&P.addClass(p.appendClassName),p.width&&(H=P[0].querySelector(".ngdialog-content"),e.isString(p.width)?H.style.width=p.width:H.style.width=p.width+"px"),p.height&&(H=P[0].querySelector(".ngdialog-content"),e.isString(p.height)?H.style.height=p.height:H.style.height=p.height+"px"),p.disableAnimation&&P.addClass(l),R=p.appendTo&&e.isString(p.appendTo)?e.element(document.querySelector(p.appendTo)):x.body,Y.applyAriaAttributes(P,p),[{name:"$ngDialogPreCloseCallback",value:p.preCloseCallback},{name:"$ngDialogOnOpenCallback",value:p.onOpenCallback}].forEach(function(t){if(t.value){var n;e.isFunction(t.value)?n=t.value:e.isString(t.value)&&E&&(e.isFunction(E[t.value])?n=E[t.value]:E.$parent&&e.isFunction(E.$parent[t.value])?n=E.$parent[t.value]:C&&e.isFunction(C[t.value])&&(n=C[t.value])),n&&P.data(t.name,n)}}),E.closeThisDialog=function(e){Y.closeDialog(P,e)},p.controller&&(e.isString(p.controller)||e.isArray(p.controller)||e.isFunction(p.controller))){var c;p.controllerAs&&e.isString(p.controllerAs)&&(c=p.controllerAs);var d=T(p.controller,e.extend(a,{$scope:E,$element:P}),!0,c);p.bindToController&&e.extend(d.instance,{ngDialogId:E.ngDialogId,ngDialogData:E.ngDialogData,closeThisDialog:E.closeThisDialog,confirm:E.confirm}),"function"==typeof d?P.data("$ngDialogControllerController",d()):P.data("$ngDialogControllerController",d)}if(k(function(){var t=document.querySelectorAll(".ngdialog");Y.deactivateAll(t),S(P)(E);var n=M.innerWidth-x.body.prop("clientWidth");x.html.addClass(p.bodyClassName),x.body.addClass(p.bodyClassName),f.push(p.bodyClassName);var i=n-(M.innerWidth-x.body.prop("clientWidth"));i>0&&Y.setBodyPadding(i),R.append(P),Y.activate(P),p.trapFocus&&Y.autoFocus(P),p.name?C.$broadcast("ngDialog.opened",{dialog:P,name:p.name}):C.$broadcast("ngDialog.opened",P);var r=P.data("$ngDialogOnOpenCallback");r&&e.isFunction(r)&&r.call(P)}),h||(x.body.bind("keydown",Y.onDocumentKeydown),h=!0),p.closeByNavigation&&g.push(P),p.preserveFocus&&P.data("$ngDialogPreviousFocus",document.activeElement),i=function(e){var t=!!p.closeByDocument&&n(e.target).hasClass("ngdialog-overlay"),i=n(e.target).hasClass("ngdialog-close");(t||i)&&A.close(P.attr("id"),i?"$closeButton":"$document")},"undefined"!=typeof M.Hammer){var m=E.hammerTime=M.Hammer(P[0]);m.on("tap",i)}else P.bind("click",i);return y+=1,A}),{id:u,closePromise:w.promise,close:function(e){Y.closeDialog(P,e)}}}},openConfirm:function(i){var r=b.defer(),a=e.copy(t);i=i||{},"undefined"!=typeof a.data&&("undefined"==typeof i.data&&(i.data={}),i.data=e.merge(e.copy(a.data),i.data)),e.extend(a,i),a.scope=e.isObject(a.scope)?a.scope.$new():C.$new(),a.scope.confirm=function(e){r.resolve(e);var t=n(document.getElementById(o.id));Y.performCloseDialog(t,e)};var o=A.open(a);if(o)return o.closePromise.then(function(e){return e?r.reject(e.value):r.reject()}),r.promise},isOpen:function(e){var t=n(document.getElementById(e));return t.length>0},close:function(e,t){var i=n(document.getElementById(e));if(i.length)Y.closeDialog(i,t);else if("$escape"===e){var r=d[d.length-1];i=n(document.getElementById(r)),i.data("$ngDialogOptions").closeByEscape&&Y.closeDialog(i,"$escape")}else A.closeAll(t);return A},closeAll:function(e){for(var t=document.querySelectorAll(".ngdialog"),i=t.length-1;i>=0;i--){var r=t[i];Y.closeDialog(n(r),e)}},getOpenDialogs:function(){
return d},getDefaults:function(){return t}};e.forEach(["html","body"],function(e){if(x[e]=w.find(e),u[e]){var t=Y.getRouterLocationEventName();C.$on(t,function(){x[e]=w.find(e)})}});var E=Y.detectUIRouter();if(E===v){var P=O.get("$transitions");P.onStart({},function(e){for(;g.length>0;){var t=g.pop();if(Y.closeDialog(t)===!1)return!1}})}else{var R=E===p?"$stateChangeStart":"$locationChangeStart";C.$on(R,function(e){for(;g.length>0;){var t=g.pop();Y.closeDialog(t)===!1&&e.preventDefault()}})}return A}]}),t.directive("ngDialog",["ngDialog",function(t){return{restrict:"A",scope:{ngDialogScope:"="},link:function(n,i,r){i.on("click",function(i){i.preventDefault();var a=e.isDefined(n.ngDialogScope)?n.ngDialogScope:"noScope";e.isDefined(r.ngDialogClosePrevious)&&t.close(r.ngDialogClosePrevious);var o=t.getDefaults();t.open({template:r.ngDialog,className:r.ngDialogClass||o.className,appendClassName:r.ngDialogAppendClass,controller:r.ngDialogController,controllerAs:r.ngDialogControllerAs,bindToController:r.ngDialogBindToController,disableAnimation:r.ngDialogDisableAnimation,scope:a,data:r.ngDialogData,showClose:"false"!==r.ngDialogShowClose&&("true"===r.ngDialogShowClose||o.showClose),closeByDocument:"false"!==r.ngDialogCloseByDocument&&("true"===r.ngDialogCloseByDocument||o.closeByDocument),closeByEscape:"false"!==r.ngDialogCloseByEscape&&("true"===r.ngDialogCloseByEscape||o.closeByEscape),overlay:"false"!==r.ngDialogOverlay&&("true"===r.ngDialogOverlay||o.overlay),preCloseCallback:r.ngDialogPreCloseCallback||o.preCloseCallback,onOpenCallback:r.ngDialogOnOpenCallback||o.onOpenCallback,bodyClassName:r.ngDialogBodyClass||o.bodyClassName})})}}}]),t});n createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

/*! ng-dialog - v1.2.0 (https://github.com/likeastore/ngDialog) */
!function(a,b){"undefined"!=typeof module&&module.exports?(b("undefined"==typeof angular?require("angular"):angular),module.exports="ngDialog"):"function"==typeof define&&define.amd?define(["angular"],b):b(a.angular)}(this,function(a){"use strict";var b=a.module("ngDialog",[]),c=a.element,d=a.isDefined,e=(document.body||document.documentElement).style,f=d(e.animation)||d(e.WebkitAnimation)||d(e.MozAnimation)||d(e.MsAnimation)||d(e.OAnimation),g="animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",h="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",i="ngdialog-disabled-animation",j={html:!1,body:!1},k={},l=[],m=[],n=!1,o=!1,p=[],q="legacy",r="1.0.0+";return b.provider("ngDialog",function(){var b=this.defaults={className:"ngdialog-theme-default",appendClassName:"",disableAnimation:!1,plain:!1,showClose:!0,closeByDocument:!0,closeByEscape:!0,closeByNavigation:!1,appendTo:!1,preCloseCallback:!1,onOpenCallback:!1,overlay:!0,cache:!0,trapFocus:!0,preserveFocus:!0,ariaAuto:!0,ariaRole:null,ariaLabelledById:null,ariaLabelledBySelector:null,ariaDescribedById:null,ariaDescribedBySelector:null,bodyClassName:"ngdialog-open",width:null,height:null};this.setForceHtmlReload=function(a){j.html=a||!1},this.setForceBodyReload=function(a){j.body=a||!1},this.setDefaults=function(c){a.extend(b,c)},this.setOpenOnePerName=function(a){o=a||!1};var d,e=0,s=0,t={};this.$get=["$document","$templateCache","$compile","$q","$http","$rootScope","$timeout","$window","$controller","$injector",function(u,v,w,x,y,z,A,B,C,D){var E=[],F={onDocumentKeydown:function(a){27===a.keyCode&&G.close("$escape")},activate:function(a){var b=a.data("$ngDialogOptions");b.trapFocus&&(a.on("keydown",F.onTrapFocusKeydown),E.body.on("keydown",F.onTrapFocusKeydown))},deactivate:function(a){a.off("keydown",F.onTrapFocusKeydown),E.body.off("keydown",F.onTrapFocusKeydown)},deactivateAll:function(b){a.forEach(b,function(b){var c=a.element(b);F.deactivate(c)})},setBodyPadding:function(a){var b=parseInt(E.body.css("padding-right")||0,10);E.body.css("padding-right",b+a+"px"),E.body.data("ng-dialog-original-padding",b),z.$broadcast("ngDialog.setPadding",a)},resetBodyPadding:function(){var a=E.body.data("ng-dialog-original-padding");a?E.body.css("padding-right",a+"px"):E.body.css("padding-right",""),z.$broadcast("ngDialog.setPadding",0)},performCloseDialog:function(a,b){var c=a.data("$ngDialogOptions"),e=a.attr("id"),h=k[e];if(F.deactivate(a),h){if("undefined"!=typeof B.Hammer){var i=h.hammerTime;i.off("tap",d),i.destroy&&i.destroy(),delete h.hammerTime}else a.unbind("click");1===s&&E.body.unbind("keydown",F.onDocumentKeydown),a.hasClass("ngdialog-closing")||(s-=1);var j=a.data("$ngDialogPreviousFocus");j&&j.focus&&j.focus(),z.$broadcast("ngDialog.closing",a,b),s=s<0?0:s,f&&!c.disableAnimation?(h.$destroy(),a.unbind(g).bind(g,function(){F.closeDialogElement(a,b)}).addClass("ngdialog-closing")):(h.$destroy(),F.closeDialogElement(a,b)),t[e]&&(t[e].resolve({id:e,value:b,$dialog:a,remainingDialogs:s}),delete t[e]),k[e]&&delete k[e],l.splice(l.indexOf(e),1),l.length||(E.body.unbind("keydown",F.onDocumentKeydown),n=!1),0==s&&(d=void 0)}},closeDialogElement:function(a,b){var c=a.data("$ngDialogOptions");a.remove(),m.splice(m.indexOf(c.bodyClassName),1),m.indexOf(c.bodyClassName)===-1&&(E.html.removeClass(c.bodyClassName),E.body.removeClass(c.bodyClassName)),0===s&&F.resetBodyPadding(),z.$broadcast("ngDialog.closed",a,b)},closeDialog:function(b,c){var d=b.data("$ngDialogPreCloseCallback");if(d&&a.isFunction(d)){var e=d.call(b,c);if(a.isObject(e))e.closePromise?e.closePromise.then(function(){F.performCloseDialog(b,c)},function(){return!1}):e.then(function(){F.performCloseDialog(b,c)},function(){return!1});else{if(e===!1)return!1;F.performCloseDialog(b,c)}}else F.performCloseDialog(b,c)},onTrapFocusKeydown:function(b){var c,d=a.element(b.currentTarget);if(d.hasClass("ngdialog"))c=d;else if(c=F.getActiveDialog(),null===c)return;var e=9===b.keyCode,f=b.shiftKey===!0;e&&F.handleTab(c,b,f)},handleTab:function(a,b,c){var d=F.getFocusableElements(a);if(0===d.length)return void(document.activeElement&&document.activeElement.blur&&document.activeElement.blur());var e=document.activeElement,f=Array.prototype.indexOf.call(d,e),g=f===-1,h=0===f,i=f===d.length-1,j=!1;c?(g||h)&&(d[d.length-1].focus(),j=!0):(g||i)&&(d[0].focus(),j=!0),j&&(b.preventDefault(),b.stopPropagation())},autoFocus:function(a){var b=a[0],d=b.querySelector("*[autofocus]");if(null===d||(d.focus(),document.activeElement!==d)){var e=F.getFocusableElements(a);if(e.length>0)return void e[0].focus();var f=F.filterVisibleElements(b.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"));if(f.length>0){var g=f[0];c(g).attr("tabindex","-1").css("outline","0"),g.focus()}}},getFocusableElements:function(a){var b=a[0],c=b.querySelectorAll(h),d=F.filterTabbableElements(c);return F.filterVisibleElements(d)},filterTabbableElements:function(a){for(var b=[],d=0;d<a.length;d++){var e=a[d];"-1"!==c(e).attr("tabindex")&&b.push(e)}return b},filterVisibleElements:function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];(d.offsetWidth>0||d.offsetHeight>0)&&b.push(d)}return b},getActiveDialog:function(){var a=document.querySelectorAll(".ngdialog");return 0===a.length?null:c(a[a.length-1])},applyAriaAttributes:function(a,b){if(b.ariaAuto){if(!b.ariaRole){var c=F.getFocusableElements(a).length>0?"dialog":"alertdialog";b.ariaRole=c}b.ariaLabelledBySelector||(b.ariaLabelledBySelector="h1,h2,h3,h4,h5,h6"),b.ariaDescribedBySelector||(b.ariaDescribedBySelector="article,section,p")}b.ariaRole&&a.attr("role",b.ariaRole),F.applyAriaAttribute(a,"aria-labelledby",b.ariaLabelledById,b.ariaLabelledBySelector),F.applyAriaAttribute(a,"aria-describedby",b.ariaDescribedById,b.ariaDescribedBySelector)},applyAriaAttribute:function(a,b,d,e){if(d)return void a.attr(b,d);if(e){var f=a.attr("id"),g=a[0].querySelector(e);if(!g)return;var h=f+"-"+b;return c(g).attr("id",h),a.attr(b,h),h}},detectUIRouter:function(){return D.has("$transitions")?r:!!D.has("$state")&&q},getRouterLocationEventName:function(){return F.detectUIRouter()?"$stateChangeStart":"$locationChangeStart"}},G={__PRIVATE__:F,open:function(f){function g(b,c){var c=c||{};return c.headers=c.headers||{},a.extend(c.headers,{Accept:"text/html"}),z.$broadcast("ngDialog.templateLoading",b),y.get(b,c).then(function(a){return z.$broadcast("ngDialog.templateLoaded",b),a.data||""})}function h(b){return b?a.isString(b)&&q.plain?b:"boolean"!=typeof q.cache||q.cache?g(b,{cache:v}):g(b,{cache:!1}):"Empty template"}var j=null;if(f=f||{},!(o&&f.name&&(j=f.name.toLowerCase().replace(/\s/g,"-")+"-dialog",this.isOpen(j)))){var q=a.copy(b),r=++e;j=j||"ngdialog"+r,l.push(j),"undefined"!=typeof q.data&&("undefined"==typeof f.data&&(f.data={}),f.data=a.merge(a.copy(q.data),f.data)),a.extend(q,f);var u;t[j]=u=x.defer();var H;k[j]=H=a.isObject(q.scope)?q.scope.$new():z.$new();var I,J,K,L=a.extend({},q.resolve);return a.forEach(L,function(b,c){L[c]=a.isString(b)?D.get(b):D.invoke(b,null,null,c)}),x.all({template:h(q.template||q.templateUrl),locals:x.all(L)}).then(function(b){var e=b.template,f=b.locals;q.showClose&&(e+='<button aria-label="Dismiss" class="ngdialog-close"></button>');var g=q.overlay?"":" ngdialog-no-overlay";if(I=c('<div id="'+j+'" class="ngdialog'+g+'"></div>'),I.html(q.overlay?'<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">'+e+"</div>":'<div class="ngdialog-content" role="document">'+e+"</div>"),I.data("$ngDialogOptions",q),H.ngDialogId=j,q.data&&a.isString(q.data)){var h=q.data.replace(/^\s*/,"")[0];H.ngDialogData="{"===h||"["===h?a.fromJson(q.data):new String(q.data),H.ngDialogData.ngDialogId=j}else q.data&&a.isObject(q.data)&&(H.ngDialogData=q.data,H.ngDialogData.ngDialogId=j);if(q.className&&I.addClass(q.className),q.appendClassName&&I.addClass(q.appendClassName),q.width&&(K=I[0].querySelector(".ngdialog-content"),a.isString(q.width)?K.style.width=q.width:K.style.width=q.width+"px"),q.height&&(K=I[0].querySelector(".ngdialog-content"),a.isString(q.height)?K.style.height=q.height:K.style.height=q.height+"px"),q.disableAnimation&&I.addClass(i),J=q.appendTo&&a.isString(q.appendTo)?a.element(document.querySelector(q.appendTo)):E.body,F.applyAriaAttributes(I,q),[{name:"$ngDialogPreCloseCallback",value:q.preCloseCallback},{name:"$ngDialogOnOpenCallback",value:q.onOpenCallback}].forEach(function(b){if(b.value){var c;a.isFunction(b.value)?c=b.value:a.isString(b.value)&&H&&(a.isFunction(H[b.value])?c=H[b.value]:H.$parent&&a.isFunction(H.$parent[b.value])?c=H.$parent[b.value]:z&&a.isFunction(z[b.value])&&(c=z[b.value])),c&&I.data(b.name,c)}}),H.closeThisDialog=function(a){F.closeDialog(I,a)},q.controller&&(a.isString(q.controller)||a.isArray(q.controller)||a.isFunction(q.controller))){var k;q.controllerAs&&a.isString(q.controllerAs)&&(k=q.controllerAs);var l=C(q.controller,a.extend(f,{$scope:H,$element:I}),!0,k);q.bindToController&&a.extend(l.instance,{ngDialogId:H.ngDialogId,ngDialogData:H.ngDialogData,closeThisDialog:H.closeThisDialog,confirm:H.confirm}),"function"==typeof l?I.data("$ngDialogControllerController",l()):I.data("$ngDialogControllerController",l)}if(A(function(){var b=document.querySelectorAll(".ngdialog");F.deactivateAll(b),w(I)(H);var c=B.innerWidth-E.body.prop("clientWidth");E.html.addClass(q.bodyClassName),E.body.addClass(q.bodyClassName),m.push(q.bodyClassName);var d=c-(B.innerWidth-E.body.prop("clientWidth"));d>0&&F.setBodyPadding(d),J.append(I),F.activate(I),q.trapFocus&&F.autoFocus(I),q.name?z.$broadcast("ngDialog.opened",{dialog:I,name:q.name}):z.$broadcast("ngDialog.opened",I);var e=I.data("$ngDialogOnOpenCallback");e&&a.isFunction(e)&&e.call(I)}),n||(E.body.bind("keydown",F.onDocumentKeydown),n=!0),q.closeByNavigation&&p.push(I),q.preserveFocus&&I.data("$ngDialogPreviousFocus",document.activeElement),d=function(a){var b=!!q.closeByDocument&&c(a.target).hasClass("ngdialog-overlay"),d=c(a.target).hasClass("ngdialog-close");(b||d)&&G.close(I.attr("id"),d?"$closeButton":"$document")},"undefined"!=typeof B.Hammer){var o=H.hammerTime=B.Hammer(I[0]);o.on("tap",d)}else I.bind("click",d);return s+=1,G}),{id:j,closePromise:u.promise,close:function(a){F.closeDialog(I,a)}}}},openConfirm:function(d){var e=x.defer(),f=a.copy(b);d=d||{},"undefined"!=typeof f.data&&("undefined"==typeof d.data&&(d.data={}),d.data=a.merge(a.copy(f.data),d.data)),a.extend(f,d),f.scope=a.isObject(f.scope)?f.scope.$new():z.$new(),f.scope.confirm=function(a){e.resolve(a);var b=c(document.getElementById(g.id));F.performCloseDialog(b,a)};var g=G.open(f);if(g)return g.closePromise.then(function(a){return a?e.reject(a.value):e.reject()}),e.promise},isOpen:function(a){var b=c(document.getElementById(a));return b.length>0},close:function(a,b){var d=c(document.getElementById(a));if(d.length)F.closeDialog(d,b);else if("$escape"===a){var e=l[l.length-1];d=c(document.getElementById(e)),d.data("$ngDialogOptions").closeByEscape&&F.closeDialog(d,"$escape")}else G.closeAll(b);return G},closeAll:function(a){for(var b=document.querySelectorAll(".ngdialog"),d=b.length-1;d>=0;d--){var e=b[d];F.closeDialog(c(e),a)}},getOpenDialogs:function(){return l},getDefaults:function(){return b}};a.forEach(["html","body"],function(a){if(E[a]=u.find(a),j[a]){var b=F.getRouterLocationEventName();z.$on(b,function(){E[a]=u.find(a)})}});var H=F.detectUIRouter();if(H===r){var I=D.get("$transitions");I.onStart({},function(a){for(;p.length>0;){var b=p.pop();if(F.closeDialog(b)===!1)return!1}})}else{var J=H===q?"$stateChangeStart":"$locationChangeStart";z.$on(J,function(a){for(;p.length>0;){var b=p.pop();F.closeDialog(b)===!1&&a.preventDefault()}})}return G}]}),b.directive("ngDialog",["ngDialog",function(b){return{restrict:"A",scope:{ngDialogScope:"="},link:function(c,d,e){d.on("click",function(d){d.preventDefault();var f=a.isDefined(c.ngDialogScope)?c.ngDialogScope:"noScope";a.isDefined(e.ngDialogClosePrevious)&&b.close(e.ngDialogClosePrevious);var g=b.getDefaults();b.open({template:e.ngDialog,className:e.ngDialogClass||g.className,appendClassName:e.ngDialogAppendClass,controller:e.ngDialogController,controllerAs:e.ngDialogControllerAs,bindToController:e.ngDialogBindToController,disableAnimation:e.ngDialogDisableAnimation,scope:f,data:e.ngDialogData,showClose:"false"!==e.ngDialogShowClose&&("true"===e.ngDialogShowClose||g.showClose),closeByDocument:"false"!==e.ngDialogCloseByDocument&&("true"===e.ngDialogCloseByDocument||g.closeByDocument),closeByEscape:"false"!==e.ngDialogCloseByEscape&&("true"===e.ngDialogCloseByEscape||g.closeByEscape),overlay:"false"!==e.ngDialogOverlay&&("true"===e.ngDialogOverlay||g.overlay),preCloseCallback:e.ngDialogPreCloseCallback||g.preCloseCallback,onOpenCallback:e.ngDialogOnOpenCallback||g.onOpenCallback,bodyClassName:e.ngDialogBodyClass||g.bodyClassName})})}}}]),b});