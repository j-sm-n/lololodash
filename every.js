// // include the Lo-Dash library
//     var _ = require("lodash");
//
//     var worker = function(towns) {
//         // do work; return stuff
//       var result = { hot: [], warm: [] };
//
//       _.forEach(towns, function(temps, town) {
//         if (_.every(temps, temp > 19)) {
//           result.hot.push(town)
//         } else {
//           result.warm.push(town)
//         }
//       });
//       return result
//     };
//
//     // export the worker function as a nodejs module
//     module.exports = worker;


    // include the Lo-Dash library
        var _ = require("lodash");

        var worker = function(cities) {
            // do work; return stuff
            result = { hot : [],
                       warm : [] };

            _.forEach(cities, function(val, key){
              var hot = _.every(val, function(n) {
                return n > 19;
              });
              var warm = _.some(val, function(n) {
                return n > 19;
              });

              if(hot) {
                result.hot.push(key)
              }else if(warm) {
                result.warm.push(key)
              }

            });

            return result;
        };

        // export the worker function as a nodejs module
        module.exports = worker;
