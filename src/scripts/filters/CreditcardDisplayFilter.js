'use strict';

angular.module('aphrodite')
.filter('creditcardDisplay', function () {
    /**
     * Get the last 4 digits as masked card number
     *
     * @param {string} cardNumber - Card Number
     *
     * @returns {string}
     */
    return function (cardNumber) {
        if (!cardNumber ||
            typeof cardNumber !== 'string' ||
            (cardNumber.length - 4) < 0) {
            return cardNumber;
        }

        var firstBlock  = cardNumber.slice(0, 4).concat(' ');
        var secondBlock = cardNumber.slice(4, 6).concat('•• •••• ');
        var lastBlock   = cardNumber.slice(cardNumber.length - 4);

        return (
            firstBlock +
            secondBlock +
            lastBlock
        );
    };
});
