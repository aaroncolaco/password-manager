'use strict'

let masterPassword = require('./master-password');
let encryptionScheme = require('./encryption');
let fileReader = require('./file-reader');


module.exports = {
	getMasterPassword : function () {
		return masterPassword;	// return string
	},
	getEncryptedAccounts: function () {
		return fileReader.readEncryptedFile;	// return function
	},
	getPlaintextAccounts: function () {
		return fileReader.readPlaintextFile;	// return function
	},
	encryptAccounts: function () {
		return encryptionScheme.encryptAccounts;	// return function
	},
	decryptAccounts: function () {
		return encryptionScheme.decryptAccounts;	// return function
	}
}
