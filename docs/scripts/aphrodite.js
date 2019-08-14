"use strict";angular.module("aphrodite",["angular-click-outside","duScroll","ngAnimate","ngDialog","ui.mask"]).config(["momentProvider","ngDialogProvider",function(e,a){e.locale("pt-br"),a.setDefaults({className:"aph modal modal--limit",showClose:!1,plain:!1,trapFocus:!1,closeByDocument:!1,closeByEscape:!0})}]),function(){angular.module("aphrodite").run(["$templateCache",function(e){e.put("directives/AlertDirectiveTemplate.html",'<div class="aph alert {{ \'alert--\' + alertOptions.color }}" data-ng-class="{\n        \'alert--dismissable\': !alertOptions.notDismiss\n     }" data-ng-show="alertVisibility"> <button class="aph alert__dismiss" data-ng-if="!alertOptions.notDismiss" data-ng-click="dismiss()"> </button> <div data-ng-transclude></div> </div> '),e.put("directives/AutocompleteDirectiveTemplate.html",'<div class="aph autocomplete"> <input class="aph form__control" type="text" id="{{ id }}" name="{{ id }}" autocomplete="off" placeholder="{{ placeholder }}" data-ng-model="term" data-ng-focus="setFocus(true); onFocus();" data-ng-blur="onBlur();" data-ng-init="onInit();" data-ng-required="required" data-ng-class="{ \'autocomplete__input\' : focused && list.length > 0 }" data-click-outside="setFocus(false);" data-outside-if-not="autocomplete"> <div class="aph autocomplete__list"> <div class="aph autocomplete__list__message" data-ng-if="loading && list.length === 0"> {{ textLoading || \'Buscando...\' }} </div> <div class="aph autocomplete__list__message" data-ng-if="notFound && !loading && list.length === 0"> {{ textNotFound || \'Nada encontrado\' }} </div> <div class="aph autocomplete__list__message text-red" data-ng-if="error"> {{ textError || \'Houve um erro na busca\' }} </div> <div data-ng-show="focused && list.length > 0"> <div data-ng-repeat="item in list track by $index"> <input class="aph autocomplete__list__radio" type="radio" name="autocompleItem{{ id }}" id="autocompleteItem{{ $index }}"> <label class="aph autocomplete__list__item" for="autocompleteItem{{ $index }}"> <div class="row middle-xs"> <div class="col-xs aph autocomplete__list__item__image" data-ng-if="itemImage"> <img class="aph autocomplete__list__item__pic" data-ng-src="{{ getItemPath(item, itemImage) }}"> </div> <div class="col-xs"> <div class="aph autocomplete__list__item__title" data-ng-bind-html="getItemPath(item, itemTitle) | unsafe"></div> <div class="aph autocomplete__list__item__description" data-ng-if="itemDescription" data-ng-bind-html="getItemPath(item, itemDescription) | unsafe"></div> </div> </div> </label> </div> </div> </div> </div> '),e.put("directives/CreditCardBirthdateDirectiveTemplate.html",'<div class="aph form__field"> <label class="aph form__label" for="cc_birthdate"> Nascimento </label> <input class="aph form__control" type="tel" name="birthdate" id="cc_birthdate" data-ng-model="birthdate" data-ng-change="handleChange()" data-ui-mask="99/99/9999" data-prevent-paste required> <div class="aph form__helper form__helper--error" data-ng-if="isInvalid"> Data inválida </div> </div> '),e.put("directives/CreditCardCVVDirectiveTemplate.html",'<div class="aph form__field"> <label class="aph form__label" for="cc_cvv"> CVV </label> <input class="aph form__control creditcard-cvv" type="tel" name="csv" id="cc_cvv" data-ng-model="card.cvv" data-ui-mask="999?9" data-prevent-paste required> </div> '),e.put("directives/CreditCardDirectiveTemplate.html","<div class=\"aph creditcard-wrapper {{ animated ? 'creditcard-wrapper--animation-in' : '' }}\"> <div class=\"aph creditcard creditcard--{{ (card.brand || '') | lowercase }}\"> <span class=\"aph creditcard__brand creditcard-brand--{{ (card.brand || '') | lowercase }}\" title=\"{{ card.brand || '' | uppercase }}\"> </span> <div class=\"aph creditcard__number\"> <span title=\"Últimos Dígitos do Cartão\"> {{ card.lastFour | creditcardDisplay }} </span> </div> <div class=\"aph creditcard__expiration text-truncate\"> <span title=\"Validade do Cartão: {{ (card.expiration || '') | momentum : 'MMMM[ de ]YYYY' : 'YYYY-MM-DD' }}\"> {{ (card.expiration || '') | momentum : 'MM/YY' : 'YYYY-MM-DD' }} </span> </div> <div class=\"aph creditcard__expiration text-truncate\"> <span title=\"Titular do Cartão: {{ card.holder.name }}\"> {{ (card.holder.name || '') | uppercase }} </span> </div> </div> </div> "),e.put("directives/CreditCardDocumentDirectiveTemplate.html",'<div class="aph form__field"> <label class="aph form__label" for="cc_cpf"> CPF </label> <input class="aph form__control" type="tel" name="cpf" id="cc_cpf" data-ng-model="card.cpf" data-ui-mask="999.999.999-99" data-prevent-paste required> </div> '),e.put("directives/CreditCardExpirationDirectiveTemplate.html",'<div class="aph form__field"> <label class="aph form__label" for="cc_expiration"> Validade </label> <input class="aph form__control month" name="expiration" type="tel" id="cc_expiration" data-ui-mask="99/99" data-ui-mask-placeholder="MM/AA" data-ui-mask-placeholder-char="space" data-ng-model="expiration" data-ng-blur="validateExpiration()" data-ng-change="validateExpiration()" data-prevent-paste required> <div class="aph form__helper form__helper--error" data-ng-if="isExpired || isInvalid"> {{ isInvalid ? \'Data inválida\' : \'Vencido\' }} </div> </div> '),e.put("directives/CreditCardHolderDirectiveTemplate.html",'<div class="aph form__field"> <label class="aph form__label" for="cc_name"> Nome do titular </label> <input class="aph form__control" type="text" name="name" id="cc_name" data-ng-model="card.name" data-ng-change="handleChange()" data-prevent-paste required> </div> '),e.put("directives/CreditCardNumberDirectiveTemplate.html",'<div class="aph form__field"> <label class="aph form__label" for="cc_number"> Número do cartão </label> <input class="aph form__control creditcard-brand creditcard-brand--{{ card.flag || \'\' }}" name="number" type="tel" id="cc_number" data-ng-model="card.number" data-ui-mask="9999 9999 9999 99?99" data-ng-change="handleChange()" data-creditcard-validator data-prevent-paste required> <div class="aph form__helper form__helper--error" data-ng-show="creditcardForm.number.$error.creditcard"> Este não é um número de cartão de crédito válido </div> </div> '),e.put("directives/IconsDefsDirectiveTemplate.html",'<svg class="aph ic-defs"> <defs> <g id="check-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M27.5 14c0 7.457-6.043 13.5-13.5 13.5S.5 21.457.5 14C.5 6.545 6.543.5 14 .5S27.5 6.545 27.5 14z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="1.5" d="M7.808 14.149l4.291 3.994 8.821-8.554"/> </g> <g id="close-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M27.5 14c0 7.456-6.046 13.5-13.5 13.5C6.541 27.5.5 21.456.5 14 .5 6.545 6.541.5 14 .5 21.454.5 27.5 6.546 27.5 14z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g stroke-width="1.5"> <path d="M8.886 8.896l10.257 10.257L8.886 8.896zM8.886 19.153L19.143 8.896 8.886 19.153z"/> </g> </g> <g id="plus-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M23.546 23.547c-5.272 5.27-13.819 5.27-19.092 0-5.272-5.274-5.272-13.822 0-19.093 5.273-5.272 13.82-5.272 19.09 0 5.274 5.271 5.274 13.82.002 19.093z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g stroke-width="1.5"> <path d="M6.755 13.866h14.506H6.755zM14.008 21.118V6.613v14.505z"/> </g> </g> <g id="minus-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M23.547 23.545c-5.273 5.273-13.821 5.273-19.093 0-5.273-5.27-5.271-13.819 0-19.092 5.272-5.27 13.82-5.27 19.092 0 5.271 5.273 5.272 13.821 0 19.092z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="1.5" d="M6.755 13.866h14.506H6.755z"/> </g> <g id="undo-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"> <path id="a" d="M23.547 23.547c-5.273 5.27-13.821 5.27-19.092 0-5.273-5.274-5.273-13.823 0-19.094 5.27-5.27 13.819-5.27 19.09 0 5.273 5.271 5.273 13.82.002 19.094z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1-1h30v30H-1z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="1.5" d="M11.106 16.942L7.48 19.064l-2.018-3.82m17 .65c-.867-2.223-2.66-4.023-5.027-4.736-4.106-1.231-8.383 1.27-9.553 5.59a8.468 8.468 0 0 0-.296 1.965"/> </g> <g id="arrow-up-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 28.5 1.5)"> <path d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z" id="a"/> <mask y="-1.5" x="-1.5" height="30" width="30" id="b"> <path d="M-1.5-1.5h30v30h-30z" fill="#fff"/> <use id="use10" xlink:href="#a"/> </mask> <use mask="url(#b)" stroke-width="2" xlink:href="#a"/> <path stroke-width="2" d="m 17.993999,15.743696 -4.495,-4.495 -4.4929997,4.495"/> </g> <g id="arrow-right-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="translate(1.5 1.5)"> <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="2" d="M12 17.988l4.495-4.495L12 9"/> </g> <g id="arrow-down-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 28.5 1.5)"> <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="2" d="m 9.006001,12.255031 4.495,4.495 4.493,-4.495"/> </g> <g id="arrow-left-circle" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 28.5 1.5)"> <path id="a" d="M3.953 3.953c5.272-5.27 13.82-5.27 19.092 0 5.273 5.274 5.273 13.82 0 19.091-5.271 5.275-13.82 5.275-19.09 0-5.273-5.27-5.273-13.82-.002-19.09z"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-width="2" mask="url(#b)" xlink:href="#a"/> <path stroke-width="2" d="M12 17.988l4.495-4.495L12 9"/> </g> <g id="info-circle" fill="none" fill-rule="evenodd" transform="translate(1 1)"> <path id="a" d="M27 13.499c0 7.457-6.046 13.5-13.5 13.5-7.458 0-13.5-6.043-13.5-13.5C0 6.044 6.042 0 13.5 0 20.954 0 27 6.044 27 13.499z"/> <mask id="b" width="30" height="29.999" x="-1.5" y="-1.5"> <path d="M-1.5-1.5h30v29.999h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-linecap="round" stroke-linejoin="round" stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g transform="matrix(1 0 0 -1 12 20)"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.5.5v8"/> <circle cx="1.5" cy="12" r="1"/> </g> </g> <g id="question-circle" fill="none" fill-rule="evenodd" transform="translate(1 1)"> <path id="a" d="M27 13.5c0 7.458-6.043 13.501-13.5 13.501C6.045 27.001 0 20.958 0 13.5 0 6.044 6.045 0 13.5 0 20.957 0 27 6.044 27 13.5z"/> <mask id="b" width="30" height="30.001" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30.001h-30z"/> <use xlink:href="#a"/> </mask> <use stroke-linecap="round" stroke-linejoin="round" stroke-width="2" mask="url(#b)" xlink:href="#a"/> <g transform="translate(10 7)"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.041 9.715c0-.718-.185-1.031.39-1.55 1.18-1.068 3.596-2.319 3.596-4.437C7.027-.609.603-.217.603 3.042"/> <circle cx="3" cy="13" r="1"/> </g> </g> <g id="warning" fill="none" fill-rule="evenodd" transform="translate(1 1)"> <path id="a" d="M13.499 0L0 27.06h27z" stroke-width="2"/> <mask id="b" width="30" height="30" x="-1.5" y="-1.5"> <path fill="#fff" d="M-1.5-1.5h30v30h-30z"/> <use xlink:href="#a"/> </mask> <g transform="translate(12 11)"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.5.5v8"/> <circle cx="1.5" cy="12" r="1"/> </g> </g> <g id="calendar" fill="none" fill-rule="evenodd" transform="scale(1.9)"> <g transform="translate(1 0)"> <path d="M 9.6333732,2.1538236 H 4.3656947 m 6.7928573,0 h 2.618036 V 15.131503 H 0.11908748 V 2.1538236 H 2.8399804 m 1.5257143,0.31125 V 1.5741808 c 0,-0.4216071 -0.34125,-0.76285713 -0.7633929,-0.76285713 -0.4205357,0 -0.7623214,0.34125003 -0.7623214,0.76285713 v 1.72875 c 0,0.4221428 0.3417857,0.7623214 0.7623214,0.7623214 0.4221429,0 0.7633929,-0.3401786 0.7633929,-0.7623214 V 2.4650736 m 6.7928573,0 V 1.5741808 c 0,-0.4216071 -0.340714,-0.76285713 -0.762321,-0.76285713 -0.4216078,0 -0.7628578,0.34125003 -0.7628578,0.76285713 v 1.72875 c 0,0.4221428 0.34125,0.7623214 0.7628578,0.7623214 0.421607,0 0.762321,-0.3401786 0.762321,-0.7623214 V 2.4650736 M 0.12390891,6.2466808 H 13.732659" id="Stroke-1" style="stroke-width:1;stroke-linecap:round;stroke-linejoin:round"/> <path d="m 10.861607,12.880714 c 0,0.140893 -0.113036,0.253393 -0.253393,0.253393 H 9.8485714 c -0.1398214,0 -0.2528571,-0.1125 -0.2528571,-0.253393 v -0.759107 c 0,-0.139821 0.1130357,-0.252857 0.2528571,-0.252857 h 0.7596426 c 0.140357,0 0.253393,0.113036 0.253393,0.252857 v 0.759107" id="Fill-2"/> <path d="m 4.3333929,12.880714 c 0,0.140893 -0.1130358,0.253393 -0.2523215,0.253393 H 3.3208929 c -0.1398215,0 -0.2533929,-0.1125 -0.2533929,-0.253393 v -0.759107 c 0,-0.139821 0.1135714,-0.252857 0.2533929,-0.252857 h 0.7601785 c 0.1392857,0 0.2523215,0.113036 0.2523215,0.252857 v 0.759107" id="Fill-3"/> <path d="m 7.5969643,12.880714 c 0,0.140893 -0.1125,0.253393 -0.2533929,0.253393 H 6.585 c -0.1398214,0 -0.2533929,-0.1125 -0.2533929,-0.253393 v -0.759107 c 0,-0.139821 0.1135715,-0.252857 0.2533929,-0.252857 h 0.7585714 c 0.1408929,0 0.2533929,0.113036 0.2533929,0.252857 v 0.759107" id="Fill-4"/> <path d="m 10.861607,10.655893 c 0,0.140357 -0.113036,0.254464 -0.253393,0.254464 H 9.8485714 c -0.1398214,0 -0.2528571,-0.114107 -0.2528571,-0.254464 V 9.8967857 c 0,-0.1408928 0.1130357,-0.2539286 0.2528571,-0.2539286 h 0.7596426 c 0.140357,0 0.253393,0.1130358 0.253393,0.2539286 v 0.7591073" id="Fill-5"/> <path d="m 4.3333929,10.655893 c 0,0.140357 -0.1130358,0.254464 -0.2523215,0.254464 H 3.3208929 C 3.1810714,10.910357 3.0675,10.79625 3.0675,10.655893 V 9.8967857 c 0,-0.1408928 0.1135714,-0.2539286 0.2533929,-0.2539286 h 0.7601785 c 0.1392857,0 0.2523215,0.1130358 0.2523215,0.2539286 v 0.7591073" id="Fill-6"/> <path d="m 7.5969643,10.655893 c 0,0.140357 -0.1125,0.254464 -0.2533929,0.254464 H 6.585 c -0.1398214,0 -0.2533929,-0.114107 -0.2533929,-0.254464 V 9.8967857 c 0,-0.1408928 0.1135715,-0.2539286 0.2533929,-0.2539286 h 0.7585714 c 0.1408929,0 0.2533929,0.1130358 0.2533929,0.2539286 v 0.7591073" id="Fill-7"/> <path d="m 10.861607,8.4342857 c 0,0.1403572 -0.113036,0.2544643 -0.253393,0.2544643 H 9.8485714 C 9.70875,8.68875 9.5957143,8.5746429 9.5957143,8.4342857 V 7.6751786 c 0,-0.1392857 0.1130357,-0.2533929 0.2528571,-0.2533929 h 0.7596426 c 0.140357,0 0.253393,0.1141072 0.253393,0.2533929 v 0.7591071" id="Fill-8"/> <path d="m 4.3333929,8.4342857 c 0,0.1403572 -0.1130358,0.2544643 -0.2523215,0.2544643 H 3.3208929 C 3.1810714,8.68875 3.0675,8.5746429 3.0675,8.4342857 V 7.6751786 c 0,-0.1392857 0.1135714,-0.2533929 0.2533929,-0.2533929 h 0.7601785 c 0.1392857,0 0.2523215,0.1141072 0.2523215,0.2533929 v 0.7591071" id="Fill-9"/> <path d="m 7.5969643,8.4342857 c 0,0.1403572 -0.1125,0.2544643 -0.2533929,0.2544643 H 6.585 c -0.1398214,0 -0.2533929,-0.1141071 -0.2533929,-0.2544643 V 7.6751786 c 0,-0.1392857 0.1135715,-0.2533929 0.2533929,-0.2533929 h 0.7585714 c 0.1408929,0 0.2533929,0.1141072 0.2533929,0.2533929 v 0.7591071" id="Fill-10"/> </g> </g> </defs> </svg> '),e.put("directives/LoaderDirectiveTemplate.html",'<div class="aph loader" data-ng-hide="activities.length === 0 && infos.length === 0 && errors.length === 0"> <div class="aph loader__content"> <div class="aph container"> <div class="aph loader__content__spinner" data-ng-show="activities.length !== 0"> <span class="aph loader__content__spinner__image"> </span> </div> <div class="aph loader__content__message" data-ng-repeat="activity in activities track by $index"> <div class="aph loader__content__message__title" data-ng-if="activity.title" data-ng-bind-html="activity.title | unsafe"> </div> <div class="aph loader__content__message__text" data-ng-if="activity.text" data-ng-bind-html="activity.text | unsafe"> </div> </div> <div class="aph loader__content__info" data-ng-repeat="info in infos track by $index"> <div data-ng-bind-html="info | unsafe"></div> <button class="aph loader__content__info__icon" data-ng-click="clearInfo(info)" title="Fechar esta mensagem"> × </button> </div> <div class="aph loader__content__error" data-ng-repeat="error in errors track by $index"> <div data-ng-bind-html="error | unsafe"></div> <button class="aph loader__content__error__icon" data-ng-click="clearError(error)" title="Fechar esta mensagem"> × </button> </div> </div> </div> </div> '),e.put("directives/PaginationDirectiveTemplate.html",'<ul class="aph pag"> <li class="aph pag__item pag__item--prev" data-ng-show="current > 1" data-ng-click="previous();" title="Página anterior">&lsaquo;</li> <li class="aph pag__item" data-ng-click="selector(1);" data-ng-show="2 < current - visibleHalf" title="Primeira página">1</li> <li class="aph pag__item pag__item--disabled" data-ng-show="2 < current - visibleHalf" title="Existem páginas entre o número anterior e o seguinte">...</li> <li class="aph pag__item" data-ng-class="{ \'pag__item--active\': page === current }" data-ng-repeat="page in getPages(last) track by $index" data-ng-click="goTo(page);" title="{{ page === current ? \'Você está nessa página\' : \'Ir para a página \' + page }}">{{ page }}</li> <li class="aph pag__item pag__item--disabled" data-ng-show="last > current + visibleHalf" title="Existem páginas entre o número anterior e o seguinte">...</li> <li class="aph pag__item" data-ng-click="selector(last);" data-ng-show="last > current + visibleHalf" title="Ir para a última página">{{ last }}</li> <li class="aph pag__item pag__item--next" data-ng-show="current < last" data-ng-click="next();" title="Próxima página">&rsaquo;</li> </ul> '),e.put("directives/PaymentFastDirectiveTemplate.html",'<div class="aph payment-fast-container"> <div class="aph payment-fast" data-ng-class="{\n            \'text-center\': center,\n         }"> <div class="row middle-xs"> <div data-ng-class="{\n                    \'col-xs-9 col-sm-10\': !center,\n                    \'col-xs-12\': center,\n                 }"> <h4 class="aph payment-fast__title"> COMPRA RÁPIDA </h4> <p class="aph payment-fast__text"> <span data-ng-if="!center"> Ative e na próxima vez, compre sem preencher os dados. </span> <span data-ng-if="center"> Com cartões salvos, a compra fica mais rápida ainda. Fique tranquilo, nenhuma informação sensível será armazenada. </span> </p> </div> <div class="col-xs-3 col-sm-2 text-right aph payment-fast__toggle-wrapper" data-ng-if="!center"> <div class="aph form payment-fast__toggle"> <label for="fastPayment" class="aph form__switch" title="Salvar cartão para compras futuras: {{ enabled ? \'SIM\' : \'NÃO\' }}"> <input type="checkbox" id="fastPayment" name="fastPayment" class="aph form__switch__check" data-ng-model="enabled" data-ng-change="handleChange()"> <div class="aph form__switch__slider"></div> </label> </div> </div> </div> <div data-ng-transclude></div> </div> </div> '),e.put("directives/ProgressBarDirectiveTemplate.html",'<span class="aph progress__label" data-ng-if="progressOptions.text"> {{ progressValue }}% </span> <div class="aph progress__bar progress__bar--{{ progressValue }}"> <span class="aph progress__bar__label" data-ng-if="progressOptions.text"> {{ progressValue }}% </span> </div> '),e.put("directives/SelectorDirectiveTemplate.html",'<div data-ng-if="!array"> <input type="checkbox" class="aph selector__input" id="selector-{{ randomId }}" name="{{ name }}" data-ng-model="$parent.ngModel" data-ng-attr-value="{{ value || undefined }}" data-ng-required="ngRequired" data-ng-checked="isChecked" data-is-checked="{{ isChecked }}" data-ng-disabled="ngDisabled"> <label for="selector-{{ randomId }}" class="aph selector__label"> <span class="aph selector__label__prefix" data-ng-if="prefix"> {{ prefix }} </span> {{ title }} </label> </div> <div data-ng-if="array"> <input type="checkbox" class="aph selector__input" id="selector-array-{{ randomId }}" name="{{ name }}" data-ng-value="{{ value }}" data-ng-click="checkArray()" data-ng-checked="isChecked" data-is-checked="{{ isChecked }}" data-ng-disabled="ngDisabled"> <label for="selector-array-{{ randomId }}" class="aph selector__label"> <span class="aph selector__label__prefix" data-ng-if="prefix"> {{ prefix }} </span> {{ title }} </label> </div> '),e.put("directives/TooltipDirectiveTemplate.html",'<div class="aph tooltip__content" data-ng-class="[tooltipColor, tooltipPosition, tooltipSize]" data-ng-bind-html="content | unsafe"> </div> ')}])}(),function(e,a){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?a(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],a):a(e.moment)}(this,function(e){var a=e.defineLocale("pt-br",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº"});return a}),angular.module("aphrodite").provider("moment",function(){var e;return{locale:function(a){e=a},$get:["$window",function(a){return a.moment.locale(e),a.moment}]}}),angular.module("aphrodite").factory("inject",["$window",function(e){var a={};return a.element=function(a,t,i,r){var n,l=r||"script",d=a+"-jssdk",o=e.document,s=o.getElementsByTagName(t?t:"head")[0],c=o.getElementById(d);if(c){if("loaded"===c.readyState||"complete"===c.readyState)return;c.parentNode.removeChild(c)}switch(n=o.createElement(l),n.id=d,a){case"facebook":n.src="//connect.facebook.net/pt_BR/sdk.js";break;case"paypal":n.src="//www.paypalobjects.com/api/checkout.js";break;case"font":n.rel="stylesheet",n.type="text/css",n.href=i;break;default:n.src=i?i:""}(n.src||n.href)&&s.appendChild(n)},a}]),angular.module("aphrodite").factory("loader",["$timeout",function(e){var a={activities:[],infos:[],errors:[]};return a.start=function(t){var i=null,r={id:a.activities.length,dismiss:!1};angular.isObject(t)?angular.forEach(t,function(e,a){r[a]=t[a]}):r.title=t;for(var n=0;n<a.activities.length;n++)if(i=a.activities[n],r.title===i.title)return!1;return e(function(){r.dismiss=!0},1e4),a.activities.push(r),r},a.stop=function(e){for(var t=null,i=angular.isObject(e)?e.title:e,r=0;r<a.activities.length;r++)if(t=a.activities[r],!i&&!t.title||i===t.title)return void a.activities.splice(r,1)},a.info=function(e){a.infos.push(e)},a.error=function(e,t){a.errors.push(e),t&&console.error(t)},a.clearInfo=function(e){for(var t in a.infos)a.infos[t]===e&&a.infos.splice(t,1)},a.clearError=function(e){for(var t in a.errors)a.errors[t]===e&&a.errors.splice(t,1)},a}]),angular.module("aphrodite").factory("scroll",["$document",function(e){var a={};return a.toTop=function(a,t){var i=a||0,r=t||800,n=e.find("body");n.scrollTop(i,r).then(function(){window.scrollTo(0,i)})},a}]),angular.module("aphrodite").filter("creditcardBrand",function(){return function(e){var a,t=null,i={elo:"",visa:/^4[0-9]{12}(?:[0-9]{3})?$/,amex:/^3[47][0-9]{13}$/,diners:/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,mastercard:""};i.elo+="^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)",i.elo+="|50(9[0-9][0-9][0-9])|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|05([7-9])",i.elo+="|06([0-9])|07([0-9])|08([0-9])|4([0-3][0-9]|8[5-9]|9[0-9])|5([0-9][0-9]|3[0-8])",i.elo+="|9([0-6][0-9]|7[0-8])|7([0-2][0-9])|541|700|720|727|901)|65165([2-9])|6516([6-7][0-9])",i.elo+="|65500([0-9])|6550([0-5][0-9])|655021|65505([6-7])|6516([8-9][0-9])|65170([0-4]))",i.elo=new RegExp(i.elo),i.mastercard+="^5[1-5][0-9]{14}$",i.mastercard+="|^26[0-9]{4}|^25[0-9]{4}|^24[0-9]{4}|^23[0-9]{4}|^228[0-9]{3}",i.mastercard+="|^227[0-9]{3}|^226[0-9]{3}|^225[0-9]{3}|^224[0-9]{3}|^223[0-9]{3}",i.mastercard+="|^2228[0-9]{2}|^2227[0-9]{2}|^2226[0-9]{2}|^2225[0-9]{2}|^2224[0-9]{2}",i.mastercard+="|^2223[0-9]{2}|^2222[0-9]{2}|^22218[0-9]|^22217[0-9]|^22216[0-9]|^22215[0-9]",i.mastercard+="|^22214[0-9]|^22213[0-9]|^22212[0-9]|^22211[0-9]|^22210[0-9]|^22219[0-9]|^22298[0-9]",i.mastercard+="|^22297[0-9]|^22296[0-9]|^22295[0-9]|^22294[0-9]|^22293[0-9]|^22292[0-9]|^22291[0-9]",i.mastercard+="|^22290[0-9]|^22299[0-9]|^2298[0-9]{2}|^2297[0-9]{2}|^2296[0-9]{2}|^2295[0-9]{2}",i.mastercard+="|^2294[0-9]{2}|^2293[0-9]{2}|^2292[0-9]{2}|^2291[0-9]{2}|^22908[0-9]|^22907[0-9]",i.mastercard+="|^22906[0-9]|^22905[0-9]|^22904[0-9]|^22903[0-9]|^22902[0-9]|^22901[0-9]|^22900[0-9]",i.mastercard+="|^22909[0-9]|^22998[0-9]|^22997[0-9]|^22996[0-9]|^22995[0-9]|^22994[0-9]|^22993[0-9]",i.mastercard+="|^22992[0-9]|^22991[0-9]|^22990[0-9]|^22999[0-9]|^271[0-9]{3}|^2708[0-9]{2}|^2707[0-9]{2}",i.mastercard+="|^2706[0-9]{2}|^2705[0-9]{2}|^2704[0-9]{2}|^2703[0-9]{2}|^2702[0-9]{2}|^2701[0-9]{2}",i.mastercard+="|^27008[0-9]|^27007[0-9]|^27006[0-9]|^27005[0-9]|^27004[0-9]|^27003[0-9]|^27002[0-9]",i.mastercard+="|^27001[0-9]|^27000[0-9]|^27009[0-9]|^27098[0-9]|^27097[0-9]|^27096[0-9]|^27095[0-9]",i.mastercard+="|^27094[0-9]|^27093[0-9]|^27092[0-9]|^27091[0-9]|^27090[0-9]|^27099[0-9]|^27208[0-9]",i.mastercard+="|^27207[0-9]|^27206[0-9]|^27205[0-9]|^27204[0-9]|^27203[0-9]|^27202[0-9]|^27201[0-9]",i.mastercard+="|^27200[0-9]|^27209[0-9]",i.mastercard=new RegExp(i.mastercard);for(a in i)if(i[a].test(e)){t=a;break}return t}}),angular.module("aphrodite").filter("creditcardDisplay",function(){return function(e){return!e||"string"!=typeof e||e.length-4<0?e:"•••• "+e.slice(e.length-4)}}),angular.module("aphrodite").filter("creditcardFormatter",function(){return function(e){return!e||e.length<=12?e:{cvv:e.cvv,number:e.number,holder:e.name,document:e.document||e.cpf,expiration:e.month+"/"+e.year}}}),angular.module("aphrodite").filter("momentum",["moment",function(e){return function(a,t,i){var r=e(a,i||"YYYY-MM-DD HH:mm:ss"),n=t||"DD/MM/YYYY";return r.format(n)}}]),angular.module("aphrodite").filter("unsafe",["$sce",function(e){return function(a){return e.trustAsHtml(a)}}]),angular.module("aphrodite").directive("alert",function(){return{restrict:"E",scope:{alertVisibility:"=",alertOptions:"=?"},templateUrl:"directives/AlertDirectiveTemplate.html",transclude:!0,link:function(e,a){a.addClass("aph alert-container"),e.dismiss=function(){e.alertVisibility=!e.alertVisibility}}}}),angular.module("aphrodite").directive("aphAutocomplete",["$timeout","$filter",function(e,a){return{restrict:"E",replace:!0,scope:{term:"=?",localData:"=?",change:"=?",callback:"=",id:"@",itemTitle:"@",itemImage:"@?",itemDescription:"@?",placeholder:"@?",textLoading:"@?",textNotFound:"@?",textError:"@?",required:"=?",delay:"=?",clearOnCallback:"=?",onInit:"=?",onFocus:"=?",onBlur:"=?"},templateUrl:"directives/AutocompleteDirectiveTemplate.html",link:function(t,i){var r,n,l=!1,d=angular.element(i.find("input")[0]),o=angular.element(i.find("div")[0]);t.getItemPath=function(e,a){if(!e||!a)return null;a=a.split(".");for(var t=0;t<a.length;t++)e=e[a[t]];return e},t._hasTerm=function(e,i,r){if(!e[i]||"string"!=typeof e[i])return!1;var n=a("lowercase")(e[i]),l=a("lowercase")(r||t.term);return n.includes(l)},t._localSearch=function(){t.list=[],t.localData.map(function(e){(t._hasTerm(e,t.itemTitle)||t._hasTerm(e,t.itemDescription))&&t.list.push(e)}),t.loading=!1,t.notFound=0===t.list.length},t.search=function(){return t.error=!1,t.notFound=!1,t.loading=!0,t.localData?void t._localSearch():void t.change(t.term).then(function(e){t.list=e})["catch"](function(){t.error=!0,t.list=[]})["finally"](function(){t.loading=!1,t.notFound=0===t.list.length})},t.selectItem=function(e){n=t.list[e],t.list=[],t.clearOnCallback&&(d[0].value=""),t.setFocus(),t.callback(n),t.$digest()},t.setFocus=function(e){return e?void(t.focused=!0):void(t.focused=!1)},d.on("keyup",function(e){r=i.find("input")[1],r&&40===e.keyCode&&t.list.length>0&&(r.checked=!0,r.focus())}),o.on("keypress mousedown",function(a){13!==a.which&&"mousedown"!==a.type||(a.preventDefault(),e(function(){var e=[];angular.extend(e,o.find("input")),e.some(function(e,a){if(e.checked)return t.selectItem(a),!0}),t.$digest()},150))}),t.$watch("term",function(a){!l&&a||(t.notFound=!1,e.cancel(l)),a&&a.length>=2?l=e(function(){t.search()},t.delay||0):t.list=[]})}}}]),angular.module("aphrodite").directive("birthdateValidator",function(){return{require:"ngModel",link:function(e,a,t,i){i.$validators.birthdate=function(e){if(i.$isEmpty(e))return!0;var a=moment(e,"DD/MM/YYYY");return!!a.isValid()}}}}),angular.module("aphrodite").directive("creditcardBirthdate",["moment",function(e){return{restrict:"E",replace:!0,scope:{card:"=?"},templateUrl:"directives/CreditCardBirthdateDirectiveTemplate.html",link:function(a){a.isInvalid=!1,a.birthdate=a.card.birthdate||"",a.handleChange=function(){var t=a.birthdate?e(a.birthdate,"DD/MM/YYYY"):"";a.card.birthdate=t?t.format("YYYY-MM-DD"):"",a.isInvalid=!!t&&!t.isValid()}}}}]),angular.module("aphrodite").directive("creditcardCvv",function(){return{restrict:"E",replace:!0,scope:{card:"=?"},templateUrl:"directives/CreditCardCVVDirectiveTemplate.html"}}),angular.module("aphrodite").directive("creditcard",["$window",function(e){return{restrict:"E",replace:!0,templateUrl:"directives/CreditCardDirectiveTemplate.html",scope:{animated:"=?",card:"=?",onRemove:"=?"},link:function(a,t){a.animationInClass="creditcard-wrapper--animation-in",a._removeAnimation=function(){t.removeClass(a.animationInClass)},a._init=function(){if(a.animated)return e.requestAnimationFrame?void e.requestAnimationFrame(a._removeAnimation):void a._removeAnimation()},a._init()}}}]),angular.module("aphrodite").directive("creditcardDocument",function(){return{restrict:"E",
replace:!0,scope:{card:"=?"},templateUrl:"directives/CreditCardDocumentDirectiveTemplate.html"}}),angular.module("aphrodite").directive("creditcardExpiration",["moment",function(e){return{restrict:"E",replace:!0,scope:{card:"=?"},templateUrl:"directives/CreditCardExpirationDirectiveTemplate.html",link:function(a){a.expiration=a.card?angular.copy(a.card.expiration):"",a.isExpired=!1,a.isInvalid=!1,a.validateExpiration=function(){if(!a.expiration)return a.isExpired=!1,a.isInvalid=!1,a.card.month="",void(a.card.year="");var t=e(),i=t.format("MMYY"),r=e(a.expiration,"MMYY");a.isExpired=!(!r.isBefore(t)||a.expiration===i),a.isInvalid=!r.isValid(),a.card.month=r.format("MM"),a.card.year=r.format("YY")}}}}]),angular.module("aphrodite").directive("creditcardHolder",function(){return{restrict:"E",replace:!0,scope:{card:"=?"},templateUrl:"directives/CreditCardHolderDirectiveTemplate.html",link:function(e){e.handleChange=function(){e.card.name=(e.card.name||"").toUpperCase()}}}}),angular.module("aphrodite").directive("creditcardNumber",["$filter",function(e){return{restrict:"E",replace:!0,scope:{card:"=?",creditcardForm:"=?"},templateUrl:"directives/CreditCardNumberDirectiveTemplate.html",link:function(a){a.handleChange=function(){var t=e("creditcardBrand")(a.card.number);a.card.flag=t||null}}}}]),angular.module("aphrodite").directive("creditcardValidator",["$filter",function(e){return{require:"ngModel",link:function(a,t,i,r){r.$validators.creditcard=function(a){if(r.$isEmpty(a))return!0;var t=e("creditcardBrand")(a);return!!t}}}}]),angular.module("aphrodite").directive("drawer",function(){return{restrict:"A",link:function(e,a,t){var i=angular.element(document.querySelector("#"+t.drawer));return t.drawer?0===i.length?void console.error("APH DRAWER DIRECTIVE:\nCan't find \"#"+t.drawer+'" content element.'):(e.closeDrawer=function(){i.removeClass("active")},a.on("click",function(){a[0].checked?i.removeClass("active"):i.addClass("active")}),void e.closeDrawer()):void console.error('APH DRAWER DIRECTIVE:\nNeed to declare "drawer" attribute with id of content element.')}}}),angular.module("aphrodite").directive("dropdown",function(){return{restrict:"A",link:function(e,a){a.on("click",function(){a.toggleClass("active")}),e.closeDropdown=function(){a.removeClass("active")}}}}),angular.module("aphrodite").directive("formValidation",["$window","scroll",function(e,a){return{restrict:"A",require:"^form",scope:{formValidationOffsetTop:"=?",formValidationNoScroll:"=?"},link:function(t,i,r,n){function l(){n.changed||(console.info("APH FORM VALIDATION:\nForm marked as CHANGED.\n\n"),n.changed=!0)}function d(e){if(!n[e.srcElement.name].$dirty)return console.info('APH FORM VALIDATION:\nElement "'+e.srcElement.name+'" marked as DIRTY.\n\n'),n[e.srcElement.name].$setDirty()}function o(a){var t=e.innerWidth>1024?90:170,i=a.offsetParent.offsetTop+a.offsetTop-t;return i}function s(e){for(var a=0;a<e.length;a++){var t=e[a];if(a===e.length)return;if(angular.isObject(t)&&!angular.isArray(t)){var i=angular.element(t);(i[0].type&&m.indexOf(i[0].type)===-1||p.indexOf(i[0].tagName)>-1)&&(i.on("keypress",l),i.on("change",l),i.on("focus",d))}}}function c(e,i){for(var r=0;r<e.length;r++){var n=e[r];if(angular.isObject(n)&&!angular.isArray(n)){var l=angular.element(n);if(l.hasClass("ng-invalid-required")||l.hasClass("ng-invalid-email")||l.hasClass("ng-invalid-email-remove"))return t.formValidationNoScroll||a.toTop(o(n)),n.focus(),i.preventDefault()}}}function u(){var e=i[0];n.changed=!1,s(e),i.on("submit",function(a){c(e,a)}),i.addClass("form--validation")}if(r.formValidation){var m=["submit","reset","button","file","range"],p=["TEXTAREA","SELECT"];u()}}}}]),angular.module("aphrodite").directive("iconDefs",function(){return{restrict:"E",replace:!0,templateUrl:"directives/IconsDefsDirectiveTemplate.html"}}),angular.module("aphrodite").directive("icon",function(){return{restrict:"E",replace:!0,scope:{title:"@",size:"@?"},link:function(e){e.iconId="#"+e.title},template:'<svg viewBox="0 0 30 30" class="aph ic">    <use data-ng-if="title && iconId" xlink:href="{{ iconId }}"></use></svg>'}}),angular.module("aphrodite").directive("imageBlur",function(){return{restrict:"E",scope:{backgroundImage:"="},link:function(e,a){a.addClass("aph image-blur"),e.$watch("backgroundImage",function(){a.css("background-image",'url("'+e.backgroundImage+'")')})}}}),angular.module("aphrodite").directive("loader",["loader",function(e){return{restrict:"E",templateUrl:"directives/LoaderDirectiveTemplate.html",scope:{},link:function(a){a.activities=e.activities,a.infos=e.infos,a.errors=e.errors,a.stop=function(a){e.stop(a)},a.clearInfo=function(a){e.clearInfo(a)},a.clearError=function(a){e.clearError(a)}}}}]),angular.module("aphrodite").directive("paymentFast",["inject",function(e){return{restrict:"E",replace:!0,transclude:!0,templateUrl:"directives/PaymentFastDirectiveTemplate.html",scope:{card:"=?",layout:"@?"},link:function(a){a.enabled=!!a.card&&(a.card.save||!1),a.center=!(!a.layout||"center"!==a.layout),e.element("font","","https://fonts.googleapis.com/css?family=Fugaz+One&display=swap","link"),a.handleChange=function(){"object"==typeof a.card&&(a.card.save=a.enabled)}}}}]),angular.module("aphrodite").directive("preventPaste",function(){return{restrict:"A",scope:{},link:function(e,a){a.on("paste",function(e){e.preventDefault()})}}}),angular.module("aphrodite").directive("progressBar",function(){return{restrict:"EA",scope:{progressValue:"=",progressOptions:"=?"},link:function(e,a){a.addClass("aph progress"),e.progressOptions&&e.progressOptions.size&&a.addClass("progress--"+e.progressOptions.size.toString())},templateUrl:"directives/ProgressBarDirectiveTemplate.html"}}),angular.module("aphrodite").directive("selector",function(){return{restrict:"E",scope:{title:"@",value:"=?",prefix:"@?",name:"@?",array:"=?",ngModel:"=?",ngTrueValue:"=?",ngFalseValue:"=?",ngRequired:"=?",ngDisabled:"=?"},templateUrl:"directives/SelectorDirectiveTemplate.html",link:function(e,a){if(e.randomId=Math.random(),a.addClass("aph selector"),e.array){var t;e.checkArray=function(){t=e.array.indexOf(e.value),t>-1?e.array.splice(t,1):e.array.push(e.value)},e.itemChecked=function(){return t=e.array.indexOf(e.value),t>-1?void(e.isChecked=!0):void(e.isChecked=!1)},e.$watch("array",function(){e.itemChecked()},!0)}}}}),angular.module("aphrodite").directive("tooltip",["$document","$compile","$filter",function(e,a,t){return{restrict:"A",scope:!0,link:function(e,i,r){e.text=t("unsafe")(r.tooltip);var n=a('<span class="aph tooltip__content" data-ng-bind-html="text"></span>')(e);i.addClass("aph tooltip"),r.tooltipClass&&n.addClass(r.tooltipClass),i.append(n)}}}]);