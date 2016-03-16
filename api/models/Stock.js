/**
* Stock.js
*
* @description :: stock information stored here
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    symbol: {
      type: 'string',
      required: true
    },

    name: {
      type: 'string',
      required: true
    },

    number_of_shares: {
      type: 'float',
      required: true
    },

    price: {
      type: 'float'
    },

    date_purchased: {
      type: 'string'
    },

    owner: {
      model: 'customer',
      required: true
    }

  }

};

