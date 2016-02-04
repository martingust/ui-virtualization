/* */ 
var $ = require('./_'),
    createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value) {
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
