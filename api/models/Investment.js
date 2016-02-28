/**
* Investment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    category: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string'
    },

    acquired_value: {
      type: 'float',
      required: true
    },

    acquired_date: {
      type: 'string'    //type for holding date??
    },

    recent_value: {
      type: 'float'     //required??
    },

    recent_date: {
      type: 'string'    //type for holding date??
    },

    created: {
      type: 'string'    //type for holding date??
    },

    modified: {
      type: 'string'    //type for holding date??
    },

    owner: {
      model: 'customer',
      required: true
    }

  }
};

