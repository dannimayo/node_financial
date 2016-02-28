/**
* Customer.js
*
* @description :: Customer contact information stored here
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {

    name: {
      type: 'string',
      required: true,
    },
    street_address: {
      type: 'string',
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    zip: {
      type: 'string'
    },
    email: {
      type: 'string',
      email: true
    },
    home_phone: {
      type: 'string'
    },
    cellphone: {
      type: 'string'
    },
    /*
    created: {
      type: ??
    },
    modified: {
      type: ??
     },
    */
    stocks: {
      collection: 'stock',
      via: 'owner'
    },
    investments: {
      collection: 'investment'
      via: 'owner'
    }

  }
};

