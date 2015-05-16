var MyParrot = require('./parrot');
var Contact = require('./contact');
var Command = require('./command');

var contacts = [{
    "name": "Jane Doe",
    "number": "876-900-9898"
  },
  {
    "name": "Missy Lakes",
    "number": "604-123-9090"
  },
  {
    "name": "John Boon",
    "number": "604-123-9090"
  },
  {
    "name": "John Smith",
    "number": "604-123-9090"
  }
]
var contact = { name: 'Jim Carry', number: '222-622-9022' };
//
// console.log(MyParrot.speakEnglish());
// console.log(MyParrot.speakSpanish());
//
// console.log(Contact.parseName("John Smith,604-123-9090"));
// console.log(Contact.parseNumber("John Smith,604-123-9090"));
//
// console.log(Contact.createContact("John Smith,604-123-9090"));
//
// Contact.loadContacts(function(err, data) {
//   console.log(data);
// });
//
// Contact.saveContacts(contacts, function (err) {
//   console.log('Success!');
// })
//
// Contact.saveContact(contact, function(err) {
//   console.log('Wonderfully written sir!');
// });
//
// Contact.findContacts('Jane Doe', function (err, data) {
//   console.log(data);
// });
//
// console.log(Command.getOperation());
// console.log(Command.getOperationData());

// Command.add(function (err) {
//   console.log('Contact Added!')
// })

Command.find(function(err, results) {
  console.log('Result Found!')
})
