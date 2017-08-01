exports.config = {
  user: 'peeyooshchandra1',
  key: '9xWP6idCurHmzNTzGez5',
  server: 'hub-cloud.browserstack.com',

  capabilities: [{
    browserName: 'Firefox',
    os: 'Windows',
    os_version: '10',
    browser: 'Firefox',
    browser_version: '51.0 beta',
    resolution: '1920x1080',
    name: "single_test",
    build: "cucumber-js-browserstack",
    'browserstack.debug': true,
    'browserstack.video': true
  }]
}
