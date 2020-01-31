'use strict';

angular.module('aphrodite')
.filter('creditcardBrand', function () {
    return function (creditCardNumber, allowedBrands) {
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

        if (angular.isArray(allowedBrands)) {
            accepted = [];

            allowedBrands.map(function (allowedBrand) {
                var allowedBrandRef = angular.copy(creditCardType.types[allowedBrand]);

                if (!allowedBrandRef) {
                    return false;
                }

                accepted.push(allowedBrandRef);

                return true;
            });
        }

        creditCardType(creditCardNumber + '').filter(function (card) {
            if (accepted.indexOf(card.type) >= 0) {
                brand = angular.copy(card.type);
            }
        });

        return brand;
    };
});

