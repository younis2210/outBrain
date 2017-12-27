// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: [ 'es2015' ]
});

exports.config = {
    baseUrl: 'http://my.outbrain.com',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/**/*.spec.js'],
    framework: 'jasmine',
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    }
};