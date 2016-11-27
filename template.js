// include the Lo-Dash library
var _ = require("lodash");

var worker = function(userInfo) {
    // do work; return stuff
    return _.template('Hello <%= username %> (logins: <%= logins %>)')({ username: userInfo.name, logins: userInfo.login.length });
};

// export the worker function as a nodejs module
module.exports = worker;
