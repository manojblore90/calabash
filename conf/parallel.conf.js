exports.config = {
  user: 'manojshivakumar1',
  key: '9y7eZsRcvyJCAshHEHR1',
  server: 'hub-cloud.browserstack.com',

  commonCapabilities: {
    name: "parallel_test",
    build: "cucumber-js-browserstack"
  },

  capabilities: [{
    browserName: 'chrome'
  },{
    browserName: 'firefox'
  },{
    browserName: 'safari'
  },{
    browserName: 'internet explorer'
  }]
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});

