module.exports = function schema() {
  var Schema = require('jugglingdb').Schema;
  var schema = new Schema('mongodb', {
    database : 'codewars',
    host     : process.env.IP,
    url      : 'mongodb://' + process.env.IP + '/codewars'
    //username : $C9_USER
  });
  
  global.Challenger = schema.define('Challenger', {
    firstName : String,
    lastName  : String,
    email     : String,
    date      : { type: Date, default: function () { return new Date; } },
    success   : { type: Boolean, default: function () { return false; } }
  });
};