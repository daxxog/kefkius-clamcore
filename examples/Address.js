'use strict';


var run = function() {
  // Replace '../bitcore' with 'bitcore' if you use this code elsewhere.
  var bitcore = require('../clamcore');
  var Address = bitcore.Address;

  var addrs = [
    'xHKdGtUrM7kgi685hs6KtWNDZtDLY18RJU',
    'xHKdGtUrM7kgi685hs6KtWNDZtDLY1xxxx',
    'xHKdGtUrM7kgi685hs6KtWNDZtDLY18RJ',
    '1600 Pennsylvania Ave NW',
  ].map(function(addr) {
    return new Address(addr);
  });

  addrs.forEach(function(addr) {
    var valid = addr.isValid();
    console.log(addr.data + ' is ' + (valid ? '' : 'not ') + 'valid');
  });

};

module.exports.run = run;
if (require.main === module) {
  run();
}
