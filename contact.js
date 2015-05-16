var Contact = {
	parseName: function(str) {
	    var name = str.split(',');
	    return name[0].trim();
    }
};

module.exports = Contact;
