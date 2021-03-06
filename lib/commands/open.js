'use strict';

var path    = require('path');

module.exports = {
  name: 'cordova:open',
  aliases: ['cdv:open'],
  description: 'Open the native platform project with the default or specified application',
  works: 'insideProject',

  availableOptions: [
    { name: 'platform', type: String, default: 'ios' },
    { name: 'application', type: String}
  ],

  run: function(options) {
    return require('../tasks/open')(this.project, options.platform, options.application)();
  }
};
