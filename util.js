var Util = {
  getHomeDirectory: function () {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
  },
  getDataPath: function() {
    var path = require('path');
    var fs = require('fs');
    return path.join(__dirname, "/data.json");
  }
};

module.exports = Util;
