var express = require('express');
var router = express.Router();

var config = require('../config/');
var encryptedAccounts = config.getEncryptedAccounts();
var plaintextAccounts = config.getPlaintextAccounts();
var encryptAccounts = config.encryptAccounts();
var decryptAccounts = config.decryptAccounts();


router.get('/', function(req, res, next) {
	res.send('Mention account name');
});


router.get('/encrypt', function(req, res, next) {

	res.end(encryptAccounts());
});


router.get('/decrypt', function(req, res, next) {

	res.end(decryptAccounts());
});


router.get('/:account', function(req, res, next) {
	var accountName = req.params.account;

	res.json(plaintextAccounts[accountName]);	// return plaintext details of account 
});

module.exports = router;
