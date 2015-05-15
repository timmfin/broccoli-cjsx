'use strict';

var Filter = require('broccoli-filter');
var transform = require('coffee-react-transform');

module.exports = CjsxFilter;

CjsxFilter.prototype = Object.create(Filter.prototype);
CjsxFilter.prototype.constructor = CjsxFilter;

function CjsxFilter (inputTree, options) {
  if (!(this instanceof CjsxFilter)){
    return new CjsxFilter(inputTree, options);
  }

  Filter.call(this, inputTree, options)
  this.options = options || {};
}

CjsxFilter.prototype.extensions = ['cjsx'];
CjsxFilter.prototype.targetExtension = 'coffee';

CjsxFilter.prototype.processString = function (string) {
  var result = transform(string);

  return result;
};
