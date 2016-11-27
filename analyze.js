// include the Lo-Dash library
  var _ = require("lodash");

  var worker = function(incomes) {
      // do work; return stuff
      var average = _.reduce(incomes, function(sum, freelancer){
      return sum += freelancer.income;
      },0)/(incomes.length);

      var underperform = [];
      var overperform = [];

      _.filter(incomes, function(freelancer) {
        if (freelancer.income > average) {
          overperform.push(freelancer)
        } else {
          underperform.push(freelancer)
        }
      });

    return {  average: average,
              underperform: _.sortBy(underperform, 'income'),
              overperform: _.sortBy(overperform, 'income') }
  };

  // export the worker function as a nodejs module
  module.exports = worker;
