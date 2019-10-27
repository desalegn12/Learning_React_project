var Crypter = require('cryptr');
var crypto = new Crypter('desalegn');
var incrpting = crypto.encrypt('desalegn');
var decript = crypto.decrypt(incrpting);
console.log(incrpting);
console.log(decript);
