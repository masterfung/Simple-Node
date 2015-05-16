var MyParrot = require('./parrot');
var Contact = require('./contact');

var contacts = [{name: "Jane Doe", number: "876-900-9898"}]
var contact = { name: 'John Boon', number: '604-123-9090' };

console.log(MyParrot.speakEnglish());
console.log(MyParrot.speakSpanish());

console.log(Contact.parseName("John Smith,604-123-9090"));
console.log(Contact.parseNumber("John Smith,604-123-9090"));

console.log(Contact.createContact("John Smith,604-123-9090"));

Contact.loadContacts(function(err, data) {
  console.log(data);
});

Contact.saveContacts(contacts, function (err) {
  console.log('Success!');
})

Contact.saveContact(contact, function(err) {
  console.log('Wonderfully written sir!');
})

Contact.findContacts('Jane Doe', function (err, data) {
  console.log(data);
})
