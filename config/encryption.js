var fs = require('fs');
var CryptoJS = require("crypto-js");


var fileReader = require('./file-reader');

var masterPassword = require('./master-password');	

var myCiphertext = null;
var myPlaintext = null;

// encrypt accounts
module.exports.encryptAccounts = function () {

	myPlaintext = JSON.stringify(fileReader.readPlaintextFile());

	try {
		myCiphertext = CryptoJS.AES.encrypt(myPlaintext, masterPassword);
	} catch(e) {
		console.log(e);
		throw new Error("Error in Encrypt Function")
	}


	fs.writeFile(__dirname + "/data/encrypted-accounts.txt", myCiphertext, function(err) {
		if(err) {
			return console.log(err);
		}

		console.log("Accounts Encrypted!");
	});

	return myCiphertext.toString();
}


// decrypt accounts
module.exports.decryptAccounts = function () {

	myCiphertext = fileReader.readEncryptedFile();
	
	try {
		var bytes  = CryptoJS.AES.decrypt(myCiphertext, masterPassword);
		myPlaintext = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
	} catch(e) {
		console.log(e);
		throw new Error("Error in Decrypt Function")
	}

	fs.writeFile(__dirname + "/data/plaintext-accounts.json", myPlaintext, function(err) {
		if(err) {
			return console.log(err);
		}

		console.log("Accounts Decrypted!");
	});

	return myPlaintext;	
}


