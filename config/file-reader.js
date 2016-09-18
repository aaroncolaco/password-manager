var fs = require('fs');

module.exports.readEncryptedFile = function () {
	return fs.readFileSync(__dirname + "/data/encrypted-accounts.txt").toString();
}

module.exports.readPlaintextFile = function () {
	return fs.readFileSync(__dirname + "/data/plaintext-accounts.json").toString();
}