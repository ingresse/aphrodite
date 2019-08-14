'use strict';

angular.module('aphrodite')
.filter('creditcardFormatter', function () {
    return function (card) {
        if (!card || card.length <= 12) {
            return card;
        }

        return {
            cvv       : card.cvv,
            number    : card.number,
            holder    : card.name,
            document  : card.document,
            expiration: (card.month + '/' + card.year),
        };
    };
});
