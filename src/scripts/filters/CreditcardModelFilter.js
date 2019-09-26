'use strict';

angular.module('aphrodite')
.filter('creditcardModel', function ($filter, moment) {
    return function (card) {
        if (typeof card !== 'object') {
            return card;
        }

        var cardHolder     = (card.name || '');
        var cardExpiration = (card.month + '/' + card.year);
        var cardNumber     = (card.number || '');
        var cardBrand      = ($filter('creditcardBrand')(cardNumber) || '');

        return {
            holder    : {
                name: cardHolder,
            },
            expiration: moment(cardExpiration, 'MM/YY').format(),
            firstSix  : cardNumber.slice(0, 6),
            lastFour  : cardNumber.slice((cardNumber.length - 4), cardNumber.length),
            brand     : cardBrand,
        };
    };
});
