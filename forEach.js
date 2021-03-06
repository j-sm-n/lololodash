// include the Lo-Dash library
var _ = require("lodash");

var worker = function(cities) {
    // do work; return stuff

    return _.forEach(cities, function(city) {
      if (city.population > 1) {
        city.size = 'big'
      } else if (city.population > .5){
        city.size = 'med'
      } else {
        city.size = 'small'
      }
    });
};

// export the worker function as a nodejs module
module.exports = worker;
