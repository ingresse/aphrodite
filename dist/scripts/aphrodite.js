"use strict";angular.module("aphrodite",["ngAnimate","ngDialog","duScroll","angular-click-outside"]).config(["ngDialogProvider",function(e){e.setDefaults({className:"aph modal modal--limit",showClose:!1,plain:!1,trapFocus:!1,closeByDocument:!1,closeByEscape:!0})}]),function(){angular.module("aphrodite").run(["$templateCache",function(e){e.put("directives/AlertDirectiveTemplate.html",'<div class="aph alert {{ \'alert--\' + alertOptions.color }}" data-ng-class="{\n        \'alert--dismissable\': !alertOptions.notDismiss\n     }" data-ng-show="alertVisibility"> <button class="aph alert__dismiss" data-ng-if="!alertOptions.notDismiss" data-ng-click="dismiss()"> </button> <div data-ng-transclude></div> </div> '),e.put("directives/AutocompleteDirectiveTemplate.html",'<div class="aph autocomplete"> <input class="aph form__control" type="text" id="{{ id }}" name="{{ id }}" autocomplete="off" placeholder="{{ placeholder }}" data-ng-model="term" data-ng-focus="setFocus(true); onFocus();" data-ng-blur="onBlur();" data-ng-init="onInit();" data-ng-required="required" data-ng-class="{ \'autocomplete__input\' : focused && list.length > 0 }" data-click-outside="setFocus(false);" data-outside-if-not="autocomplete"> <div class="aph autocomplete__list"> <div class="aph autocomplete__list__message" data-ng-if="loading && list.length === 0"> {{ textLoading || \'Buscando...\' }} </div> <div class="aph autocomplete__list__message" data-ng-if="notFound && !loading && list.length === 0"> {{ textNotFound || \'Nada encontrado\' }} </div> <div class="aph autocomplete__list__message text-red" data-ng-if="error"> {{ textError || \'Houve um erro na busca\' }} </div> <div data-ng-show="focused && list.length > 0"> <div data-ng-repeat="item in list track by $index"> <input class="aph autocomplete__list__radio" type="radio" name="autocompleItem{{ id }}" id="autocompleteItem{{ $index }}"> <label class="aph autocomplete__list__item" for="autocompleteItem{{ $index }}"> <div class="row middle-xs"> <div class="col-xs aph autocomplete__list__item__image" data-ng-if="itemImage"> <img class="aph autocomplete__list__item__pic" data-ng-src="{{ getItemPath(item, itemImage) }}"> </div> <div class="col-xs"> <div class="aph autocomplete__list__item__title" data-ng-bind-html="getItemPath(item, itemTitle) | unsafe"></div> <div class="aph autocomplete__list__item__description" data-ng-if="itemDescription" data-ng-bind-html="getItemPath(item, itemDescription) | unsafe"></div> </div> </div> </label> </div> </div> </div> </div> '),e.put("directives/IconsDefsDirectiveTemplate.html",'<svg class="aph ic-defs"> <defs> <g id="check-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M27.5 14c0 7.457-6.043 13.5-13.5 13.5S.5 21.457.5 14C.5 6.545 6.543.5 14 .5S27.5 6.545 27.5 14z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="1.5" d="M7.808 14.149l4.291 3.994 8.821-8.554"/> </g> <g id="close-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M27.5 14c0 7.456-6.046 13.5-13.5 13.5C6.541 27.5.5 21.456.5 14 .5 6.545 6.541.5 14 .5 21.454.5 27.5 6.546 27.5 14z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g stroke-width="1.5"> <path d="M8.886 8.896l10.257 10.257L8.886 8.896zM8.886 19.153L19.143 8.896 8.886 19.153z"/> </g> </g> <g id="plus-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M23.546 23.547c-5.272 5.27-13.819 5.27-19.092 0-5.272-5.274-5.272-13.822 0-19.093 5.273-5.272 13.82-5.272 19.09 0 5.274 5.271 5.274 13.82.002 19.093z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g stroke-width="1.5"> <path d="M6.755 13.866h14.506H6.755zM14.008 21.118V6.613v14.505z"/> </g> </g> <g id="minus-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M23.547 23.545c-5.273 5.273-13.821 5.273-19.093 0-5.273-5.27-5.271-13.819 0-19.092 5.272-5.27 13.82-5.27 19.092 0 5.271 5.273 5.272 13.821 0 19.092z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="1.5" d="M6.755 13.866h14.506H6.755z"/> </g> <g id="undo-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M23.547 23.547c-5.273 5.27-13.821 5.27-19.092 0-5.273-5.274-5.273-13.823 0-19.094 5.27-5.27 13.819-5.27 19.09 0 5.273 5.271 5.273 13.82.002 19.094z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="1.5" d="M11.106 16.942L7.48 19.064l-2.018-3.82m17 .65c-.867-2.223-2.66-4.023-5.027-4.736-4.106-1.231-8.383 1.27-9.553 5.59a8.468 8.468 0 0 0-.296 1.965"/> </g> <g id="arrow-up-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 28.5 1.5)"> <path d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z" id="a"/> <mask y="-1.5" x="-1.5" height="30" width="30" id="b"> <path d="M-1.5-1.5h30v30h-30z" fill="#fff"/> <use id="use10" xlink:href="#a"/> </mask> <use mask="url(#b)" stroke-width="2" xlink:href="#a"/> <path stroke-width="2" d="m 17.993999,15.743696 -4.495,-4.495 -4.4929997,4.495"/> </g> <g id="arrow-right-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1.5 1.5)"> <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="2" d="M12 17.988l4.495-4.495L12 9"/> </g> <g id="arrow-down-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 28.5 1.5)"> <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="2" d="m 9.006001,12.255031 4.495,4.495 4.493,-4.495"/> </g> <g id="arrow-left-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 28.5 1.5)"> <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="2" d="M12 17.988l4.495-4.495L12 9"/> </g> <g id="info-circle" fill="none" fill-rule="evenodd" transform="translate(1 1)"> <path id="a" d="M27 13.499c0 7.457-6.046 13.5-13.5 13.5-7.458 0-13.5-6.043-13.5-13.5C0 6.044 6.042 0 13.5 0 20.954 0 27 6.044 27 13.499z"/> <mask id="b" width="30" height="29.999" x="-1.5" y="-1.5"> <path d="M-1.5-1.5h30v29.999h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-linecap="round" stroke-linejoin="round" stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g transform="matrix(1 0 0 -1 12 20)"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.5.5v8"/> <circle cx="1.5" cy="12" r="1"/> </g> </g> <g id="question-circle" fill="none" fill-rule="evenodd" transform="translate(1 1)"> <path id="a" d="M27 13.5c0 7.458-6.043 13.501-13.5 13.501C6.045 27.001 0 20.958 0 13.5 0 6.044 6.045 0 13.5 0 20.957 0 27 6.044 27 13.5z"/> <mask id="b" width="30" height="30.001" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30.001h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-linecap="round" stroke-linejoin="round" stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g transform="translate(10 7)"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.041 9.715c0-.718-.185-1.031.39-1.55 1.18-1.068 3.596-2.319 3.596-4.437C7.027-.609.603-.217.603 3.042"/> <circle cx="3" cy="13" r="1"/> </g> </g> <g id="warning" fill="none" fill-rule="evenodd" transform="translate(1 1)"> <path id="a" d="M13.499 0L0 27.06h27z" stroke-width="2"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <g transform="translate(12 11)"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.5.5v8"/> <circle cx="1.5" cy="12" r="1"/> </g> </g> <g id="calendar" fill="none" fill-rule="evenodd" transform="scale(1.9)"> <g transform="translate(1 0)"> <path d="M 9.6333732,2.1538236 H 4.3656947 m 6.7928573,0 h 2.618036 V 15.131503 H 0.11908748 V 2.1538236 H 2.8399804 m 1.5257143,0.31125 V 1.5741808 c 0,-0.4216071 -0.34125,-0.76285713 -0.7633929,-0.76285713 -0.4205357,0 -0.7623214,0.34125003 -0.7623214,0.76285713 v 1.72875 c 0,0.4221428 0.3417857,0.7623214 0.7623214,0.7623214 0.4221429,0 0.7633929,-0.3401786 0.7633929,-0.7623214 V 2.4650736 m 6.7928573,0 V 1.5741808 c 0,-0.4216071 -0.340714,-0.76285713 -0.762321,-0.76285713 -0.4216078,0 -0.7628578,0.34125003 -0.7628578,0.76285713 v 1.72875 c 0,0.4221428 0.34125,0.7623214 0.7628578,0.7623214 0.421607,0 0.762321,-0.3401786 0.762321,-0.7623214 V 2.4650736 M 0.12390891,6.2466808 H 13.732659" id="Stroke-1" style="stroke-width:1;stroke-linecap:round;stroke-linejoin:round"/> <path d="m 10.861607,12.880714 c 0,0.140893 -0.113036,0.253393 -0.253393,0.253393 H 9.8485714 c -0.1398214,0 -0.2528571,-0.1125 -0.2528571,-0.253393 v -0.759107 c 0,-0.139821 0.1130357,-0.252857 0.2528571,-0.252857 h 0.7596426 c 0.140357,0 0.253393,0.113036 0.253393,0.252857 v 0.759107" id="Fill-2"/> <path d="m 4.3333929,12.880714 c 0,0.140893 -0.1130358,0.253393 -0.2523215,0.253393 H 3.3208929 c -0.1398215,0 -0.2533929,-0.1125 -0.2533929,-0.253393 v -0.759107 c 0,-0.139821 0.1135714,-0.252857 0.2533929,-0.252857 h 0.7601785 c 0.1392857,0 0.2523215,0.113036 0.2523215,0.252857 v 0.759107" id="Fill-3"/> <path d="m 7.5969643,12.880714 c 0,0.140893 -0.1125,0.253393 -0.2533929,0.253393 H 6.585 c -0.1398214,0 -0.2533929,-0.1125 -0.2533929,-0.253393 v -0.759107 c 0,-0.139821 0.1135715,-0.252857 0.2533929,-0.252857 h 0.7585714 c 0.1408929,0 0.2533929,0.113036 0.2533929,0.252857 v 0.759107" id="Fill-4"/> <path d="m 10.861607,10.655893 c 0,0.140357 -0.113036,0.254464 -0.253393,0.254464 H 9.8485714 c -0.1398214,0 -0.2528571,-0.114107 -0.2528571,-0.254464 V 9.8967857 c 0,-0.1408928 0.1130357,-0.2539286 0.2528571,-0.2539286 h 0.7596426 c 0.140357,0 0.253393,0.1130358 0.253393,0.2539286 v 0.7591073" id="Fill-5"/> <path d="m 4.3333929,10.655893 c 0,0.140357 -0.1130358,0.254464 -0.2523215,0.254464 H 3.3208929 C 3.1810714,10.910357 3.0675,10.79625 3.0675,10.655893 V 9.8967857 c 0,-0.1408928 0.1135714,-0.2539286 0.2533929,-0.2539286 h 0.7601785 c 0.1392857,0 0.2523215,0.1130358 0.2523215,0.2539286 v 0.7591073" id="Fill-6"/> <path d="m 7.5969643,10.655893 c 0,0.140357 -0.1125,0.254464 -0.2533929,0.254464 H 6.585 c -0.1398214,0 -0.2533929,-0.114107 -0.2533929,-0.254464 V 9.8967857 c 0,-0.1408928 0.1135715,-0.2539286 0.2533929,-0.2539286 h 0.7585714 c 0.1408929,0 0.2533929,0.1130358 0.2533929,0.2539286 v 0.7591073" id="Fill-7"/> <path d="m 10.861607,8.4342857 c 0,0.1403572 -0.113036,0.2544643 -0.253393,0.2544643 H 9.8485714 C 9.70875,8.68875 9.5957143,8.5746429 9.5957143,8.4342857 V 7.6751786 c 0,-0.1392857 0.1130357,-0.2533929 0.2528571,-0.2533929 h 0.7596426 c 0.140357,0 0.253393,0.1141072 0.253393,0.2533929 v 0.7591071" id="Fill-8"/> <path d="m 4.3333929,8.4342857 c 0,0.1403572 -0.1130358,0.2544643 -0.2523215,0.2544643 H 3.3208929 C 3.1810714,8.68875 3.0675,8.5746429 3.0675,8.4342857 V 7.6751786 c 0,-0.1392857 0.1135714,-0.2533929 0.2533929,-0.2533929 h 0.7601785 c 0.1392857,0 0.2523215,0.1141072 0.2523215,0.2533929 v 0.7591071" id="Fill-9"/> <path d="m 7.5969643,8.4342857 c 0,0.1403572 -0.1125,0.2544643 -0.2533929,0.2544643 H 6.585 c -0.1398214,0 -0.2533929,-0.1141071 -0.2533929,-0.2544643 V 7.6751786 c 0,-0.1392857 0.1135715,-0.2533929 0.2533929,-0.2533929 h 0.7585714 c 0.1408929,0 0.2533929,0.1141072 0.2533929,0.2533929 v 0.7591071" id="Fill-10"/> </g> </g> </defs> </svg> '),e.put("directives/LoaderDirectiveTemplate.html",'<div class="aph loader" data-ng-hide="activities.length === 0 && infos.length === 0 && errors.length === 0"> <div class="aph loader__content"> <div class="aph container"> <div class="aph loader__content__spinner" data-ng-show="activities.length !== 0"> <span class="aph loader__content__spinner__image"> </span> </div> <div class="aph loader__content__message" data-ng-repeat="activity in activities track by $index"> <div class="aph loader__content__message__title" data-ng-if="activity.title" data-ng-bind-html="activity.title | unsafe"> </div> <div class="aph loader__content__message__text" data-ng-if="activity.text" data-ng-bind-html="activity.text | unsafe"> </div> </div> <div class="aph loader__content__info" data-ng-repeat="info in infos track by $index"> <div data-ng-bind-html="info | unsafe"></div> <button class="aph loader__content__info__icon" data-ng-click="clearInfo(info)" title="Fechar esta mensagem"> × </button> </div> <div class="aph loader__content__error" data-ng-repeat="error in errors track by $index"> <div data-ng-bind-html="error | unsafe"></div> <button class="aph loader__content__error__icon" data-ng-click="clearError(error)" title="Fechar esta mensagem"> × </button> </div> </div> </div> </div> '),e.put("directives/PaginationDirectiveTemplate.html",'<ul class="aph pag"> <li class="aph pag__item pag__item--prev" data-ng-show="current > 1" data-ng-click="previous();" title="Página anterior">&lsaquo;</li> <li class="aph pag__item" data-ng-click="selector(1);" data-ng-show="2 < current - visibleHalf" title="Primeira página">1</li> <li class="aph pag__item pag__item--disabled" data-ng-show="2 < current - visibleHalf" title="Existem páginas entre o número anterior e o seguinte">...</li> <li class="aph pag__item" data-ng-class="{ \'pag__item--active\': page === current }" data-ng-repeat="page in getPages(last) track by $index" data-ng-click="goTo(page);" title="{{ page === current ? \'Você está nessa página\' : \'Ir para a página \' + page }}">{{ page }}</li> <li class="aph pag__item pag__item--disabled" data-ng-show="last > current + visibleHalf" title="Existem páginas entre o número anterior e o seguinte">...</li> <li class="aph pag__item" data-ng-click="selector(last);" data-ng-show="last > current + visibleHalf" title="Ir para a última página">{{ last }}</li> <li class="aph pag__item pag__item--next" data-ng-show="current < last" data-ng-click="next();" title="Próxima página">&rsaquo;</li> </ul> '),e.put("directives/ProgressBarDirectiveTemplate.html",'<span class="aph progress__label" data-ng-if="progressOptions.text"> {{ progressValue }}% </span> <div class="aph progress__bar progress__bar--{{ progressValue }}"> <span class="aph progress__bar__label" data-ng-if="progressOptions.text"> {{ progressValue }}% </span> </div> '),e.put("directives/SelectorDirectiveTemplate.html",'<div data-ng-if="!array"> <input type="checkbox" class="aph selector__input" id="selector-{{ randomId }}" name="{{ name }}" data-ng-model="$parent.ngModel" data-ng-attr-value="{{ value || undefined }}" data-ng-required="ngRequired" data-ng-checked="isChecked" data-is-checked="{{ isChecked }}" data-ng-disabled="ngDisabled"> <label for="selector-{{ randomId }}" class="aph selector__label"> <span class="aph selector__label__prefix" data-ng-if="prefix"> {{ prefix }} </span> {{ title }} </label> </div> <div data-ng-if="array"> <input type="checkbox" class="aph selector__input" id="selector-array-{{ randomId }}" name="{{ name }}" data-ng-value="{{ value }}" data-ng-click="checkArray()" data-ng-checked="isChecked" data-is-checked="{{ isChecked }}" data-ng-disabled="ngDisabled"> <label for="selector-array-{{ randomId }}" class="aph selector__label"> <span class="aph selector__label__prefix" data-ng-if="prefix"> {{ prefix }} </span> {{ title }} </label> </div> '),e.put("directives/TooltipDirectiveTemplate.html",'<div class="aph tooltip__content" data-ng-class="[tooltipColor, tooltipPosition, tooltipSize]" data-ng-bind-html="content | unsafe"> </div> ')}])}(),angular.module("aphrodite").factory("loader",["$timeout",function(e){var t={activities:[],infos:[],errors:[]};return t.start=function(i){var a=null,r={id:t.activities.length,dismiss:!1};angular.isObject(i)?angular.forEach(i,function(e,t){r[t]=i[t]}):r.title=i;for(var n=0;n<t.activities.length;n++)if(a=t.activities[n],r.title===a.title)return!1;return e(function(){r.dismiss=!0},1e4),t.activities.push(r),r},t.stop=function(e){for(var i=null,a=angular.isObject(e)?e.title:e,r=0;r<t.activities.length;r++)if(i=t.activities[r],!a&&!i.title||a===i.title)return void t.activities.splice(r,1)},t.info=function(e){t.infos.push(e)},t.error=function(e,i){t.errors.push(e),i&&console.error(i)},t.clearInfo=function(e){for(var i in t.infos)t.infos[i]===e&&t.infos.splice(i,1)},t.clearError=function(e){for(var i in t.errors)t.errors[i]===e&&t.errors.splice(i,1)},t}]),angular.module("aphrodite").factory("scroll",["$document",function(e){var t={};return t.toTop=function(t,i){var a=t||0,r=i||800,n=e.find("body");n.scrollTop(a,r).then(function(){window.scrollTo(0,a)})},t}]),angular.module("aphrodite").filter("unsafe",["$sce",function(e){return function(t){return e.trustAsHtml(t)}}]),angular.module("aphrodite").directive("aphAutocomplete",["$timeout","$filter",function(e,t){return{restrict:"E",replace:!0,scope:{term:"=?",localData:"=?",change:"=?",callback:"=",id:"@",itemTitle:"@",itemImage:"@?",itemDescription:"@?",placeholder:"@?",textLoading:"@?",textNotFound:"@?",textError:"@?",required:"=?",delay:"=?",clearOnCallback:"=?",onInit:"=?",onFocus:"=?",onBlur:"=?"},templateUrl:"directives/AutocompleteDirectiveTemplate.html",link:function(i,a){var r,n,l=!1,o=angular.element(a.find("input")[0]),s=angular.element(a.find("div")[0]);i.getItemPath=function(e,t){if(!e||!t)return null;t=t.split(".");for(var i=0;i<t.length;i++)e=e[t[i]];return e},i._hasTerm=function(e,a,r){if(!e[a]||"string"!=typeof e[a])return!1;var n=t("lowercase")(e[a]),l=t("lowercase")(r||i.term);return n.includes(l)},i._localSearch=function(){i.list=[],i.localData.map(function(e){(i._hasTerm(e,i.itemTitle)||i._hasTerm(e,i.itemDescription))&&i.list.push(e)}),i.loading=!1,i.notFound=0===i.list.length},i.search=function(){return i.error=!1,i.notFound=!1,i.loading=!0,i.localData?void i._localSearch():void i.change(i.term).then(function(e){i.list=e})["catch"](function(){i.error=!0,i.list=[]})["finally"](function(){i.loading=!1,i.notFound=0===i.list.length})},i.selectItem=function(e){n=i.list[e],i.list=[],i.clearOnCallback&&(o[0].value=""),i.setFocus(),i.callback(n),i.$digest()},i.setFocus=function(e){return e?void(i.focused=!0):void(i.focused=!1)},o.on("keyup",function(e){r=a.find("input")[1],r&&40===e.keyCode&&i.list.length>0&&(r.checked=!0,r.focus())}),s.on("keypress mousedown",function(t){13!==t.which&&"mousedown"!==t.type||(t.preventDefault(),e(function(){var e=[];angular.extend(e,s.find("input")),e.some(function(e,t){if(e.checked)return i.selectItem(t),!0}),i.$digest()},150))}),i.$watch("term",function(t){!l&&t||(i.notFound=!1,e.cancel(l)),t&&t.length>=2?l=e(function(){i.search()},i.delay||0):i.list=[]})}}}]),angular.module("aphrodite").directive("alert",function(){return{restrict:"E",scope:{alertVisibility:"=",alertOptions:"=?"},templateUrl:"directives/AlertDirectiveTemplate.html",transclude:!0,link:function(e,t){t.addClass("aph alert-container"),e.dismiss=function(){e.alertVisibility=!e.alertVisibility}}}}),angular.module("aphrodite").directive("drawer",function(){return{restrict:"A",link:function(e,t,i){var a=angular.element(document.querySelector("#"+i.drawer));return i.drawer?0===a.length?void console.error("APH DRAWER DIRECTIVE:\nCan't find \"#"+i.drawer+'" content element.'):(e.closeDrawer=function(){a.removeClass("active")},t.on("click",function(){t[0].checked?a.removeClass("active"):a.addClass("active")}),void e.closeDrawer()):void console.error('APH DRAWER DIRECTIVE:\nNeed to declare "drawer" attribute with id of content element.')}}}),angular.module("aphrodite").directive("dropdown",function(){return{restrict:"A",link:function(e,t){t.on("click",function(){t.toggleClass("active")}),e.closeDropdown=function(){t.removeClass("active")}}}}),angular.module("aphrodite").directive("formValidation",["$window","scroll",function(e,t){return{restrict:"A",require:"^form",scope:{formValidationOffsetTop:"=?",formValidationNoScroll:"=?"},link:function(i,a,r,n){function l(){n.changed||(console.info("APH FORM VALIDATION:\nForm marked as CHANGED.\n\n"),n.changed=!0)}function o(e){if(!n[e.srcElement.name].$dirty)return console.info('APH FORM VALIDATION:\nElement "'+e.srcElement.name+'" marked as DIRTY.\n\n'),n[e.srcElement.name].$setDirty()}function s(t){var i=e.innerWidth>1024?90:170,a=t.offsetParent.offsetTop+t.offsetTop-i;return a}function d(e){for(var t=0;t<e.length;t++){var i=e[t];if(t===e.length)return;if(angular.isObject(i)&&!angular.isArray(i)){var a=angular.element(i);(a[0].type&&h.indexOf(a[0].type)===-1||p.indexOf(a[0].tagName)>-1)&&(a.on("keypress",l),a.on("change",l),a.on("focus",o))}}}function c(e,a){for(var r=0;r<e.length;r++){var n=e[r];if(angular.isObject(n)&&!angular.isArray(n)){var l=angular.element(n);if(l.hasClass("ng-invalid-required")||l.hasClass("ng-invalid-email")||l.hasClass("ng-invalid-email-remove"))return i.formValidationNoScroll||t.toTop(s(n)),n.focus(),a.preventDefault()}}}function u(){var e=a[0];n.changed=!1,d(e),a.on("submit",function(t){c(e,t)}),a.addClass("form--validation")}if(r.formValidation){var h=["submit","reset","button","file","range"],p=["TEXTAREA","SELECT"];u()}}}}]),angular.module("aphrodite").directive("iconDefs",function(){return{restrict:"E",replace:!0,templateUrl:"directives/IconsDefsDirectiveTemplate.html"}}),angular.module("aphrodite").directive("icon",function(){return{restrict:"E",replace:!0,scope:{title:"@",size:"@?"},link:function(e){e.iconId="#"+e.title},template:'<svg viewBox="0 0 30 30" class="aph ic">    <use data-ng-if="title && iconId" xlink:href="{{ iconId }}"></use></svg>'}}),angular.module("aphrodite").directive("imageBlur",function(){return{restrict:"E",scope:{backgroundImage:"="},link:function(e,t){t.addClass("aph image-blur"),e.$watch("backgroundImage",function(){t.css("background-image",'url("'+e.backgroundImage+'")')})}}}),angular.module("aphrodite").directive("loader",["loader",function(e){return{restrict:"E",templateUrl:"directives/LoaderDirectiveTemplate.html",scope:{},link:function(t){t.activities=e.activities,t.infos=e.infos,t.errors=e.errors,t.stop=function(t){e.stop(t)},t.clearInfo=function(t){e.clearInfo(t)},t.clearError=function(t){e.clearError(t)}}}}]),angular.module("aphrodite").directive("progressBar",function(){return{restrict:"EA",scope:{progressValue:"=",progressOptions:"=?"},link:function(e,t){t.addClass("aph progress"),e.progressOptions&&e.progressOptions.size&&t.addClass("progress--"+e.progressOptions.size.toString())},templateUrl:"directives/ProgressBarDirectiveTemplate.html"}}),angular.module("aphrodite").directive("selector",function(){return{restrict:"E",scope:{title:"@",value:"=?",prefix:"@?",name:"@?",array:"=?",ngModel:"=?",ngTrueValue:"=?",ngFalseValue:"=?",ngRequired:"=?",ngDisabled:"=?"},templateUrl:"directives/SelectorDirectiveTemplate.html",link:function(e,t){if(e.randomId=Math.random(),t.addClass("aph selector"),e.array){var i;e.checkArray=function(){i=e.array.indexOf(e.value),i>-1?e.array.splice(i,1):e.array.push(e.value)},e.itemChecked=function(){return i=e.array.indexOf(e.value),i>-1?void(e.isChecked=!0):void(e.isChecked=!1)},e.$watch("array",function(){e.itemChecked()},!0)}}}}),angular.module("aphrodite").directive("tooltip",["$document","$compile","$filter",function(e,t,i){return{restrict:"A",scope:!0,link:function(e,a,r){e.text=i("unsafe")(r.tooltip);var n=t('<span class="aph tooltip__content" data-ng-bind-html="text"></span>')(e);a.addClass("aph tooltip"),r.tooltipClass&&n.addClass(r.tooltipClass),a.append(n)}}}]); }

                if (evt.keyCode === 40 &&
                    scope.list.length > 0) {
                    radio.checked = true;
                    radio.focus();
                }
            });

            /*
             * To select item
             */
            resultList.on('keypress mousedown', function (evt) {
                if (evt.which === 13 || evt.type === 'mousedown') {
                    evt.preventDefault();

                    $timeout(function () {
                        var items = [];
                        angular.extend(items, resultList.find('input'));

                        items.some(function (input, index) {
                            if (input.checked) {
                                scope.selectItem(index);
                                return true;
                            }
                        });

                        scope.$digest();
                    }, 150);
                }
            });

            /*
             * Watch input term to search
             */
            scope.$watch('term', function (value) {
                if (searching || !value) {
                    scope.notFound = false;
                    $timeout.cancel(searching);
                }

                if (value && value.length >= 2) {
                    searching =
                        $timeout(function () {
                            scope.search();
                        }, scope.delay || 0);

                } else {
                    scope.list = [];
                }
            });
        }
    };
}]);

'use strict';

angular.module('aphrodite')
.directive('alert', function () {
    return {
        restrict   : 'E',
        scope      : {
            alertVisibility: '=',
            alertOptions   : '=?'
        },
        templateUrl: 'directives/AlertDirectiveTemplate.html',
        transclude : true,
        link       : function (scope, element) {
            element.addClass('aph alert-container');

            scope.dismiss = function () {
                scope.alertVisibility = !scope.alertVisibility;
            };
        }
    };
});

'use strict';

angular.module('aphrodite')
.directive('drawer', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var drawerNav =
                angular.element(
                    document.querySelector('#' + attrs.drawer)
                );

            if (!attrs.drawer) {
                console.error(
                    'APH DRAWER DIRECTIVE:\n' +
                    'Need to declare "drawer" ' +
                    'attribute with id of content element.'
                );

                return;
            }

            if (drawerNav.length === 0) {
                console.error(
                    'APH DRAWER DIRECTIVE:\n' +
                    'Can\'t find "#' + attrs.drawer + '" ' +
                    'content element.'
                );

                return;
            }

            // Close Drawer Nav/Menu
            scope.closeDrawer = function () {
                drawerNav.removeClass('active');
            };

            // Bind click evento to open Nav/Menu
            element.on('click', function () {
                if (element[0].checked) {
                    drawerNav.removeClass('active');

                } else {
                    drawerNav.addClass('active');
                }
            });

            // First Run
            scope.closeDrawer();
        },
    };
});

'use strict';

angular.module('aphrodite')
.directive('dropdown', function () {
    return {
        restrict: 'A',
        link    : function (scope, element) {
            element.on('click', function () {
                element.toggleClass('active');
            });

            scope.closeDropdown = function () {
                element.removeClass('active');
            };
        }
    };
});


'use strict';

angular.module('aphrodite')
.directive('formValidation', ["$window", "scroll", function ($window, scroll) {
    return {
        restrict: 'A',
        require : '^form',
        scope   : {
            formValidationOffsetTop: '=?',
            formValidationNoScroll : '=?',
        },
        link    : function (scope, element, attrs, formController) {
            if (!attrs.formValidation) {
                return;
            }

            // Elements lists to listen or not
            var excludedInputs   = [
                'submit',
                'reset',
                'button',
                'file',
                'range'
            ];
            var includedElements = [
                'TEXTAREA',
                'SELECT'
            ];

            // Set form as changed
            function _setFormChanged () {
                if (formController.changed) {
                    return;
                }

                console.info('APH FORM VALIDATION:\nForm marked as CHANGED.\n\n');

                formController.changed = true;
            }

            // Set an element as dirty
            function _setElementDirty (evt) {
                if (formController[evt.srcElement.name].$dirty) {
                    return;
                }

                console.info(
                    'APH FORM VALIDATION:\nElement "' +
                    evt.srcElement.name +
                    '" marked as DIRTY.\n\n'
                );

                return formController[evt.srcElement.name].$setDirty();
            }

            // Get element offset top
            function _getElementOffsetTop (el) {
                var safeMargin =
                    ($window.innerWidth > 1024 ? 90 : 170);
                var yPosition  =
                    (el.offsetParent.offsetTop + el.offsetTop - safeMargin);

                return yPosition;
            }

            // Insert event listener in elements to mark form as changed
            function _childsListen (form) {
                for (var k = 0; k < form.length; k++) {
                    var field = form[k];

                    if (k === form.length) {
                        return;
                    }

                    if (angular.isObject(field) && !angular.isArray(field)) {
                        var fieldElement = angular.element(field);

                        if (fieldElement[0].type && excludedInputs.indexOf(fieldElement[0].type) === -1 ||
                            includedElements.indexOf(fieldElement[0].tagName) > -1) {

                            fieldElement.on('keypress', _setFormChanged);
                            fieldElement.on('change', _setFormChanged);
                            fieldElement.on('focus', _setElementDirty);

                        }

                    }
                }
            }

            // Verify fields
            function _validateFields (form, evt) {
                for (var j = 0; j < form.length; j++) {
                    var field = form[j]; // uses native 'focus'

                    if (angular.isObject(field) && !angular.isArray(field)) {
                        var fieldElement = angular.element(field); // uses angular resources

                        // In case of an invalid/required field
                        if (fieldElement.hasClass('ng-invalid-required') ||
                            fieldElement.hasClass('ng-invalid-email') ||
                            fieldElement.hasClass('ng-invalid-email-remove')) {

                            // Scroll page to the field position
                            if (!scope.formValidationNoScroll) {
                                scroll.toTop(
                                    _getElementOffsetTop(field)
                                );
                            }

                            // Apply focus in field
                            field.focus();

                            // prevent submit
                            return evt.preventDefault();
                        }
                    }
                }
            }

            // Initialize variables
            function _init () {
                var form = element[0];

                formController.changed = false;

                // Initialize listener in childs
                _childsListen(form);

                // Wait for submit
                element.on('submit', function (e) {

                    // Verify fields
                    _validateFields(form, e);

                });

                // Add css class to form
                element.addClass('form--validation');
            }

            // Initialize directive
            _init();
        },
    };
}]);

'use strict';

angular.module('aphrodite')
.directive('iconDefs', function () {
    return {
        restrict   : 'E',
        replace    : true,
        templateUrl: 'directives/IconsDefsDirectiveTemplate.html',
    };
});

'use strict';

angular.module('aphrodite')
.directive('icon', function () {
    return {
        restrict: 'E',
        replace : true,
        scope   : {
            title: '@',
            size : '@?',
        },
        link    : function (scope) {
            scope.iconId = '#' + scope.title;
        },
        template:
            '<svg viewBox="0 0 30 30" class="aph ic">' +
            '    <use data-ng-if="title && iconId" xlink:href="{{ iconId }}"></use>' +
            '</svg>',
    };
});

'use strict';

angular.module('aphrodite')
.directive('imageBlur', function () {
    return {
        restrict: 'E',
        scope   : {
            backgroundImage: '=',
        },
        link    : function (scope, element) {
            element.addClass('aph image-blur');

            scope.$watch('backgroundImage', function () {
                element.css('background-image', 'url("' + scope.backgroundImage + '")');
            });
        }
    };
});

'use strict';

angular.module('aphrodite')
.directive('loader', ["loader", function (loader) {
    return {
        restrict   : 'E',
        templateUrl: 'directives/LoaderDirectiveTemplate.html',
        scope      : {},
        link       : function (scope) {
            scope.activities  = loader.activities;
            scope.infos       = loader.infos;
            scope.errors      = loader.errors;

            scope.stop = function (activity) {
                loader.stop(activity);
            };

            scope.clearInfo = function (info) {
                loader.clearInfo(info);
            };

            scope.clearError = function (error) {
                loader.clearError(error);
            };
        }
    };
}]);

'use strict';

angular.module('aphrodite')
.directive('progressBar', function () {
    return {
        restrict: 'EA',
        scope   : {
            progressValue  : '=',
            progressOptions: '=?'
        },
        link    : function (scope, element) {
            element.addClass('aph progress');

            if (scope.progressOptions && scope.progressOptions.size) {
                element.addClass('progress--' + scope.progressOptions.size.toString());
            }
        },
        templateUrl: 'directives/ProgressBarDirectiveTemplate.html'
    };
});

'use strict';

angular.module('aphrodite')
.directive('selector', function () {
    return {
        restrict: 'E',
        scope   : {
            title       : '@',
            value       : '=?',
            prefix      : '@?',
            name        : '@?',
            array       : '=?',
            ngModel     : '=?',
            ngTrueValue : '=?',
            ngFalseValue: '=?',
            ngRequired  : '=?',
            ngDisabled  : '=?',
        },
        templateUrl: 'directives/SelectorDirectiveTemplate.html',
        link: function (scope, element) {
            scope.randomId = Math.random();

            element.addClass('aph selector');

            if (scope.array) {
                var index;

                scope.checkArray = function () {
                    index = scope.array.indexOf(scope.value);

                    if (index > -1) {
                        scope.array.splice(index, 1);

                    } else {
                        scope.array.push(scope.value);
                    }
                };

                scope.itemChecked = function () {
                    index = scope.array.indexOf(scope.value);

                    if (index > -1) {
                        scope.isChecked = true;

                        return;
                    }

                    scope.isChecked = false;
                };

                scope.$watch('array', function () {
                    scope.itemChecked();
                }, true);
            }
        },
    };
});

'use strict';

angular.module('aphrodite')
.directive('tooltip', ["$document", "$compile", "$filter", function ($document, $compile, $filter) {
    return {
        restrict: 'A',
        scope   : true,
        link    : function (scope, element, attrs) {
            scope.text = $filter('unsafe')(attrs.tooltip);

            var tip =
                $compile(
                    '<span class="aph tooltip__content" data-ng-bind-html="text"></span>'
                )(scope);

            element.addClass('aph tooltip');

            if (attrs.tooltipClass) {
                tip.addClass(attrs.tooltipClass);
            }

            element.append(tip);
        },
    };
}]);
