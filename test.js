var MyParrot = require('./parrot');
var Contact = require('./contact');

console.log(MyParrot.speakEnglish());
console.log(MyParrot.speakSpanish());

console.log(Contact.parseName("John Smith,604-123-9090"));
console.log(Contact.parseNumber("John Smith,604-123-9090"));

console.log(Contact.createContact("John Smith,604-123-9090"));
