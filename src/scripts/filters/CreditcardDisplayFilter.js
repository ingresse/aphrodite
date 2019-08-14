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

        return (
            '•••• ' +
            cardNumber.slice(cardNumber.length - 4)
        );
    };
});
