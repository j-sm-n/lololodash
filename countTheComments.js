// include the Lo-Dash library
   var _ = require("lodash");

   var worker = function(comments) {
       // do work; return stuff
       var result =  _.groupBy(comments, function(comment) {
           return comment.username
         });

       var sortComments = [];
       _.forEach(result, function(value, key) {
        sortComments.push({ username: key,
          comment_count: _.size(value)
        })
      });

      return sortComments.reverse();

    };

   // export the worker function as a nodejs module
   module.exports = worker;
