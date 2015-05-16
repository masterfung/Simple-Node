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
            var arrayed = str.split(',');
            var name = arrayed[0].trim();
	    var num = arrayed[1].trim();
            return {
		name: name,
		number: num
        }
    }
};

module.exports = Contact;
