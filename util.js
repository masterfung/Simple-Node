var Util = {
  getHomeDirectory: function () {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
  },
  getDataPath: function() {
    var path = require('path');
    return path.join(this.getHomeDirectory(), "data.json");
  }
};

module.exports = Util;
