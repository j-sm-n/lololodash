// include the Lo-Dash library
  var _ = require("lodash");

  var worker = function(orders) {
    grouped = _.groupBy(orders, function(order) {
      return order.article;
    });

    reduced = [];
    _.forEach(grouped, function(grouping, key) {
      reduced.push({ article: parseInt(key), total_orders: _.reduce(grouping, function(sum, grouping) {
        return sum + grouping.quantity
      }, 0) });
    });
    return _.sortBy(reduced, 'total_orderes').reverse()
  };

  // export the worker function as a nodejs module
  module.exports = worker;
