'use strict';

angular.module('aphrodite')
.filter('creditcardFormatter', function () {
    return function (card) {
        if (typeof card !== 'object') {
            return card;
        }

        return {
            cvv       : card.cvv,
            number    : card.number,
            holder    : card.name,
            document  : (card.document || card.cpf),
            expiration: (card.month + '/' + card.year),
        };
    };
});
