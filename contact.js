var Contact = {
	parseName: function(str) {
	    var name = str.split(',');
	    return name[0].trim();
  },

	parseNumber: function(str) {
      var num = str.split(',')[1].trim();
    return num;
  },

	createContact: function(str) {
      return {
				name: this.parseName(str),
				number: this.parseNumber(str)
			}
  },

	loadContacts: function(done){
		var jsonfile = require('jsonfile');
		var Util = require('./util');
		var pathFile = Util.getDataPath();
		console.log(pathFile);
		jsonfile.readFile(pathFile, function(err, data) {
			done(err, data)
		})
	},

	saveContacts: function(contacts, done) {
		var jsonfile = require('jsonfile');
		var Util = require('./util');
		var pathFile = Util.getDataPath();
		jsonfile.writeFile(pathFile, contacts, function (err, data) {
			done(err, data)
		})
	},

	saveContact: function(contact, done) {
		this.loadContacts(function(err, contacts) {
			if (err) {return done(err)}
			contacts.push(contact)
			this.saveContacts(contacts, done)
		}.bind(this))

	},

	findContacts: function (name, done) {
		this.loadContacts(function (err, contacts) {
			if (err) {return done(err)}
			var foundContacts = contacts.filter(function(contact) {
				return contact.name == nam
			})

			done(null, foundContacts)
		})

	}
}

module.exports = Contact;
