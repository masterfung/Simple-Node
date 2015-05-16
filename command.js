var Command = {
  getOperation: function() {
    return process.argv[2]
  },
  getOperationData: function () {
    return process.argv[3]
  },
  add: function (done) {
    var Contact = require('./contact');
    var extractedString = this.getOperationData();
    var formated = Contact.createContact(extractedString)
    Contact.saveContact(formated, done)
  },
  find: function(done) {
    var Contact = require('./contact')
        , info = this.getOperationData()

      Contact.findContacts(info, function(err, result) {
        if (err) {return done(err)};

        result.forEach(function(contact) {
          console.log(contact.name, contact.number)
        })

        done(null, result)
      })
    }
};

module.exports = Command;


// var Contact = require('./contact');
// var name = Contact.parseName(this.getOperationData());
// var found = Contact.findContacts(name, done)
// console.log(name);
