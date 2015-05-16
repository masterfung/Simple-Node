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
    }
};

module.exports = Contact;
