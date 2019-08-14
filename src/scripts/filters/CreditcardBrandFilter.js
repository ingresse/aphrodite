'use strict';

angular.module('aphrodite')
.filter('creditcardBrand', function () {
    return function (creditCardNumber) {
        var brand    = '';
        var accepted = [
            creditCardType.types.VISA,
            creditCardType.types.MASTERCARD,
            creditCardType.types.AMERICAN_EXPRESS,
            creditCardType.types.DINERS_CLUB,
            creditCardType.types.DISCOVER,
            creditCardType.types.JCB,
            creditCardType.types.ELO,
            creditCardType.types.HIPERCARD,
        ];

        creditCardType(creditCardNumber + '').filter(function (card) {
            if (accepted.indexOf(card.type) >= 0) {
                brand = angular.copy(card.type);
            }
        });

        return brand;
    };
});

