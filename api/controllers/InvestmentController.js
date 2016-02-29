/**
 * InvestmentController
 *
 * @description :: Server-side logic for managing investments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'new': function(req, res, next) {
    Customer.findOne(req.param('owner'), function foundCustomer (err, customer) {
      if (err) return next(err);
      if (!customer) return next();
      res.view({
        customer: customer
      });
    });
  },

  create: function(req, res, next) {
    Investment.create(req.params.all(), function investmentCreated(err, investment) {
      if (err) return next(err);

      //res.json(stock);
      res.redirect('/customer/show/' + investment.owner);
    });
  },

  show: function(req, res, next) {
    Investment.findOne(req.param('id'), function foundInvestment(err, investment) {
      if (err) return next(err);
      if (!investment) return next();
      res.view({
        investment: investment //returning a stock for the stock view
      });
    });
  },

  index: function(req, res, next) {
    Stock.find(function foundInvestments (err, investments) {
      if (err) return next(err);

      res.view({
        investments: investments
      });
    });
  },

  edit: function(req, res, next) {
    Investment.findOne(req.param('id'), function foundInvestment(err, investment) {
      if (err) return next(err);
      if (!investment) return next();

      res.view({
        investment: investment
      });
    });
  },

  update: function(req, res, next) {
    Investment.update(req.param('id'), req.params.all(), function investmentUpdated(err){
      if (err) {
        return res.redirect('/investment/edit/' + req.param('id'));
      }

      res.redirect('/investment/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {
    Investment.destroy(req.param('id')).exec( function() {
      res.redirect('/customer/'); //trying to deliver back to the customer/show page
    });
  }
};

