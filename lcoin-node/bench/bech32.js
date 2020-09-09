'use strict';

var Address = require('../lib/primitives/address');
var crypto = require('../lib/crypto/crypto');
var bench = require('./bench');

var i, end, addr;

var addrs = [];

end = bench('serialize');
for (i = 0; i < 100000; i++) {
  addr = Address.fromProgram(0, crypto.randomBytes(20));
  addrs.push(addr.toBech32());
}
end(i);

end = bench('parse');
for (i = 0; i < 100000; i++) {
  addr = addrs[i];
  addr = Address.fromBech32(addr);
  addrs[i] = addr;
}
end(i);

console.error(addrs);
